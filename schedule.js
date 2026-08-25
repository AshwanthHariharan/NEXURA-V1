// js/schedule.js
class ScheduleApp {
    constructor() {
        console.log('📅 Initializing Schedule...');
        
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.schedule = [];
        this.doseLog = [];
        this.blynkConnected = false;
        this.blynkWS = null;
        
        this.applyTheme(this.currentTheme);
        this.loadAllData();
        this.setupEventListeners();
        this.populateLanguageDropdown();
        this.loadSavedLanguage();
        this.renderCalendar();
        this.renderDayDetails();
        this.updateDateTime();
        this.connectBlynk();
        this.translatePage();
        
        console.log('✅ Schedule initialized');
    }

    loadAllData() {
        console.log('📂 Loading schedule data...');
        
        // Load schedule from localStorage
        const savedSchedule = localStorage.getItem('nexura_schedule_medications');
        if (savedSchedule) {
            try {
                this.schedule = JSON.parse(savedSchedule);
                console.log('✅ Schedule loaded:', this.schedule.length, 'medications');
            } catch (e) {
                this.schedule = [];
            }
        }
        
        // Load dose log
        const savedLog = localStorage.getItem('nexura_dose_log');
        if (savedLog) {
            try {
                this.doseLog = JSON.parse(savedLog);
            } catch (e) {
                this.doseLog = [];
            }
        }
        
        // Load user data
        const userData = localStorage.getItem('nexura_user_data');
        if (userData) {
            try {
                const data = JSON.parse(userData);
                document.getElementById('userNameDisplay').textContent = data.fullName || 'User';
            } catch (e) {}
        }
    }

    renderCalendar() {
        const grid = document.getElementById('calendarGrid');
        if (!grid) return;
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        document.getElementById('currentMonthDisplay').textContent = 
            this.currentDate.toLocaleDateString('en', { month: 'long', year: 'numeric' });
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        
        grid.innerHTML = '';
        
        // Previous month days
        const prevMonthStart = daysInPrevMonth - firstDay + 1;
        for (let i = prevMonthStart; i <= daysInPrevMonth; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day other-month';
            day.innerHTML = `<span class="day-number">${i}</span>`;
            grid.appendChild(day);
        }
        
        // Current month days
        const today = new Date();
        const todayStr = today.toDateString();
        
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            
            const dateObj = new Date(year, month, i);
            const dateStr = dateObj.toDateString();
            
            if (dateStr === todayStr) {
                day.classList.add('today');
            }
            
            if (dateStr === this.selectedDate.toDateString()) {
                day.classList.add('selected');
            }
            
            // Check if this day has medications
            const dayMeds = this.getMedicationsForDate(dateObj);
            const hasTaken = dayMeds.some(m => m.taken);
            const hasPending = dayMeds.some(m => !m.taken);
            
            day.innerHTML = `
                <span class="day-number">${i}</span>
                ${dayMeds.length > 0 ? `<span class="day-dot ${hasTaken && !hasPending ? 'taken' : hasPending ? 'pending' : 'taken'}"></span>` : ''}
                ${dayMeds.length > 1 ? `<span class="day-med-count">${dayMeds.length}</span>` : ''}
            `;
            
            day.addEventListener('click', () => {
                this.selectedDate = dateObj;
                this.renderCalendar();
                this.renderDayDetails();
            });
            
            grid.appendChild(day);
        }
        
        // Next month days
        const totalDays = firstDay + daysInMonth;
        const remainingDays = 42 - totalDays;
        for (let i = 1; i <= remainingDays; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day other-month';
            day.innerHTML = `<span class="day-number">${i}</span>`;
            grid.appendChild(day);
        }
    }

    getMedicationsForDate(date) {
        const dateStr = date.toDateString();
        // Return all medications (for simplicity, show all medications on all days)
        // In a real app, you'd filter by date
        return this.schedule.map(med => ({
            ...med,
            taken: med.taken || false
        }));
    }

    renderDayDetails() {
        const list = document.getElementById('dayDetailsList');
        const dateDisplay = document.getElementById('selectedDateFull');
        
        if (!list) return;
        
        dateDisplay.textContent = this.selectedDate.toLocaleDateString('en', { 
            weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
        });
        
        const meds = this.getMedicationsForDate(this.selectedDate);
        
        if (meds.length === 0) {
            list.innerHTML = `
                <div class="log-empty">
                    <i class="fas fa-pills"></i>
                    <p>No medications scheduled for this day</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        meds.forEach(med => {
            const status = med.taken ? 'taken' : 'pending';
            const statusText = med.taken ? '✅ Taken' : '⏳ Pending';
            html += `
                <div class="day-detail-item" style="border-left-color: ${med.color || '#2a7de1'}">
                    <span class="med-time">${med.time || '08:00'}</span>
                    <span class="med-name">${med.name}</span>
                    <span class="med-dosage">${med.dosage || ''}</span>
                    <span class="med-status ${status}">${statusText}</span>
                </div>
            `;
        });
        
        list.innerHTML = html;
    }

    translatePage() {
        const lang = localStorage.getItem('nexura_language') || 'en';
        const translations = this.getTranslations();
        const t = translations[lang] || translations.en;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.textContent = t[key];
            }
        });
        
        this.updateDeviceStatus(this.blynkConnected);
    }

    getTranslations() {
        return {
            en: {
                appName: 'NEXURA',
                dashboard: 'Dashboard',
                schedule: 'Schedule',
                medications: 'Medications',
                reports: 'Reports',
                profile: 'Profile',
                settings: 'Settings',
                connected: 'Connected',
                offline: 'Offline',
                logout: 'Logout',
                today: 'Today',
                addMedication: 'Add Medication',
                exportSchedule: 'Export',
                sun: 'Sun',
                mon: 'Mon',
                tue: 'Tue',
                wed: 'Wed',
                thu: 'Thu',
                fri: 'Fri',
                sat: 'Sat',
                noMedicationsScheduled: 'No medications scheduled for this day',
                addNewMedication: 'Add New Medication',
                medicationName: 'Medication Name',
                enterMedicationName: 'Enter medication name',
                dosage: 'Dosage',
                enterDosage: 'e.g., 500mg',
                time: 'Time',
                frequency: 'Frequency',
                daily: 'Daily',
                weekly: 'Weekly',
                monthly: 'Monthly',
                cancel: 'Cancel',
                save: 'Save',
                allRightsReserved: 'All rights reserved.'
            },
            ta: {
                appName: 'நெக்ஸுரா',
                dashboard: 'முகப்பு',
                schedule: 'அட்டவணை',
                medications: 'மருந்துகள்',
                reports: 'அறிக்கைகள்',
                profile: 'சுயவிவரம்',
                settings: 'அமைப்புகள்',
                connected: 'இணைக்கப்பட்டுள்ளது',
                offline: 'ஆஃப்லைன்',
                logout: 'வெளியேறு',
                today: 'இன்று',
                addMedication: 'மருந்து சேர்க்கவும்',
                exportSchedule: 'ஏற்றுமதி',
                sun: 'ஞாயிறு',
                mon: 'திங்கள்',
                tue: 'செவ்வாய்',
                wed: 'புதன்',
                thu: 'வியாழன்',
                fri: 'வெள்ளி',
                sat: 'சனி',
                noMedicationsScheduled: 'இந்த நாளில் மருந்துகள் எதுவும் திட்டமிடப்படவில்லை',
                addNewMedication: 'புதிய மருந்து சேர்க்கவும்',
                medicationName: 'மருந்து பெயர்',
                enterMedicationName: 'மருந்து பெயரை உள்ளிடவும்',
                dosage: 'மருந்தளவு',
                enterDosage: 'எ.கா., 500மிகி',
                time: 'நேரம்',
                frequency: 'அதிர்வெண்',
                daily: 'தினமும்',
                weekly: 'வாரந்தோறும்',
                monthly: 'மாதந்தோறும்',
                cancel: 'ரத்து செய்',
                save: 'சேமி',
                allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
            },
            hi: {
                appName: 'नेक्सुरा',
                dashboard: 'डैशबोर्ड',
                schedule: 'अनुसूची',
                medications: 'दवाइयाँ',
                reports: 'रिपोर्ट',
                profile: 'प्रोफाइल',
                settings: 'सेटिंग्स',
                connected: 'कनेक्टेड',
                offline: 'ऑफलाइन',
                logout: 'लॉगआउट',
                today: 'आज',
                addMedication: 'दवा जोड़ें',
                exportSchedule: 'निर्यात',
                sun: 'रवि',
                mon: 'सोम',
                tue: 'मंगल',
                wed: 'बुध',
                thu: 'गुरु',
                fri: 'शुक्र',
                sat: 'शनि',
                noMedicationsScheduled: 'इस दिन के लिए कोई दवा निर्धारित नहीं है',
                addNewMedication: 'नई दवा जोड़ें',
                medicationName: 'दवा का नाम',
                enterMedicationName: 'दवा का नाम दर्ज करें',
                dosage: 'खुराक',
                enterDosage: 'जैसे, 500मिग्रा',
                time: 'समय',
                frequency: 'आवृत्ति',
                daily: 'दैनिक',
                weekly: 'साप्ताहिक',
                monthly: 'मासिक',
                cancel: 'रद्द करें',
                save: 'सहेजें',
                allRightsReserved: 'सर्वाधिकार सुरक्षित।'
            }
        };
    }

    updateDateTime() {
        const now = new Date();
        // Update any time display if needed
    }

    connectBlynk() {
        const authToken = 'Po7aurNLImLLN4tHF-ZvQu9fY7FjheSA';
        const wsUrl = 'wss://blynk.cloud/websockets';
        
        try {
            this.blynkWS = new WebSocket(wsUrl);
            
            this.blynkWS.onopen = () => {
                console.log('🔗 Blynk WebSocket Connected');
                this.blynkConnected = true;
                this.updateDeviceStatus(true);
                this.blynkWS.send(JSON.stringify({
                    cmd: 'login',
                    token: authToken
                }));
            };
            
            this.blynkWS.onerror = (error) => {
                console.error('Blynk WebSocket Error:', error);
                this.blynkConnected = false;
                this.updateDeviceStatus(false);
            };
            
            this.blynkWS.onclose = () => {
                console.log('🔗 Blynk WebSocket Disconnected');
                this.blynkConnected = false;
                this.updateDeviceStatus(false);
                setTimeout(() => this.connectBlynk(), 10000);
            };
        } catch (e) {
            console.log('WebSocket not supported, using local data only');
            this.updateDeviceStatus(false);
        }
    }

    updateDeviceStatus(connected) {
        const statusEl = document.getElementById('deviceStatus');
        if (!statusEl) return;
        
        const translations = this.getTranslations();
        const lang = localStorage.getItem('nexura_language') || 'en';
        const t = translations[lang] || translations.en;
        
        if (connected) {
            statusEl.className = 'status-badge online';
            statusEl.innerHTML = '<i class="fas fa-wifi"></i> <span>' + t.connected + '</span>';
        } else {
            statusEl.className = 'status-badge offline';
            statusEl.innerHTML = '<i class="fas fa-wifi-slash"></i> <span>' + t.offline + '</span>';
        }
    }

    populateLanguageDropdown() {
        const select = document.getElementById('languageSelect');
        if (!select) return;
        
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'hi', name: 'हिंदी' },
            { code: 'ta', name: 'தமிழ்' },
            { code: 'te', name: 'తెలుగు' },
            { code: 'kn', name: 'ಕನ್ನಡ' },
            { code: 'ml', name: 'മലയാളം' },
            { code: 'mr', name: 'मराठी' },
            { code: 'gu', name: 'ગુજરાતી' },
            { code: 'bn', name: 'বাংলা' },
            { code: 'pa', name: 'ਪੰਜਾਬੀ' },
            { code: 'es', name: 'Español' },
            { code: 'fr', name: 'Français' },
            { code: 'de', name: 'Deutsch' },
            { code: 'ja', name: '日本語' },
            { code: 'zh', name: '中文' }
        ];
        
        select.innerHTML = '';
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = lang.name;
            select.appendChild(option);
        });
    }

    loadSavedLanguage() {
        const saved = localStorage.getItem('nexura_language') || 'en';
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = saved;
        }
    }

    setupEventListeners() {
        // Language change
        document.getElementById('languageSelect')?.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('nexura_language', lang);
            this.translatePage();
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Sidebar toggle
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Month navigation
        document.getElementById('prevMonthBtn')?.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });

        document.getElementById('nextMonthBtn')?.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });

        document.getElementById('todayBtn')?.addEventListener('click', () => {
            this.currentDate = new Date();
            this.selectedDate = new Date();
            this.renderCalendar();
            this.renderDayDetails();
        });

        // Close sidebar on outside click
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('sidebarToggle');
            if (window.innerWidth <= 768 && 
                !sidebar.contains(e.target) && 
                !toggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });

        // Navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = item.dataset.page;
                if (page === 'dashboard') {
                    window.location.href = 'dashboard.html';
                }
                 if (page === 'profile') {
                    window.location.href = 'summary.html';
                }
            });
        });
    }

    toggleTheme() {
        const body = document.body;
        const icon = document.querySelector('#themeToggle i');
        
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('nexura_theme', 'light');
            this.currentTheme = 'light';
            if (icon) {
                icon.className = 'fas fa-moon';
            }
        } else {
            body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('nexura_theme', 'dark');
            this.currentTheme = 'dark';
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }
    }

    applyTheme(theme) {
        const body = document.body;
        const icon = document.querySelector('#themeToggle i');
        
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        } else {
            body.classList.remove('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            if (icon) {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// Global Functions
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function toggleTheme() {
    if (window.scheduleApp) {
        window.scheduleApp.toggleTheme();
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('nexura_session');
        window.location.href = 'index.html';
    }
}

function goToProfile() {
    window.location.href = 'summary.html';
}

function addMedication() {
    document.getElementById('addMedicationModal').classList.add('show');
}

function closeModal() {
    document.getElementById('addMedicationModal').classList.remove('show');
}

function saveMedication() {
    const name = document.getElementById('medName').value.trim();
    const dosage = document.getElementById('medDosage').value.trim();
    const time = document.getElementById('medTime').value;
    const frequency = document.getElementById('medFrequency').value;
    
    if (!name) {
        alert('Please enter medication name');
        return;
    }
    
    // Save to localStorage
    const schedule = JSON.parse(localStorage.getItem('nexura_schedule_medications') || '[]');
    schedule.push({
        id: 'dose_' + Date.now(),
        key: 'dose_' + schedule.length,
        name: name,
        dosage: dosage || '',
        time: time || '08:00',
        frequency: frequency || 'daily',
        taken: false,
        icon: 'fa-pills',
        color: '#2a7de1'
    });
    
    localStorage.setItem('nexura_schedule_medications', JSON.stringify(schedule));
    
    // Update UI
    if (window.scheduleApp) {
        window.scheduleApp.schedule = schedule;
        window.scheduleApp.renderCalendar();
        window.scheduleApp.renderDayDetails();
    }
    
    closeModal();
    alert('Medication added successfully!');
}

function exportSchedule() {
    const schedule = JSON.parse(localStorage.getItem('nexura_schedule_medications') || '[]');
    if (schedule.length === 0) {
        alert('No medications to export');
        return;
    }
    
    // Create CSV
    let csv = 'Medication,Dosage,Time,Frequency,Status\n';
    schedule.forEach(med => {
        csv += `${med.name},${med.dosage || ''},${med.time || '08:00'},${med.frequency || 'daily'},${med.taken ? 'Taken' : 'Pending'}\n`;
    });
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NEXURA_Schedule_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('nexura_theme') || 'light';
    const body = document.body;
    const icon = document.querySelector('#themeToggle i');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) {
            icon.className = 'fas fa-sun';
        }
    } else {
        body.classList.remove('dark-mode');
        document.documentElement.removeAttribute('data-theme');
        if (icon) {
            icon.className = 'fas fa-moon';
        }
    }
    
    window.scheduleApp = new ScheduleApp();
});