// js/summary.js
class SummaryApp {
    constructor() {
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        this.applyTheme(this.currentTheme);
        this.loadData();
        this.setupEventListeners();
        this.populateLanguageDropdown();
        this.loadSavedLanguage();
        
        // Translate page on load
        setTimeout(() => {
            this.translatePage();
        }, 100);
    }

    // ==============================================
    // ALL TRANSLATIONS - 22 LANGUAGES
    // ==============================================
    getTranslations() {
        return {
            // ============================================================
            // 22 LANGUAGES (Same as other pages)
            // ============================================================
            
            // 1. English
            en: {
                summaryTitle: 'Registration Complete!',
                summarySubtitle: 'Please review your details before proceeding to the dashboard',
                registrationDetails: 'Registration Details',
                personalDetails: 'Personal Details',
                emergencyContacts: 'Emergency Contacts',
                doctorDetails: 'Doctor Details',
                medicationsList: 'Medications',
                editDetails: 'Edit Details',
                goToDashboard: 'Go to Dashboard',
                noMedications: 'No medications added',
                notProvided: 'Not provided',
                none: 'None',
                fullName: 'Full Name',
                email: 'Email',
                mobile: 'Mobile',
                role: 'Role',
                productCode: 'Product Code',
                dob: 'Date of Birth',
                age: 'Age',
                sex: 'Sex',
                medicalConditions: 'Medical Conditions',
                allergies: 'Allergies',
                emergencyName: 'Contact Name',
                emergencyRelation: 'Relationship',
                emergencyPhone: 'Phone Number',
                doctorName: "Doctor's Name",
                doctorSpecialty: 'Specialty',
                doctorPhone: "Doctor's Phone",
                doctorEmail: "Doctor's Email",
                stepRegistration: 'Registration',
                stepPersonalDetails: 'Personal Details',
                stepComplete: 'Complete',
                selectLanguage: 'SELECT LANGUAGE',
                footerText: '© 2026 NEXURA. All rights reserved.'
            },
            
            // 2. Hindi
            hi: {
                summaryTitle: 'पंजीकरण पूर्ण!',
                summarySubtitle: 'डैशबोर्ड पर जाने से पहले कृपया अपने विवरण की समीक्षा करें',
                registrationDetails: 'पंजीकरण विवरण',
                personalDetails: 'व्यक्तिगत विवरण',
                emergencyContacts: 'आपातकालीन संपर्क',
                doctorDetails: 'डॉक्टर विवरण',
                medicationsList: 'दवाइयाँ',
                editDetails: 'विवरण संपादित करें',
                goToDashboard: 'डैशबोर्ड पर जाएं',
                noMedications: 'कोई दवा नहीं जोड़ी गई',
                notProvided: 'प्रदान नहीं किया गया',
                none: 'कोई नहीं',
                fullName: 'पूरा नाम',
                email: 'ईमेल',
                mobile: 'मोबाइल',
                role: 'भूमिका',
                productCode: 'उत्पाद कोड',
                dob: 'जन्म तिथि',
                age: 'आयु',
                sex: 'लिंग',
                medicalConditions: 'चिकित्सीय स्थितियाँ',
                allergies: 'एलर्जी',
                emergencyName: 'संपर्क नाम',
                emergencyRelation: 'संबंध',
                emergencyPhone: 'फोन नंबर',
                doctorName: 'डॉक्टर का नाम',
                doctorSpecialty: 'विशेषज्ञता',
                doctorPhone: 'डॉक्टर का फोन',
                doctorEmail: 'डॉक्टर का ईमेल',
                stepRegistration: 'पंजीकरण',
                stepPersonalDetails: 'व्यक्तिगत विवरण',
                stepComplete: 'पूर्ण',
                selectLanguage: 'भाषा चुनें',
                footerText: '© 2026 NEXURA. सर्वाधिकार सुरक्षित'
            },
            
            // 3. Bengali
            bn: {
                summaryTitle: 'নিবন্ধন সম্পূর্ণ!',
                summarySubtitle: 'ড্যাশবোর্ডে যাওয়ার আগে অনুগ্রহ করে আপনার বিবরণ পর্যালোচনা করুন',
                registrationDetails: 'নিবন্ধন বিবরণ',
                personalDetails: 'ব্যক্তিগত বিবরণ',
                emergencyContacts: 'জরুরি যোগাযোগ',
                doctorDetails: 'ডাক্তারের বিবরণ',
                medicationsList: 'ঔষধ',
                editDetails: 'বিবরণ সম্পাদনা করুন',
                goToDashboard: 'ড্যাশবোর্ডে যান',
                noMedications: 'কোন ঔষধ যোগ করা হয়নি',
                notProvided: 'প্রদান করা হয়নি',
                none: 'কোনটিই নয়',
                fullName: 'পূর্ণ নাম',
                email: 'ইমেইল',
                mobile: 'মোবাইল',
                role: 'ভূমিকা',
                productCode: 'পণ্য কোড',
                dob: 'জন্ম তারিখ',
                age: 'বয়স',
                sex: 'লিঙ্গ',
                medicalConditions: 'চিকিৎসা শর্ত',
                allergies: 'অ্যালার্জি',
                emergencyName: 'যোগাযোগের নাম',
                emergencyRelation: 'সম্পর্ক',
                emergencyPhone: 'ফোন নম্বর',
                doctorName: 'ডাক্তারের নাম',
                doctorSpecialty: 'বিশেষত্ব',
                doctorPhone: 'ডাক্তারের ফোন',
                doctorEmail: 'ডাক্তারের ইমেইল',
                stepRegistration: 'নিবন্ধন',
                stepPersonalDetails: 'ব্যক্তিগত বিবরণ',
                stepComplete: 'সম্পূর্ণ',
                selectLanguage: 'ভাষা নির্বাচন করুন',
                footerText: '© 2026 NEXURA. সমস্ত অধিকার সংরক্ষিত'
            },
            
            // 4. Telugu
            te: {
                summaryTitle: 'నమోదు పూర్తయింది!',
                summarySubtitle: 'డ్యాష్‌బోర్డ్‌కు వెళ్లే ముందు దయచేసి మీ వివరాలను సమీక్షించండి',
                registrationDetails: 'నమోదు వివరాలు',
                personalDetails: 'వ్యక్తిగత వివరాలు',
                emergencyContacts: 'అత్యవసర పరిచయాలు',
                doctorDetails: 'డాక్టర్ వివరాలు',
                medicationsList: 'మందులు',
                editDetails: 'వివరాలను సవరించండి',
                goToDashboard: 'డ్యాష్‌బోర్డ్‌కు వెళ్ళండి',
                noMedications: 'మందులు జోడించలేదు',
                notProvided: 'అందించబడలేదు',
                none: 'ఏదీ లేదు',
                fullName: 'పూర్తి పేరు',
                email: 'ఇమెయిల్',
                mobile: 'మొబైల్',
                role: 'పాత్ర',
                productCode: 'ఉత్పత్తి కోడ్',
                dob: 'పుట్టిన తేదీ',
                age: 'వయస్సు',
                sex: 'లింగం',
                medicalConditions: 'వైద్య పరిస్థితులు',
                allergies: 'అలెర్జీలు',
                emergencyName: 'పరిచయం పేరు',
                emergencyRelation: 'సంబంధం',
                emergencyPhone: 'ఫోన్ నంబర్',
                doctorName: 'డాక్టర్ పేరు',
                doctorSpecialty: 'ప్రత్యేకత',
                doctorPhone: 'డాక్టర్ ఫోన్',
                doctorEmail: 'డాక్టర్ ఇమెయిల్',
                stepRegistration: 'నమోదు',
                stepPersonalDetails: 'వ్యక్తిగత వివరాలు',
                stepComplete: 'పూర్తయింది',
                selectLanguage: 'భాషను ఎంచుకోండి',
                footerText: '© 2026 NEXURA. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి'
            },
            
            // 5. Marathi
            mr: {
                summaryTitle: 'नोंदणी पूर्ण!',
                summarySubtitle: 'डॅशबोर्डवर जाण्यापूर्वी कृपया आपल्या तपशीलांची पुनरावलोकन करा',
                registrationDetails: 'नोंदणी तपशील',
                personalDetails: 'वैयक्तिक तपशील',
                emergencyContacts: 'आपत्कालीन संपर्क',
                doctorDetails: 'डॉक्टर तपशील',
                medicationsList: 'औषधे',
                editDetails: 'तपशील संपादित करा',
                goToDashboard: 'डॅशबोर्डवर जा',
                noMedications: 'औषधे जोडलेली नाहीत',
                notProvided: 'प्रदान केलेले नाही',
                none: 'कोणतेही नाही',
                fullName: 'पूर्ण नाव',
                email: 'ईमेल',
                mobile: 'मोबाइल',
                role: 'भूमिका',
                productCode: 'उत्पाद कोड',
                dob: 'जन्म तारीख',
                age: 'वय',
                sex: 'लिंग',
                medicalConditions: 'वैद्यकीय स्थिती',
                allergies: 'अ‍ॅलर्जी',
                emergencyName: 'संपर्क नाव',
                emergencyRelation: 'नाते',
                emergencyPhone: 'फोन नंबर',
                doctorName: 'डॉक्टरचे नाव',
                doctorSpecialty: 'विशेषज्ञता',
                doctorPhone: 'डॉक्टरचा फोन',
                doctorEmail: 'डॉक्टरचा ईमेल',
                stepRegistration: 'नोंदणी',
                stepPersonalDetails: 'वैयक्तिक तपशील',
                stepComplete: 'पूर्ण',
                selectLanguage: 'भाषा निवडा',
                footerText: '© 2026 NEXURA. सर्व हक्क राखीव'
            },
            
            // 6. Tamil
            ta: {
                summaryTitle: 'பதிவு முழுமையானது!',
                summarySubtitle: 'டாஷ்போர்டிற்கு செல்வதற்கு முன் உங்கள் விவரங்களை மதிப்பாய்வு செய்யவும்',
                registrationDetails: 'பதிவு விவரங்கள்',
                personalDetails: 'தனிப்பட்ட விவரங்கள்',
                emergencyContacts: 'அவசர தொடர்புகள்',
                doctorDetails: 'மருத்துவர் விவரங்கள்',
                medicationsList: 'மருந்துகள்',
                editDetails: 'விவரங்களைத் திருத்து',
                goToDashboard: 'டாஷ்போர்டிற்கு செல்லுங்கள்',
                noMedications: 'மருந்துகள் சேர்க்கப்படவில்லை',
                notProvided: 'வழங்கப்படவில்லை',
                none: 'எதுவுமில்லை',
                fullName: 'முழு பெயர்',
                email: 'மின்னஞ்சல்',
                mobile: 'கைபேசி',
                role: 'பங்கு',
                productCode: 'தயாரிப்பு குறியீடு',
                dob: 'பிறந்த தேதி',
                age: 'வயது',
                sex: 'பாலினம்',
                medicalConditions: 'மருத்துவ நிலைகள்',
                allergies: 'ஒவ்வாமை',
                emergencyName: 'தொடர்பு பெயர்',
                emergencyRelation: 'உறவு',
                emergencyPhone: 'தொலைபேசி எண்',
                doctorName: 'மருத்துவரின் பெயர்',
                doctorSpecialty: 'சிறப்பு',
                doctorPhone: 'மருத்துவரின் தொலைபேசி',
                doctorEmail: 'மருத்துவரின் மின்னஞ்சல்',
                stepRegistration: 'பதிவு',
                stepPersonalDetails: 'தனிப்பட்ட விவரங்கள்',
                stepComplete: 'முழுமையானது',
                selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
                footerText: '© 2026 NEXURA. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை'
            },
            
            // 7. Gujarati
            gu: {
                summaryTitle: 'નોંધણી પૂર્ણ!',
                summarySubtitle: 'ડેશબોર્ડ પર આગળ વધતા પહેલા કૃપા કરીને તમારી વિગતોની સમીક્ષા કરો',
                registrationDetails: 'નોંધણી વિગતો',
                personalDetails: 'વ્યક્તિગત વિગતો',
                emergencyContacts: 'કટોકટી સંપર્કો',
                doctorDetails: 'ડૉક્ટર વિગતો',
                medicationsList: 'દવાઓ',
                editDetails: 'વિગતો સંપાદિત કરો',
                goToDashboard: 'ડેશબોર્ડ પર જાઓ',
                noMedications: 'દવાઓ ઉમેરાઈ નથી',
                notProvided: 'પ્રદાન કરેલ નથી',
                none: 'કંઈ નહીં',
                fullName: 'પૂરું નામ',
                email: 'ઇમેઇલ',
                mobile: 'મોબાઇલ',
                role: 'ભૂમિકા',
                productCode: 'ઉત્પાદન કોડ',
                dob: 'જન્મ તારીખ',
                age: 'ઉંમર',
                sex: 'લિંગ',
                medicalConditions: 'તબીબી સ્થિતિઓ',
                allergies: 'એલર્જી',
                emergencyName: 'સંપર્ક નામ',
                emergencyRelation: 'સંબંધ',
                emergencyPhone: 'ફોન નંબર',
                doctorName: 'ડૉક્ટરનું નામ',
                doctorSpecialty: 'વિશેષતા',
                doctorPhone: 'ડૉક્ટરનો ફોન',
                doctorEmail: 'ડૉક્ટરનો ઈમેલ',
                stepRegistration: 'નોંધણી',
                stepPersonalDetails: 'વ્યક્તિગત વિગતો',
                stepComplete: 'પૂર્ણ',
                selectLanguage: 'ભાષા પસંદ કરો',
                footerText: '© 2026 NEXURA. બધા હક્કો અનામત'
            },
            
            // 8. Kannada
            kn: {
                summaryTitle: 'ನೋಂದಣಿ ಪೂರ್ಣಗೊಂಡಿದೆ!',
                summarySubtitle: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಮುಂದುವರಿಯುವ ಮೊದಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
                registrationDetails: 'ನೋಂದಣಿ ವಿವರಗಳು',
                personalDetails: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು',
                emergencyContacts: 'ತುರ್ತು ಸಂಪರ್ಕಗಳು',
                doctorDetails: 'ವೈದ್ಯರ ವಿವರಗಳು',
                medicationsList: 'ಔಷಧಿಗಳು',
                editDetails: 'ವಿವರಗಳನ್ನು ಸಂಪಾದಿಸಿ',
                goToDashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ',
                noMedications: 'ಔಷಧಿಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ',
                notProvided: 'ಒದಗಿಸಿಲ್ಲ',
                none: 'ಯಾವುದೂ ಇಲ್ಲ',
                fullName: 'ಪೂರ್ಣ ಹೆಸರು',
                email: 'ಇಮೇಲ್',
                mobile: 'ಮೊಬೈಲ್',
                role: 'ಪಾತ್ರ',
                productCode: 'ಉತ್ಪನ್ನ ಕೋಡ್',
                dob: 'ಜನ್ಮ ದಿನಾಂಕ',
                age: 'ವಯಸ್ಸು',
                sex: 'ಲಿಂಗ',
                medicalConditions: 'ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳು',
                allergies: 'ಅಲರ್ಜಿಗಳು',
                emergencyName: 'ಸಂಪರ್ಕ ಹೆಸರು',
                emergencyRelation: 'ಸಂಬಂಧ',
                emergencyPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
                doctorName: 'ವೈದ್ಯರ ಹೆಸರು',
                doctorSpecialty: 'ವಿಶೇಷತೆ',
                doctorPhone: 'ವೈದ್ಯರ ಫೋನ್',
                doctorEmail: 'ವೈದ್ಯರ ಇಮೇಲ್',
                stepRegistration: 'ನೋಂದಣಿ',
                stepPersonalDetails: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು',
                stepComplete: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
                selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
                footerText: '© 2026 NEXURA. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ'
            },
            
            // 9. Malayalam
            ml: {
                summaryTitle: 'രജിസ്ട്രേഷൻ പൂർത്തിയായി!',
                summarySubtitle: 'ഡാഷ്ബോർഡിലേക്ക് പോകുന്നതിന് മുമ്പ് ദയവായി നിങ്ങളുടെ വിവരങ്ങൾ അവലോകനം ചെയ്യുക',
                registrationDetails: 'രജിസ്ട്രേഷൻ വിവരങ്ങൾ',
                personalDetails: 'വ്യക്തിഗത വിവരങ്ങൾ',
                emergencyContacts: 'എമർജൻസി കോൺടാക്റ്റുകൾ',
                doctorDetails: 'ഡോക്ടറുടെ വിവരങ്ങൾ',
                medicationsList: 'മരുന്നുകൾ',
                editDetails: 'വിവരങ്ങൾ തിരുത്തുക',
                goToDashboard: 'ഡാഷ്ബോർഡിലേക്ക് പോകുക',
                noMedications: 'മരുന്നുകൾ ചേർത്തിട്ടില്ല',
                notProvided: 'നൽകിയിട്ടില്ല',
                none: 'ഒന്നുമില്ല',
                fullName: 'പൂർണ്ണ നാമം',
                email: 'ഇമെയിൽ',
                mobile: 'മൊബൈൽ',
                role: 'റോൾ',
                productCode: 'ഉൽപ്പന്ന കോഡ്',
                dob: 'ജനന തീയതി',
                age: 'പ്രായം',
                sex: 'ലിംഗം',
                medicalConditions: 'മെഡിക്കൽ അവസ്ഥകൾ',
                allergies: 'അലർജികൾ',
                emergencyName: 'കോൺടാക്റ്റ് പേര്',
                emergencyRelation: 'ബന്ധം',
                emergencyPhone: 'ഫോൺ നമ്പർ',
                doctorName: 'ഡോക്ടറുടെ പേര്',
                doctorSpecialty: 'സ്പെഷ്യാലിറ്റി',
                doctorPhone: 'ഡോക്ടറുടെ ഫോൺ',
                doctorEmail: 'ഡോക്ടറുടെ ഇമെയിൽ',
                stepRegistration: 'രജിസ്ട്രേഷൻ',
                stepPersonalDetails: 'വ്യക്തിഗത വിവരങ്ങൾ',
                stepComplete: 'പൂർത്തിയായി',
                selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
                footerText: '© 2026 NEXURA. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം'
            },
            
            // 10. Odia
            or: {
                summaryTitle: 'ନିୟୋଜନ ସମ୍ପୂର୍ଣ୍ଣ!',
                summarySubtitle: 'ଡ୍ୟାଶବୋର୍ଡକୁ ଯିବା ପୂର୍ବରୁ ଦୟାକରି ଆପଣଙ୍କ ବିବରଣୀ ଯାଞ୍ଚ କରନ୍ତୁ',
                registrationDetails: 'ନିୟୋଜନ ବିବରଣୀ',
                personalDetails: 'ବ୍ୟକ୍ତିଗତ ବିବରଣୀ',
                emergencyContacts: 'ଜରୁରୀ ଯୋଗାଯୋଗ',
                doctorDetails: 'ଡାକ୍ତରଙ୍କ ବିବରଣୀ',
                medicationsList: 'ଔଷଧ',
                editDetails: 'ବିବରଣୀ ସମ୍ପାଦନ କରନ୍ତୁ',
                goToDashboard: 'ଡ୍ୟାଶବୋର୍ଡକୁ ଯାଆନ୍ତୁ',
                noMedications: 'କୌଣସି ଔଷଧ ଯୋଡାଯାଇନାହିଁ',
                notProvided: 'ପ୍ରଦାନ କରାଯାଇନାହିଁ',
                none: 'କିଛି ନାହିଁ',
                fullName: 'ପୂର୍ଣ୍ଣ ନାମ',
                email: 'ଇମେଲ୍',
                mobile: 'ମୋବାଇଲ୍',
                role: 'ଭୂମିକା',
                productCode: 'ଉତ୍ପାଦ କୋଡ୍',
                dob: 'ଜନ୍ମ ତାରିଖ',
                age: 'ବୟସ',
                sex: 'ଲିଙ୍ଗ',
                medicalConditions: 'ଚିକିତ୍ସା ଅବସ୍ଥା',
                allergies: 'ଆଲର୍ଜି',
                emergencyName: 'ଯୋଗାଯୋଗ ନାମ',
                emergencyRelation: 'ସମ୍ପର୍କ',
                emergencyPhone: 'ଫୋନ୍ ନମ୍ବର',
                doctorName: 'ଡାକ୍ତରଙ୍କ ନାମ',
                doctorSpecialty: 'ବିଶେଷତା',
                doctorPhone: 'ଡାକ୍ତରଙ୍କ ଫୋନ୍',
                doctorEmail: 'ଡାକ୍ତରଙ୍କ ଇମେଲ୍',
                stepRegistration: 'ନିୟୋଜନ',
                stepPersonalDetails: 'ବ୍ୟକ୍ତିଗତ ବିବରଣୀ',
                stepComplete: 'ସମ୍ପୂର୍ଣ୍ଣ',
                selectLanguage: 'ଭାଷା ଚୟନ କରନ୍ତୁ',
                footerText: '© 2026 NEXURA. ସମସ୍ତ ଅଧିକାର ସୁରକ୍ଷିତ।'
            },
            
            // 11. Punjabi
            pa: {
                summaryTitle: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪੂਰੀ!',
                summarySubtitle: 'ਡੈਸ਼ਬੋਰਡ ਤੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਵੇਰਵਿਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ',
                registrationDetails: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਵੇਰਵੇ',
                personalDetails: 'ਨਿੱਜੀ ਵੇਰਵੇ',
                emergencyContacts: 'ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ',
                doctorDetails: 'ਡਾਕਟਰ ਦੇ ਵੇਰਵੇ',
                medicationsList: 'ਦਵਾਈਆਂ',
                editDetails: 'ਵੇਰਵੇ ਸੰਪਾਦਿਤ ਕਰੋ',
                goToDashboard: 'ਡੈਸ਼ਬੋਰਡ ਤੇ ਜਾਓ',
                noMedications: 'ਕੋਈ ਦਵਾਈ ਨਹੀਂ ਜੋੜੀ ਗਈ',
                notProvided: 'ਪ੍ਰਦਾਨ ਨਹੀਂ ਕੀਤਾ',
                none: 'ਕੋਈ ਨਹੀਂ',
                fullName: 'ਪੂਰਾ ਨਾਮ',
                email: 'ਈਮੇਲ',
                mobile: 'ਮੋਬਾਈਲ',
                role: 'ਭੂਮਿਕਾ',
                productCode: 'ਉਤਪਾਦ ਕੋਡ',
                dob: 'ਜਨਮ ਮਿਤੀ',
                age: 'ਉਮਰ',
                sex: 'ਲਿੰਗ',
                medicalConditions: 'ਡਾਕਟਰੀ ਸਥਿਤੀਆਂ',
                allergies: 'ਐਲਰਜੀਆਂ',
                emergencyName: 'ਸੰਪਰਕ ਨਾਮ',
                emergencyRelation: 'ਰਿਸ਼ਤਾ',
                emergencyPhone: 'ਫੋਨ ਨੰਬਰ',
                doctorName: 'ਡਾਕਟਰ ਦਾ ਨਾਮ',
                doctorSpecialty: 'ਵਿਸ਼ੇਸ਼ਤਾ',
                doctorPhone: 'ਡਾਕਟਰ ਦਾ ਫੋਨ',
                doctorEmail: 'ਡਾਕਟਰ ਦਾ ਈਮੇਲ',
                stepRegistration: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ',
                stepPersonalDetails: 'ਨਿੱਜੀ ਵੇਰਵੇ',
                stepComplete: 'ਪੂਰਾ',
                selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
                footerText: '© 2026 NEXURA. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ'
            },
            
            // 12. Assamese
            as: {
                summaryTitle: 'পঞ্জীয়ন সম্পূৰ্ণ!',
                summarySubtitle: 'ডেছবৰ্ডলৈ যোৱাৰ আগতে অনুগ্ৰহ কৰি আপোনাৰ বিবৰণ পৰ্যালোচনা কৰক',
                registrationDetails: 'পঞ্জীয়ন বিবৰণ',
                personalDetails: 'ব্যক্তিগত বিবৰণ',
                emergencyContacts: 'জৰুৰী যোগাযোগ',
                doctorDetails: 'ডাক্তৰৰ বিবৰণ',
                medicationsList: 'ঔষধ',
                editDetails: 'বিবৰণ সম্পাদনা কৰক',
                goToDashboard: 'ডেছবৰ্ডলৈ যাওক',
                noMedications: 'কোনো ঔষধ যোগ কৰা হোৱা নাই',
                notProvided: 'প্ৰদান কৰা হোৱা নাই',
                none: 'কোনো নাই',
                fullName: 'সম্পূৰ্ণ নাম',
                email: 'ইমেইল',
                mobile: 'মোবাইল',
                role: 'ভূমিকা',
                productCode: 'প্ৰডাক্ট ক ড',
                dob: 'জন্ম তাৰিখ',
                age: 'বয়স',
                sex: 'লিংগ',
                medicalConditions: 'চিকিৎসা অৱস্থা',
                allergies: 'এলাৰ্জি',
                emergencyName: 'যোগাযোগৰ নাম',
                emergencyRelation: 'সম্পৰ্ক',
                emergencyPhone: 'ফোন নম্বৰ',
                doctorName: 'ডাক্তৰৰ নাম',
                doctorSpecialty: 'বিশেষজ্ঞতা',
                doctorPhone: 'ডাক্তৰৰ ফোন',
                doctorEmail: 'ডাক্তৰৰ ইমেইল',
                stepRegistration: 'পঞ্জীয়ন',
                stepPersonalDetails: 'ব্যক্তিগত বিবৰণ',
                stepComplete: 'সম্পূৰ্ণ',
                selectLanguage: 'ভাষা বাছনি কৰক',
                footerText: '© 2026 NEXURA. সকলো অধিকাৰ সংৰক্ষিত।'
            },
            
            // 13. Urdu
            ur: {
                summaryTitle: 'رجسٹریشن مکمل!',
                summarySubtitle: 'ڈیش بورڈ پر جانے سے پہلے براہ کرم اپنی تفصیلات کا جائزہ لیں',
                registrationDetails: 'رجسٹریشن کی تفصیلات',
                personalDetails: 'ذاتی تفصیلات',
                emergencyContacts: 'ہنگامی رابطے',
                doctorDetails: 'ڈاکٹر کی تفصیلات',
                medicationsList: 'ادویات',
                editDetails: 'تفصیلات میں ترمیم کریں',
                goToDashboard: 'ڈیش بورڈ پر جائیں',
                noMedications: 'کوئی دوا شامل نہیں کی گئی',
                notProvided: 'فراہم نہیں کیا گیا',
                none: 'کوئی نہیں',
                fullName: 'مکمل نام',
                email: 'ای میل',
                mobile: 'موبائل',
                role: 'کردار',
                productCode: 'پروڈکٹ کوڈ',
                dob: 'پیدائش کی تاریخ',
                age: 'عمر',
                sex: 'جنس',
                medicalConditions: 'طبی حالات',
                allergies: 'الرجی',
                emergencyName: 'رابطہ کا نام',
                emergencyRelation: 'رشتہ',
                emergencyPhone: 'فون نمبر',
                doctorName: 'ڈاکٹر کا نام',
                doctorSpecialty: 'خصوصیت',
                doctorPhone: 'ڈاکٹر کا فون',
                doctorEmail: 'ڈاکٹر کا ای میل',
                stepRegistration: 'رجسٹریشن',
                stepPersonalDetails: 'ذاتی تفصیلات',
                stepComplete: 'مکمل',
                selectLanguage: 'زبان منتخب کریں',
                footerText: '© 2026 NEXURA. جملہ حقوق محفوظ ہیں۔'
            },
            
            // 14. Konkani
            kok: {
                summaryTitle: 'नोंदणी पूर्ण!',
                summarySubtitle: 'डॅशबोर्डाक वचपा आदीं कृपया तुमचे तपशील पळेयात',
                registrationDetails: 'नोंदणी तपशील',
                personalDetails: 'वैयक्तिक तपशील',
                emergencyContacts: 'आपातकालीन संपर्क',
                doctorDetails: 'डॉक्टर तपशील',
                medicationsList: 'औषधां',
                editDetails: 'तपशील संपादित करात',
                goToDashboard: 'डॅशबोर्डाक वचात',
                noMedications: 'औषधां जोडलीं नात',
                notProvided: 'दिल्लें ना',
                none: 'कांयच ना',
                fullName: 'पूर्ण नांव',
                email: 'ईमेल',
                mobile: 'मोबाईल',
                role: 'भूमिका',
                productCode: 'उत्पाद कोड',
                dob: 'जल्म तारीख',
                age: 'वय',
                sex: 'लिंग',
                medicalConditions: 'वैजकी स्थिती',
                allergies: 'एलर्जी',
                emergencyName: 'संपर्क नांव',
                emergencyRelation: 'नातें',
                emergencyPhone: 'फोन नंबर',
                doctorName: 'डॉक्टराचें नांव',
                doctorSpecialty: 'विशेशताय',
                doctorPhone: 'डॉक्टराचो फोन',
                doctorEmail: 'डॉक्टराचो ईमेल',
                stepRegistration: 'नोंदणी',
                stepPersonalDetails: 'वैयक्तिक तपशील',
                stepComplete: 'पूर्ण',
                selectLanguage: 'भास वेंचून काडात',
                footerText: '© 2026 NEXURA. सर्व हक्क राखीव.'
            },
            
            // 15. Manipuri
            mni: {
                summaryTitle: 'রেজিস্ট্রেশন পুন্সি!',
                summarySubtitle: 'ড্যাশবোর্ডদা হৌরকপা মমাংমক নোংগী বিবরণ উবী',
                registrationDetails: 'রেজিস্ট্রেশন বিবরণ',
                personalDetails: 'অহক্ত বিবরণ',
                emergencyContacts: 'ঙাক্পগী কনটাক্ট',
                doctorDetails: 'ডাক্তরগী বিবরণ',
                medicationsList: 'তান',
                editDetails: 'বিবরণ সেম্পী',
                goToDashboard: 'ড্যাশবোর্ডদা হৌরাক্পী',
                noMedications: 'তান অমতা থম্মখি',
                notProvided: 'থম্মখি',
                none: 'কানা',
                fullName: 'মমাং নাম',
                email: 'ইমেইল',
                mobile: 'মোবাইল',
                role: 'রোল',
                productCode: 'প্রোডাক্ট কোড',
                dob: 'মমাং নুমিৎ',
                age: 'চাহি',
                sex: 'নুপা/নুপি',
                medicalConditions: 'তানগী অৱস্থা',
                allergies: 'এলার্জি',
                emergencyName: 'কনটাক্ট মিং',
                emergencyRelation: 'মরুপ',
                emergencyPhone: 'ফোন নম্বর',
                doctorName: 'ডাক্তরগী মিং',
                doctorSpecialty: 'বিশেষতা',
                doctorPhone: 'ডাক্তরগী ফোন',
                doctorEmail: 'ডাক্তরগী ইমেইল',
                stepRegistration: 'রেজিস্ট্রেশন',
                stepPersonalDetails: 'অহক্ত বিবরণ',
                stepComplete: 'পুন্সি',
                selectLanguage: 'লোন পুন্সি',
                footerText: '© 2026 NEXURA. মতম পূন্সি মখা থম্মী।'
            },
            
            // 16. Nepali
            ne: {
                summaryTitle: 'दर्ता पूर्ण!',
                summarySubtitle: 'ड्यासबोर्डमा जानुभन्दा पहिले कृपया आफ्नो विवरणको समीक्षा गर्नुहोस्',
                registrationDetails: 'दर्ता विवरण',
                personalDetails: 'व्यक्तिगत विवरण',
                emergencyContacts: 'आपतकालीन सम्पर्क',
                doctorDetails: 'डाक्टर विवरण',
                medicationsList: 'औषधिहरू',
                editDetails: 'विवरण सम्पादन गर्नुहोस्',
                goToDashboard: 'ड्यासबोर्डमा जानुहोस्',
                noMedications: 'कुनै औषधि थपिएको छैन',
                notProvided: 'प्रदान गरिएको छैन',
                none: 'कुनै पनि छैन',
                fullName: 'पूरा नाम',
                email: 'इमेल',
                mobile: 'मोबाइल',
                role: 'भूमिका',
                productCode: 'उत्पाद कोड',
                dob: 'जन्म मिति',
                age: 'उमेर',
                sex: 'लिङ्ग',
                medicalConditions: 'चिकित्सा अवस्थाहरू',
                allergies: 'एलर्जी',
                emergencyName: 'सम्पर्क नाम',
                emergencyRelation: 'सम्बन्ध',
                emergencyPhone: 'फोन नम्बर',
                doctorName: 'डाक्टरको नाम',
                doctorSpecialty: 'विशेषज्ञता',
                doctorPhone: 'डाक्टरको फोन',
                doctorEmail: 'डाक्टरको इमेल',
                stepRegistration: 'दर्ता',
                stepPersonalDetails: 'व्यक्तिगत विवरण',
                stepComplete: 'पूर्ण',
                selectLanguage: 'भाषा चयन गर्नुहोस्',
                footerText: '© 2026 NEXURA. सबै अधिकार सुरक्षित।'
            },
            
            // 17. Sanskrit
            sa: {
                summaryTitle: 'पंजीकरणं समाप्तम्!',
                summarySubtitle: 'ड्याश्बोर्डं प्रति गमनात् पूर्वं कृपया भवतः विवरणानि पर्यालोचयतु',
                registrationDetails: 'पंजीकरणविवरणम्',
                personalDetails: 'वैयक्तिकविवरणम्',
                emergencyContacts: 'आपत्कालीनसम्पर्काः',
                doctorDetails: 'वैद्यविवरणम्',
                medicationsList: 'औषधानि',
                editDetails: 'विवरणानि संशोधयतु',
                goToDashboard: 'ड्याश्बोर्डं गच्छतु',
                noMedications: 'औषधानि न योजितानि',
                notProvided: 'न प्रदत्तम्',
                none: 'नास्ति',
                fullName: 'पूर्णनाम',
                email: 'विपत्रपत्त्रम्',
                mobile: 'भ्रमणध्वनिसंख्या',
                role: 'भूमिका',
                productCode: 'उत्पादकोडः',
                dob: 'जन्मतिथिः',
                age: 'वयः',
                sex: 'लिङ्गम्',
                medicalConditions: 'चिकित्सास्थितयः',
                allergies: 'असहिष्णुताः',
                emergencyName: 'सम्पर्कनाम',
                emergencyRelation: 'सम्बन्धः',
                emergencyPhone: 'दूरवाणीसंख्या',
                doctorName: 'वैद्यस्य नाम',
                doctorSpecialty: 'विशेषज्ञता',
                doctorPhone: 'वैद्यस्य दूरवाणी',
                doctorEmail: 'वैद्यस्य विपत्रपत्त्रम्',
                stepRegistration: 'पंजीकरणम्',
                stepPersonalDetails: 'वैयक्तिकविवरणम्',
                stepComplete: 'समाप्तम्',
                selectLanguage: 'भाषां चिनुत',
                footerText: '© २०२६ NEXURA. सर्वे अधिकाराः सुरक्षिताः।'
            },
            
            // 18. Spanish
            es: {
                summaryTitle: '¡Registro Completado!',
                summarySubtitle: 'Por favor, revise sus datos antes de continuar al panel de control',
                registrationDetails: 'Detalles de Registro',
                personalDetails: 'Detalles Personales',
                emergencyContacts: 'Contactos de Emergencia',
                doctorDetails: 'Detalles del Médico',
                medicationsList: 'Medicamentos',
                editDetails: 'Editar Detalles',
                goToDashboard: 'Ir al Panel de Control',
                noMedications: 'No se agregaron medicamentos',
                notProvided: 'No proporcionado',
                none: 'Ninguno',
                fullName: 'Nombre Completo',
                email: 'Correo Electrónico',
                mobile: 'Móvil',
                role: 'Rol',
                productCode: 'Código de Producto',
                dob: 'Fecha de Nacimiento',
                age: 'Edad',
                sex: 'Sexo',
                medicalConditions: 'Condiciones Médicas',
                allergies: 'Alergias',
                emergencyName: 'Nombre del Contacto',
                emergencyRelation: 'Relación',
                emergencyPhone: 'Número de Teléfono',
                doctorName: 'Nombre del Médico',
                doctorSpecialty: 'Especialidad',
                doctorPhone: 'Teléfono del Médico',
                doctorEmail: 'Correo del Médico',
                stepRegistration: 'Registro',
                stepPersonalDetails: 'Detalles Personales',
                stepComplete: 'Completar',
                selectLanguage: 'SELECCIONAR IDIOMA',
                footerText: '© 2026 NEXURA. Todos los derechos reservados.'
            },
            
            // 19. French
            fr: {
                summaryTitle: 'Inscription Terminée !',
                summarySubtitle: 'Veuillez vérifier vos informations avant de passer au tableau de bord',
                registrationDetails: "Détails d'Inscription",
                personalDetails: 'Détails Personnels',
                emergencyContacts: "Contacts d'Urgence",
                doctorDetails: 'Détails du Médecin',
                medicationsList: 'Médicaments',
                editDetails: 'Modifier les Détails',
                goToDashboard: 'Aller au Tableau de Bord',
                noMedications: 'Aucun médicament ajouté',
                notProvided: 'Non fourni',
                none: 'Aucun',
                fullName: 'Nom Complet',
                email: 'Email',
                mobile: 'Mobile',
                role: 'Rôle',
                productCode: 'Code Produit',
                dob: 'Date de Naissance',
                age: 'Âge',
                sex: 'Sexe',
                medicalConditions: 'Conditions Médicales',
                allergies: 'Allergies',
                emergencyName: 'Nom du Contact',
                emergencyRelation: 'Relation',
                emergencyPhone: 'Numéro de Téléphone',
                doctorName: 'Nom du Médecin',
                doctorSpecialty: 'Spécialité',
                doctorPhone: 'Téléphone du Médecin',
                doctorEmail: 'Email du Médecin',
                stepRegistration: 'Inscription',
                stepPersonalDetails: 'Détails Personnels',
                stepComplete: 'Terminé',
                selectLanguage: 'SÉLECTIONNER LA LANGUE',
                footerText: '© 2026 NEXURA. Tous droits réservés.'
            },
            
            // 20. German
            de: {
                summaryTitle: 'Registrierung Abgeschlossen!',
                summarySubtitle: 'Bitte überprüfen Sie Ihre Angaben, bevor Sie zum Dashboard weitergehen',
                registrationDetails: 'Registrierungsdetails',
                personalDetails: 'Persönliche Details',
                emergencyContacts: 'Notfallkontakte',
                doctorDetails: 'Arztangaben',
                medicationsList: 'Medikamente',
                editDetails: 'Details Bearbeiten',
                goToDashboard: 'Zum Dashboard',
                noMedications: 'Keine Medikamente hinzugefügt',
                notProvided: 'Nicht angegeben',
                none: 'Keine',
                fullName: 'Vollständiger Name',
                email: 'E-Mail',
                mobile: 'Mobil',
                role: 'Rolle',
                productCode: 'Produktcode',
                dob: 'Geburtsdatum',
                age: 'Alter',
                sex: 'Geschlecht',
                medicalConditions: 'Medizinische Bedingungen',
                allergies: 'Allergien',
                emergencyName: 'Kontaktname',
                emergencyRelation: 'Beziehung',
                emergencyPhone: 'Telefonnummer',
                doctorName: 'Name des Arztes',
                doctorSpecialty: 'Fachgebiet',
                doctorPhone: 'Telefon des Arztes',
                doctorEmail: 'E-Mail des Arztes',
                stepRegistration: 'Registrierung',
                stepPersonalDetails: 'Persönliche Details',
                stepComplete: 'Abschließen',
                selectLanguage: 'SPRACHE AUSWÄHLEN',
                footerText: '© 2026 NEXURA. Alle Rechte vorbehalten.'
            },
            
            // 21. Japanese
            ja: {
                summaryTitle: '登録完了！',
                summarySubtitle: 'ダッシュボードに進む前に、詳細を確認してください',
                registrationDetails: '登録詳細',
                personalDetails: '個人詳細',
                emergencyContacts: '緊急連絡先',
                doctorDetails: '医師情報',
                medicationsList: '薬',
                editDetails: '詳細を編集',
                goToDashboard: 'ダッシュボードへ',
                noMedications: '薬が追加されていません',
                notProvided: '未提供',
                none: 'なし',
                fullName: 'フルネーム',
                email: 'メール',
                mobile: '携帯電話',
                role: 'ロール',
                productCode: '製品コード',
                dob: '生年月日',
                age: '年齢',
                sex: '性別',
                medicalConditions: '病状',
                allergies: 'アレルギー',
                emergencyName: '連絡先名',
                emergencyRelation: '関係',
                emergencyPhone: '電話番号',
                doctorName: '医師名',
                doctorSpecialty: '専門分野',
                doctorPhone: '医師の電話',
                doctorEmail: '医師のメール',
                stepRegistration: '登録',
                stepPersonalDetails: '個人詳細',
                stepComplete: '完了',
                selectLanguage: '言語を選択',
                footerText: '© 2026 NEXURA. 全著作権所有。'
            },
            
            // 22. Chinese
            zh: {
                summaryTitle: '注册完成！',
                summarySubtitle: '请查看您的详细信息，然后再进入仪表板',
                registrationDetails: '注册详情',
                personalDetails: '个人信息',
                emergencyContacts: '紧急联系人',
                doctorDetails: '医生信息',
                medicationsList: '药物',
                editDetails: '编辑详情',
                goToDashboard: '前往仪表板',
                noMedications: '尚未添加药物',
                notProvided: '未提供',
                none: '无',
                fullName: '全名',
                email: '电子邮件',
                mobile: '手机',
                role: '角色',
                productCode: '产品代码',
                dob: '出生日期',
                age: '年龄',
                sex: '性别',
                medicalConditions: '医疗状况',
                allergies: '过敏',
                emergencyName: '联系人姓名',
                emergencyRelation: '关系',
                emergencyPhone: '电话号码',
                doctorName: '医生姓名',
                doctorSpecialty: '专业',
                doctorPhone: '医生电话',
                doctorEmail: '医生邮箱',
                stepRegistration: '注册',
                stepPersonalDetails: '个人信息',
                stepComplete: '完成',
                selectLanguage: '选择语言',
                footerText: '© 2026 NEXURA. 保留所有权利。'
            }
        };
    }

    // ==============================================
    // TRANSLATION METHODS
    // ==============================================
    translatePage() {
        const currentLang = localStorage.getItem('nexura_language') || 'en';
        const translations = this.getTranslations();
        const langData = translations[currentLang] || translations.en;

        // Translate all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });

        // Translate placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                element.placeholder = langData[key];
            }
        });
    }

    // ==============================================
    // GET DATA FROM VARIOUS STORAGE LOCATIONS
    // ==============================================
    getFullNameFromStorage() {
        const sources = [
            () => {
                const profile = localStorage.getItem('nexura_profile_data');
                if (profile) {
                    try {
                        const data = JSON.parse(profile);
                        return data.fullName;
                    } catch (e) {}
                }
                return null;
            },
            () => {
                const userData = localStorage.getItem('nexura_user_data');
                if (userData) {
                    try {
                        const data = JSON.parse(userData);
                        return data.fullName;
                    } catch (e) {}
                }
                return null;
            },
            () => {
                const currentUser = localStorage.getItem('nexura_current_user');
                if (currentUser) {
                    try {
                        const data = JSON.parse(currentUser);
                        return data.fullName;
                    } catch (e) {}
                }
                return null;
            },
            () => localStorage.getItem('nexura_user_fullname'),
            () => localStorage.getItem('nexura_fullname')
        ];

        for (const source of sources) {
            const value = source();
            if (value) return value;
        }
        return 'Not provided';
    }

    getEmailFromStorage() {
        const sources = [
            () => {
                const profile = localStorage.getItem('nexura_profile_data');
                if (profile) {
                    try {
                        const data = JSON.parse(profile);
                        return data.email;
                    } catch (e) {}
                }
                return null;
            },
            () => {
                const userData = localStorage.getItem('nexura_user_data');
                if (userData) {
                    try {
                        const data = JSON.parse(userData);
                        return data.email;
                    } catch (e) {}
                }
                return null;
            },
            () => {
                const currentUser = localStorage.getItem('nexura_current_user');
                if (currentUser) {
                    try {
                        const data = JSON.parse(currentUser);
                        return data.email;
                    } catch (e) {}
                }
                return null;
            },
            () => localStorage.getItem('nexura_user_email'),
            () => localStorage.getItem('nexura_email')
        ];

        for (const source of sources) {
            const value = source();
            if (value) return value;
        }
        return 'Not provided';
    }

    getMobileFromStorage() {
        const sources = [
            () => {
                const profile = localStorage.getItem('nexura_profile_data');
                if (profile) {
                    try {
                        const data = JSON.parse(profile);
                        return data.mobile;
                    } catch (e) {}
                }
                return null;
            },
            () => {
                const userData = localStorage.getItem('nexura_user_data');
                if (userData) {
                    try {
                        const data = JSON.parse(userData);
                        return data.mobile;
                    } catch (e) {}
                }
                return null;
            },
            () => {
                const currentUser = localStorage.getItem('nexura_current_user');
                if (currentUser) {
                    try {
                        const data = JSON.parse(currentUser);
                        return data.mobile;
                    } catch (e) {}
                }
                return null;
            },
            () => localStorage.getItem('nexura_user_mobile'),
            () => localStorage.getItem('nexura_mobile')
        ];

        for (const source of sources) {
            const value = source();
            if (value) return value;
        }
        return 'Not provided';
    }

    // ==============================================
    // LOAD DATA FROM LOCALSTORAGE
    // ==============================================
    loadData() {
        let data = null;
        
        const profileData = localStorage.getItem('nexura_profile_data');
        if (profileData) {
            try {
                data = JSON.parse(profileData);
                console.log('Loaded from profile data:', data);
            } catch (e) {
                console.error('Error parsing profile data:', e);
            }
        }

        if (!data) {
            const userData = localStorage.getItem('nexura_user_data');
            if (userData) {
                try {
                    data = JSON.parse(userData);
                    console.log('Loaded from user data:', data);
                } catch (e) {
                    console.error('Error parsing user data:', e);
                }
            }
        }

        if (!data) {
            const currentUser = localStorage.getItem('nexura_current_user');
            if (currentUser) {
                try {
                    data = JSON.parse(currentUser);
                    console.log('Loaded from current user:', data);
                } catch (e) {
                    console.error('Error parsing current user data:', e);
                }
            }
        }

        if (data) {
            this.displayData(data);
        } else {
            const fullName = this.getFullNameFromStorage();
            const email = this.getEmailFromStorage();
            const mobile = this.getMobileFromStorage();
            
            if (fullName !== 'Not provided' || email !== 'Not provided' || mobile !== 'Not provided') {
                data = {
                    fullName: fullName,
                    email: email,
                    mobile: mobile,
                    role: localStorage.getItem('nexura_user_role') || 'Patient',
                    productCode: localStorage.getItem('nexura_product_code') || 'NEX123',
                    dob: localStorage.getItem('nexura_user_dob') || 'Not provided',
                    age: localStorage.getItem('nexura_user_age') || 'Not provided',
                    sex: localStorage.getItem('nexura_user_sex') || 'Not provided',
                    medicalConditions: [],
                    allergies: [],
                    emergencyContact: { name: '', relation: '', phone: '' },
                    doctor: { name: '', specialty: '', phone: '', email: '' },
                    medications: []
                };
                this.displayData(data);
            } else {
                console.warn('No data found in localStorage');
                this.showEmptyState();
            }
        }
    }

    displayData(data) {
        const fullName = data.fullName || this.getFullNameFromStorage() || 'Not provided';
        const email = data.email || this.getEmailFromStorage() || 'Not provided';
        const mobile = data.mobile || this.getMobileFromStorage() || 'Not provided';
        const role = data.role || localStorage.getItem('nexura_user_role') || 'Patient';
        const productCode = data.productCode || localStorage.getItem('nexura_product_code') || 'NEX123';

        document.getElementById('summaryFullName').textContent = fullName;
        document.getElementById('summaryEmail').textContent = email;
        document.getElementById('summaryMobile').textContent = mobile;
        document.getElementById('summaryRole').textContent = role;
        document.getElementById('summaryProductCode').textContent = productCode;

        document.getElementById('summaryDob').textContent = data.dob || 'Not provided';
        document.getElementById('summaryAge').textContent = data.age || 'Not provided';
        
        const sexMap = {
            'male': 'Male',
            'female': 'Female',
            'other': 'Other',
            'prefer-not': 'Prefer not to say'
        };
        document.getElementById('summarySex').textContent = data.sex ? (sexMap[data.sex] || data.sex) : 'Not provided';

        const conditionsContainer = document.getElementById('summaryConditions');
        if (data.medicalConditions && data.medicalConditions.length > 0) {
            conditionsContainer.innerHTML = data.medicalConditions.map(c => 
                `<span class="tag">${c}</span>`
            ).join('');
        } else {
            conditionsContainer.textContent = 'None';
            conditionsContainer.style.color = '#adb5bd';
        }

        const allergiesContainer = document.getElementById('summaryAllergies');
        if (data.allergies && data.allergies.length > 0) {
            allergiesContainer.innerHTML = data.allergies.map(a => 
                `<span class="tag">${a}</span>`
            ).join('');
        } else {
            allergiesContainer.textContent = 'None';
            allergiesContainer.style.color = '#adb5bd';
        }

        if (data.emergencyContact) {
            document.getElementById('summaryEmergencyName').textContent = data.emergencyContact.name || 'Not provided';
            document.getElementById('summaryEmergencyRelation').textContent = data.emergencyContact.relation || 'Not provided';
            document.getElementById('summaryEmergencyPhone').textContent = data.emergencyContact.phone || 'Not provided';
        }

        if (data.doctor) {
            document.getElementById('summaryDoctorName').textContent = data.doctor.name || 'Not provided';
            document.getElementById('summaryDoctorSpecialty').textContent = data.doctor.specialty || 'Not provided';
            document.getElementById('summaryDoctorPhone').textContent = data.doctor.phone || 'Not provided';
            document.getElementById('summaryDoctorEmail').textContent = data.doctor.email || 'Not provided';
        }

        const medicationsContainer = document.getElementById('summaryMedications');
        if (data.medications && data.medications.length > 0) {
            let medHtml = '<div class="medications-list">';
            data.medications.forEach(med => {
                medHtml += `
                    <span class="med-item">
                        ${med.name}
                        <span class="med-time">• ${med.time}</span>
                        ${med.dosage ? `<span class="med-dosage">• ${med.dosage}</span>` : ''}
                    </span>
                `;
            });
            medHtml += '</div>';
            medicationsContainer.innerHTML = medHtml;
        } else {
            medicationsContainer.innerHTML = '<span class="no-data">No medications added</span>';
        }
    }

    showEmptyState() {
        const fields = [
            'summaryFullName', 'summaryEmail', 'summaryMobile', 'summaryRole', 'summaryProductCode',
            'summaryDob', 'summaryAge', 'summarySex',
            'summaryEmergencyName', 'summaryEmergencyRelation', 'summaryEmergencyPhone',
            'summaryDoctorName', 'summaryDoctorSpecialty', 'summaryDoctorPhone', 'summaryDoctorEmail'
        ];
        
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = 'Not provided';
        });

        document.getElementById('summaryConditions').textContent = 'None';
        document.getElementById('summaryConditions').style.color = '#adb5bd';
        document.getElementById('summaryAllergies').textContent = 'None';
        document.getElementById('summaryAllergies').style.color = '#adb5bd';
        document.getElementById('summaryMedications').innerHTML = '<span class="no-data">No medications added</span>';
    }

    populateLanguageDropdown() {
        const select = document.getElementById('languageSelect');
        if (!select) return;

        // ============================================================
        // 22 LANGUAGES (Same as other pages)
        // ============================================================
        const languages = [
            // 13 INDIAN LANGUAGES
            { code: 'en', name: 'English' },
            { code: 'hi', name: 'हिंदी' },
            { code: 'bn', name: 'বাংলা' },
            { code: 'te', name: 'తెలుగు' },
            { code: 'mr', name: 'मराठी' },
            { code: 'ta', name: 'தமிழ்' },
            { code: 'gu', name: 'ગુજરાતી' },
            { code: 'kn', name: 'ಕನ್ನಡ' },
            { code: 'ml', name: 'മലയാളം' },
            { code: 'or', name: 'ଓଡ଼ିଆ' },
            { code: 'pa', name: 'ਪੰਜਾਬੀ' },
            { code: 'as', name: 'অসমীয়া' },
            { code: 'ur', name: 'اردو' },
            { code: 'kok', name: 'कोंकणी' },
            { code: 'mni', name: 'মৈতৈলোন্' },
            { code: 'ne', name: 'नेपाली' },
            { code: 'sa', name: 'संस्कृतम्' },
            
            // 6 INTERNATIONAL LANGUAGES
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
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                localStorage.setItem('nexura_language', lang);
                this.translatePage();
            });
        }

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        document.getElementById('editBtn')?.addEventListener('click', () => {
            window.location.href = 'personal-details.html';
        });

        document.getElementById('dashboardBtn')?.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    toggleTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle?.querySelector('i');
        
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('nexura_theme', 'light');
            this.currentTheme = 'light';
            if (icon) {
                icon.className = 'fas fa-moon';
            }
        } else {
            document.body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('nexura_theme', 'dark');
            this.currentTheme = 'dark';
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }
    }

    applyTheme(theme) {
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle?.querySelector('i');
        
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.removeAttribute('data-theme');
            if (icon) {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new SummaryApp();
    window.summaryApp = app;
});