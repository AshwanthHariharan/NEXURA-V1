// js/alarm.js
class AlarmManager {
    constructor() {
        this.alarmActive = false;
        this.alarmInterval = null;
        this.checkInterval = 30000; // Check every 30 seconds
        this.notificationPermission = false;
        this.audioContext = null;
        this.oscillator = null;
        this.gainNode = null;
        
        // Request notification permission
        this.requestNotificationPermission();
        
        // Start checking for alarms
        this.startAlarmChecker();
        
        console.log('🔔 Alarm Manager initialized');
    }

    requestNotificationPermission() {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                this.notificationPermission = true;
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    this.notificationPermission = permission === 'granted';
                });
            }
        }
    }

    startAlarmChecker() {
        if (this.alarmInterval) {
            clearInterval(this.alarmInterval);
        }
        
        this.alarmInterval = setInterval(() => {
            this.checkScheduledAlarms();
        }, this.checkInterval);
        
        // Also check immediately
        setTimeout(() => this.checkScheduledAlarms(), 1000);
    }

    checkScheduledAlarms() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const currentSeconds = now.getSeconds();
        
        // Get schedule from localStorage
        let schedule = [];
        const savedSchedule = localStorage.getItem('nexura_schedule_medications');
        if (savedSchedule) {
            try {
                schedule = JSON.parse(savedSchedule);
            } catch (e) {
                console.error('Error parsing schedule:', e);
            }
        }
        
        // Check if any dose time has been reached
        schedule.forEach((dose, index) => {
            if (!dose.time) return;
            
            const doseParts = dose.time.split(':');
            const doseHour = parseInt(doseParts[0]);
            const doseMinute = parseInt(doseParts[1]);
            const doseTotalMinutes = doseHour * 60 + doseMinute;
            
            // Check if current time is within 1 minute of the scheduled time
            const timeDiff = currentMinutes - doseTotalMinutes;
            
            // Trigger alarm if:
            // 1. Time matches (within 1 minute window)
            // 2. Dose hasn't been taken yet
            // 3. We haven't already triggered an alarm for this dose recently
            if (timeDiff >= 0 && timeDiff < 1 && !dose.taken) {
                const alarmKey = `alarm_triggered_${index}_${new Date().toISOString().split('T')[0]}`;
                const alreadyTriggered = localStorage.getItem(alarmKey);
                
                if (!alreadyTriggered) {
                    this.triggerAlarm(dose, index);
                    localStorage.setItem(alarmKey, 'true');
                    
                    // Clear the alarm trigger after 10 minutes (to allow re-trigger if missed)
                    setTimeout(() => {
                        localStorage.removeItem(alarmKey);
                    }, 600000);
                }
            }
        });
    }

    triggerAlarm(dose, index) {
        console.log(`🔔 ALARM TRIGGERED: Time for ${dose.name} at ${dose.time}`);
        
        const doseName = dose.name || 'Medication';
        const doseDosage = dose.dosage || '';
        
        // Play sound
        this.playAlarmSound();
        
        // Show browser notification
        this.showNotification(doseName, doseDosage);
        
        // Show on-page alert (if dashboard app exists)
        if (window.dashboardApp) {
            window.dashboardApp.showAlert(
                'Time to Take Medicine!',
                `It's time for your dose of ${doseName}${doseDosage ? ' (' + doseDosage + ')' : ''}. Please take your pills.`,
                dose
            );
        }
        
        // Add to log
        if (window.dashboardApp) {
            window.dashboardApp.addLog(`⏰ ALARM: ${doseName} dose time!`, 'warning');
        }
        
        // Update last alarm time
        localStorage.setItem('nexura_last_alarm', new Date().toISOString());
        
        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }
    }

    playAlarmSound() {
        try {
            // Try using AudioContext for a more persistent sound
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            // Resume context if suspended (needed for Chrome)
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            
            // Play a series of beeps
            this.playBeep(880, 0.2);
            
            setTimeout(() => this.playBeep(880, 0.2), 300);
            setTimeout(() => this.playBeep(1100, 0.3), 600);
            setTimeout(() => this.playBeep(880, 0.2), 900);
            setTimeout(() => this.playBeep(1100, 0.3), 1200);
            
        } catch (e) {
            console.log('AudioContext not available, using fallback sound');
            this.playFallbackSound();
        }
    }

    playBeep(frequency, duration) {
        if (!this.audioContext) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + duration);
            
            // Clean up
            setTimeout(() => {
                try {
                    oscillator.disconnect();
                    gainNode.disconnect();
                } catch (e) {}
            }, duration * 1000 + 100);
            
        } catch (e) {
            console.error('Error playing beep:', e);
        }
    }

    playFallbackSound() {
        // Try using HTML5 Audio as fallback
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.5);
            
            setTimeout(() => {
                const osc2 = audioContext.createOscillator();
                const gain2 = audioContext.createGain();
                osc2.type = 'square';
                osc2.frequency.setValueAtTime(1100, audioContext.currentTime);
                gain2.gain.setValueAtTime(0.2, audioContext.currentTime);
                osc2.connect(gain2);
                gain2.connect(audioContext.destination);
                osc2.start();
                osc2.stop(audioContext.currentTime + 0.5);
            }, 300);
            
        } catch (e) {
            console.error('Fallback sound failed:', e);
        }
    }

    showNotification(doseName, dosage) {
        if (!this.notificationPermission) return;
        
        try {
            const notification = new Notification('⏰ Time to Take Medicine!', {
                body: `It's time for your dose of ${doseName}${dosage ? ' (' + dosage + ')' : ''}. Please take your pills.`,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💊</text></svg>',
                tag: 'nexura-alarm',
                requireInteraction: true
            });
            
            notification.onclick = function() {
                window.focus();
                notification.close();
                if (window.dashboardApp) {
                    window.dashboardApp.acknowledgeAlert();
                }
            };
            
            // Auto-close after 30 seconds
            setTimeout(() => notification.close(), 30000);
            
        } catch (e) {
            console.error('Notification error:', e);
        }
    }

    // Method to manually trigger a test alarm
    testAlarm() {
        const testDose = {
            name: 'Test Medication',
            dosage: '10mg',
            time: new Date().toLocaleTimeString(),
            taken: false
        };
        this.triggerAlarm(testDose, 0);
    }

    // Stop all sounds
    stopAlarm() {
        if (this.audioContext) {
            try {
                this.audioContext.close();
            } catch (e) {}
            this.audioContext = null;
        }
    }

    // Cleanup
    destroy() {
        if (this.alarmInterval) {
            clearInterval(this.alarmInterval);
            this.alarmInterval = null;
        }
        this.stopAlarm();
        console.log('🔔 Alarm Manager destroyed');
    }
}

// ================================================================
// GLOBAL FUNCTIONS
// ================================================================

function testAlarm() {
    if (window.alarmManager) {
        window.alarmManager.testAlarm();
    } else {
        console.error('Alarm Manager not initialized');
    }
}

function stopAlarm() {
    if (window.alarmManager) {
        window.alarmManager.stopAlarm();
    }
}

// ================================================================
// INITIALIZE
// ================================================================

// Initialize the alarm manager
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔔 Initializing Alarm Manager...');
    
    // Check if dashboardApp exists, if not wait for it
    if (typeof window.dashboardApp !== 'undefined') {
        window.alarmManager = new AlarmManager();
    } else {
        // Wait for dashboardApp to be initialized
        const checkInterval = setInterval(() => {
            if (typeof window.dashboardApp !== 'undefined') {
                clearInterval(checkInterval);
                window.alarmManager = new AlarmManager();
                console.log('🔔 Alarm Manager initialized after dashboardApp');
            }
        }, 100);
        
        // Timeout after 5 seconds
        setTimeout(() => {
            clearInterval(checkInterval);
            if (!window.alarmManager) {
                window.alarmManager = new AlarmManager();
                console.log('🔔 Alarm Manager initialized with timeout');
            }
        }, 5000);
    }
});

// Also initialize if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('🔔 DOM already loaded, initializing Alarm Manager...');
    if (!window.alarmManager) {
        setTimeout(() => {
            window.alarmManager = new AlarmManager();
        }, 500);
    }
}