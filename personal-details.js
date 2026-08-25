// js/personal-details.js

// ================================================================
// COMPLETE TRANSLATIONS FOR PERSONAL DETAILS PAGE
// ================================================================

const PERSONAL_DETAILS_TRANSLATIONS = {
    en: {
        // Top Bar
        selectLanguage: 'SELECT LANGUAGE',
        
        // Progress Steps
        stepRegistration: 'Registration',
        stepPersonalDetails: 'Personal Details',
        stepComplete: 'Complete',
        
        // Header
        personalDetailsTitle: 'Personal Details',
        personalDetailsSubtitle: 'Tell us more about yourself to personalize your medication experience',
        
        // Personal Info
        personalInfo: 'Personal Information',
        fullName: 'Full Name',
        dob: 'Date of Birth',
        age: 'Age',
        sex: 'Sex',
        selectSex: 'Select Sex',
        male: 'Male',
        female: 'Female',
        other: 'Other',
        preferNot: 'Prefer not to say',
        fullNamePlaceholder: 'Enter your full name',
        agePlaceholder: 'Enter your age',
        
        // Medical Conditions
        medicalConditions: 'Medical Conditions',
        selectConditions: 'Select your medical conditions',
        searchCondition: 'Search or type condition...',
        noConditionsSelected: 'No conditions selected',
        
        // Allergies
        allergies: 'Allergies',
        selectAllergies: 'Select your allergies',
        searchAllergy: 'Search or type allergy...',
        noAllergiesSelected: 'No allergies selected',
        
        // Medication Schedule - UPDATED WITH DAYS
        medicationSchedule: 'Medication Schedule',
        addMedication: 'Add your medications',
        medicationName: 'Type medication name...',
        dosage: 'Dosage (e.g., 500mg)',
        noMedications: 'No medications added yet',
        allDays: 'All Days',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        noDosage: 'No dosage specified',
        pleaseEnterMedication: 'Please enter a medication name',
        pleaseSelectTime: 'Please select a time for the medication',
        medicationExists: 'This medication is already scheduled at this time on this day',
        medicationAdded: 'Medication added successfully!',
        
        // Emergency Contacts
        emergencyContacts: 'Emergency Contacts',
        emergencyName: 'Contact Name',
        emergencyRelation: 'Relationship',
        emergencyPhone: 'Phone Number',
        emergencyNamePlaceholder: 'Enter emergency contact name',
        emergencyRelationPlaceholder: 'e.g., Spouse, Parent, Sibling',
        emergencyPhonePlaceholder: 'Enter 10-digit mobile number',
        
        // Doctor Details
        doctorDetails: 'Doctor Details',
        doctorName: "Doctor's Name",
        doctorSpecialty: 'Specialty',
        doctorPhone: "Doctor's Phone",
        doctorEmail: "Doctor's Email",
        doctorNamePlaceholder: "Enter doctor's name",
        doctorSpecialtyPlaceholder: 'e.g., Cardiologist, Neurologist',
        doctorPhonePlaceholder: "Enter doctor's phone number",
        doctorEmailPlaceholder: "Enter doctor's email",
        
        // Buttons
        saveAndContinue: 'Save & Continue',
        backToRegistration: 'Back to Registration',
        
        // Validation Messages
        pleaseEnterFullName: 'Please enter your full name',
        pleaseSelectDob: 'Please select your date of birth',
        pleaseEnterAge: 'Please enter your age',
        pleaseSelectSex: 'Please select your sex',
        pleaseEnterEmergencyName: 'Please enter an emergency contact name',
        pleaseEnterEmergencyPhone: 'Please enter emergency contact phone number',
        validPhoneRequired: 'Please enter a valid 10-digit phone number',
        savedSuccessfully: 'Personal details saved successfully!',
        redirecting: 'Redirecting...',
        
        // Footer
        footerText: '© 2026 NEXURA. All rights reserved.'
    },
    hi: {
        selectLanguage: 'भाषा चुनें',
        stepRegistration: 'पंजीकरण',
        stepPersonalDetails: 'व्यक्तिगत विवरण',
        stepComplete: 'पूर्ण',
        personalDetailsTitle: 'व्यक्तिगत विवरण',
        personalDetailsSubtitle: 'अपनी दवा के अनुभव को निजीकृत करने के लिए अपने बारे में और बताएं',
        personalInfo: 'व्यक्तिगत जानकारी',
        fullName: 'पूरा नाम',
        dob: 'जन्म तिथि',
        age: 'आयु',
        sex: 'लिंग',
        selectSex: 'लिंग चुनें',
        male: 'पुरुष',
        female: 'महिला',
        other: 'अन्य',
        preferNot: 'नहीं बताना चाहते',
        fullNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
        agePlaceholder: 'अपनी आयु दर्ज करें',
        medicalConditions: 'चिकित्सीय स्थितियाँ',
        selectConditions: 'अपनी चिकित्सीय स्थितियाँ चुनें',
        searchCondition: 'स्थिति खोजें या टाइप करें...',
        noConditionsSelected: 'कोई स्थिति नहीं चुनी गई',
        allergies: 'एलर्जी',
        selectAllergies: 'अपनी एलर्जी चुनें',
        searchAllergy: 'एलर्जी खोजें या टाइप करें...',
        noAllergiesSelected: 'कोई एलर्जी नहीं चुनी गई',
        medicationSchedule: 'दवा अनुसूची',
        addMedication: 'अपनी दवाएं जोड़ें',
        medicationName: 'दवा का नाम टाइप करें...',
        dosage: 'खुराक (जैसे, 500mg)',
        noMedications: 'अभी कोई दवा नहीं जोड़ी गई',
        allDays: 'सभी दिन',
        monday: 'सोमवार',
        tuesday: 'मंगलवार',
        wednesday: 'बुधवार',
        thursday: 'गुरुवार',
        friday: 'शुक्रवार',
        saturday: 'शनिवार',
        sunday: 'रविवार',
        noDosage: 'कोई खुराक निर्दिष्ट नहीं',
        pleaseEnterMedication: 'कृपया दवा का नाम दर्ज करें',
        pleaseSelectTime: 'कृपया दवा के लिए समय चुनें',
        medicationExists: 'इस दिन इस समय पर यह दवा पहले से निर्धारित है',
        medicationAdded: 'दवा सफलतापूर्वक जोड़ी गई!',
        emergencyContacts: 'आपातकालीन संपर्क',
        emergencyName: 'संपर्क नाम',
        emergencyRelation: 'संबंध',
        emergencyPhone: 'फोन नंबर',
        emergencyNamePlaceholder: 'आपातकालीन संपर्क नाम दर्ज करें',
        emergencyRelationPlaceholder: 'जैसे, पति/पत्नी, माता-पिता, भाई-बहन',
        emergencyPhonePlaceholder: '10 अंकों का मोबाइल नंबर दर्ज करें',
        doctorDetails: 'डॉक्टर का विवरण',
        doctorName: 'डॉक्टर का नाम',
        doctorSpecialty: 'विशेषज्ञता',
        doctorPhone: 'डॉक्टर का फोन',
        doctorEmail: 'डॉक्टर का ईमेल',
        doctorNamePlaceholder: 'डॉक्टर का नाम दर्ज करें',
        doctorSpecialtyPlaceholder: 'जैसे, हृदय रोग विशेषज्ञ, न्यूरोलॉजिस्ट',
        doctorPhonePlaceholder: 'डॉक्टर का फोन नंबर दर्ज करें',
        doctorEmailPlaceholder: 'डॉक्टर का ईमेल दर्ज करें',
        saveAndContinue: 'सहेजें और जारी रखें',
        backToRegistration: 'पंजीकरण पर वापस जाएं',
        pleaseEnterFullName: 'कृपया अपना पूरा नाम दर्ज करें',
        pleaseSelectDob: 'कृपया अपनी जन्म तिथि चुनें',
        pleaseEnterAge: 'कृपया अपनी आयु दर्ज करें',
        pleaseSelectSex: 'कृपया अपना लिंग चुनें',
        pleaseEnterEmergencyName: 'कृपया आपातकालीन संपर्क नाम दर्ज करें',
        pleaseEnterEmergencyPhone: 'कृपया आपातकालीन संपर्क फोन नंबर दर्ज करें',
        validPhoneRequired: 'कृपया 10 अंकों का वैध फोन नंबर दर्ज करें',
        savedSuccessfully: 'व्यक्तिगत विवरण सफलतापूर्वक सहेजे गए!',
        redirecting: 'पुनर्निर्देशित...',
        footerText: '© 2026 NEXURA. सर्वाधिकार सुरक्षित।'
    },
    bn: {
        selectLanguage: 'ভাষা নির্বাচন করুন',
        stepRegistration: 'নিবন্ধন',
        stepPersonalDetails: 'ব্যক্তিগত বিবরণ',
        stepComplete: 'সম্পূর্ণ',
        personalDetailsTitle: 'ব্যক্তিগত বিবরণ',
        personalDetailsSubtitle: 'আপনার ওষুধের অভিজ্ঞতা ব্যক্তিগতকৃত করতে নিজের সম্পর্কে আরও বলুন',
        personalInfo: 'ব্যক্তিগত তথ্য',
        fullName: 'পুরো নাম',
        dob: 'জন্ম তারিখ',
        age: 'বয়স',
        sex: 'লিঙ্গ',
        selectSex: 'লিঙ্গ নির্বাচন করুন',
        male: 'পুরুষ',
        female: 'মহিলা',
        other: 'অন্যান্য',
        preferNot: 'বলতে চাই না',
        fullNamePlaceholder: 'আপনার পুরো নাম লিখুন',
        agePlaceholder: 'আপনার বয়স লিখুন',
        medicalConditions: 'চিকিৎসা শর্ত',
        selectConditions: 'আপনার চিকিৎসা শর্ত নির্বাচন করুন',
        searchCondition: 'শর্ত অনুসন্ধান করুন বা টাইপ করুন...',
        noConditionsSelected: 'কোন শর্ত নির্বাচন করা হয়নি',
        allergies: 'অ্যালার্জি',
        selectAllergies: 'আপনার অ্যালার্জি নির্বাচন করুন',
        searchAllergy: 'অ্যালার্জি অনুসন্ধান করুন বা টাইপ করুন...',
        noAllergiesSelected: 'কোন অ্যালার্জি নির্বাচন করা হয়নি',
        medicationSchedule: 'ঔষধের সময়সূচী',
        addMedication: 'আপনার ওষুধ যোগ করুন',
        medicationName: 'ঔষধের নাম টাইপ করুন...',
        dosage: 'ডোজ (যেমন, 500mg)',
        noMedications: 'এখনো কোনো ওষুধ যোগ করা হয়নি',
        allDays: 'সব দিন',
        monday: 'সোমবার',
        tuesday: 'মঙ্গলবার',
        wednesday: 'বুধবার',
        thursday: 'বৃহস্পতিবার',
        friday: 'শুক্রবার',
        saturday: 'শনিবার',
        sunday: 'রবিবার',
        noDosage: 'কোন ডোজ নির্দিষ্ট করা হয়নি',
        pleaseEnterMedication: 'অনুগ্রহ করে একটি ঔষধের নাম লিখুন',
        pleaseSelectTime: 'অনুগ্রহ করে ঔষধের জন্য একটি সময় নির্বাচন করুন',
        medicationExists: 'এই দিনে এই সময়ে এই ঔষধটি ইতিমধ্যে নির্ধারিত আছে',
        medicationAdded: 'ঔষধ সফলভাবে যোগ করা হয়েছে!',
        emergencyContacts: 'জরুরি যোগাযোগ',
        emergencyName: 'যোগাযোগের নাম',
        emergencyRelation: 'সম্পর্ক',
        emergencyPhone: 'ফোন নম্বর',
        emergencyNamePlaceholder: 'জরুরি যোগাযোগের নাম লিখুন',
        emergencyRelationPlaceholder: 'যেমন, স্বামী/স্ত্রী, পিতা-মাতা, ভাই-বোন',
        emergencyPhonePlaceholder: '১০ অঙ্কের মোবাইল নম্বর লিখুন',
        doctorDetails: 'ডাক্তারের বিবরণ',
        doctorName: 'ডাক্তারের নাম',
        doctorSpecialty: 'বিশেষত্ব',
        doctorPhone: 'ডাক্তারের ফোন',
        doctorEmail: 'ডাক্তারের ইমেইল',
        doctorNamePlaceholder: 'ডাক্তারের নাম লিখুন',
        doctorSpecialtyPlaceholder: 'যেমন, কার্ডিওলজিস্ট, নিউরোলজিস্ট',
        doctorPhonePlaceholder: 'ডাক্তারের ফোন নম্বর লিখুন',
        doctorEmailPlaceholder: 'ডাক্তারের ইমেইল লিখুন',
        saveAndContinue: 'সংরক্ষণ করুন এবং চালিয়ে যান',
        backToRegistration: 'নিবন্ধনে ফিরে যান',
        pleaseEnterFullName: 'অনুগ্রহ করে আপনার পুরো নাম লিখুন',
        pleaseSelectDob: 'অনুগ্রহ করে আপনার জন্ম তারিখ নির্বাচন করুন',
        pleaseEnterAge: 'অনুগ্রহ করে আপনার বয়স লিখুন',
        pleaseSelectSex: 'অনুগ্রহ করে আপনার লিঙ্গ নির্বাচন করুন',
        pleaseEnterEmergencyName: 'অনুগ্রহ করে একটি জরুরি যোগাযোগের নাম লিখুন',
        pleaseEnterEmergencyPhone: 'অনুগ্রহ করে জরুরি যোগাযোগের ফোন নম্বর লিখুন',
        validPhoneRequired: 'অনুগ্রহ করে ১০ অঙ্কের বৈধ ফোন নম্বর লিখুন',
        savedSuccessfully: 'ব্যক্তিগত বিবরণ সফলভাবে সংরক্ষণ করা হয়েছে!',
        redirecting: 'পুনর্নির্দেশিত...',
        footerText: '© 2026 NEXURA. সর্বস্বত্ব সংরক্ষিত।'
    },
    te: {
        selectLanguage: 'భాషను ఎంచుకోండి',
        stepRegistration: 'నమోదు',
        stepPersonalDetails: 'వ్యక్తిగత వివరాలు',
        stepComplete: 'పూర్తయింది',
        personalDetailsTitle: 'వ్యక్తిగత వివరాలు',
        personalDetailsSubtitle: 'మీ మందుల అనుభవాన్ని వ్యక్తిగతీకరించడానికి మీ గురించి మరింత చెప్పండి',
        personalInfo: 'వ్యక్తిగత సమాచారం',
        fullName: 'పూర్తి పేరు',
        dob: 'పుట్టిన తేదీ',
        age: 'వయస్సు',
        sex: 'లింగం',
        selectSex: 'లింగాన్ని ఎంచుకోండి',
        male: 'పురుషుడు',
        female: 'స్త్రీ',
        other: 'ఇతర',
        preferNot: 'చెప్పకూడదు',
        fullNamePlaceholder: 'మీ పూర్తి పేరు నమోదు చేయండి',
        agePlaceholder: 'మీ వయస్సు నమోదు చేయండి',
        medicalConditions: 'వైద్య పరిస్థితులు',
        selectConditions: 'మీ వైద్య పరిస్థితులను ఎంచుకోండి',
        searchCondition: 'పరిస్థితి కోసం శోధించండి లేదా టైప్ చేయండి...',
        noConditionsSelected: 'ఎటువంటి పరిస్థితులు ఎంచుకోలేదు',
        allergies: 'అలెర్జీలు',
        selectAllergies: 'మీ అలెర్జీలను ఎంచుకోండి',
        searchAllergy: 'అలెర్జీ కోసం శోధించండి లేదా టైప్ చేయండి...',
        noAllergiesSelected: 'ఎటువంటి అలెర్జీలు ఎంచుకోలేదు',
        medicationSchedule: 'మందుల షెడ్యూల్',
        addMedication: 'మీ మందులను జోడించండి',
        medicationName: 'మందు పేరు టైప్ చేయండి...',
        dosage: 'మోతాదు (ఉదా., 500mg)',
        noMedications: 'ఇంకా మందులు జోడించలేదు',
        allDays: 'అన్ని రోజులు',
        monday: 'సోమవారం',
        tuesday: 'మంగళవారం',
        wednesday: 'బుధవారం',
        thursday: 'గురువారం',
        friday: 'శుక్రవారం',
        saturday: 'శనివారం',
        sunday: 'ఆదివారం',
        noDosage: 'మోతాదు ఇవ్వలేదు',
        pleaseEnterMedication: 'దయచేసి మందు పేరు నమోదు చేయండి',
        pleaseSelectTime: 'దయచేసి మందు కోసం సమయం ఎంచుకోండి',
        medicationExists: 'ఈ రోజు ఈ సమయంలో ఈ మందు ఇప్పటికే షెడ్యూల్ చేయబడింది',
        medicationAdded: 'మందు విజయవంతంగా జోడించబడింది!',
        emergencyContacts: 'అత్యవసర పరిచయాలు',
        emergencyName: 'పరిచయం పేరు',
        emergencyRelation: 'సంబంధం',
        emergencyPhone: 'ఫోన్ నంబర్',
        emergencyNamePlaceholder: 'అత్యవసర పరిచయం పేరు నమోదు చేయండి',
        emergencyRelationPlaceholder: 'ఉదా., భార్య/భర్త, తల్లిదండ్రులు, సోదరులు',
        emergencyPhonePlaceholder: '10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి',
        doctorDetails: 'డాక్టర్ వివరాలు',
        doctorName: 'డాక్టర్ పేరు',
        doctorSpecialty: 'ప్రత్యేకత',
        doctorPhone: 'డాక్టర్ ఫోన్',
        doctorEmail: 'డాక్టర్ ఇమెయిల్',
        doctorNamePlaceholder: 'డాక్టర్ పేరు నమోదు చేయండి',
        doctorSpecialtyPlaceholder: 'ఉదా., కార్డియాలజిస్ట్, న్యూరాలజిస్ట్',
        doctorPhonePlaceholder: 'డాక్టర్ ఫోన్ నంబర్ నమోదు చేయండి',
        doctorEmailPlaceholder: 'డాక్టర్ ఇమెయిల్ నమోదు చేయండి',
        saveAndContinue: 'సేవ్ చేసి కొనసాగించండి',
        backToRegistration: 'నమోదుకు తిరిగి వెళ్ళు',
        pleaseEnterFullName: 'దయచేసి మీ పూర్తి పేరు నమోదు చేయండి',
        pleaseSelectDob: 'దయచేసి మీ పుట్టిన తేదీని ఎంచుకోండి',
        pleaseEnterAge: 'దయచేసి మీ వయస్సు నమోదు చేయండి',
        pleaseSelectSex: 'దయచేసి మీ లింగాన్ని ఎంచుకోండి',
        pleaseEnterEmergencyName: 'దయచేసి అత్యవసర పరిచయం పేరు నమోదు చేయండి',
        pleaseEnterEmergencyPhone: 'దయచేసి అత్యవసర పరిచయం ఫోన్ నంబర్ నమోదు చేయండి',
        validPhoneRequired: 'దయచేసి 10 అంకెల చెల్లుబాటు అయ్యే ఫోన్ నంబర్ నమోదు చేయండి',
        savedSuccessfully: 'వ్యక్తిగత వివరాలు విజయవంతంగా సేవ్ చేయబడ్డాయి!',
        redirecting: 'పునఃపంపుతోంది...',
        footerText: '© 2026 NEXURA. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.'
    },
    mr: {
        selectLanguage: 'भाषा निवडा',
        stepRegistration: 'नोंदणी',
        stepPersonalDetails: 'वैयक्तिक तपशील',
        stepComplete: 'पूर्ण',
        personalDetailsTitle: 'वैयक्तिक तपशील',
        personalDetailsSubtitle: 'तुमचा औषध अनुभव वैयक्तिकृत करण्यासाठी स्वतःबद्दल अधिक सांगा',
        personalInfo: 'वैयक्तिक माहिती',
        fullName: 'पूर्ण नाव',
        dob: 'जन्म तारीख',
        age: 'वय',
        sex: 'लिंग',
        selectSex: 'लिंग निवडा',
        male: 'पुरुष',
        female: 'स्त्री',
        other: 'इतर',
        preferNot: 'सांगू इच्छित नाही',
        fullNamePlaceholder: 'तुमचे पूर्ण नाव प्रविष्ट करा',
        agePlaceholder: 'तुमचे वय प्रविष्ट करा',
        medicalConditions: 'वैद्यकीय स्थिती',
        selectConditions: 'तुमच्या वैद्यकीय स्थिती निवडा',
        searchCondition: 'स्थिती शोधा किंवा टाइप करा...',
        noConditionsSelected: 'कोणतीही स्थिती निवडलेली नाही',
        allergies: 'अ‍ॅलर्जी',
        selectAllergies: 'तुमच्या अ‍ॅलर्जी निवडा',
        searchAllergy: 'अ‍ॅलर्जी शोधा किंवा टाइप करा...',
        noAllergiesSelected: 'कोणतीही अ‍ॅलर्जी निवडलेली नाही',
        medicationSchedule: 'औषध वेळापत्रक',
        addMedication: 'तुमची औषधे जोडा',
        medicationName: 'औषधाचे नाव टाइप करा...',
        dosage: 'डोस (उदा., 500mg)',
        noMedications: 'अजून औषधे जोडलेली नाहीत',
        allDays: 'सर्व दिवस',
        monday: 'सोमवार',
        tuesday: 'मंगळवार',
        wednesday: 'बुधवार',
        thursday: 'गुरुवार',
        friday: 'शुक्रवार',
        saturday: 'शनिवार',
        sunday: 'रविवार',
        noDosage: 'डोस निर्दिष्ट केलेला नाही',
        pleaseEnterMedication: 'कृपया औषधाचे नाव प्रविष्ट करा',
        pleaseSelectTime: 'कृपया औषधासाठी वेळ निवडा',
        medicationExists: 'या दिवशी या वेळी हे औषध आधीच निर्धारित आहे',
        medicationAdded: 'औषध यशस्वीरित्या जोडले गेले!',
        emergencyContacts: 'आपत्कालीन संपर्क',
        emergencyName: 'संपर्क नाव',
        emergencyRelation: 'नाते',
        emergencyPhone: 'फोन नंबर',
        emergencyNamePlaceholder: 'आपत्कालीन संपर्क नाव प्रविष्ट करा',
        emergencyRelationPlaceholder: 'जसे, पती/पत्नी, पालक, भावंड',
        emergencyPhonePlaceholder: '१० अंकी मोबाइल नंबर प्रविष्ट करा',
        doctorDetails: 'डॉक्टर तपशील',
        doctorName: 'डॉक्टरचे नाव',
        doctorSpecialty: 'विशेषज्ञता',
        doctorPhone: 'डॉक्टरचा फोन',
        doctorEmail: 'डॉक्टरचा ईमेल',
        doctorNamePlaceholder: 'डॉक्टरचे नाव प्रविष्ट करा',
        doctorSpecialtyPlaceholder: 'जसे, हृदयरोग तज्ञ, न्यूरोलॉजिस्ट',
        doctorPhonePlaceholder: 'डॉक्टरचा फोन नंबर प्रविष्ट करा',
        doctorEmailPlaceholder: 'डॉक्टरचा ईमेल प्रविष्ट करा',
        saveAndContinue: 'जतन करा आणि पुढे जा',
        backToRegistration: 'नोंदणीवर परत',
        pleaseEnterFullName: 'कृपया तुमचे पूर्ण नाव प्रविष्ट करा',
        pleaseSelectDob: 'कृपया तुमची जन्म तारीख निवडा',
        pleaseEnterAge: 'कृपया तुमचे वय प्रविष्ट करा',
        pleaseSelectSex: 'कृपया तुमचे लिंग निवडा',
        pleaseEnterEmergencyName: 'कृपया आपत्कालीन संपर्क नाव प्रविष्ट करा',
        pleaseEnterEmergencyPhone: 'कृपया आपत्कालीन संपर्क फोन नंबर प्रविष्ट करा',
        validPhoneRequired: 'कृपया १० अंकी वैध फोन नंबर प्रविष्ट करा',
        savedSuccessfully: 'वैयक्तिक तपशील यशस्वीरित्या जतन केले!',
        redirecting: 'पुनर्निर्देशित...',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.'
    },
    ta: {
        selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
        stepRegistration: 'பதிவு',
        stepPersonalDetails: 'தனிப்பட்ட விவரங்கள்',
        stepComplete: 'முழுமையானது',
        personalDetailsTitle: 'தனிப்பட்ட விவரங்கள்',
        personalDetailsSubtitle: 'உங்கள் மருந்து அனுபவத்தை தனிப்பயனாக்க உங்களைப் பற்றி மேலும் கூறுங்கள்',
        personalInfo: 'தனிப்பட்ட தகவல்',
        fullName: 'முழு பெயர்',
        dob: 'பிறந்த தேதி',
        age: 'வயது',
        sex: 'பாலினம்',
        selectSex: 'பாலினத்தை தேர்ந்தெடுக்கவும்',
        male: 'ஆண்',
        female: 'பெண்',
        other: 'மற்றவை',
        preferNot: 'கூற விரும்பவில்லை',
        fullNamePlaceholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
        agePlaceholder: 'உங்கள் வயதை உள்ளிடவும்',
        medicalConditions: 'மருத்துவ நிலைகள்',
        selectConditions: 'உங்கள் மருத்துவ நிலைகளைத் தேர்ந்தெடுக்கவும்',
        searchCondition: 'நிலையைத் தேடு அல்லது தட்டச்சு செய்யவும்...',
        noConditionsSelected: 'எந்த நிலையும் தேர்ந்தெடுக்கப்படவில்லை',
        allergies: 'ஒவ்வாமை',
        selectAllergies: 'உங்கள் ஒவ்வாமைகளைத் தேர்ந்தெடுக்கவும்',
        searchAllergy: 'ஒவ்வாமையைத் தேடு அல்லது தட்டச்சு செய்யவும்...',
        noAllergiesSelected: 'எந்த ஒவ்வாமையும் தேர்ந்தெடுக்கப்படவில்லை',
        medicationSchedule: 'மருந்து அட்டவணை',
        addMedication: 'உங்கள் மருந்துகளைச் சேர்க்கவும்',
        medicationName: 'மருந்து பெயரை தட்டச்சு செய்யவும்...',
        dosage: 'அளவு (எ.கா., 500mg)',
        noMedications: 'இதுவரை மருந்துகள் சேர்க்கப்படவில்லை',
        allDays: 'அனைத்து நாட்கள்',
        monday: 'திங்கள்',
        tuesday: 'செவ்வாய்',
        wednesday: 'புதன்',
        thursday: 'வியாழன்',
        friday: 'வெள்ளி',
        saturday: 'சனி',
        sunday: 'ஞாயிறு',
        noDosage: 'அளவு குறிப்பிடப்படவில்லை',
        pleaseEnterMedication: 'தயவுசெய்து ஒரு மருந்து பெயரை உள்ளிடவும்',
        pleaseSelectTime: 'தயவுசெய்து மருந்துக்கு நேரத்தைத் தேர்ந்தெடுக்கவும்',
        medicationExists: 'இந்த நாளில் இந்த நேரத்தில் இந்த மருந்து ஏற்கனவே திட்டமிடப்பட்டுள்ளது',
        medicationAdded: 'மருந்து வெற்றிகரமாக சேர்க்கப்பட்டது!',
        emergencyContacts: 'அவசர தொடர்புகள்',
        emergencyName: 'தொடர்பு பெயர்',
        emergencyRelation: 'உறவு',
        emergencyPhone: 'தொலைபேசி எண்',
        emergencyNamePlaceholder: 'அவசர தொடர்பு பெயரை உள்ளிடவும்',
        emergencyRelationPlaceholder: 'எ.கா., மனைவி/கணவர், பெற்றோர், உடன்பிறப்பு',
        emergencyPhonePlaceholder: '10 இலக்க கைபேசி எண்ணை உள்ளிடவும்',
        doctorDetails: 'மருத்துவர் விவரங்கள்',
        doctorName: 'மருத்துவரின் பெயர்',
        doctorSpecialty: 'சிறப்பு',
        doctorPhone: 'மருத்துவரின் தொலைபேசி',
        doctorEmail: 'மருத்துவரின் மின்னஞ்சல்',
        doctorNamePlaceholder: 'மருத்துவரின் பெயரை உள்ளிடவும்',
        doctorSpecialtyPlaceholder: 'எ.கா., இதய நிபுணர், நரம்பியல் நிபுணர்',
        doctorPhonePlaceholder: 'மருத்துவரின் தொலைபேசி எண்ணை உள்ளிடவும்',
        doctorEmailPlaceholder: 'மருத்துவரின் மின்னஞ்சலை உள்ளிடவும்',
        saveAndContinue: 'சேமித்து தொடரவும்',
        backToRegistration: 'பதிவுக்குத் திரும்பு',
        pleaseEnterFullName: 'தயவுசெய்து உங்கள் முழு பெயரை உள்ளிடவும்',
        pleaseSelectDob: 'தயவுசெய்து உங்கள் பிறந்த தேதியைத் தேர்ந்தெடுக்கவும்',
        pleaseEnterAge: 'தயவுசெய்து உங்கள் வயதை உள்ளிடவும்',
        pleaseSelectSex: 'தயவுசெய்து உங்கள் பாலினத்தைத் தேர்ந்தெடுக்கவும்',
        pleaseEnterEmergencyName: 'தயவுசெய்து அவசர தொடர்பு பெயரை உள்ளிடவும்',
        pleaseEnterEmergencyPhone: 'தயவுசெய்து அவசர தொடர்பு தொலைபேசி எண்ணை உள்ளிடவும்',
        validPhoneRequired: 'தயவுசெய்து 10 இலக்க செல்லுபடியாகும் தொலைபேசி எண்ணை உள்ளிடவும்',
        savedSuccessfully: 'தனிப்பட்ட விவரங்கள் வெற்றிகரமாக சேமிக்கப்பட்டன!',
        redirecting: 'திருப்பிவிடுகிறது...',
        footerText: '© 2026 NEXURA. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    },
    gu: {
        selectLanguage: 'ભાષા પસંદ કરો',
        stepRegistration: 'નોંધણી',
        stepPersonalDetails: 'વ્યક્તિગત વિગતો',
        stepComplete: 'પૂર્ણ',
        personalDetailsTitle: 'વ્યક્તિગત વિગતો',
        personalDetailsSubtitle: 'તમારા દવાના અનુભવને વ્યક્તિગત બનાવવા માટે તમારા વિશે વધુ કહો',
        personalInfo: 'વ્યક્તિગત માહિતી',
        fullName: 'પૂરું નામ',
        dob: 'જન્મ તારીખ',
        age: 'ઉંમર',
        sex: 'લિંગ',
        selectSex: 'લિંગ પસંદ કરો',
        male: 'પુરુષ',
        female: 'સ્ત્રી',
        other: 'અન્ય',
        preferNot: 'કહેવું નથી ગમતું',
        fullNamePlaceholder: 'તમારું પૂરું નામ દાખલ કરો',
        agePlaceholder: 'તમારી ઉંમર દાખલ કરો',
        medicalConditions: 'તબીબી સ્થિતિઓ',
        selectConditions: 'તમારી તબીબી સ્થિતિઓ પસંદ કરો',
        searchCondition: 'સ્થિતિ શોધો અથવા ટાઇપ કરો...',
        noConditionsSelected: 'કોઈ સ્થિતિ પસંદ કરી નથી',
        allergies: 'એલર્જી',
        selectAllergies: 'તમારી એલર્જી પસંદ કરો',
        searchAllergy: 'એલર્જી શોધો અથવા ટાઇપ કરો...',
        noAllergiesSelected: 'કોઈ એલર્જી પસંદ કરી નથી',
        medicationSchedule: 'દવા સમયપત્રક',
        addMedication: 'તમારી દવાઓ ઉમેરો',
        medicationName: 'દવાનું નામ ટાઇપ કરો...',
        dosage: 'માત્રા (દા.ત., 500mg)',
        noMedications: 'હજુ સુધી દવાઓ ઉમેરાઈ નથી',
        allDays: 'બધા દિવસ',
        monday: 'સોમવાર',
        tuesday: 'મંગળવાર',
        wednesday: 'બુધવાર',
        thursday: 'ગુરુવાર',
        friday: 'શુક્રવાર',
        saturday: 'શનિવાર',
        sunday: 'રવિવાર',
        noDosage: 'કોઈ માત્રા નિર્દિષ્ટ નથી',
        pleaseEnterMedication: 'કૃપા કરી દવાનું નામ દાખલ કરો',
        pleaseSelectTime: 'કૃપા કરી દવા માટે સમય પસંદ કરો',
        medicationExists: 'આ દિવસે આ સમયે આ દવા પહેલેથી નિર્ધારિત છે',
        medicationAdded: 'દવા સફળતાપૂર્વક ઉમેરાઈ!',
        emergencyContacts: 'કટોકટી સંપર્કો',
        emergencyName: 'સંપર્ક નામ',
        emergencyRelation: 'સંબંધ',
        emergencyPhone: 'ફોન નંબર',
        emergencyNamePlaceholder: 'કટોકટી સંપર્ક નામ દાખલ કરો',
        emergencyRelationPlaceholder: 'દા.ત., પત્ની/પતિ, માતાપિતા, ભાઈ-બહેન',
        emergencyPhonePlaceholder: '10 આંકડાનો મોબાઇલ નંબર દાખલ કરો',
        doctorDetails: 'ડૉક્ટર વિગતો',
        doctorName: 'ડૉક્ટરનું નામ',
        doctorSpecialty: 'વિશેષતા',
        doctorPhone: 'ડૉક્ટરનો ફોન',
        doctorEmail: 'ડૉક્ટરનો ઈમેલ',
        doctorNamePlaceholder: 'ડૉક્ટરનું નામ દાખલ કરો',
        doctorSpecialtyPlaceholder: 'દા.ત., કાર્ડિયોલોજિસ્ટ, ન્યુરોલોજિસ્ટ',
        doctorPhonePlaceholder: 'ડૉક્ટરનો ફોન નંબર દાખલ કરો',
        doctorEmailPlaceholder: 'ડૉક્ટરનો ઈમેલ દાખલ કરો',
        saveAndContinue: 'સાચવો અને ચાલુ રાખો',
        backToRegistration: 'નોંધણી પર પાછા',
        pleaseEnterFullName: 'કૃપા કરી તમારું પૂરું નામ દાખલ કરો',
        pleaseSelectDob: 'કૃપા કરી તમારી જન્મ તારીખ પસંદ કરો',
        pleaseEnterAge: 'કૃપા કરી તમારી ઉંમર દાખલ કરો',
        pleaseSelectSex: 'કૃપા કરી તમારું લિંગ પસંદ કરો',
        pleaseEnterEmergencyName: 'કૃપા કરી કટોકટી સંપર્ક નામ દાખલ કરો',
        pleaseEnterEmergencyPhone: 'કૃપા કરી કટોકટી સંપર્ક ફોન નંબર દાખલ કરો',
        validPhoneRequired: 'કૃપા કરી 10 આંકડાનો માન્ય ફોન નંબર દાખલ કરો',
        savedSuccessfully: 'વ્યક્તિગત વિગતો સફળતાપૂર્વક સાચવવામાં આવી!',
        redirecting: 'રીડાયરેક્ટ...',
        footerText: '© 2026 NEXURA. સર્વાધિકાર સુરક્ષિત.'
    },
    kn: {
        selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        stepRegistration: 'ನೋಂದಣಿ',
        stepPersonalDetails: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು',
        stepComplete: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
        personalDetailsTitle: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು',
        personalDetailsSubtitle: 'ನಿಮ್ಮ ಔಷಧಿ ಅನುಭವವನ್ನು ವೈಯಕ್ತೀಕರಿಸಲು ನಿಮ್ಮ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ಹೇಳಿ',
        personalInfo: 'ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ',
        fullName: 'ಪೂರ್ಣ ಹೆಸರು',
        dob: 'ಜನ್ಮ ದಿನಾಂಕ',
        age: 'ವಯಸ್ಸು',
        sex: 'ಲಿಂಗ',
        selectSex: 'ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ',
        male: 'ಪುರುಷ',
        female: 'ಮಹಿಳೆ',
        other: 'ಇತರೆ',
        preferNot: 'ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ',
        fullNamePlaceholder: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        agePlaceholder: 'ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ',
        medicalConditions: 'ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳು',
        selectConditions: 'ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        searchCondition: 'ಪರಿಸ್ಥಿತಿ ಹುಡುಕಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ...',
        noConditionsSelected: 'ಯಾವುದೇ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ',
        allergies: 'ಅಲರ್ಜಿಗಳು',
        selectAllergies: 'ನಿಮ್ಮ ಅಲರ್ಜಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        searchAllergy: 'ಅಲರ್ಜಿ ಹುಡುಕಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ...',
        noAllergiesSelected: 'ಯಾವುದೇ ಅಲರ್ಜಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ',
        medicationSchedule: 'ಔಷಧಿ ವೇಳಾಪಟ್ಟಿ',
        addMedication: 'ನಿಮ್ಮ ಔಷಧಿಗಳನ್ನು ಸೇರಿಸಿ',
        medicationName: 'ಔಷಧಿ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ...',
        dosage: 'ಪ್ರಮಾಣ (ಉದಾ., 500mg)',
        noMedications: 'ಇನ್ನೂ ಔಷಧಿಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ',
        allDays: 'ಎಲ್ಲಾ ದಿನಗಳು',
        monday: 'ಸೋಮವಾರ',
        tuesday: 'ಮಂಗಳವಾರ',
        wednesday: 'ಬುಧವಾರ',
        thursday: 'ಗುರುವಾರ',
        friday: 'ಶುಕ್ರವಾರ',
        saturday: 'ಶನಿವಾರ',
        sunday: 'ಭಾನುವಾರ',
        noDosage: 'ಪ್ರಮಾಣವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿಲ್ಲ',
        pleaseEnterMedication: 'ದಯವಿಟ್ಟು ಔಷಧಿ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        pleaseSelectTime: 'ದಯವಿಟ್ಟು ಔಷಧಿಗೆ ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        medicationExists: 'ಈ ದಿನ ಈ ಸಮಯದಲ್ಲಿ ಈ ಔಷಧಿಯನ್ನು ಈಗಾಗಲೇ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ',
        medicationAdded: 'ಔಷಧಿ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!',
        emergencyContacts: 'ತುರ್ತು ಸಂಪರ್ಕಗಳು',
        emergencyName: 'ಸಂಪರ್ಕ ಹೆಸರು',
        emergencyRelation: 'ಸಂಬಂಧ',
        emergencyPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
        emergencyNamePlaceholder: 'ತುರ್ತು ಸಂಪರ್ಕ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        emergencyRelationPlaceholder: 'ಉದಾ., ಪತ್ನಿ/ಪತಿ, ಪೋಷಕರು, ಸಹೋದರ',
        emergencyPhonePlaceholder: '10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
        doctorDetails: 'ವೈದ್ಯರ ವಿವರಗಳು',
        doctorName: 'ವೈದ್ಯರ ಹೆಸರು',
        doctorSpecialty: 'ವಿಶೇಷತೆ',
        doctorPhone: 'ವೈದ್ಯರ ಫೋನ್',
        doctorEmail: 'ವೈದ್ಯರ ಇಮೇಲ್',
        doctorNamePlaceholder: 'ವೈದ್ಯರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        doctorSpecialtyPlaceholder: 'ಉದಾ., ಹೃದಯ ತಜ್ಞ, ನರವಿಜ್ಞಾನಿ',
        doctorPhonePlaceholder: 'ವೈದ್ಯರ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
        doctorEmailPlaceholder: 'ವೈದ್ಯರ ಇಮೇಲ್ ನಮೂದಿಸಿ',
        saveAndContinue: 'ಉಳಿಸಿ ಮುಂದುವರಿಸಿ',
        backToRegistration: 'ನೋಂದಣಿಗೆ ಹಿಂತಿರುಗಿ',
        pleaseEnterFullName: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        pleaseSelectDob: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಜನ್ಮ ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        pleaseEnterAge: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ',
        pleaseSelectSex: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಲಿಂಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        pleaseEnterEmergencyName: 'ದಯವಿಟ್ಟು ತುರ್ತು ಸಂಪರ್ಕ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        pleaseEnterEmergencyPhone: 'ದಯವಿಟ್ಟು ತುರ್ತು ಸಂಪರ್ಕ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
        validPhoneRequired: 'ದಯವಿಟ್ಟು 10 ಅಂಕಿಯ ಮಾನ್ಯ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
        savedSuccessfully: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
        redirecting: 'ಮರುನಿರ್ದೇಶಿಸುತ್ತಿದೆ...',
        footerText: '© 2026 NEXURA. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
    },
    ml: {
        selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
        stepRegistration: 'രജിസ്ട്രേഷൻ',
        stepPersonalDetails: 'വ്യക്തിഗത വിവരങ്ങൾ',
        stepComplete: 'പൂർത്തിയായി',
        personalDetailsTitle: 'വ്യക്തിഗത വിവരങ്ങൾ',
        personalDetailsSubtitle: 'നിങ്ങളുടെ മരുന്ന് അനുഭവം വ്യക്തിഗതമാക്കാൻ നിങ്ങളെക്കുറിച്ച് കൂടുതൽ പറയുക',
        personalInfo: 'വ്യക്തിഗത വിവരം',
        fullName: 'പൂർണ്ണ നാമം',
        dob: 'ജനന തീയതി',
        age: 'പ്രായം',
        sex: 'ലിംഗം',
        selectSex: 'ലിംഗം തിരഞ്ഞെടുക്കുക',
        male: 'പുരുഷൻ',
        female: 'സ്ത്രീ',
        other: 'മറ്റുള്ളവ',
        preferNot: 'പറയാൻ താൽപ്പര്യമില്ല',
        fullNamePlaceholder: 'നിങ്ങളുടെ പൂർണ്ണ നാമം നൽകുക',
        agePlaceholder: 'നിങ്ങളുടെ പ്രായം നൽകുക',
        medicalConditions: 'മെഡിക്കൽ അവസ്ഥകൾ',
        selectConditions: 'നിങ്ങളുടെ മെഡിക്കൽ അവസ്ഥകൾ തിരഞ്ഞെടുക്കുക',
        searchCondition: 'അവസ്ഥ തിരയുക അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യുക...',
        noConditionsSelected: 'ഒരു അവസ്ഥയും തിരഞ്ഞെടുത്തിട്ടില്ല',
        allergies: 'അലർജികൾ',
        selectAllergies: 'നിങ്ങളുടെ അലർജികൾ തിരഞ്ഞെടുക്കുക',
        searchAllergy: 'അലർജി തിരയുക അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യുക...',
        noAllergiesSelected: 'ഒരു അലർജിയും തിരഞ്ഞെടുത്തിട്ടില്ല',
        medicationSchedule: 'മരുന്ന് ഷെഡ്യൂൾ',
        addMedication: 'നിങ്ങളുടെ മരുന്നുകൾ ചേർക്കുക',
        medicationName: 'മരുന്നിന്റെ പേര് ടൈപ്പ് ചെയ്യുക...',
        dosage: 'അളവ് (ഉദാ., 500mg)',
        noMedications: 'ഇതുവരെ മരുന്നുകൾ ചേർത്തിട്ടില്ല',
        allDays: 'എല്ലാ ദിവസവും',
        monday: 'തിങ്കൾ',
        tuesday: 'ചൊവ്വ',
        wednesday: 'ബുധൻ',
        thursday: 'വ്യാഴം',
        friday: 'വെള്ളി',
        saturday: 'ശനി',
        sunday: 'ഞായർ',
        noDosage: 'അളവ് വ്യക്തമാക്കിയിട്ടില്ല',
        pleaseEnterMedication: 'ദയവായി ഒരു മരുന്നിന്റെ പേര് നൽകുക',
        pleaseSelectTime: 'ദയവായി മരുന്നിന് സമയം തിരഞ്ഞെടുക്കുക',
        medicationExists: 'ഈ ദിവസം ഈ സമയത്ത് ഈ മരുന്ന് ഇതിനകം ഷെഡ്യൂൾ ചെയ്തിട്ടുണ്ട്',
        medicationAdded: 'മരുന്ന് വിജയകരമായി ചേർത്തു!',
        emergencyContacts: 'എമർജൻസി കോൺടാക്റ്റുകൾ',
        emergencyName: 'കോൺടാക്റ്റ് പേര്',
        emergencyRelation: 'ബന്ധം',
        emergencyPhone: 'ഫോൺ നമ്പർ',
        emergencyNamePlaceholder: 'എമർജൻസി കോൺടാക്റ്റ് പേര് നൽകുക',
        emergencyRelationPlaceholder: 'ഉദാ., ഭാര്യ/ഭർത്താവ്, മാതാപിതാക്കൾ, സഹോദരൻ',
        emergencyPhonePlaceholder: '10 അക്ക മൊബൈൽ നമ്പർ നൽകുക',
        doctorDetails: 'ഡോക്ടറുടെ വിവരങ്ങൾ',
        doctorName: 'ഡോക്ടറുടെ പേര്',
        doctorSpecialty: 'സ്പെഷ്യാലിറ്റി',
        doctorPhone: 'ഡോക്ടറുടെ ഫോൺ',
        doctorEmail: 'ഡോക്ടറുടെ ഇമെയിൽ',
        doctorNamePlaceholder: 'ഡോക്ടറുടെ പേര് നൽകുക',
        doctorSpecialtyPlaceholder: 'ഉദാ., കാർഡിയോളജിസ്റ്റ്, ന്യൂറോളജിസ്റ്റ്',
        doctorPhonePlaceholder: 'ഡോക്ടറുടെ ഫോൺ നമ്പർ നൽകുക',
        doctorEmailPlaceholder: 'ഡോക്ടറുടെ ഇമെയിൽ നൽകുക',
        saveAndContinue: 'സംരക്ഷിച്ച് തുടരുക',
        backToRegistration: 'രജിസ്ട്രേഷനിലേക്ക് മടങ്ങുക',
        pleaseEnterFullName: 'ദയവായി നിങ്ങളുടെ പൂർണ്ണ നാമം നൽകുക',
        pleaseSelectDob: 'ദയവായി നിങ്ങളുടെ ജനന തീയതി തിരഞ്ഞെടുക്കുക',
        pleaseEnterAge: 'ദയവായി നിങ്ങളുടെ പ്രായം നൽകുക',
        pleaseSelectSex: 'ദയവായി നിങ്ങളുടെ ലിംഗം തിരഞ്ഞെടുക്കുക',
        pleaseEnterEmergencyName: 'ദയവായി എമർജൻസി കോൺടാക്റ്റ് പേര് നൽകുക',
        pleaseEnterEmergencyPhone: 'ദയവായി എമർജൻസി കോൺടാക്റ്റ് ഫോൺ നമ്പർ നൽകുക',
        validPhoneRequired: 'ദയവായി 10 അക്ക സാധുവായ ഫോൺ നമ്പർ നൽകുക',
        savedSuccessfully: 'വ്യക്തിഗത വിവരങ്ങൾ വിജയകരമായി സംരക്ഷിച്ചു!',
        redirecting: 'റീഡയറക്ട് ചെയ്യുന്നു...',
        footerText: '© 2026 NEXURA. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.'
    }
};

// ================================================================
// EXTEND LANGUAGE MANAGER WITH PERSONAL DETAILS TRANSLATIONS
// ================================================================

if (typeof languageManager !== 'undefined') {
    const existingTranslations = languageManager.translations || {};
    Object.keys(PERSONAL_DETAILS_TRANSLATIONS).forEach(lang => {
        if (!existingTranslations[lang]) {
            existingTranslations[lang] = {};
        }
        Object.assign(existingTranslations[lang], PERSONAL_DETAILS_TRANSLATIONS[lang]);
    });
    languageManager.translations = existingTranslations;
    console.log('✅ Personal Details translations merged into languageManager');
}

// ================================================================
// PERSONAL DETAILS APP CLASS
// ================================================================

class PersonalDetailsApp {
    constructor() {
        console.log('🚀 Initializing Personal Details Application...');
        
        this.languageManager = languageManager;
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        this.selectedConditions = [];
        this.selectedAllergies = [];
        this.selectedMedications = [];
        this.conditionsData = [];
        this.allergiesData = [];
        
        this.populateLanguageDropdown();
        this.setupEventListeners();
        this.loadSavedLanguage();
        this.translatePage();
        this.applyTheme(this.currentTheme);
        this.loadData();
        this.calculateAge();
        this.loadDraft();
        
        console.log('✅ Personal Details Application initialized successfully');
    }

    loadData() {
        // Get translated medical conditions
        const conditionsList = this.languageManager.getTranslation('medicalConditionsList');
        if (conditionsList && Array.isArray(conditionsList)) {
            this.conditionsData = conditionsList;
        } else {
            this.conditionsData = this.languageManager.getTranslation('medicalConditionsList');
        }
        
        // Get translated allergies
        const allergiesList = this.languageManager.getTranslation('allergiesList');
        if (allergiesList && Array.isArray(allergiesList)) {
            this.allergiesData = allergiesList;
        } else {
            this.allergiesData = this.languageManager.getTranslation('allergiesList');
        }
        
        this.populateDropdown('conditionsDropdown', this.conditionsData);
        this.populateDropdown('allergiesDropdown', this.allergiesData);
        this.setupSearchFilters();
        this.renderSelectedItems('selectedConditions', this.selectedConditions, 'condition');
        this.renderSelectedItems('selectedAllergies', this.selectedAllergies, 'allergy');
        
        // Translate medication section
        this.translateMedicationSection();
    }

    reloadDataInNewLanguage() {
        // Reload conditions
        const conditionsList = this.languageManager.getTranslation('medicalConditionsList');
        if (conditionsList && Array.isArray(conditionsList)) {
            this.conditionsData = conditionsList;
        } else {
            this.conditionsData = this.languageManager.getTranslation('medicalConditionsList');
        }
        
        // Reload allergies
        const allergiesList = this.languageManager.getTranslation('allergiesList');
        if (allergiesList && Array.isArray(allergiesList)) {
            this.allergiesData = allergiesList;
        } else {
            this.allergiesData = this.languageManager.getTranslation('allergiesList');
        }
        
        // Repopulate dropdowns with new language data
        this.populateDropdown('conditionsDropdown', this.conditionsData);
        this.populateDropdown('allergiesDropdown', this.allergiesData);
        this.setupSearchFilters();
        
        // Re-render selected items with new language
        this.renderSelectedItems('selectedConditions', this.selectedConditions, 'condition');
        this.renderSelectedItems('selectedAllergies', this.selectedAllergies, 'allergy');
        
        // Translate medication section
        this.translateMedicationSection();
    }

    populateDropdown(dropdownId, data) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;

        dropdown.innerHTML = '';
        if (data && Array.isArray(data) && data.length > 0) {
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'option-item';
                div.textContent = item;
                div.dataset.value = item;
                
                // Check if this item is already selected
                const isSelected = dropdownId === 'conditionsDropdown' 
                    ? this.selectedConditions.includes(item)
                    : this.selectedAllergies.includes(item);
                
                if (isSelected) {
                    div.classList.add('selected');
                }
                
                dropdown.appendChild(div);
            });
        }
    }

    setupSearchFilters() {
        // Setup condition search
        const conditionSearch = document.getElementById('conditionSearch');
        const conditionsDropdown = document.getElementById('conditionsDropdown');
        
        if (conditionSearch) {
            const newConditionSearch = conditionSearch.cloneNode(true);
            conditionSearch.parentNode.replaceChild(newConditionSearch, conditionSearch);
            
            newConditionSearch.addEventListener('input', (e) => {
                this.filterOptions('conditionsDropdown', e.target.value);
                if (e.target.value.length > 0) {
                    conditionsDropdown.classList.add('show');
                } else {
                    this.showAllOptions('conditionsDropdown');
                    conditionsDropdown.classList.add('show');
                }
            });
            
            newConditionSearch.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showAllOptions('conditionsDropdown');
                conditionsDropdown.classList.add('show');
            });
            
            newConditionSearch.addEventListener('focus', () => {
                this.showAllOptions('conditionsDropdown');
                conditionsDropdown.classList.add('show');
            });
            
            newConditionSearch.addEventListener('blur', () => {
                setTimeout(() => {
                    conditionsDropdown.classList.remove('show');
                }, 300);
            });
            
            // Enter key - adds condition
            newConditionSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && newConditionSearch.value.trim()) {
                    e.preventDefault();
                    this.addCondition(newConditionSearch.value.trim());
                    newConditionSearch.value = '';
                    conditionsDropdown.classList.remove('show');
                    newConditionSearch.blur();
                }
            });
        }

        // Setup allergy search
        const allergySearch = document.getElementById('allergySearch');
        const allergiesDropdown = document.getElementById('allergiesDropdown');
        
        if (allergySearch) {
            const newAllergySearch = allergySearch.cloneNode(true);
            allergySearch.parentNode.replaceChild(newAllergySearch, allergySearch);
            
            newAllergySearch.addEventListener('input', (e) => {
                this.filterOptions('allergiesDropdown', e.target.value);
                if (e.target.value.length > 0) {
                    allergiesDropdown.classList.add('show');
                } else {
                    this.showAllOptions('allergiesDropdown');
                    allergiesDropdown.classList.add('show');
                }
            });
            
            newAllergySearch.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showAllOptions('allergiesDropdown');
                allergiesDropdown.classList.add('show');
            });
            
            newAllergySearch.addEventListener('focus', () => {
                this.showAllOptions('allergiesDropdown');
                allergiesDropdown.classList.add('show');
            });
            
            newAllergySearch.addEventListener('blur', () => {
                setTimeout(() => {
                    allergiesDropdown.classList.remove('show');
                }, 300);
            });
            
            // Enter key - adds allergy
            newAllergySearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && newAllergySearch.value.trim()) {
                    e.preventDefault();
                    this.addAllergy(newAllergySearch.value.trim());
                    newAllergySearch.value = '';
                    allergiesDropdown.classList.remove('show');
                    newAllergySearch.blur();
                }
            });
        }

        // Add condition button
        const addConditionBtn = document.getElementById('addConditionBtn');
        if (addConditionBtn) {
            const newAddConditionBtn = addConditionBtn.cloneNode(true);
            addConditionBtn.parentNode.replaceChild(newAddConditionBtn, addConditionBtn);
            
            newAddConditionBtn.addEventListener('click', () => {
                const search = document.getElementById('conditionSearch');
                const dropdown = document.getElementById('conditionsDropdown');
                if (search && search.value.trim()) {
                    this.addCondition(search.value.trim());
                    search.value = '';
                    dropdown.classList.remove('show');
                    search.blur();
                } else {
                    dropdown.classList.remove('show');
                }
            });
        }

        // Add allergy button
        const addAllergyBtn = document.getElementById('addAllergyBtn');
        if (addAllergyBtn) {
            const newAddAllergyBtn = addAllergyBtn.cloneNode(true);
            addAllergyBtn.parentNode.replaceChild(newAddAllergyBtn, addAllergyBtn);
            
            newAddAllergyBtn.addEventListener('click', () => {
                const search = document.getElementById('allergySearch');
                const dropdown = document.getElementById('allergiesDropdown');
                if (search && search.value.trim()) {
                    this.addAllergy(search.value.trim());
                    search.value = '';
                    dropdown.classList.remove('show');
                    search.blur();
                } else {
                    dropdown.classList.remove('show');
                }
            });
        }

        // Click handlers for dropdown items - Conditions
        if (conditionsDropdown) {
            const newConditionsDropdown = conditionsDropdown.cloneNode(true);
            conditionsDropdown.parentNode.replaceChild(newConditionsDropdown, conditionsDropdown);
            
            newConditionsDropdown.addEventListener('click', (e) => {
                const item = e.target.closest('.option-item');
                if (item) {
                    const value = item.dataset.value;
                    if (value) {
                        if (this.selectedConditions.includes(value)) {
                            this.removeCondition(value);
                        } else {
                            this.addCondition(value);
                        }
                    }
                    document.getElementById('conditionSearch').value = '';
                    newConditionsDropdown.classList.remove('show');
                    document.getElementById('conditionSearch').blur();
                }
            });
        }

        // Click handlers for dropdown items - Allergies
        if (allergiesDropdown) {
            const newAllergiesDropdown = allergiesDropdown.cloneNode(true);
            allergiesDropdown.parentNode.replaceChild(newAllergiesDropdown, allergiesDropdown);
            
            newAllergiesDropdown.addEventListener('click', (e) => {
                const item = e.target.closest('.option-item');
                if (item) {
                    const value = item.dataset.value;
                    if (value) {
                        if (this.selectedAllergies.includes(value)) {
                            this.removeAllergy(value);
                        } else {
                            this.addAllergy(value);
                        }
                    }
                    document.getElementById('allergySearch').value = '';
                    newAllergiesDropdown.classList.remove('show');
                    document.getElementById('allergySearch').blur();
                }
            });
        }

        // ==============================================
        // MEDICATION INPUT - WITH DAYS
        // ==============================================
        
        // Medication add button
        const addMedicationBtn = document.getElementById('addMedicationBtn');
        if (addMedicationBtn) {
            const newAddMedicationBtn = addMedicationBtn.cloneNode(true);
            addMedicationBtn.parentNode.replaceChild(newAddMedicationBtn, addMedicationBtn);
            
            newAddMedicationBtn.addEventListener('click', () => {
                this.addMedication();
            });
        }

        // Enter key support for medication inputs
        const medicationInput = document.getElementById('medicationInput');
        if (medicationInput) {
            medicationInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addMedication();
                }
            });
        }

        const medicationDay = document.getElementById('medicationDay');
        if (medicationDay) {
            medicationDay.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addMedication();
                }
            });
        }

        const medicationTime = document.getElementById('medicationTime');
        if (medicationTime) {
            medicationTime.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addMedication();
                }
            });
        }

        const medicationDosage = document.getElementById('medicationDosage');
        if (medicationDosage) {
            medicationDosage.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.addMedication();
                }
            });
        }
    }

    showAllOptions(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;
        const items = dropdown.querySelectorAll('.option-item');
        items.forEach(item => {
            item.classList.remove('hidden');
        });
    }

    filterOptions(dropdownId, searchText) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;
        
        const items = dropdown.querySelectorAll('.option-item');
        const searchLower = searchText.toLowerCase();

        let hasVisible = false;
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchLower)) {
                item.classList.remove('hidden');
                hasVisible = true;
            } else {
                item.classList.add('hidden');
            }
        });

        if (hasVisible && searchText.length > 0) {
            dropdown.classList.add('show');
        } else if (searchText.length === 0) {
            dropdown.classList.remove('show');
        }
    }

    showSelectedInInput(inputId, value) {
        const input = document.getElementById(inputId);
        if (input) {
            input.value = value;
            setTimeout(() => {
                input.value = '';
            }, 1500);
        }
    }

    addCondition(condition) {
        if (!this.selectedConditions.includes(condition)) {
            this.selectedConditions.push(condition);
            this.renderSelectedItems('selectedConditions', this.selectedConditions, 'condition');
            this.updateDropdownSelection('conditionsDropdown', condition, true);
            this.saveDraft();
            this.showSelectedInInput('conditionSearch', condition);
        }
    }

    addAllergy(allergy) {
        if (!this.selectedAllergies.includes(allergy)) {
            this.selectedAllergies.push(allergy);
            this.renderSelectedItems('selectedAllergies', this.selectedAllergies, 'allergy');
            this.updateDropdownSelection('allergiesDropdown', allergy, true);
            this.saveDraft();
            this.showSelectedInInput('allergySearch', allergy);
        }
    }

    removeCondition(condition) {
        this.selectedConditions = this.selectedConditions.filter(c => c !== condition);
        this.renderSelectedItems('selectedConditions', this.selectedConditions, 'condition');
        this.updateDropdownSelection('conditionsDropdown', condition, false);
        this.saveDraft();
    }

    removeAllergy(allergy) {
        this.selectedAllergies = this.selectedAllergies.filter(a => a !== allergy);
        this.renderSelectedItems('selectedAllergies', this.selectedAllergies, 'allergy');
        this.updateDropdownSelection('allergiesDropdown', allergy, false);
        this.saveDraft();
    }

    updateDropdownSelection(dropdownId, value, isSelected) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return;
        const items = dropdown.querySelectorAll('.option-item');
        items.forEach(item => {
            if (item.dataset.value === value) {
                if (isSelected) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            }
        });
    }

    renderSelectedItems(containerId, items, type) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        if (items.length === 0) {
            const emptyMsg = document.createElement('span');
            emptyMsg.className = 'empty-message';
            const key = type === 'condition' ? 'noConditionsSelected' : 'noAllergiesSelected';
            emptyMsg.textContent = this.languageManager.getTranslation(key) || key;
            container.appendChild(emptyMsg);
            return;
        }

        items.forEach(item => {
            const span = document.createElement('span');
            span.className = 'selected-item';
            span.innerHTML = `
                ${item}
                <button type="button" class="remove-item" data-item="${item}" data-type="${type}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.appendChild(span);
        });

        container.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const item = btn.dataset.item;
                const type = btn.dataset.type;
                if (type === 'condition') {
                    this.removeCondition(item);
                } else {
                    this.removeAllergy(item);
                }
            });
        });
    }

    // ==============================================
    // MEDICATION METHODS - WITH DAYS
    // ==============================================
    
    addMedication() {
        const input = document.getElementById('medicationInput');
        const daySelect = document.getElementById('medicationDay');
        const timeInput = document.getElementById('medicationTime');
        const dosageInput = document.getElementById('medicationDosage');
        const statusDiv = document.getElementById('personalDetailsStatus');
        
        const name = input.value.trim();
        const day = daySelect.value;
        const time = timeInput.value;
        const dosage = dosageInput.value.trim();

        if (!name) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseEnterMedication') || 'Please enter a medication name', 'error');
            input.focus();
            return;
        }

        if (!time) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseSelectTime') || 'Please select a time for the medication', 'error');
            timeInput.focus();
            return;
        }

        // Check for duplicates
        const exists = this.selectedMedications.some(med => 
            med.name.toLowerCase() === name.toLowerCase() && 
            med.time === time && 
            med.day === day
        );
        if (exists) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('medicationExists') || 'This medication is already scheduled at this time on this day', 'error');
            return;
        }

        // Get day display name from translation
        const dayKey = day === 'all' ? 'allDays' : day;
        const dayDisplay = this.languageManager.getTranslation(dayKey) || day;

        this.selectedMedications.push({
            name: name,
            day: day,
            dayDisplay: dayDisplay,
            time: time,
            dosage: dosage || this.languageManager.getTranslation('noDosage') || 'No dosage specified'
        });

        this.renderSelectedMedications();
        this.saveDraft();
        
        // Clear inputs
        input.value = '';
        daySelect.value = 'all';
        timeInput.value = '08:00';
        dosageInput.value = '';
        input.focus();
        
        this.showStatus(statusDiv, this.languageManager.getTranslation('medicationAdded') || 'Medication added successfully!', 'success');
    }

    removeMedication(index) {
        this.selectedMedications.splice(index, 1);
        this.renderSelectedMedications();
        this.saveDraft();
    }

    renderSelectedMedications() {
        const container = document.getElementById('selectedMedications');
        if (!container) return;

        container.innerHTML = '';
        
        if (this.selectedMedications.length === 0) {
            const emptyMsg = document.createElement('span');
            emptyMsg.className = 'empty-message';
            emptyMsg.textContent = this.languageManager.getTranslation('noMedications') || 'No medications added yet';
            container.appendChild(emptyMsg);
            return;
        }

        this.selectedMedications.forEach((med, index) => {
            const div = document.createElement('div');
            div.className = 'selected-medication-item';
            
            // Format time display
            const timeParts = med.time.split(':');
            const hour = parseInt(timeParts[0]);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour % 12 || 12;
            const displayTime = displayHour + ':' + timeParts[1] + ' ' + ampm;
            
            // Get day display from translation if available
            const dayKey = med.day === 'all' ? 'allDays' : med.day;
            const dayDisplay = this.languageManager.getTranslation(dayKey) || med.dayDisplay || 'All Days';
            
            div.innerHTML = `
                <div class="medication-info">
                    <span class="medication-name">${med.name}</span>
                    <span class="medication-detail">
                        <i class="fas fa-calendar-alt"></i>
                        <span class="day-tag">${dayDisplay}</span>
                    </span>
                    <span class="medication-detail">
                        <i class="fas fa-clock"></i> ${displayTime}
                    </span>
                    <span class="medication-detail">
                        <i class="fas fa-pills"></i> ${med.dosage}
                    </span>
                </div>
                <button type="button" class="btn-remove-medication" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.appendChild(div);
        });

        container.querySelectorAll('.btn-remove-medication').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(btn.dataset.index);
                this.removeMedication(index);
            });
        });
    }

    // ========== TRANSLATION METHODS ==========
    translateMedicationSection() {
        // Translate medication schedule title
        const scheduleTitle = document.querySelector('.section-title span[data-i18n="medicationSchedule"]');
        if (scheduleTitle) {
            scheduleTitle.textContent = this.languageManager.getTranslation('medicationSchedule') || 'Medication Schedule';
        }
        
        // Translate add medication label
        const addLabel = document.querySelector('[data-i18n="addMedication"]');
        if (addLabel) {
            addLabel.textContent = this.languageManager.getTranslation('addMedication') || 'Add your medications';
        }
        
        // Translate medication input placeholder
        const medicationInput = document.getElementById('medicationInput');
        if (medicationInput) {
            medicationInput.placeholder = this.languageManager.getTranslation('medicationName') || 'Type medication name...';
        }
        
        // Translate day dropdown options
        const daySelect = document.getElementById('medicationDay');
        if (daySelect) {
            const options = daySelect.querySelectorAll('option');
            options.forEach(option => {
                const key = option.getAttribute('data-i18n');
                if (key) {
                    option.textContent = this.languageManager.getTranslation(key) || option.textContent;
                }
            });
        }
        
        // Translate dosage placeholder
        const dosageInput = document.getElementById('medicationDosage');
        if (dosageInput) {
            dosageInput.placeholder = this.languageManager.getTranslation('dosage') || 'Dosage (e.g., 500mg)';
        }
        
        // Translate no medications message
        const noMedMsg = document.querySelector('[data-i18n="noMedications"]');
        if (noMedMsg) {
            noMedMsg.textContent = this.languageManager.getTranslation('noMedications') || 'No medications added yet';
        }
        
        // Re-render medications with translated names
        this.renderSelectedMedications();
    }

    // ========== END TRANSLATION METHODS ==========

    calculateAge() {
        const dobInput = document.getElementById('dob');
        const ageInput = document.getElementById('age');

        if (dobInput && ageInput) {
            dobInput.addEventListener('change', () => {
                if (dobInput.value) {
                    const birthDate = new Date(dobInput.value);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    ageInput.value = age;
                }
            });
        }
    }

    populateLanguageDropdown() {
        const select = document.getElementById('languageSelect');
        if (!select) return;

        const languages = this.languageManager.getAvailableLanguages();
        select.innerHTML = '';
        
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = lang.name;
            select.appendChild(option);
        });

        select.style.pointerEvents = 'auto';
        select.style.cursor = 'pointer';
        select.style.zIndex = '101';
    }

    setupEventListeners() {
        // Language change
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                this.languageManager.setLanguage(lang);
                this.translatePage();
                languageSelect.value = lang;
                this.reloadDataInNewLanguage();
                this.translateMedicationSection();
            });
            
            languageSelect.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.applyTheme(newTheme);
                this.currentTheme = newTheme;
                localStorage.setItem('nexura_theme', newTheme);
            });
        }

        // Form submission
        const form = document.getElementById('personalDetailsForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }

        // Back link
        const backLink = document.getElementById('backLink');
        if (backLink) {
            backLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveDraft();
                window.location.href = 'register.html';
            });
        }

        // Listen for language changes
        this.languageManager.addListener(() => {
            this.translatePage();
            const select = document.getElementById('languageSelect');
            if (select) {
                select.value = this.languageManager.getCurrentLanguage();
            }
            this.translateDropdownOptions();
            this.translateMedicationSection();
        });
    }

    translateDropdownOptions() {
        const sexSelect = document.getElementById('sex');
        if (sexSelect) {
            const options = sexSelect.querySelectorAll('option');
            options.forEach(option => {
                const key = option.getAttribute('data-i18n');
                if (key) {
                    option.textContent = this.languageManager.getTranslation(key) || option.textContent;
                }
            });
        }
    }

    translatePage() {
        this.languageManager.translatePage();
        this.translateDropdownOptions();
        
        // Translate placeholders
        const conditionSearch = document.getElementById('conditionSearch');
        if (conditionSearch) {
            const key = conditionSearch.getAttribute('data-i18n-placeholder');
            if (key) {
                conditionSearch.placeholder = this.languageManager.getTranslation(key) || conditionSearch.placeholder;
            }
        }
        
        const allergySearch = document.getElementById('allergySearch');
        if (allergySearch) {
            const key = allergySearch.getAttribute('data-i18n-placeholder');
            if (key) {
                allergySearch.placeholder = this.languageManager.getTranslation(key) || allergySearch.placeholder;
            }
        }

        const medicationInput = document.getElementById('medicationInput');
        if (medicationInput) {
            const key = medicationInput.getAttribute('data-i18n-placeholder');
            if (key) {
                medicationInput.placeholder = this.languageManager.getTranslation(key) || medicationInput.placeholder;
            }
        }

        const medicationDosage = document.getElementById('medicationDosage');
        if (medicationDosage) {
            const key = medicationDosage.getAttribute('data-i18n-placeholder');
            if (key) {
                medicationDosage.placeholder = this.languageManager.getTranslation(key) || medicationDosage.placeholder;
            }
        }

        // Translate medication section
        this.translateMedicationSection();

        // Re-render medications with translated names
        this.renderSelectedMedications();
    }

    // ==============================================
    // HANDLE SUBMIT - Saves to localStorage
    // ==============================================
    handleSubmit() {
        const statusDiv = document.getElementById('personalDetailsStatus');
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const dob = document.getElementById('dob').value;
        const age = document.getElementById('age').value;
        const sex = document.getElementById('sex').value;
        const emergencyName = document.getElementById('emergencyName').value.trim();
        const emergencyRelation = document.getElementById('emergencyRelation').value.trim();
        const emergencyPhone = document.getElementById('emergencyPhone').value.trim();
        const doctorName = document.getElementById('doctorName').value.trim();
        const doctorSpecialty = document.getElementById('doctorSpecialty').value.trim();
        const doctorPhone = document.getElementById('doctorPhone').value.trim();
        const doctorEmail = document.getElementById('doctorEmail').value.trim();

        // Validate
        if (!fullName) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseEnterFullName') || 'Please enter your full name', 'error');
            document.getElementById('fullName').focus();
            return;
        }

        if (!dob) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseSelectDob') || 'Please select your date of birth', 'error');
            document.getElementById('dob').focus();
            return;
        }

        if (!age) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseEnterAge') || 'Please enter your age', 'error');
            document.getElementById('age').focus();
            return;
        }

        if (!sex) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseSelectSex') || 'Please select your sex', 'error');
            document.getElementById('sex').focus();
            return;
        }

        if (!emergencyName) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseEnterEmergencyName') || 'Please enter an emergency contact name', 'error');
            document.getElementById('emergencyName').focus();
            return;
        }

        if (!emergencyPhone) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('pleaseEnterEmergencyPhone') || 'Please enter emergency contact phone number', 'error');
            document.getElementById('emergencyPhone').focus();
            return;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(emergencyPhone)) {
            this.showStatus(statusDiv, this.languageManager.getTranslation('validPhoneRequired') || 'Please enter a valid 10-digit phone number', 'error');
            document.getElementById('emergencyPhone').focus();
            return;
        }

        // Save to localStorage
        let userId = localStorage.getItem('nexura_user_id');
        if (!userId) {
            userId = 'user_' + Date.now();
            localStorage.setItem('nexura_user_id', userId);
        }

        const profileData = {
            userId: userId,
            fullName: fullName,
            dob: dob,
            age: parseInt(age),
            sex: sex,
            medicalConditions: this.selectedConditions,
            allergies: this.selectedAllergies,
            emergencyContact: {
                name: emergencyName,
                relation: emergencyRelation,
                phone: emergencyPhone
            },
            doctor: {
                name: doctorName,
                specialty: doctorSpecialty,
                phone: doctorPhone,
                email: doctorEmail
            },
            medications: this.selectedMedications,
            savedAt: new Date().toISOString()
        };

        localStorage.setItem('nexura_profile_data', JSON.stringify(profileData));
        localStorage.setItem('nexura_profile_complete', 'true');
        localStorage.setItem('nexura_last_save', new Date().toISOString());

        // Save individual fields
        localStorage.setItem('nexura_user_fullname', fullName);
        localStorage.setItem('nexura_user_age', age);
        localStorage.setItem('nexura_user_sex', sex);
        localStorage.setItem('nexura_user_dob', dob);
        localStorage.setItem('nexura_schedule_medications', JSON.stringify(this.selectedMedications));
        localStorage.removeItem('nexura_personal_details_draft');

        console.log('✅ Personal details saved:', profileData);

        this.showStatus(statusDiv, this.languageManager.getTranslation('savedSuccessfully') || 'Personal details saved successfully!', 'success');

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (this.languageManager.getTranslation('redirecting') || 'Redirecting...');

        setTimeout(() => {
            window.location.href = 'summary.html';
        }, 1000);
    }

    // ==============================================
    // SAVE DRAFT
    // ==============================================
    saveDraft() {
        let userId = localStorage.getItem('nexura_user_id');
        if (!userId) {
            userId = 'user_' + Date.now();
            localStorage.setItem('nexura_user_id', userId);
        }
        
        const formData = {
            userId: userId,
            fullName: document.getElementById('fullName').value,
            dob: document.getElementById('dob').value,
            age: document.getElementById('age').value,
            sex: document.getElementById('sex').value,
            emergencyName: document.getElementById('emergencyName').value,
            emergencyRelation: document.getElementById('emergencyRelation').value,
            emergencyPhone: document.getElementById('emergencyPhone').value,
            doctorName: document.getElementById('doctorName').value,
            doctorSpecialty: document.getElementById('doctorSpecialty').value,
            doctorPhone: document.getElementById('doctorPhone').value,
            doctorEmail: document.getElementById('doctorEmail').value,
            conditions: this.selectedConditions,
            allergies: this.selectedAllergies,
            medications: this.selectedMedications,
            savedAt: new Date().toISOString()
        };
        
        localStorage.setItem('nexura_personal_details_draft', JSON.stringify(formData));
        console.log('💾 Draft saved');
    }

    // ==============================================
    // LOAD DRAFT
    // ==============================================
// ==============================================
// LOAD DRAFT - FIXED
// ==============================================
loadDraft() {
    // Check if we should load draft (only if coming from register page)
    const fromRegister = sessionStorage.getItem('nexura_from_register') === 'true';
    
    // If coming from register, load draft
    if (fromRegister) {
        const draft = localStorage.getItem('nexura_personal_details_draft');
        if (draft) {
            try {
                const data = JSON.parse(draft);
                // Only load if data is not empty
                if (data.fullName) document.getElementById('fullName').value = data.fullName;
                if (data.dob) document.getElementById('dob').value = data.dob;
                if (data.age) document.getElementById('age').value = data.age;
                if (data.sex) document.getElementById('sex').value = data.sex;
                if (data.emergencyName) document.getElementById('emergencyName').value = data.emergencyName;
                if (data.emergencyRelation) document.getElementById('emergencyRelation').value = data.emergencyRelation;
                if (data.emergencyPhone) document.getElementById('emergencyPhone').value = data.emergencyPhone;
                if (data.doctorName) document.getElementById('doctorName').value = data.doctorName;
                if (data.doctorSpecialty) document.getElementById('doctorSpecialty').value = data.doctorSpecialty;
                if (data.doctorPhone) document.getElementById('doctorPhone').value = data.doctorPhone;
                if (data.doctorEmail) document.getElementById('doctorEmail').value = data.doctorEmail;
                if (data.conditions) {
                    this.selectedConditions = data.conditions;
                    this.renderSelectedItems('selectedConditions', this.selectedConditions, 'condition');
                }
                if (data.allergies) {
                    this.selectedAllergies = data.allergies;
                    this.renderSelectedItems('selectedAllergies', this.selectedAllergies, 'allergy');
                }
                if (data.medications) {
                    this.selectedMedications = data.medications;
                    this.renderSelectedMedications();
                }
                console.log('📂 Draft loaded from register');
            } catch (e) {
                console.error('Error loading draft:', e);
            }
        }
        // Clear the flag after loading
        sessionStorage.removeItem('nexura_from_register');
    } else {
        // If not from register, clear any existing draft data
        console.log('🔄 Not from register - clearing any pre-filled data');
        this.clearForm();
        // Clear draft from localStorage
        localStorage.removeItem('nexura_personal_details_draft');
    }
}

// ==============================================
// CLEAR FORM
// ==============================================
clearForm() {
    // Clear all form fields
    const fields = ['fullName', 'dob', 'age', 'sex', 'emergencyName', 'emergencyRelation', 'emergencyPhone', 'doctorName', 'doctorSpecialty', 'doctorPhone', 'doctorEmail'];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    
    // Clear selected items
    this.selectedConditions = [];
    this.selectedAllergies = [];
    this.selectedMedications = [];
    
    // Re-render empty states
    this.renderSelectedItems('selectedConditions', this.selectedConditions, 'condition');
    this.renderSelectedItems('selectedAllergies', this.selectedAllergies, 'allergy');
    this.renderSelectedMedications();
}

    showStatus(element, message, type) {
        if (!element) return;
        element.textContent = message;
        element.className = 'status-message ' + type;
        element.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                element.style.display = 'none';
            }, 5000);
        }
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('nexura_language') || 'en';
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = savedLang;
        }
        this.languageManager.setLanguage(savedLang);
    }

    applyTheme(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-mode');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.classList.remove('dark-mode');
            if (icon) {
                icon.className = 'fas fa-moon';
            }
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
}

// ================================================================
// INITIALIZE
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, initializing Personal Details...');
    
    // Check if languageManager exists
    if (typeof languageManager === 'undefined') {
        console.error('❌ languageManager not found!');
        return;
    }
    
    try {
        const app = new PersonalDetailsApp();
        window.personalDetailsApp = app;
        console.log('✅ Personal Details app initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize Personal Details app:', error);
    }
});