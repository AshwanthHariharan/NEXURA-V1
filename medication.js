// js/medications.js
class MedicationsApp {
    constructor() {
        console.log('🚀 Initializing Medications...');
        
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        this.medications = [];
        this.filteredMedications = [];
        this.currentUser = null;
        
        // Load data
        this.loadData();
        
        // Apply theme
        this.applyTheme(this.currentTheme);
        
        // Setup
        this.setupEventListeners();
        this.populateLanguageDropdown();
        this.loadSavedLanguage();
        this.renderMedications();
        this.updateUserName();
        this.updateStats();
        
        console.log('✅ Medications initialized successfully');
    }

    // ================================================================
    // DATA LOADING
    // ================================================================
    
    loadData() {
        // Load user data
        const userData = localStorage.getItem('nexura_user_data');
        if (userData) {
            try {
                this.currentUser = JSON.parse(userData);
                console.log('✅ User data loaded');
            } catch (e) {}
        }
        
        if (!this.currentUser) {
            const currentUser = localStorage.getItem('nexura_current_user');
            if (currentUser) {
                try {
                    this.currentUser = JSON.parse(currentUser);
                } catch (e) {}
            }
        }

        // Load medications from profile data
        const profileData = localStorage.getItem('nexura_profile_data');
        if (profileData) {
            try {
                const data = JSON.parse(profileData);
                if (data.medications && data.medications.length > 0) {
                    this.medications = data.medications;
                    console.log('✅ Medications loaded from profile:', this.medications.length);
                    return;
                }
            } catch (e) {
                console.error('Error loading profile data:', e);
            }
        }

        // Try to load from schedule
        const scheduleData = localStorage.getItem('nexura_schedule_medications');
        if (scheduleData) {
            try {
                const data = JSON.parse(scheduleData);
                if (data && data.length > 0) {
                    this.medications = data.map(med => ({
                        name: med.name || 'Unknown',
                        dosage: med.dosage || '',
                        time: med.time || '08:00',
                        frequency: 'twice',
                        startDate: new Date().toISOString().split('T')[0],
                        endDate: '',
                        notes: '',
                        active: true
                    }));
                    console.log('✅ Medications loaded from schedule:', this.medications.length);
                    this.saveMedications();
                    return;
                }
            } catch (e) {}
        }

        // Default medications based on product type
        const productType = localStorage.getItem('nexura_product_type') || '';
        const defaultMeds = this.getDefaultMedications(productType);
        this.medications = defaultMeds;
        this.saveMedications();
        console.log('✅ Default medications loaded:', this.medications.length);
    }

    getDefaultMedications(productType) {
        if (productType === 'Tablets') {
            return [
                { name: 'Metformin', dosage: '500mg', time: '08:00', frequency: 'twice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: 'Take with meals', active: true },
                { name: 'Amlodipine', dosage: '5mg', time: '13:00', frequency: 'once', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: 'Take with food', active: true },
                { name: 'Metformin', dosage: '500mg', time: '20:00', frequency: 'twice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: 'Take with dinner', active: true }
            ];
        } else if (productType === 'Syrups') {
            return [
                { name: 'Cough Syrup', dosage: '10ml', time: '08:00', frequency: 'thrice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: 'Shake well before use', active: true },
                { name: 'Antibiotic', dosage: '5ml', time: '14:00', frequency: 'thrice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: 'Complete full course', active: true },
                { name: 'Cough Syrup', dosage: '10ml', time: '20:00', frequency: 'thrice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: 'Shake well before use', active: true }
            ];
        }
        
        return [
            { name: 'Medication 1', dosage: '500mg', time: '08:00', frequency: 'twice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: '', active: true },
            { name: 'Medication 2', dosage: '5mg', time: '13:00', frequency: 'once', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: '', active: true },
            { name: 'Medication 3', dosage: '500mg', time: '20:00', frequency: 'twice', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: '', active: true }
        ];
    }

    saveMedications() {
        // Save to profile data
        const profileData = localStorage.getItem('nexura_profile_data');
        if (profileData) {
            try {
                const data = JSON.parse(profileData);
                data.medications = this.medications;
                localStorage.setItem('nexura_profile_data', JSON.stringify(data));
                console.log('✅ Medications saved to profile');
            } catch (e) {
                console.error('Error saving to profile:', e);
            }
        }
        
        // Also save as schedule
        const schedule = this.medications.map((med, index) => ({
            id: 'dose_' + Date.now() + '_' + index,
            key: ['morning', 'afternoon', 'night'][index % 3],
            name: med.name,
            dosage: med.dosage,
            time: med.time,
            taken: false,
            icon: ['fa-sun', 'fa-cloud-sun', 'fa-moon'][index % 3],
            color: ['#f59e0b', '#3b82f6', '#6366f1'][index % 3]
        }));
        localStorage.setItem('nexura_schedule_medications', JSON.stringify(schedule));
        
        // Update current user data
        if (this.currentUser) {
            this.currentUser.medications = this.medications;
            localStorage.setItem('nexura_user_data', JSON.stringify(this.currentUser));
            localStorage.setItem('nexura_current_user', JSON.stringify(this.currentUser));
        }
    }

    // ================================================================
    // RENDER
    // ================================================================
    
    renderMedications() {
        const grid = document.getElementById('medicationsGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!grid) return;
        
        // Apply filters
        this.applyFilters();
        
        if (this.filteredMedications.length === 0) {
            grid.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }
        
        emptyState.style.display = 'none';
        
        const translations = this.getTranslations();
        const lang = localStorage.getItem('nexura_language') || 'en';
        const t = translations[lang] || translations.en;
        
        grid.innerHTML = '';
        
        this.filteredMedications.forEach((med, index) => {
            const card = document.createElement('div');
            card.className = 'medication-card';
            card.style.borderLeftColor = med.active ? '#28a745' : '#dc3545';
            
            const statusClass = med.active ? 'active' : 'paused';
            const statusText = med.active ? 'Active' : 'Paused';
            
            const frequencyMap = {
                'once': 'Once Daily',
                'twice': 'Twice Daily',
                'thrice': 'Thrice Daily',
                'four': 'Four Times Daily',
                'as-needed': 'As Needed'
            };
            
            const displayFrequency = frequencyMap[med.frequency] || med.frequency;
            const hour = parseInt(med.time.split(':')[0]);
            const ampm = hour < 12 ? 'AM' : 'PM';
            const displayHour = hour % 12 || 12;
            const displayTime = displayHour + ':' + med.time.split(':')[1] + ' ' + ampm;
            
            card.innerHTML = `
                <div class="card-top">
                    <div>
                        <div class="med-name">${med.name}</div>
                        <div class="med-dosage">${med.dosage || 'N/A'}</div>
                    </div>
                    <span class="status-badge-med ${statusClass}">${statusText}</span>
                </div>
                <div class="med-details">
                    <div class="med-detail-item">
                        <i class="fas fa-clock"></i> ${displayTime}
                    </div>
                    <div class="med-detail-item">
                        <i class="fas fa-repeat"></i> ${displayFrequency}
                    </div>
                    <div class="med-detail-item">
                        <i class="fas fa-calendar-plus"></i> ${med.startDate || 'N/A'}
                    </div>
                    <div class="med-detail-item">
                        <i class="fas fa-calendar-times"></i> ${med.endDate || 'Ongoing'}
                    </div>
                </div>
                ${med.notes ? `<div class="med-notes"><i class="fas fa-pencil-alt"></i> ${med.notes}</div>` : ''}
                <div class="card-actions">
                    <button class="btn btn-sm btn-warning" onclick="editMedication(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm ${med.active ? 'btn-danger' : 'btn-success'}" onclick="toggleMedicationStatus(${index})">
                        <i class="fas ${med.active ? 'fa-pause' : 'fa-play'}"></i> ${med.active ? 'Pause' : 'Resume'}
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteMedicationDirect(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // ================================================================
    // FILTERS
    // ================================================================
    
    applyFilters() {
        const searchTerm = document.getElementById('searchMedication')?.value.toLowerCase() || '';
        const frequencyFilter = document.getElementById('filterFrequency')?.value || 'all';
        const statusFilter = document.getElementById('filterStatus')?.value || 'all';
        
        this.filteredMedications = this.medications.filter(med => {
            // Search filter
            const matchSearch = med.name.toLowerCase().includes(searchTerm) ||
                              (med.dosage && med.dosage.toLowerCase().includes(searchTerm)) ||
                              (med.notes && med.notes.toLowerCase().includes(searchTerm));
            
            // Frequency filter
            const matchFrequency = frequencyFilter === 'all' || med.frequency === frequencyFilter;
            
            // Status filter
            let matchStatus = true;
            if (statusFilter === 'active') matchStatus = med.active === true;
            else if (statusFilter === 'paused') matchStatus = med.active === false;
            else if (statusFilter === 'completed') matchStatus = med.completed === true;
            
            return matchSearch && matchFrequency && matchStatus;
        });
    }

    filterMedications() {
        this.renderMedications();
        this.updateStats();
    }

    // ================================================================
    // STATS
    // ================================================================
    
    updateStats() {
        const total = this.medications.length;
        document.getElementById('totalMedications').textContent = total;
        
        // Calculate today's doses
        const today = new Date().toISOString().split('T')[0];
        let todayDoses = 0;
        let pendingDoses = 0;
        
        this.medications.forEach(med => {
            if (med.active) {
                const frequencyCount = {
                    'once': 1,
                    'twice': 2,
                    'thrice': 3,
                    'four': 4,
                    'as-needed': 1
                };
                todayDoses += frequencyCount[med.frequency] || 1;
                
                // Check if already taken today (from schedule status)
                const scheduleStatus = localStorage.getItem('nexura_schedule_status');
                if (scheduleStatus) {
                    try {
                        const status = JSON.parse(scheduleStatus);
                        const medIndex = this.medications.indexOf(med);
                        const key = ['morning', 'afternoon', 'night', 'evening', 'as-needed'][medIndex % 5];
                        if (!status[key]) {
                            pendingDoses += frequencyCount[med.frequency] || 1;
                        }
                    } catch (e) {}
                }
            }
        });
        
        document.getElementById('todayDoses').textContent = todayDoses;
        document.getElementById('pendingDoses').textContent = pendingDoses;
    }

    // ================================================================
    // CRUD OPERATIONS
    // ================================================================
    
    openAddMedicationModal() {
        document.getElementById('modalTitle').textContent = 'Add Medication';
        document.getElementById('editIndex').value = '-1';
        document.getElementById('deleteMedBtn').style.display = 'none';
        document.getElementById('medicationForm').reset();
        document.getElementById('medTime').value = '08:00';
        document.getElementById('medStartDate').value = new Date().toISOString().split('T')[0];
        document.getElementById('medActive').checked = true;
        document.getElementById('medicationModal').classList.add('show');
    }

    editMedication(index) {
        const med = this.medications[index];
        if (!med) return;
        
        document.getElementById('modalTitle').textContent = 'Edit Medication';
        document.getElementById('editIndex').value = index;
        document.getElementById('deleteMedBtn').style.display = 'inline-flex';
        document.getElementById('medName').value = med.name || '';
        document.getElementById('medDosage').value = med.dosage || '';
        document.getElementById('medFrequency').value = med.frequency || 'twice';
        document.getElementById('medTime').value = med.time || '08:00';
        document.getElementById('medStartDate').value = med.startDate || '';
        document.getElementById('medEndDate').value = med.endDate || '';
        document.getElementById('medNotes').value = med.notes || '';
        document.getElementById('medActive').checked = med.active !== false;
        document.getElementById('medicationModal').classList.add('show');
    }

    saveMedication() {
        const name = document.getElementById('medName').value.trim();
        const dosage = document.getElementById('medDosage').value.trim();
        const frequency = document.getElementById('medFrequency').value;
        const time = document.getElementById('medTime').value;
        const startDate = document.getElementById('medStartDate').value;
        const endDate = document.getElementById('medEndDate').value;
        const notes = document.getElementById('medNotes').value.trim();
        const active = document.getElementById('medActive').checked;
        const editIndex = parseInt(document.getElementById('editIndex').value);
        
        if (!name) {
            alert('Please enter a medication name.');
            return;
        }
        
        if (!time) {
            alert('Please select a time.');
            return;
        }
        
        const medication = {
            name: name,
            dosage: dosage,
            frequency: frequency,
            time: time,
            startDate: startDate || new Date().toISOString().split('T')[0],
            endDate: endDate || '',
            notes: notes,
            active: active
        };
        
        if (editIndex >= 0 && editIndex < this.medications.length) {
            // Update existing
            this.medications[editIndex] = medication;
        } else {
            // Add new
            this.medications.push(medication);
        }
        
        this.saveMedications();
        this.renderMedications();
        this.updateStats();
        this.closeMedicationModal();
        
        // Add log entry
        const action = editIndex >= 0 ? 'updated' : 'added';
        this.addLog(`💊 Medication "${name}" ${action}`, 'success');
    }

    deleteMedication() {
        const index = parseInt(document.getElementById('editIndex').value);
        if (index >= 0 && index < this.medications.length) {
            const name = this.medications[index].name;
            if (confirm(`Delete "${name}"?`)) {
                this.medications.splice(index, 1);
                this.saveMedications();
                this.renderMedications();
                this.updateStats();
                this.closeMedicationModal();
                this.addLog(`🗑️ Medication "${name}" deleted`, 'error');
            }
        }
    }

    deleteMedicationDirect(index) {
        if (index >= 0 && index < this.medications.length) {
            const name = this.medications[index].name;
            if (confirm(`Delete "${name}"?`)) {
                this.medications.splice(index, 1);
                this.saveMedications();
                this.renderMedications();
                this.updateStats();
                this.addLog(`🗑️ Medication "${name}" deleted`, 'error');
            }
        }
    }

    toggleMedicationStatus(index) {
        if (index >= 0 && index < this.medications.length) {
            this.medications[index].active = !this.medications[index].active;
            const status = this.medications[index].active ? 'resumed' : 'paused';
            const name = this.medications[index].name;
            this.saveMedications();
            this.renderMedications();
            this.updateStats();
            this.addLog(`⏸️ Medication "${name}" ${status}`, 'info');
        }
    }

    closeMedicationModal() {
        document.getElementById('medicationModal').classList.remove('show');
    }

    // ================================================================
    // ACTIVITY LOG
    // ================================================================
    
    addLog(text, type = 'info') {
        const doseLog = JSON.parse(localStorage.getItem('nexura_dose_log') || '[]');
        doseLog.unshift({
            time: new Date().toLocaleTimeString(),
            text: text,
            type: type,
            timestamp: Date.now()
        });
        if (doseLog.length > 100) {
            doseLog.length = 100;
        }
        localStorage.setItem('nexura_dose_log', JSON.stringify(doseLog));
    }

    // ================================================================
    // USER NAME
    // ================================================================
    
    updateUserName() {
        const nameEl = document.getElementById('userNameDisplay');
        if (nameEl) {
            const userData = localStorage.getItem('nexura_user_data');
            if (userData) {
                try {
                    const data = JSON.parse(userData);
                    nameEl.textContent = data.fullName || 'User';
                    return;
                } catch (e) {}
            }
            const currentUser = localStorage.getItem('nexura_current_user');
            if (currentUser) {
                try {
                    const data = JSON.parse(currentUser);
                    nameEl.textContent = data.fullName || 'User';
                    return;
                } catch (e) {}
            }
            nameEl.textContent = 'User';
        }
    }

    // ================================================================
    // LANGUAGE
    // ================================================================
    
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
                logout: 'Logout',
                connected: 'Connected',
                medicationManagement: 'Medication Management',
                medicationSubtitle: 'Manage all your medications in one place',
                addMedication: 'Add Medication',
                totalMedications: 'Total Medications',
                todaysDoses: "Today's Doses",
                pendingDoses: 'Pending Doses',
                allFrequencies: 'All Frequencies',
                allStatus: 'All Status',
                noMedicationsYet: 'No Medications Yet',
                noMedicationsMessage: 'Start by adding your first medication to keep track of your doses.',
                addFirstMedication: 'Add Your First Medication',
                medicationName: 'Medication Name',
                dosage: 'Dosage',
                frequency: 'Frequency',
                time: 'Time',
                startDate: 'Start Date',
                endDate: 'End Date (Optional)',
                notes: 'Notes',
                activeMedication: 'Active Medication',
                save: 'Save',
                cancel: 'Cancel',
                delete: 'Delete',
                allRightsReserved: 'All rights reserved.'
            },
            hi: {
                appName: 'नेक्सुरा',
                dashboard: 'डैशबोर्ड',
                schedule: 'अनुसूची',
                medications: 'दवाइयाँ',
                reports: 'रिपोर्ट',
                profile: 'प्रोफाइल',
                settings: 'सेटिंग्स',
                logout: 'लॉगआउट',
                connected: 'कनेक्टेड',
                medicationManagement: 'दवा प्रबंधन',
                medicationSubtitle: 'अपनी सभी दवाओं को एक जगह प्रबंधित करें',
                addMedication: 'दवा जोड़ें',
                totalMedications: 'कुल दवाइयाँ',
                todaysDoses: 'आज की खुराक',
                pendingDoses: 'लंबित खुराक',
                allFrequencies: 'सभी आवृत्तियाँ',
                allStatus: 'सभी स्थितियाँ',
                noMedicationsYet: 'अभी कोई दवा नहीं',
                noMedicationsMessage: 'अपनी खुराक पर नज़र रखने के लिए अपनी पहली दवा जोड़कर शुरू करें।',
                addFirstMedication: 'अपनी पहली दवा जोड़ें',
                medicationName: 'दवा का नाम',
                dosage: 'खुराक',
                frequency: 'आवृत्ति',
                time: 'समय',
                startDate: 'आरंभ तिथि',
                endDate: 'समाप्ति तिथि (वैकल्पिक)',
                notes: 'नोट्स',
                activeMedication: 'सक्रिय दवा',
                save: 'सहेजें',
                cancel: 'रद्द करें',
                delete: 'हटाएं',
                allRightsReserved: 'सर्वाधिकार सुरक्षित।'
            },
            ta: {
                appName: 'நெக்ஸுரா',
                dashboard: 'முகப்பு',
                schedule: 'அட்டவணை',
                medications: 'மருந்துகள்',
                reports: 'அறிக்கைகள்',
                profile: 'சுயவிவரம்',
                settings: 'அமைப்புகள்',
                logout: 'வெளியேறு',
                connected: 'இணைக்கப்பட்டுள்ளது',
                medicationManagement: 'மருந்து மேலாண்மை',
                medicationSubtitle: 'உங்கள் அனைத்து மருந்துகளையும் ஒரே இடத்தில் நிர்வகிக்கவும்',
                addMedication: 'மருந்து சேர்க்கவும்',
                totalMedications: 'மொத்த மருந்துகள்',
                todaysDoses: 'இன்றைய மருந்துகள்',
                pendingDoses: 'நிலுவையில் உள்ள மருந்துகள்',
                allFrequencies: 'அனைத்து அதிர்வெண்களும்',
                allStatus: 'அனைத்து நிலைகளும்',
                noMedicationsYet: 'இதுவரை மருந்துகள் இல்லை',
                noMedicationsMessage: 'உங்கள் மருந்துகளைக் கண்காணிக்க உங்கள் முதல் மருந்தைச் சேர்ப்பதன் மூலம் தொடங்கவும்.',
                addFirstMedication: 'உங்கள் முதல் மருந்தைச் சேர்க்கவும்',
                medicationName: 'மருந்தின் பெயர்',
                dosage: 'மருந்தளவு',
                frequency: 'அதிர்வெண்',
                time: 'நேரம்',
                startDate: 'தொடக்க தேதி',
                endDate: 'இறுதி தேதி (விரும்பினால்)',
                notes: 'குறிப்புகள்',
                activeMedication: 'செயலில் உள்ள மருந்து',
                save: 'சேமிக்கவும்',
                cancel: 'ரத்து செய்யவும்',
                delete: 'நீக்கவும்',
                allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
            },
            te: {
                appName: 'నెక్సురా',
                dashboard: 'డాష్‌బోర్డ్',
                schedule: 'షెడ్యూల్',
                medications: 'మందులు',
                reports: 'నివేదికలు',
                profile: 'ప్రొఫైల్',
                settings: 'సెట్టింగ్స్',
                logout: 'లాగౌట్',
                connected: 'కనెక్ట్ చేయబడింది',
                medicationManagement: 'మందుల నిర్వహణ',
                medicationSubtitle: 'మీ అన్ని మందులను ఒకే చోట నిర్వహించండి',
                addMedication: 'మందు జోడించండి',
                totalMedications: 'మొత్తం మందులు',
                todaysDoses: 'నేటి మోతాదులు',
                pendingDoses: 'పెండింగ్ మోతాదులు',
                allFrequencies: 'అన్ని ఫ్రీక్వెన్సీలు',
                allStatus: 'అన్ని స్థితులు',
                noMedicationsYet: 'ఇంకా మందులు లేవు',
                noMedicationsMessage: 'మీ మోతాదులను ట్రాక్ చేయడానికి మీ మొదటి మందును జోడించడం ద్వారా ప్రారంభించండి.',
                addFirstMedication: 'మీ మొదటి మందును జోడించండి',
                medicationName: 'మందు పేరు',
                dosage: 'మోతాదు',
                frequency: 'ఫ్రీక్వెన్సీ',
                time: 'సమయం',
                startDate: 'ప్రారంభ తేదీ',
                endDate: 'ముగింపు తేదీ (ఐచ్ఛికం)',
                notes: 'గమనికలు',
                activeMedication: 'క్రియాశీల మందు',
                save: 'సేవ్ చేయండి',
                cancel: 'రద్దు చేయండి',
                delete: 'తొలగించండి',
                allRightsReserved: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.'
            }
        };
    }

    // ================================================================
    // UI HELPERS
    // ================================================================
    
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
            { code: 'pa', name: 'ਪੰਜਾਬੀ' }
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
        this.translatePage();
    }

    // ================================================================
    // EVENT LISTENERS
    // ================================================================
    
    setupEventListeners() {
        // Language change
        document.getElementById('languageSelect')?.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('nexura_language', lang);
            this.translatePage();
            this.renderMedications();
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Sidebar toggle
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Close modal on outside click
        document.getElementById('medicationModal')?.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closeMedicationModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMedicationModal();
            }
        });
    }

    // ================================================================
    // THEME
    // ================================================================
    
    toggleTheme() {
        const body = document.body;
        const icon = document.querySelector('#themeToggle i');
        
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('nexura_theme', 'light');
            this.currentTheme = 'light';
            if (icon) icon.className = 'fas fa-moon';
        } else {
            body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('nexura_theme', 'dark');
            this.currentTheme = 'dark';
            if (icon) icon.className = 'fas fa-sun';
        }
    }

    applyTheme(theme) {
        const body = document.body;
        const icon = document.querySelector('#themeToggle i');
        
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            if (icon) icon.className = 'fas fa-sun';
        } else {
            body.classList.remove('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            if (icon) icon.className = 'fas fa-moon';
        }
    }
}

// ================================================================
// GLOBAL FUNCTIONS
// ================================================================

function toggleTheme() {
    if (window.medicationsApp) {
        window.medicationsApp.toggleTheme();
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
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

function openAddMedicationModal() {
    if (window.medicationsApp) {
        window.medicationsApp.openAddMedicationModal();
    }
}

function closeMedicationModal() {
    if (window.medicationsApp) {
        window.medicationsApp.closeMedicationModal();
    }
}

function saveMedication() {
    if (window.medicationsApp) {
        window.medicationsApp.saveMedication();
    }
}

function deleteMedication() {
    if (window.medicationsApp) {
        window.medicationsApp.deleteMedication();
    }
}

function editMedication(index) {
    if (window.medicationsApp) {
        window.medicationsApp.editMedication(index);
    }
}

function deleteMedicationDirect(index) {
    if (window.medicationsApp) {
        window.medicationsApp.deleteMedicationDirect(index);
    }
}

function toggleMedicationStatus(index) {
    if (window.medicationsApp) {
        window.medicationsApp.toggleMedicationStatus(index);
    }
}

function filterMedications() {
    if (window.medicationsApp) {
        window.medicationsApp.filterMedications();
    }
}

// ================================================================
// INITIALIZE
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing medications...');
    
    // Apply theme
    const savedTheme = localStorage.getItem('nexura_theme') || 'light';
    const body = document.body;
    const icon = document.querySelector('#themeToggle i');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) icon.className = 'fas fa-sun';
    } else {
        body.classList.remove('dark-mode');
        document.documentElement.removeAttribute('data-theme');
        if (icon) icon.className = 'fas fa-moon';
    }
    
    // Initialize app
    window.medicationsApp = new MedicationsApp();
});