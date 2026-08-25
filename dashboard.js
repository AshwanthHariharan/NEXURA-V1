// ================================================================
// DASHBOARD.JS - Smart Pill Dispenser
// WITH FULL LANGUAGE SUPPORT (22 LANGUAGES)
// ================================================================

// ================================================================
// DASHBOARD TRANSLATIONS - 22 LANGUAGES
// ================================================================

const DASHBOARD_TRANSLATIONS = {
    en: {
        dashboard: 'Dashboard',
        schedule: 'Schedule',
        profile: 'Profile',
        logout: 'Logout',
        offline: 'Offline ⚠️',
        online: 'ESP32 Online ✅',
        connect: 'Connect',
        autoDiscover: 'Auto-Discover',
        refresh: 'Refresh',
        notConnected: 'Not connected',
        pillsRemaining: 'Pills Remaining',
        todaysDoses: "Today's Doses",
        adherenceRate: 'Adherence Rate',
        nextDose: 'Next Dose',
        lowPillWarning: '⚠️ Low Pill Count! Only',
        dailySummary: "Today's Summary",
        taken: 'Taken',
        pending: 'Pending',
        missed: 'Missed',
        todaysSchedule: "Today's Schedule",
        adherenceOverview: 'Adherence Overview',
        week: 'Week',
        month: 'Month',
        quickActions: 'Quick Actions',
        dispenseNow: 'Dispense Now',
        refillPills: 'Refill Pills',
        exportExcel: 'Export Excel',
        exportCSV: 'Export CSV',
        resetDoses: 'Reset Doses',
        recentActivity: 'Recent Activity',
        clear: 'Clear',
        noActivity: 'No activity yet',
        timeToTakeMedicine: 'Time to Take Medicine!',
        takeYourDose: "It's time for your dose. Please take your pills.",
        iHaveTakenPill: "I've Taken the Pill",
        snooze: 'Snooze',
        footerText: '© 2026 NEXURA. All rights reserved.'
    },
    hi: {
        dashboard: 'डैशबोर्ड',
        schedule: 'अनुसूची',
        profile: 'प्रोफ़ाइल',
        logout: 'लॉगआउट',
        offline: 'ऑफलाइन ⚠️',
        online: 'ESP32 ऑनलाइन ✅',
        connect: 'कनेक्ट करें',
        autoDiscover: 'स्वचालित खोज',
        refresh: 'ताज़ा करें',
        notConnected: 'कनेक्ट नहीं',
        pillsRemaining: 'शेष गोलियाँ',
        todaysDoses: "आज की खुराक",
        adherenceRate: 'अनुपालन दर',
        nextDose: 'अगली खुराक',
        lowPillWarning: '⚠️ कम गोलियाँ! केवल',
        dailySummary: "आज का सारांश",
        taken: 'ले ली',
        pending: 'लंबित',
        missed: 'छूटी',
        todaysSchedule: "आज की अनुसूची",
        adherenceOverview: 'अनुपालन अवलोकन',
        week: 'सप्ताह',
        month: 'महीना',
        quickActions: 'त्वरित क्रियाएँ',
        dispenseNow: 'अभी वितरित करें',
        refillPills: 'गोलियाँ भरें',
        exportExcel: 'एक्सेल निर्यात',
        exportCSV: 'सीएसवी निर्यात',
        resetDoses: 'खुराक रीसेट करें',
        recentActivity: 'हाल की गतिविधि',
        clear: 'साफ़ करें',
        noActivity: 'अभी तक कोई गतिविधि नहीं',
        timeToTakeMedicine: 'दवा लेने का समय!',
        takeYourDose: 'आपकी खुराक का समय है। कृपया अपनी गोलियाँ लें।',
        iHaveTakenPill: 'मैंने गोली ले ली है',
        snooze: 'स्नूज़',
        footerText: '© 2026 NEXURA. सर्वाधिकार सुरक्षित।'
    },
    bn: {
        dashboard: 'ড্যাশবোর্ড',
        schedule: 'সময়সূচী',
        profile: 'প্রোফাইল',
        logout: 'লগআউট',
        offline: 'অফলাইন ⚠️',
        online: 'ESP32 অনলাইন ✅',
        connect: 'সংযোগ করুন',
        autoDiscover: 'স্বয়ংক্রিয় আবিষ্কার',
        refresh: 'রিফ্রেশ',
        notConnected: 'সংযুক্ত নয়',
        pillsRemaining: 'অবশিষ্ট বড়ি',
        todaysDoses: "আজকের ডোজ",
        adherenceRate: 'অনুসরণ হার',
        nextDose: 'পরবর্তী ডোজ',
        lowPillWarning: '⚠️ কম বড়ি! শুধুমাত্র',
        dailySummary: "আজকের সারাংশ",
        taken: 'নেওয়া হয়েছে',
        pending: 'বাকি',
        missed: 'মিস হয়েছে',
        todaysSchedule: "আজকের সময়সূচী",
        adherenceOverview: 'অনুসরণ ওভারভিউ',
        week: 'সপ্তাহ',
        month: 'মাস',
        quickActions: 'দ্রুত কর্ম',
        dispenseNow: 'এখন বিতরণ করুন',
        refillPills: 'বড়ি পূরণ করুন',
        exportExcel: 'এক্সেল রপ্তানি',
        exportCSV: 'সিএসভি রপ্তানি',
        resetDoses: 'ডোজ রিসেট করুন',
        recentActivity: 'সাম্প্রতিক কার্যকলাপ',
        clear: 'সাফ করুন',
        noActivity: 'এখনো কোনো কার্যকলাপ নেই',
        timeToTakeMedicine: 'ঔষধ খাওয়ার সময়!',
        takeYourDose: 'আপনার ডোজের সময় এসেছে। দয়া করে আপনার বড়ি নিন।',
        iHaveTakenPill: 'আমি বড়ি নিয়েছি',
        snooze: 'স্নুজ',
        footerText: '© 2026 NEXURA. সর্বস্বত্ব সংরক্ষিত।'
    },
    te: {
        dashboard: 'డ్యాష్‌బోర్డ్',
        schedule: 'షెడ్యూల్',
        profile: 'ప్రొఫైల్',
        logout: 'లాగవుట్',
        offline: 'ఆఫ్‌లైన్ ⚠️',
        online: 'ESP32 ఆన్‌లైన్ ✅',
        connect: 'కనెక్ట్ చేయండి',
        autoDiscover: 'ఆటో-డిస్కవర్',
        refresh: 'రిఫ్రెష్',
        notConnected: 'కనెక్ట్ కాలేదు',
        pillsRemaining: 'మిగిలిన మాత్రలు',
        todaysDoses: "నేటి మోతాదులు",
        adherenceRate: 'అనుసరణ రేటు',
        nextDose: 'తదుపరి మోతాదు',
        lowPillWarning: '⚠️ తక్కువ మాత్రలు! కేవలం',
        dailySummary: "నేటి సారాంశం",
        taken: 'తీసుకున్నారు',
        pending: 'పెండింగ్',
        missed: 'మిస్ అయ్యాయి',
        todaysSchedule: "నేటి షెడ్యూల్",
        adherenceOverview: 'అనుసరణ అవలోకనం',
        week: 'వారం',
        month: 'నెల',
        quickActions: 'శీఘ్ర చర్యలు',
        dispenseNow: 'ఇప్పుడు పంపిణీ చేయండి',
        refillPills: 'మాత్రలు నింపండి',
        exportExcel: 'ఎక్సెల్ ఎగుమతి',
        exportCSV: 'CSV ఎగుమతి',
        resetDoses: 'మోతాదులను రీసెట్ చేయండి',
        recentActivity: 'ఇటీవలి కార్యాచరణ',
        clear: 'క్లియర్',
        noActivity: 'ఇంకా కార్యాచరణ లేదు',
        timeToTakeMedicine: 'మందు తీసుకునే సమయం!',
        takeYourDose: 'మీ మోతాదు సమయం వచ్చింది. దయచేసి మీ మాత్రలు తీసుకోండి.',
        iHaveTakenPill: 'నేను మాత్ర తీసుకున్నాను',
        snooze: 'స్నూజ్',
        footerText: '© 2026 NEXURA. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.'
    },
    mr: {
        dashboard: 'डॅशबोर्ड',
        schedule: 'वेळापत्रक',
        profile: 'प्रोफाइल',
        logout: 'लॉगआउट',
        offline: 'ऑफलाइन ⚠️',
        online: 'ESP32 ऑनलाइन ✅',
        connect: 'कनेक्ट करा',
        autoDiscover: 'स्वयं शोधा',
        refresh: 'ताजेतवाने करा',
        notConnected: 'कनेक्ट नाही',
        pillsRemaining: 'उरलेल्या गोळ्या',
        todaysDoses: "आजच्या खुराक",
        adherenceRate: 'पालन दर',
        nextDose: 'पुढील खुराक',
        lowPillWarning: '⚠️ कमी गोळ्या! फक्त',
        dailySummary: "आजचा सारांश",
        taken: 'घेतले',
        pending: 'प्रलंबित',
        missed: 'चुकले',
        todaysSchedule: "आजचे वेळापत्रक",
        adherenceOverview: 'पालन विहंगावलोकन',
        week: 'आठवडा',
        month: 'महिना',
        quickActions: 'त्वरित क्रिया',
        dispenseNow: 'आता वितरित करा',
        refillPills: 'गोळ्या भरा',
        exportExcel: 'एक्सेल निर्यात',
        exportCSV: 'सीएसव्ही निर्यात',
        resetDoses: 'खुराक रीसेट करा',
        recentActivity: 'अलीकडील क्रियाकलाप',
        clear: 'साफ करा',
        noActivity: 'अद्याप कोणतीही क्रियाकलाप नाही',
        timeToTakeMedicine: 'औषध घेण्याची वेळ!',
        takeYourDose: 'तुमच्या खुराकाची वेळ आली आहे. कृपया तुमच्या गोळ्या घ्या.',
        iHaveTakenPill: 'मी गोळी घेतली आहे',
        snooze: 'स्नूझ',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.'
    },
    ta: {
        dashboard: 'டாஷ்போர்டு',
        schedule: 'அட்டவணை',
        profile: 'சுயவிவரம்',
        logout: 'வெளியேறு',
        offline: 'ஆஃப்லைன் ⚠️',
        online: 'ESP32 ஆன்லைன் ✅',
        connect: 'இணைக்கவும்',
        autoDiscover: 'தானியங்கி கண்டுபிடிப்பு',
        refresh: 'புதுப்பி',
        notConnected: 'இணைக்கப்படவில்லை',
        pillsRemaining: 'எஞ்சிய மாத்திரைகள்',
        todaysDoses: "இன்றைய மருந்துகள்",
        adherenceRate: 'இணக்கம் விகிதம்',
        nextDose: 'அடுத்த மருந்து',
        lowPillWarning: '⚠️ குறைவான மாத்திரைகள்! மட்டும்',
        dailySummary: "இன்றைய சுருக்கம்",
        taken: 'எடுத்துக்கொள்ளப்பட்டது',
        pending: 'நிலுவையில்',
        missed: 'தவறவிட்டது',
        todaysSchedule: "இன்றைய அட்டவணை",
        adherenceOverview: 'இணக்கம் கண்ணோட்டம்',
        week: 'வாரம்',
        month: 'மாதம்',
        quickActions: 'விரைவு செயல்கள்',
        dispenseNow: 'இப்போது வழங்கு',
        refillPills: 'மாத்திரைகள் நிரப்பு',
        exportExcel: 'எக்செல் ஏற்றுமதி',
        exportCSV: 'சிஎஸ்வி ஏற்றுமதி',
        resetDoses: 'மருந்துகளை மீட்டமை',
        recentActivity: 'சமீபத்திய செயல்பாடு',
        clear: 'அழிக்கவும்',
        noActivity: 'இதுவரை செயல்பாடு இல்லை',
        timeToTakeMedicine: 'மருந்து எடுக்கும் நேரம்!',
        takeYourDose: 'உங்கள் மருந்திற்கான நேரம் வந்துவிட்டது. உங்கள் மாத்திரைகளை எடுத்துக் கொள்ளுங்கள்.',
        iHaveTakenPill: 'நான் மாத்திரை எடுத்துக் கொண்டேன்',
        snooze: 'ஸ்னூஸ்',
        footerText: '© 2026 NEXURA. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    },
    gu: {
        dashboard: 'ડેશબોર્ડ',
        schedule: 'અનુસૂચિ',
        profile: 'પ્રોફાઇલ',
        logout: 'લૉગઆઉટ',
        offline: 'ઑફલાઇન ⚠️',
        online: 'ESP32 ઑનલાઇન ✅',
        connect: 'કનેક્ટ કરો',
        autoDiscover: 'ઓટો-શોધ',
        refresh: 'રિફ્રેશ',
        notConnected: 'કનેક્ટેડ નથી',
        pillsRemaining: 'બાકીની ગોળીઓ',
        todaysDoses: "આજની માત્રા",
        adherenceRate: 'અનુપાલન દર',
        nextDose: 'આગલી માત્રા',
        lowPillWarning: '⚠️ ઓછી ગોળીઓ! ફક્ત',
        dailySummary: "આજનો સારાંશ",
        taken: 'લીધી',
        pending: 'બાકી',
        missed: 'ચૂકી',
        todaysSchedule: "આજની અનુસૂચિ",
        adherenceOverview: 'અનુપાલન ઝાંખી',
        week: 'સપ્તાહ',
        month: 'મહિનો',
        quickActions: 'ઝડપી ક્રિયાઓ',
        dispenseNow: 'હવે વિતરણ કરો',
        refillPills: 'ગોળીઓ ભરો',
        exportExcel: 'એક્સેલ નિકાસ',
        exportCSV: 'સી.એસ.વી. નિકાસ',
        resetDoses: 'માત્રા રીસેટ કરો',
        recentActivity: 'તાજેતરની પ્રવૃત્તિ',
        clear: 'સાફ કરો',
        noActivity: 'હજી સુધી કોઈ પ્રવૃત્તિ નથી',
        timeToTakeMedicine: 'દવા લેવાનો સમય!',
        takeYourDose: 'તમારી માત્રાનો સમય આવી ગયો છે. કૃપા કરીને તમારી ગોળીઓ લો.',
        iHaveTakenPill: 'મેં ગોળી લીધી છે',
        snooze: 'સ્નૂઝ',
        footerText: '© 2026 NEXURA. સર્વાધિકાર સુરક્ષિત.'
    },
    kn: {
        dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        schedule: 'ವೇಳಾಪಟ್ಟಿ',
        profile: 'ಪ್ರೊಫೈಲ್',
        logout: 'ಲಾಗ್‌ಔಟ್',
        offline: 'ಆಫ್‌ಲೈನ್ ⚠️',
        online: 'ESP32 ಆನ್‌ಲೈನ್ ✅',
        connect: 'ಸಂಪರ್ಕಿಸಿ',
        autoDiscover: 'ಸ್ವಯಂ-ಹುಡುಕು',
        refresh: 'ರಿಫ್ರೆಶ್',
        notConnected: 'ಸಂಪರ್ಕವಿಲ್ಲ',
        pillsRemaining: 'ಉಳಿದ ಮಾತ್ರೆಗಳು',
        todaysDoses: "ಇಂದಿನ ಪ್ರಮಾಣಗಳು",
        adherenceRate: 'ಅನುಸರಣೆ ದರ',
        nextDose: 'ಮುಂದಿನ ಪ್ರಮಾಣ',
        lowPillWarning: '⚠️ ಕಡಿಮೆ ಮಾತ್ರೆಗಳು! ಕೇವಲ',
        dailySummary: "ಇಂದಿನ ಸಾರಾಂಶ",
        taken: 'ತೆಗೆದುಕೊಂಡರು',
        pending: 'ಬಾಕಿ',
        missed: 'ತಪ್ಪಿಸಿಕೊಂಡರು',
        todaysSchedule: "ಇಂದಿನ ವೇಳಾಪಟ್ಟಿ",
        adherenceOverview: 'ಅನುಸರಣೆ ಅವಲೋಕನ',
        week: 'ವಾರ',
        month: 'ತಿಂಗಳು',
        quickActions: 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು',
        dispenseNow: 'ಈಗ ವಿತರಿಸಿ',
        refillPills: 'ಮಾತ್ರೆಗಳನ್ನು ತುಂಬಿಸಿ',
        exportExcel: 'ಎಕ್ಸೆಲ್ ರಫ್ತು',
        exportCSV: 'ಸಿಎಸ್ವಿ ರಫ್ತು',
        resetDoses: 'ಪ್ರಮಾಣಗಳನ್ನು ಮರುಹೊಂದಿಸಿ',
        recentActivity: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
        clear: 'ತೆರವುಗೊಳಿಸಿ',
        noActivity: 'ಇನ್ನೂ ಯಾವುದೇ ಚಟುವಟಿಕೆ ಇಲ್ಲ',
        timeToTakeMedicine: 'ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯ!',
        takeYourDose: 'ನಿಮ್ಮ ಪ್ರಮಾಣದ ಸಮಯ ಬಂದಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮಾತ್ರೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.',
        iHaveTakenPill: 'ನಾನು ಮಾತ್ರೆ ತೆಗೆದುಕೊಂಡಿದ್ದೇನೆ',
        snooze: 'ಸ್ನೂಜ್',
        footerText: '© 2026 NEXURA. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
    },
    ml: {
        dashboard: 'ഡാഷ്ബോർഡ്',
        schedule: 'ഷെഡ്യൂൾ',
        profile: 'പ്രൊഫൈൽ',
        logout: 'ലോഗൗട്ട്',
        offline: 'ഓഫ്ലൈൻ ⚠️',
        online: 'ESP32 ഓൺലൈൻ ✅',
        connect: 'കണക്റ്റ് ചെയ്യുക',
        autoDiscover: 'ഓട്ടോ-കണ്ടെത്തുക',
        refresh: 'പുതുക്കുക',
        notConnected: 'കണക്റ്റ് ചെയ്തിട്ടില്ല',
        pillsRemaining: 'ശേഷിക്കുന്ന ഗുളികകൾ',
        todaysDoses: "ഇന്നത്തെ ഡോസുകൾ",
        adherenceRate: 'അനുസരണ നിരക്ക്',
        nextDose: 'അടുത്ത ഡോസ്',
        lowPillWarning: '⚠️ കുറഞ്ഞ ഗുളികകൾ! മാത്രം',
        dailySummary: "ഇന്നത്തെ സംഗ്രഹം",
        taken: 'എടുത്തു',
        pending: 'ബാക്കി',
        missed: 'നഷ്ടപ്പെട്ടു',
        todaysSchedule: "ഇന്നത്തെ ഷെഡ്യൂൾ",
        adherenceOverview: 'അനുസരണ അവലോകനം',
        week: 'ആഴ്ച',
        month: 'മാസം',
        quickActions: 'ദ്രുത പ്രവർത്തനങ്ങൾ',
        dispenseNow: 'ഇപ്പോൾ വിതരണം ചെയ്യുക',
        refillPills: 'ഗുളികകൾ നിറയ്ക്കുക',
        exportExcel: 'എക്സൽ എക്സ്പോർട്ട്',
        exportCSV: 'CSV എക്സ്പോർട്ട്',
        resetDoses: 'ഡോസുകൾ പുനഃസജ്ജമാക്കുക',
        recentActivity: 'സമീപകാല പ്രവർത്തനം',
        clear: 'മായ്ക്കുക',
        noActivity: 'ഇതുവരെ പ്രവർത്തനമില്ല',
        timeToTakeMedicine: 'മരുന്ന് കഴിക്കാനുള്ള സമയം!',
        takeYourDose: 'നിങ്ങളുടെ ഡോസിന്റെ സമയമായി. ദയവായി നിങ്ങളുടെ ഗുളികകൾ കഴിക്കുക.',
        iHaveTakenPill: 'ഞാൻ ഗുളിക കഴിച്ചു',
        snooze: 'സ്നൂസ്',
        footerText: '© 2026 NEXURA. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.'
    },
    pa: {
        dashboard: 'ਡੈਸ਼ਬੋਰਡ',
        schedule: 'ਅਨੁਸੂਚੀ',
        profile: 'ਪ੍ਰੋਫਾਈਲ',
        logout: 'ਲੌਗਆਉਟ',
        offline: 'ਔਫਲਾਈਨ ⚠️',
        online: 'ESP32 ਔਨਲਾਈਨ ✅',
        connect: 'ਕਨੈਕਟ ਕਰੋ',
        autoDiscover: 'ਆਟੋ-ਖੋਜ',
        refresh: 'ਰੀਫ੍ਰੈਸ਼',
        notConnected: 'ਕਨੈਕਟ ਨਹੀਂ',
        pillsRemaining: 'ਬਾਕੀ ਗੋਲੀਆਂ',
        todaysDoses: "ਅੱਜ ਦੀਆਂ ਖੁਰਾਕਾਂ",
        adherenceRate: 'ਪਾਲਣ ਦਰ',
        nextDose: 'ਅਗਲੀ ਖੁਰਾਕ',
        lowPillWarning: '⚠️ ਘੱਟ ਗੋਲੀਆਂ! ਸਿਰਫ',
        dailySummary: "ਅੱਜ ਦਾ ਸਾਰ",
        taken: 'ਲਈ',
        pending: 'ਬਾਕੀ',
        missed: 'ਖੁੰਝੀ',
        todaysSchedule: "ਅੱਜ ਦੀ ਅਨੁਸੂਚੀ",
        adherenceOverview: 'ਪਾਲਣ ਸੰਖੇਪ',
        week: 'ਹਫਤਾ',
        month: 'ਮਹੀਨਾ',
        quickActions: 'ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ',
        dispenseNow: 'ਹੁਣ ਵੰਡੋ',
        refillPills: 'ਗੋਲੀਆਂ ਭਰੋ',
        exportExcel: 'ਐਕਸਲ ਨਿਰਯਾਤ',
        exportCSV: 'ਸੀਐਸਵੀ ਨਿਰਯਾਤ',
        resetDoses: 'ਖੁਰਾਕਾਂ ਰੀਸੈੱਟ ਕਰੋ',
        recentActivity: 'ਹਾਲੀਆ ਗਤੀਵਿਧੀ',
        clear: 'ਸਾਫ਼ ਕਰੋ',
        noActivity: 'ਹਾਲੇ ਤੱਕ ਕੋਈ ਗਤੀਵਿਧੀ ਨਹੀਂ',
        timeToTakeMedicine: 'ਦਵਾਈ ਲੈਣ ਦਾ ਸਮਾਂ!',
        takeYourDose: 'ਤੁਹਾਡੀ ਖੁਰਾਕ ਦਾ ਸਮਾਂ ਆ ਗਿਆ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀਆਂ ਗੋਲੀਆਂ ਲਓ।',
        iHaveTakenPill: 'ਮੈਂ ਗੋਲੀ ਲੈ ਲਈ ਹੈ',
        snooze: 'ਸਨੂਜ਼',
        footerText: '© 2026 NEXURA. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।'
    },
    or: {
        dashboard: 'ଡ୍ୟାଶବୋର୍ଡ',
        schedule: 'ସମୟସୂଚୀ',
        profile: 'ପ୍ରୋଫାଇଲ୍',
        logout: 'ଲଗଆଉଟ୍',
        offline: 'ଅଫଲାଇନ୍ ⚠️',
        online: 'ESP32 ଅନଲାଇନ୍ ✅',
        connect: 'ସଂଯୋଗ କରନ୍ତୁ',
        autoDiscover: 'ସ୍ୱୟଂ-ଆବିଷ୍କାର',
        refresh: 'ରିଫ୍ରେଶ୍',
        notConnected: 'ସଂଯୋଗ ନାହିଁ',
        pillsRemaining: 'ଅବଶିଷ୍ଟ ଗୁଳି',
        todaysDoses: "ଆଜିର ମାତ୍ରା",
        adherenceRate: 'ଅନୁସରଣ ହାର',
        nextDose: 'ପରବର୍ତ୍ତୀ ମାତ୍ରା',
        lowPillWarning: '⚠️ କମ୍ ଗୁଳି! କେବଳ',
        dailySummary: "ଆଜିର ସାରାଂଶ",
        taken: 'ନେଇଛନ୍ତି',
        pending: 'ବାକି',
        missed: 'ହଜିଛି',
        todaysSchedule: "ଆଜିର ସମୟସୂଚୀ",
        adherenceOverview: 'ଅନୁସରଣ ଅବଲୋକନ',
        week: 'ସପ୍ତାହ',
        month: 'ମାସ',
        quickActions: 'ଶୀଘ୍ର କାର୍ଯ୍ୟ',
        dispenseNow: 'ଏବେ ବିତରଣ କରନ୍ତୁ',
        refillPills: 'ଗୁଳି ଭର୍ତ୍ତି କରନ୍ତୁ',
        exportExcel: 'ଏକ୍ସେଲ୍ ରପ୍ତାନି',
        exportCSV: 'CSV ରପ୍ତାନି',
        resetDoses: 'ମାତ୍ରା ରିସେଟ୍ କରନ୍ତୁ',
        recentActivity: 'ସାମ୍ପ୍ରତିକ କାର୍ଯ୍ୟକଳାପ',
        clear: 'ସଫା କରନ୍ତୁ',
        noActivity: 'ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି କାର୍ଯ୍ୟକଳାପ ନାହିଁ',
        timeToTakeMedicine: 'ଔଷଧ ନେବାର ସମୟ!',
        takeYourDose: 'ଆପଣଙ୍କ ମାତ୍ରାର ସମୟ ଆସିଛି। ଦୟାକରି ଆପଣଙ୍କ ଗୁଳି ନିଅନ୍ତୁ।',
        iHaveTakenPill: 'ମୁଁ ଗୁଳି ନେଇଛି',
        snooze: 'ସ୍ନୁଜ୍',
        footerText: '© 2026 NEXURA. ସମସ୍ତ ଅଧିକାର ସୁରକ୍ଷିତ।'
    },
    as: {
        dashboard: 'ডেছবৰ্ড',
        schedule: 'সময়সূচী',
        profile: 'প্ৰ ফাইল',
        logout: 'লগআউট',
        offline: 'অফলাইন ⚠️',
        online: 'ESP32 অনলাইন ✅',
        connect: 'সংযোগ কৰক',
        autoDiscover: 'স্বয়ং-আৱিষ্কাৰ',
        refresh: 'ৰিফ্ৰেশ',
        notConnected: 'সংযুক্ত নহয়',
        pillsRemaining: 'বাকী গুলি',
        todaysDoses: "আজিৰ মাত্ৰা",
        adherenceRate: 'অনুসৰণ হাৰ',
        nextDose: 'পৰৱৰ্তী মাত্ৰা',
        lowPillWarning: '⚠️ কম গুলি! কেৱল',
        dailySummary: "আজিৰ সাৰাংশ",
        taken: 'লৈছে',
        pending: 'বাকী',
        missed: 'হেৰুৱাইছে',
        todaysSchedule: "আজিৰ সময়সূচী",
        adherenceOverview: 'অনুসৰণ আভাস',
        week: 'সপ্তাহ',
        month: 'মাহ',
        quickActions: 'শীঘ্ৰ কাৰ্য',
        dispenseNow: 'এতিয়া বিতৰণ কৰক',
        refillPills: 'গুলি ভৰাওক',
        exportExcel: 'এক্সেল ৰপ্তানি',
        exportCSV: 'CSV ৰপ্তানি',
        resetDoses: 'মাত্ৰা ৰিচেট কৰক',
        recentActivity: 'শেহতীয়া কাৰ্যকলাপ',
        clear: 'পৰিষ্কাৰ কৰক',
        noActivity: 'এতিয়ালৈ কোনো কাৰ্যকলাপ নাই',
        timeToTakeMedicine: 'ঔষধ খোৱাৰ সময়!',
        takeYourDose: 'আপোনাৰ মাত্ৰাৰ সময় আহিছে। অনুগ্ৰহ কৰি আপোনাৰ গুলি খাওক।',
        iHaveTakenPill: 'মই গুলি খাইছো',
        snooze: 'স্নুজ',
        footerText: '© 2026 NEXURA. সকলো অধিকাৰ সংৰক্ষিত।'
    },
    ur: {
        dashboard: 'ڈیش بورڈ',
        schedule: 'شیڈول',
        profile: 'پروفائل',
        logout: 'لاگ آؤٹ',
        offline: 'آف لائن ⚠️',
        online: 'ESP32 آن لائن ✅',
        connect: 'کنیکٹ کریں',
        autoDiscover: 'خود کار دریافت',
        refresh: 'ریفریش کریں',
        notConnected: 'منسلک نہیں',
        pillsRemaining: 'باقی گولیاں',
        todaysDoses: "آج کی خوراکیں",
        adherenceRate: 'پابندی کی شرح',
        nextDose: 'اگلی خوراک',
        lowPillWarning: '⚠️ کم گولیاں! صرف',
        dailySummary: "آج کا خلاصہ",
        taken: 'لی',
        pending: 'زیر التواء',
        missed: 'چھوٹ گئی',
        todaysSchedule: "آج کا شیڈول",
        adherenceOverview: 'پابندی کا جائزہ',
        week: 'ہفتہ',
        month: 'مہینہ',
        quickActions: 'فوری اعمال',
        dispenseNow: 'ابھی تقسیم کریں',
        refillPills: 'گولیاں بھریں',
        exportExcel: 'ایکسل برآمد',
        exportCSV: 'CSV برآمد',
        resetDoses: 'خوراکیں دوبارہ سیٹ کریں',
        recentActivity: 'حالیہ سرگرمی',
        clear: 'صاف کریں',
        noActivity: 'ابھی تک کوئی سرگرمی نہیں',
        timeToTakeMedicine: 'دوا لینے کا وقت!',
        takeYourDose: 'آپ کی خوراک کا وقت آ گیا ہے۔ براہ کرم اپنی گولیاں لیں۔',
        iHaveTakenPill: 'میں نے گولی لے لی ہے',
        snooze: 'اسنوز',
        footerText: '© 2026 NEXURA. جملہ حقوق محفوظ ہیں۔'
    },
    kok: {
        dashboard: 'डॅशबोर्ड',
        schedule: 'वेळापत्रक',
        profile: 'प्रोफायल',
        logout: 'लॉगआउट',
        offline: 'ऑफलाइन ⚠️',
        online: 'ESP32 ऑनलाइन ✅',
        connect: 'कनेक्ट करात',
        autoDiscover: 'आपसूक सोधात',
        refresh: 'रिफ्रेश करात',
        notConnected: 'कनेक्ट ना',
        pillsRemaining: 'उरलेल्या गोळ्यो',
        todaysDoses: "आयचे डोस",
        adherenceRate: 'पालन दर',
        nextDose: 'फुडलो डोस',
        lowPillWarning: '⚠️ कमी गोळ्यो! फक्त',
        dailySummary: "आयचो सारांश",
        taken: 'घेतली',
        pending: 'बाकी',
        missed: 'चुकली',
        todaysSchedule: "आयचें वेळापत्रक",
        adherenceOverview: 'पालन विहंगावलोकन',
        week: 'आठवडो',
        month: 'म्हयनो',
        quickActions: 'त्वरित कार्यां',
        dispenseNow: 'आतां वितरित करात',
        refillPills: 'गोळ्यो भरात',
        exportExcel: 'एक्सेल निर्यात',
        exportCSV: 'सीएसव्ही निर्यात',
        resetDoses: 'डोस रीसेट करात',
        recentActivity: 'अलिकडची क्रियाकलाप',
        clear: 'साफ करात',
        noActivity: 'अजून क्रियाकलाप ना',
        timeToTakeMedicine: 'औषध घेवपाची वेळ!',
        takeYourDose: 'तुमच्या डोसाची वेळ आयली. कृपया तुमच्यो गोळ्यो घेवात.',
        iHaveTakenPill: 'हांव गोळी घेतली',
        snooze: 'स्नूज',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.'
    },
    mni: {
        dashboard: 'ড্যাশবোর্ড',
        schedule: 'অনুসূচী',
        profile: 'প্রোফাইল',
        logout: 'লগআউট',
        offline: 'অফলাইন ⚠️',
        online: 'ESP32 অনলাইন ✅',
        connect: 'সংযোগ তৌ',
        autoDiscover: 'অটো-আবিষ্কার',
        refresh: 'রিফ্রেশ',
        notConnected: 'সংযোগ লৈত্রে',
        pillsRemaining: 'চহি লৈবা তান',
        todaysDoses: "ঙাক্পগী মাত্রা",
        adherenceRate: 'অনুসরণ হার',
        nextDose: 'মমাং মাত্রা',
        lowPillWarning: '⚠️ কম তান! কেবল',
        dailySummary: "ঙাক্পগী সারাংশ",
        taken: 'লৌখি',
        pending: 'গদবা',
        missed: 'নাংথিবা',
        todaysSchedule: "ঙাক্পগী অনুসূচী",
        adherenceOverview: 'অনুসরণ অৱলোকন',
        week: 'চায়োল',
        month: 'থা',
        quickActions: 'অবুং কাউরি',
        dispenseNow: 'হৌজিক্কী পী',
        refillPills: 'তান অমুক্কী থম্মী',
        exportExcel: 'এক্সেল পুথকী',
        exportCSV: 'CSV পুথকী',
        resetDoses: 'মাত্রা রিসেট তৌ',
        recentActivity: 'ঙাক্তগী কাউরি',
        clear: 'থাদোক্কী',
        noActivity: 'ঙাক্তা কাউরি লৈত্রে',
        timeToTakeMedicine: 'তান লোইনবা প্রায়া!',
        takeYourDose: 'নগী মাত্রাগী প্রায়া লৈখ্রে। অমুক্কী নগী তান লোইরু।',
        iHaveTakenPill: 'ঐ তান লোইখ্রে',
        snooze: 'স্নুজ',
        footerText: '© 2026 NEXURA. মতম পূন্সি মখা থম্মী।'
    },
    ne: {
        dashboard: 'ड्यासबोर्ड',
        schedule: 'तालिका',
        profile: 'प्रोफाइल',
        logout: 'लगआउट',
        offline: 'अफलाइन ⚠️',
        online: 'ESP32 अनलाइन ✅',
        connect: 'जडान गर्नुहोस्',
        autoDiscover: 'स्वत: पत्ता लगाउनुहोस्',
        refresh: 'ताजा गर्नुहोस्',
        notConnected: 'जडान भएको छैन',
        pillsRemaining: 'बाँकी चक्कीहरू',
        todaysDoses: "आजको खुराक",
        adherenceRate: 'पालन दर',
        nextDose: 'अर्को खुराक',
        lowPillWarning: '⚠️ कम चक्कीहरू! मात्र',
        dailySummary: "आजको सारांश",
        taken: 'लिए',
        pending: 'बाँकी',
        missed: 'छुटेको',
        todaysSchedule: "आजको तालिका",
        adherenceOverview: 'पालन अवलोकन',
        week: 'हप्ता',
        month: 'महिना',
        quickActions: 'द्रुत कार्यहरू',
        dispenseNow: 'अहिले वितरण गर्नुहोस्',
        refillPills: 'चक्कीहरू भर्नुहोस्',
        exportExcel: 'एक्सेल निर्यात',
        exportCSV: 'CSV निर्यात',
        resetDoses: 'खुराक रिसेट गर्नुहोस्',
        recentActivity: 'हालको गतिविधि',
        clear: 'सफा गर्नुहोस्',
        noActivity: 'अहिलेसम्म कुनै गतिविधि छैन',
        timeToTakeMedicine: 'औषधि लिने समय!',
        takeYourDose: 'तपाईंको खुराकको समय भयो। कृपया आफ्नो चक्कीहरू लिनुहोस्।',
        iHaveTakenPill: 'मैले चक्की लिएँ',
        snooze: 'स्नूज',
        footerText: '© 2026 NEXURA. सबै अधिकार सुरक्षित।'
    },
    sa: {
        dashboard: 'ड्याश्बोर्डः',
        schedule: 'अनुसूची',
        profile: 'प्रोफाइल्',
        logout: 'निर्गच्छतु',
        offline: 'असंयुक्तम् ⚠️',
        online: 'ESP32 संयुक्तम् ✅',
        connect: 'योजयतु',
        autoDiscover: 'स्वयम्अन्वेषणम्',
        refresh: 'नवीकरोतु',
        notConnected: 'न संयुक्तम्',
        pillsRemaining: 'अवशिष्टगोलिकाः',
        todaysDoses: "अद्यतनमात्राः",
        adherenceRate: 'अनुपालनदरः',
        nextDose: 'अग्रिममात्रा',
        lowPillWarning: '⚠️ न्यूनगोलिकाः! केवल',
        dailySummary: "अद्यतनसारांशः",
        taken: 'गृहीतम्',
        pending: 'प्रतीक्षमाणम्',
        missed: 'त्यक्तम्',
        todaysSchedule: "अद्यतनानुसूची",
        adherenceOverview: 'अनुपालनावलोकनम्',
        week: 'सप्ताहः',
        month: 'मासः',
        quickActions: 'शीघ्रकर्माणि',
        dispenseNow: 'अधुना वितरयतु',
        refillPills: 'गोलिकाः पुनः पूरयतु',
        exportExcel: 'Excel निर्यातयतु',
        exportCSV: 'CSV निर्यातयतु',
        resetDoses: 'मात्राः पुनः स्थापयतु',
        recentActivity: 'नूतनक्रियाकलापः',
        clear: 'शोधयतु',
        noActivity: 'अद्यापि क्रियाकलापः नास्ति',
        timeToTakeMedicine: 'औषधसेवनसमयः!',
        takeYourDose: 'भवतः मात्रायाः समयः अस्ति। कृपया गोलिकाः स्वीकरोतु।',
        iHaveTakenPill: 'अहं गोलिकां गृहीतवान्',
        snooze: 'स्थगयतु',
        footerText: '© २०२६ NEXURA. सर्वे अधिकाराः सुरक्षिताः।'
    },
    es: {
        dashboard: 'Panel de Control',
        schedule: 'Horario',
        profile: 'Perfil',
        logout: 'Cerrar Sesión',
        offline: 'Sin Conexión ⚠️',
        online: 'ESP32 En Línea ✅',
        connect: 'Conectar',
        autoDiscover: 'Detección Automática',
        refresh: 'Actualizar',
        notConnected: 'No conectado',
        pillsRemaining: 'Pastillas Restantes',
        todaysDoses: "Dosis de Hoy",
        adherenceRate: 'Tasa de Adherencia',
        nextDose: 'Próxima Dosis',
        lowPillWarning: '⚠️ ¡Pocas Pastillas! Solo',
        dailySummary: "Resumen del Día",
        taken: 'Tomado',
        pending: 'Pendiente',
        missed: 'Perdido',
        todaysSchedule: "Horario de Hoy",
        adherenceOverview: 'Resumen de Adherencia',
        week: 'Semana',
        month: 'Mes',
        quickActions: 'Acciones Rápidas',
        dispenseNow: 'Dispensar Ahora',
        refillPills: 'Rellenar Pastillas',
        exportExcel: 'Exportar Excel',
        exportCSV: 'Exportar CSV',
        resetDoses: 'Reiniciar Dosis',
        recentActivity: 'Actividad Reciente',
        clear: 'Limpiar',
        noActivity: 'Sin actividad aún',
        timeToTakeMedicine: '¡Hora de Tomar Medicina!',
        takeYourDose: 'Es hora de tu dosis. Por favor toma tus pastillas.',
        iHaveTakenPill: 'He Tomado la Pastilla',
        snooze: 'Posponer',
        footerText: '© 2026 NEXURA. Todos los derechos reservados.'
    },
    fr: {
        dashboard: 'Tableau de Bord',
        schedule: 'Calendrier',
        profile: 'Profil',
        logout: 'Déconnexion',
        offline: 'Hors Ligne ⚠️',
        online: 'ESP32 En Ligne ✅',
        connect: 'Connecter',
        autoDiscover: 'Détection Auto',
        refresh: 'Actualiser',
        notConnected: 'Non connecté',
        pillsRemaining: 'Pilules Restantes',
        todaysDoses: "Doses d'Aujourd'hui",
        adherenceRate: "Taux d'Observance",
        nextDose: 'Prochaine Dose',
        lowPillWarning: '⚠️ Peu de Pilules! Seulement',
        dailySummary: "Résumé du Jour",
        taken: 'Pris',
        pending: 'En Attente',
        missed: 'Manqué',
        todaysSchedule: "Calendrier d'Aujourd'hui",
        adherenceOverview: "Aperçu de l'Observance",
        week: 'Semaine',
        month: 'Mois',
        quickActions: 'Actions Rapides',
        dispenseNow: 'Dispenser Maintenant',
        refillPills: 'Recharger les Pilules',
        exportExcel: 'Exporter Excel',
        exportCSV: 'Exporter CSV',
        resetDoses: 'Réinitialiser les Doses',
        recentActivity: 'Activité Récente',
        clear: 'Effacer',
        noActivity: 'Pas encore d\'activité',
        timeToTakeMedicine: 'Heure de Prendre le Médicament!',
        takeYourDose: 'Il est temps pour votre dose. Veuillez prendre vos pilules.',
        iHaveTakenPill: 'J\'ai Pris la Pilule',
        snooze: 'Rappeler Plus Tard',
        footerText: '© 2026 NEXURA. Tous droits réservés.'
    },
    de: {
        dashboard: 'Dashboard',
        schedule: 'Zeitplan',
        profile: 'Profil',
        logout: 'Abmelden',
        offline: 'Offline ⚠️',
        online: 'ESP32 Online ✅',
        connect: 'Verbinden',
        autoDiscover: 'Auto-Erkennung',
        refresh: 'Aktualisieren',
        notConnected: 'Nicht verbunden',
        pillsRemaining: 'Verbleibende Pillen',
        todaysDoses: "Heutige Dosen",
        adherenceRate: 'Adhärenzrate',
        nextDose: 'Nächste Dosis',
        lowPillWarning: '⚠️ Wenige Pillen! Nur',
        dailySummary: "Heutige Zusammenfassung",
        taken: 'Genommen',
        pending: 'Ausstehend',
        missed: 'Verpasst',
        todaysSchedule: "Heutiger Zeitplan",
        adherenceOverview: 'Adhärenzübersicht',
        week: 'Woche',
        month: 'Monat',
        quickActions: 'Schnellaktionen',
        dispenseNow: 'Jetzt ausgeben',
        refillPills: 'Pillen nachfüllen',
        exportExcel: 'Excel exportieren',
        exportCSV: 'CSV exportieren',
        resetDoses: 'Dosen zurücksetzen',
        recentActivity: 'Letzte Aktivitäten',
        clear: 'Löschen',
        noActivity: 'Noch keine Aktivität',
        timeToTakeMedicine: 'Zeit für Medikamente!',
        takeYourDose: 'Es ist Zeit für Ihre Dosis. Bitte nehmen Sie Ihre Pillen.',
        iHaveTakenPill: 'Ich habe die Pille genommen',
        snooze: 'Erinnern',
        footerText: '© 2026 NEXURA. Alle Rechte vorbehalten.'
    },
    ja: {
        dashboard: 'ダッシュボード',
        schedule: 'スケジュール',
        profile: 'プロフィール',
        logout: 'ログアウト',
        offline: 'オフライン ⚠️',
        online: 'ESP32 オンライン ✅',
        connect: '接続',
        autoDiscover: '自動検出',
        refresh: '更新',
        notConnected: '未接続',
        pillsRemaining: '残りの錠剤',
        todaysDoses: "今日の投与量",
        adherenceRate: 'アドヒアランス率',
        nextDose: '次の投与量',
        lowPillWarning: '⚠️ 錠剤が少ない！残り',
        dailySummary: "今日のサマリー",
        taken: '服用済み',
        pending: '保留中',
        missed: '未服用',
        todaysSchedule: "今日のスケジュール",
        adherenceOverview: 'アドヒアランス概要',
        week: '週',
        month: '月',
        quickActions: 'クイックアクション',
        dispenseNow: '今すぐ排出',
        refillPills: '錠剤を補充',
        exportExcel: 'エクセル出力',
        exportCSV: 'CSV出力',
        resetDoses: '投与量をリセット',
        recentActivity: '最近の活動',
        clear: 'クリア',
        noActivity: 'まだ活動はありません',
        timeToTakeMedicine: '服薬時間です！',
        takeYourDose: 'あなたの投与時間です。錠剤を服用してください。',
        iHaveTakenPill: '錠剤を服用しました',
        snooze: 'スヌーズ',
        footerText: '© 2026 NEXURA. 全著作権所有。'
    },
    zh: {
        dashboard: '仪表板',
        schedule: '时间表',
        profile: '个人资料',
        logout: '登出',
        offline: '离线 ⚠️',
        online: 'ESP32 在线 ✅',
        connect: '连接',
        autoDiscover: '自动发现',
        refresh: '刷新',
        notConnected: '未连接',
        pillsRemaining: '剩余药片',
        todaysDoses: "今日剂量",
        adherenceRate: '依从率',
        nextDose: '下次剂量',
        lowPillWarning: '⚠️ 药片不足！仅剩',
        dailySummary: "今日摘要",
        taken: '已服用',
        pending: '待服用',
        missed: '错过',
        todaysSchedule: "今日时间表",
        adherenceOverview: '依从性概览',
        week: '周',
        month: '月',
        quickActions: '快速操作',
        dispenseNow: '立即分发',
        refillPills: '补充药片',
        exportExcel: '导出Excel',
        exportCSV: '导出CSV',
        resetDoses: '重置剂量',
        recentActivity: '最近活动',
        clear: '清除',
        noActivity: '暂无活动',
        timeToTakeMedicine: '该服药了！',
        takeYourDose: '您的服药时间到了。请服用您的药片。',
        iHaveTakenPill: '我已服药',
        snooze: '稍后提醒',
        footerText: '© 2026 NEXURA. 保留所有权利。'
    }
};

// ================================================================
// EXTEND LANGUAGE MANAGER WITH DASHBOARD TRANSLATIONS
// ================================================================

if (typeof languageManager !== 'undefined') {
    const existingTranslations = languageManager.translations || {};
    Object.keys(DASHBOARD_TRANSLATIONS).forEach(lang => {
        if (!existingTranslations[lang]) {
            existingTranslations[lang] = {};
        }
        Object.assign(existingTranslations[lang], DASHBOARD_TRANSLATIONS[lang]);
    });
    languageManager.translations = existingTranslations;
    console.log('✅ Dashboard translations merged into languageManager');
}

// ================================================================
// DASHBOARD APP CLASS
// ================================================================

class DashboardApp {
    constructor() {
        console.log('🚀 NEXURA Dashboard Initialized');
        
        // ============================================================
        // ESP32 CONFIGURATION
        // ============================================================
        this.esp32IP = localStorage.getItem('esp32_ip') || '10.0.1.101';
        this.esp32Online = false;
        this.esp32Checked = false;
        
        // ============================================================
        // STATE
        // ============================================================
        this.pillCount = 0;
        this.doseLog = [];
        this.adherenceData = [];
        this.chart = null;
        this.chartPeriod = 'week';
        this.alertActive = false;
        this.lastCheckedMinute = -1;
        this.languageManager = languageManager;
        
        // ============================================================
        // AUDIO
        // ============================================================
        this.audioContext = null;
        this.oscillator = null;
        this.gainNode = null;
        
        // ============================================================
        // LOAD SCHEDULE FROM LOCAL STORAGE
        // ============================================================
        this.schedule = this.loadScheduleFromStorage();
        
        // ============================================================
        // THEME
        // ============================================================
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        
        // ============================================================
        // INITIALIZE
        // ============================================================
        this.applyTheme(this.currentTheme);
        this.loadAllData();
        this.setupEventListeners();
        this.renderDashboard();
        
        // Set IP in input field
        document.getElementById('esp32IPInput').value = this.esp32IP;
        
        this.updateESP32Status(false);
        this.showStatus('📡 Ready to connect...', 'info');
        
        // Populate language dropdown
        this.populateLanguageDropdown();
        this.loadSavedLanguage();
        
        setTimeout(() => {
            this.connectESP32();
        }, 500);
        
        this.startAutoRefresh();
        
        console.log('✅ Dashboard ready');
        console.log('📋 Loaded schedule:', this.schedule);
    }

    // ============================================================
    // LANGUAGE METHODS
    // ============================================================
    
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

        const currentLang = localStorage.getItem('nexura_language') || 'en';
        select.value = currentLang;
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('nexura_language') || 'en';
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = savedLang;
        }
        this.languageManager.setLanguage(savedLang);
        setTimeout(() => this.translatePage(), 100);
    }

    translatePage() {
        if (this.languageManager) {
            this.languageManager.translatePage();
        }
    }

    // ============================================================
    // LOAD SCHEDULE FROM LOCAL STORAGE
    // ============================================================
    
    loadScheduleFromStorage() {
        console.log('📋 Loading schedule from localStorage...');
        
        const profileData = localStorage.getItem('nexura_profile_data');
        if (profileData) {
            try {
                const data = JSON.parse(profileData);
                if (data.medications && data.medications.length > 0) {
                    console.log('✅ Found medications in profile:', data.medications);
                    
                    return data.medications.map((med, index) => {
                        const hour = parseInt(med.time.split(':')[0]);
                        let key = 'dose_' + index;
                        let icon = 'fa-pills';
                        let color = '#2a7de1';
                        
                        if (hour >= 5 && hour < 12) {
                            key = 'morning';
                            icon = 'fa-sun';
                            color = '#f59e0b';
                        } else if (hour >= 12 && hour < 17) {
                            key = 'afternoon';
                            icon = 'fa-cloud-sun';
                            color = '#3b82f6';
                        } else if (hour >= 17 && hour < 21) {
                            key = 'evening';
                            icon = 'fa-cloud';
                            color = '#8B5CF6';
                        } else {
                            key = 'night';
                            icon = 'fa-moon';
                            color = '#6366f1';
                        }
                        
                        const dayKey = med.day === 'all' ? 'All Days' : med.day;
                        
                        return {
                            id: 'med_' + index,
                            key: key,
                            name: med.name,
                            dosage: med.dosage || '',
                            time: med.time,
                            day: med.day || 'all',
                            dayDisplay: dayKey,
                            taken: false,
                            enabled: true,
                            icon: icon,
                            color: color
                        };
                    });
                }
            } catch (e) {
                console.error('Error loading profile data:', e);
            }
        }
        
        const savedSchedule = localStorage.getItem('nexura_schedule_medications');
        if (savedSchedule) {
            try {
                const parsed = JSON.parse(savedSchedule);
                if (parsed.length > 0) {
                    console.log('✅ Found saved schedule:', parsed);
                    return parsed;
                }
            } catch (e) {
                console.error('Error loading saved schedule:', e);
            }
        }
        
        console.log('⚠️ No medications found, using default schedule');
        return [
            { id: 'dose_1', key: 'morning', name: 'Morning Dose', dosage: '', time: '08:00', day: 'all', dayDisplay: 'All Days', taken: false, enabled: true, icon: 'fa-sun', color: '#f59e0b' },
            { id: 'dose_2', key: 'afternoon', name: 'Afternoon Dose', dosage: '', time: '13:00', day: 'all', dayDisplay: 'All Days', taken: false, enabled: true, icon: 'fa-cloud-sun', color: '#3b82f6' },
            { id: 'dose_3', key: 'night', name: 'Night Dose', dosage: '', time: '20:00', day: 'all', dayDisplay: 'All Days', taken: false, enabled: true, icon: 'fa-moon', color: '#6366f1' }
        ];
    }

    saveScheduleToStorage() {
        localStorage.setItem('nexura_schedule_medications', JSON.stringify(this.schedule));
        console.log('💾 Schedule saved to localStorage');
    }

    // ============================================================
    // ESP32 CONNECTION
    // ============================================================
    
    connectESP32() {
        const ipInput = document.getElementById('esp32IPInput');
        let ip = ipInput ? ipInput.value.trim() : this.esp32IP;
        
        if (!ip) {
            this.promptForIP();
            return;
        }
        
        this.esp32IP = ip;
        localStorage.setItem('esp32_ip', ip);
        
        this.updateESP32Status(false);
        this.showStatus('📡 Connecting to ESP32...', 'info');
        this.addLog(`📡 Connecting to ${ip}...`, 'info');
        
        this.checkESP32Connection();
    }
    
    async checkESP32Connection() {
        if (!this.esp32IP) {
            this.updateESP32Status(false);
            this.showStatus('⚠️ No IP configured', 'warning');
            return;
        }
        
        this.updateESP32Status(false);
        this.showStatus('📡 Checking connection...', 'info');
        
        try {
            const url = `http://${this.esp32IP}/status`;
            
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(url, {
                signal: controller.signal,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            
            clearTimeout(timeout);
            
            if (response.ok) {
                const data = await response.json();
                this.esp32Online = true;
                this.esp32Checked = true;
                this.updateESP32Status(true);
                this.showStatus(`✅ Connected to ${this.esp32IP}`, 'success');
                this.addLog(`✅ Connected to ESP32 at ${this.esp32IP}`, 'success');
                this.handleESP32Data(data);
                this.updateUI();
            } else {
                this.esp32Online = false;
                this.esp32Checked = true;
                this.updateESP32Status(false);
                this.showStatus(`❌ Connection failed`, 'error');
            }
        } catch (error) {
            this.esp32Online = false;
            this.esp32Checked = true;
            this.updateESP32Status(false);
            this.showStatus(`❌ Cannot reach ${this.esp32IP}`, 'error');
            this.addLog(`❌ Cannot reach Bharat PI: ${error.message}`, 'error');
        }
    }
    
    async esp32API(endpoint, method = 'GET', body = null) {
        if (!this.esp32IP || !this.esp32Online) {
            return null;
        }
        
        try {
            const url = `http://${this.esp32IP}/${endpoint}`;
            const options = {
                method: method,
                headers: { 'Content-Type': 'application/json' }
            };
            if (body) options.body = JSON.stringify(body);
            
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 5000);
            options.signal = controller.signal;
            
            const response = await fetch(url, options);
            clearTimeout(timeout);
            
            if (response.ok) {
                return await response.json();
            } else {
                return null;
            }
        } catch (error) {
            console.error('ESP32 API error:', error);
            return null;
        }
    }
    
    refreshConnection() {
        if (this.esp32IP) {
            this.updateESP32Status(false);
            this.checkESP32Connection();
        } else {
            this.promptForIP();
        }
    }
    
    promptForIP() {
        const ip = prompt('Enter ESP32 IP address:', this.esp32IP || '10.0.1.101');
        if (ip && ip.trim()) {
            this.esp32IP = ip.trim();
            localStorage.setItem('esp32_ip', this.esp32IP);
            document.getElementById('esp32IPInput').value = this.esp32IP;
            this.connectESP32();
        }
    }
    
    discoverESP32() {
        this.showStatus('🔍 Searching for ESP32...', 'info');
        this.addLog('🔍 Searching for ESP32 on network...', 'info');
        
        const ips = ['10.0.1.101', '10.0.1.100', '192.168.1.100', '192.168.1.101'];
        let found = false;
        
        ips.forEach((ip, index) => {
            setTimeout(() => {
                if (found) return;
                
                fetch(`http://${ip}/status`, { signal: AbortSignal.timeout(1000) })
                    .then(response => {
                        if (response.ok) {
                            found = true;
                            document.getElementById('esp32IPInput').value = ip;
                            this.esp32IP = ip;
                            localStorage.setItem('esp32_ip', ip);
                            this.showStatus(`✅ ESP32 found at ${ip}!`, 'success');
                            this.addLog(`✅ ESP32 found at ${ip}`, 'success');
                            this.checkESP32Connection();
                        }
                    })
                    .catch(() => {});
            }, index * 500);
        });
        
        setTimeout(() => {
            if (!found) {
                this.showStatus('❌ No ESP32 found on network', 'error');
                this.addLog('❌ No ESP32 found on network', 'error');
            }
        }, 6000);
    }
    
    showStatus(text, type = 'info') {
        const el = document.getElementById('connectionStatus');
        if (!el) return;
        const colors = {
            success: '#4CAF50',
            error: '#f44336',
            warning: '#FF9800',
            info: '#2196F3'
        };
        el.innerHTML = `<span class="status-text" style="color:${colors[type] || '#333'}">${text}</span>`;
    }
    
    updateESP32Status(online) {
        const statusEl = document.getElementById('deviceStatus');
        if (!statusEl) return;
        
        if (online) {
            statusEl.className = 'status-badge online';
            statusEl.innerHTML = `<i class="fas fa-microchip"></i> <span>${this.languageManager.getTranslation('online') || 'ESP32 Online ✅'}</span>`;
        } else {
            statusEl.className = 'status-badge offline';
            statusEl.innerHTML = `<i class="fas fa-wifi-slash"></i> <span>${this.languageManager.getTranslation('offline') || 'Offline ⚠️'}</span>`;
        }
    }
    
    handleESP32Data(data) {
        if (data.pillCount !== undefined) {
            this.pillCount = data.pillCount;
            document.getElementById('pillCount').textContent = this.pillCount;
            this.checkLowPillWarning();
        }
        
        if (data.time) {
            document.getElementById('todayDate').textContent = data.time;
        }
        
        if (data.schedule) {
            data.schedule.forEach((dose, index) => {
                if (index < this.schedule.length) {
                    this.schedule[index].taken = dose.taken || false;
                }
            });
            this.saveScheduleToStorage();
        }
        
        this.updateUI();
    }

    // ============================================================
    // ACTIONS
    // ============================================================
    
    async manualDispense() {
        if (!this.esp32IP) {
            this.promptForIP();
            return;
        }
        
        if (!this.esp32Online) {
            this.addLog('⚠️ ESP32 offline - attempting to reconnect...', 'warning');
            await this.checkESP32Connection();
            if (!this.esp32Online) {
                alert('❌ ESP32 is offline. Please check connection.');
                return;
            }
        }
        
        this.addLog('⏳ Dispensing pill...', 'info');
        
        const result = await this.esp32API('dispense', 'POST');
        if (result && result.success) {
            this.addLog('💊 Pill dispensed successfully ✅', 'success');
            this.playBuzzer();
            this.showAlert(
                this.languageManager.getTranslation('dispensingNow') || 'Dispensing Medication',
                this.languageManager.getTranslation('pleaseTakePill') || 'Please take your pill now.'
            );
            this.pillCount = result.pillCount;
            document.getElementById('pillCount').textContent = this.pillCount;
            this.checkLowPillWarning();
            this.updateUI();
        } else {
            const error = result?.error || 'Unknown error';
            this.addLog(`❌ Dispense failed: ${error}`, 'error');
            alert(`Dispense failed: ${error}`);
        }
    }
    
    async refillPills() {
        if (!this.esp32IP) {
            this.promptForIP();
            return;
        }
        
        if (!this.esp32Online) {
            await this.checkESP32Connection();
            if (!this.esp32Online) {
                alert('❌ ESP32 is offline. Please check connection.');
                return;
            }
        }
        
        const count = prompt('Enter number of pills to refill (max 200):', '30');
        if (!count || isNaN(count) || parseInt(count) <= 0) return;
        
        const numCount = parseInt(count);
        if (numCount > 200) {
            alert('Maximum 200 pills');
            return;
        }
        
        const result = await this.esp32API(`refill?count=${numCount}`, 'POST');
        if (result && result.success) {
            this.pillCount = result.pillCount;
            document.getElementById('pillCount').textContent = this.pillCount;
            this.addLog(`🔄 Pills refilled to ${numCount}`, 'success');
            this.checkLowPillWarning();
            this.updateUI();
        } else {
            this.addLog('❌ Refill failed', 'error');
        }
    }
    
    async markTaken(index) {
        if (!this.esp32IP) {
            this.promptForIP();
            return;
        }
        
        const dose = this.schedule[index];
        if (dose.taken) return;
        
        const result = await this.esp32API(`taken?dose=${dose.key}`, 'POST');
        if (result && result.success) {
            this.schedule[index].taken = true;
            this.saveScheduleStatus();
            this.renderSchedule();
            this.updateUI();
            this.addLog(`✓ ${dose.name} taken`, 'success');
            this.stopBuzzer();
            this.hideAlert();
            this.updateAdherenceData(true);
        }
    }
    
    async resetDoses() {
        if (!this.esp32IP) {
            this.promptForIP();
            return;
        }
        
        if (!confirm('Reset all doses for today?')) return;
        
        const result = await this.esp32API('reset', 'POST');
        if (result && result.success) {
            this.schedule.forEach(d => d.taken = false);
            this.saveScheduleStatus();
            this.renderSchedule();
            this.updateUI();
            this.addLog('🔄 All doses reset', 'info');
        }
    }

    // ============================================================
    // CHECK SCHEDULE AND AUTO-DISPENSE
    // ============================================================
    
    checkSchedule() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentMinutes = hours * 60 + minutes;
        
        if (this.lastCheckedMinute === currentMinutes) {
            return;
        }
        this.lastCheckedMinute = currentMinutes;
        
        console.log(`⏰ Checking schedule at ${hours}:${minutes}`);
        
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = days[now.getDay()];
        
        this.schedule.forEach((dose) => {
            if (dose.enabled === false) return;
            if (dose.taken) return;
            if (dose.day !== 'all' && dose.day !== today) return;
            
            const [doseHour, doseMinute] = dose.time.split(':').map(Number);
            const doseMinutes = doseHour * 60 + doseMinute;
            const diff = Math.abs(currentMinutes - doseMinutes);
            
            if (diff <= 1) {
                console.log(`⏰ Time for ${dose.name} at ${dose.time}!`);
                this.triggerDoseAlert(dose);
            }
        });
    }
    
    async triggerDoseAlert(dose) {
        this.playBuzzer();
        this.showAlert(
            this.languageManager.getTranslation('timeToTakeMedicine') || 'Time to Take Medicine!',
            `${this.languageManager.getTranslation('takeYourDose') || 'Please take your dose:'} ${dose.name}`,
            dose
        );
        this.addLog(`⏰ ${dose.name} dose time!`, 'warning');
        
        if (!this.esp32Online) {
            this.addLog('⚠️ ESP32 offline - attempting to reconnect...', 'warning');
            await this.checkESP32Connection();
        }
        
        if (this.esp32Online) {
            this.addLog(`💊 Sending dispense command to ESP32 for ${dose.name}...`, 'info');
            
            const result = await this.esp32API('dispense', 'POST');
            if (result && result.success) {
                this.addLog(`✅ ${dose.name} dispensed successfully via ESP32`, 'success');
                
                const doseIndex = this.schedule.indexOf(dose);
                if (doseIndex !== -1) {
                    this.schedule[doseIndex].taken = true;
                    this.saveScheduleStatus();
                    this.renderSchedule();
                    this.updateUI();
                    this.updateAdherenceData(true);
                }
            } else {
                const error = result?.error || 'Unknown error';
                this.addLog(`❌ Dispense failed for ${dose.name}: ${error}`, 'error');
            }
        } else {
            this.addLog(`⚠️ ESP32 offline - ${dose.name} not dispensed automatically`, 'warning');
            this.addLog(`💡 Please click "Take" button manually after taking the pill`, 'info');
        }
    }

    // ============================================================
    // UI METHODS
    // ============================================================
    
    renderDashboard() {
        this.updateUI();
        this.initChart();
        this.renderActivityLog();
    }
    
    updateUI() {
        this.updateStats();
        this.renderSchedule();
        this.renderActivityLog();
        this.updateDailySummary();
        this.checkLowPillWarning();
    }
    
    updateStats() {
        const total = this.schedule.filter(d => d.enabled !== false).length;
        const taken = this.schedule.filter(d => d.taken).length;
        document.getElementById('dosesToday').textContent = `${taken}/${total}`;
        document.getElementById('adherenceRate').textContent = total > 0 ? Math.round((taken/total)*100) + '%' : '0%';
        
        const next = this.getNextDose();
        document.getElementById('nextDose').textContent = next;
        
        this.updateDailySummary();
    }
    
    getNextDose() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = days[now.getDay()];
        
        let nextDose = null;
        let minDiff = Infinity;
        
        for (const dose of this.schedule) {
            if (dose.taken || dose.enabled === false) continue;
            if (dose.day !== 'all' && dose.day !== today) continue;
            
            const [h, m] = dose.time.split(':').map(Number);
            const doseMinutes = h * 60 + m;
            let diff = doseMinutes - currentMinutes;
            if (diff < 0) diff += 1440;
            
            if (diff < minDiff) {
                minDiff = diff;
                nextDose = dose;
            }
        }
        
        return nextDose ? nextDose.time : 'Tomorrow';
    }
    
    renderSchedule() {
        const container = document.getElementById('scheduleList');
        if (!container) return;
        
        container.innerHTML = '';
        const activeSchedule = this.schedule.filter(d => d.enabled !== false);
        
        if (activeSchedule.length === 0) {
            container.innerHTML = `<div class="log-empty"><i class="fas fa-inbox"></i><p>${this.languageManager.getTranslation('noActivity') || 'No medications scheduled'}</p></div>`;
            return;
        }
        
        activeSchedule.forEach((dose, index) => {
            const item = document.createElement('div');
            item.className = `schedule-item ${dose.taken ? 'taken' : 'pending'}`;
            item.style.borderLeftColor = dose.color;
            
            const dayDisplay = dose.dayDisplay || (dose.day === 'all' ? 'All Days' : dose.day);
            
            item.innerHTML = `
                <div class="schedule-time">
                    <i class="fas ${dose.icon}"></i>
                    <span>${dose.time}</span>
                </div>
                <div class="schedule-info">
                    <span class="schedule-name">${dose.name}</span>
                    <span class="schedule-day">${dayDisplay}</span>
                    ${dose.dosage ? `<span class="schedule-dosage">${dose.dosage}</span>` : ''}
                </div>
                <div class="schedule-status">
                    <span class="status-dot ${dose.taken ? 'taken' : 'pending'}"></span>
                    <span>${dose.taken ? '✅ ' + (this.languageManager.getTranslation('taken') || 'Taken') : '⏳ ' + (this.languageManager.getTranslation('pending') || 'Pending')}</span>
                </div>
                ${!dose.taken ? `<button class="btn btn-sm btn-success" onclick="markTaken(${index})">
                    <i class="fas fa-check"></i> ${this.languageManager.getTranslation('taken') || 'Take'}
                </button>` : ''}
            `;
            container.appendChild(item);
        });
    }
    
    renderActivityLog() {
        const container = document.getElementById('activityLog');
        if (!container) return;
        
        if (this.doseLog.length === 0) {
            container.innerHTML = `<div class="log-empty"><i class="fas fa-inbox"></i><p>${this.languageManager.getTranslation('noActivity') || 'No activity yet'}</p></div>`;
            return;
        }
        
        let html = '';
        this.doseLog.slice(0, 20).forEach(entry => {
            const iconMap = {
                success: 'fa-check-circle',
                warning: 'fa-exclamation-triangle',
                error: 'fa-times-circle',
                info: 'fa-info-circle'
            };
            const colorMap = {
                success: '#4CAF50',
                warning: '#FF9800',
                error: '#f44336',
                info: '#2196F3'
            };
            html += `
                <div class="log-entry">
                    <span class="log-time">${entry.time}</span>
                    <span class="log-icon" style="color:${colorMap[entry.type] || '#333'}">
                        <i class="fas ${iconMap[entry.type] || 'fa-info-circle'}"></i>
                    </span>
                    <span class="log-text">${entry.text}</span>
                    <span class="log-badge ${entry.type}">${entry.type}</span>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    
    addLog(text, type = 'info') {
        const entry = {
            time: new Date().toLocaleTimeString(),
            text: text,
            type: type,
            timestamp: Date.now()
        };
        this.doseLog.unshift(entry);
        if (this.doseLog.length > 100) this.doseLog = this.doseLog.slice(0, 100);
        localStorage.setItem('nexura_dose_log', JSON.stringify(this.doseLog));
        this.renderActivityLog();
    }
    
    clearLog() {
        if (confirm('Clear all activity log?')) {
            this.doseLog = [];
            localStorage.setItem('nexura_dose_log', JSON.stringify(this.doseLog));
            this.renderActivityLog();
            this.addLog('🗑️ Activity log cleared', 'info');
        }
    }
    
    updateDailySummary() {
        const total = this.schedule.filter(d => d.enabled !== false).length;
        const taken = this.schedule.filter(d => d.taken).length;
        const pending = total - taken;
        
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        let missed = 0;
        
        this.schedule.forEach(dose => {
            if (dose.taken || dose.enabled === false) return;
            const [h, m] = dose.time.split(':').map(Number);
            const doseMinutes = h * 60 + m;
            if (doseMinutes < currentMinutes) {
                missed++;
            }
        });
        
        document.getElementById('summaryTaken').textContent = taken;
        document.getElementById('summaryPending').textContent = pending;
        document.getElementById('summaryMissed').textContent = missed;
    }
    
    updateAdherenceData(taken) {
        const today = new Date().toISOString().split('T')[0];
        let existing = this.adherenceData.find(d => d.date === today);
        if (existing) {
            existing.taken += taken ? 1 : 0;
            existing.total += 1;
        } else {
            this.adherenceData.push({ date: today, taken: taken ? 1 : 0, total: 1 });
        }
        if (this.adherenceData.length > 30) this.adherenceData = this.adherenceData.slice(-30);
        localStorage.setItem('nexura_adherence_data', JSON.stringify(this.adherenceData));
        if (this.chart) this.updateChart();
    }
    
    checkLowPillWarning() {
        const warning = document.getElementById('lowPillWarning');
        const countSpan = document.getElementById('lowPillCount');
        if (this.pillCount <= 5 && this.pillCount > 0) {
            warning.style.display = 'flex';
            if (countSpan) countSpan.textContent = this.pillCount;
        } else {
            warning.style.display = 'none';
        }
    }

    // ============================================================
    // CHART
    // ============================================================
    
    initChart() {
        const ctx = document.getElementById('adherenceChart');
        if (!ctx) return;
        if (this.chart) this.chart.destroy();
        
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: this.languageManager.getTranslation('adherenceRate') || 'Adherence %',
                    data: [],
                    backgroundColor: 'rgba(42, 125, 225, 0.7)',
                    borderColor: '#2a7de1',
                    borderWidth: 2,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 100, grid: { display: false }, ticks: { callback: v => v + '%' } },
                    x: { grid: { display: false } }
                }
            }
        });
        this.updateChart();
    }
    
    updateChart() {
        const data = this.getChartData(this.chartPeriod);
        this.chart.data.labels = data.labels;
        this.chart.data.datasets[0].data = data.values;
        this.chart.update();
    }
    
    getChartData(period) {
        const days = period === 'week' ? 7 : 30;
        const labels = [];
        const values = [];
        const now = new Date();
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(now);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayData = this.adherenceData.find(d => d.date === dateStr);
            const percentage = dayData && dayData.total > 0 ? Math.round((dayData.taken / dayData.total) * 100) : 0;
            labels.push(date.toLocaleDateString('en', { weekday: 'short' }));
            values.push(percentage);
        }
        return { labels, values };
    }
    
    changeChartPeriod(period) {
        this.chartPeriod = period;
        document.querySelectorAll('.chart-controls .btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.period === period);
        });
        this.updateChart();
    }

    // ============================================================
    // EXPORT FUNCTIONS
    // ============================================================
    
    prepareExportData() {
        const data = [];
        const logEntries = this.doseLog.slice(0, 50);
        
        if (logEntries.length === 0 && this.schedule.length > 0) {
            const today = new Date().toISOString().split('T')[0];
            this.schedule.forEach((dose, index) => {
                data.push({
                    'S.No': index + 1,
                    'Date': today,
                    'Time': dose.time,
                    'Medication': dose.name,
                    'Dosage': dose.dosage || 'N/A',
                    'Day': dose.dayDisplay || dose.day || 'All Days',
                    'Status': dose.taken ? 'Taken' : 'Pending',
                    'Notes': dose.name + ' dose'
                });
            });
        } else {
            logEntries.forEach((entry, index) => {
                const date = new Date(entry.timestamp).toISOString().split('T')[0];
                let medication = 'Unknown';
                let dosage = 'N/A';
                this.schedule.forEach(dose => {
                    if (entry.text.toLowerCase().includes(dose.name.toLowerCase())) {
                        medication = dose.name;
                        dosage = dose.dosage || 'N/A';
                    }
                });
                data.push({
                    'S.No': index + 1,
                    'Date': date,
                    'Time': entry.time,
                    'Medication': medication,
                    'Dosage': dosage,
                    'Day': 'Today',
                    'Status': entry.type.charAt(0).toUpperCase() + entry.type.slice(1),
                    'Notes': entry.text
                });
            });
        }
        
        return data.length > 0 ? data : [{
            'S.No': 1,
            'Date': new Date().toISOString().split('T')[0],
            'Time': '--:--',
            'Medication': 'No data',
            'Dosage': '--',
            'Day': '--',
            'Status': 'None',
            'Notes': 'No medication log available'
        }];
    }
    
    exportExcel() {
        const data = this.prepareExportData();
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        ws['!cols'] = [{ wch: 8 }, { wch: 14 }, { wch: 10 }, { wch: 20 }, { wch: 15 }, { wch: 12 }, { wch: 30 }];
        XLSX.utils.book_append_sheet(wb, ws, 'Medication Log');
        const date = new Date().toISOString().split('T')[0];
        XLSX.writeFile(wb, `NEXURA_Medication_Log_${date}.xlsx`);
        this.addLog('📊 Excel exported', 'success');
    }
    
    exportCSV() {
        const data = this.prepareExportData();
        const headers = ['S.No', 'Date', 'Time', 'Medication', 'Dosage', 'Day', 'Status', 'Notes'];
        let csv = headers.join(',') + '\n';
        data.forEach(row => csv += Object.values(row).join(',') + '\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const date = new Date().toISOString().split('T')[0];
        a.download = `NEXURA_Medication_Log_${date}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        this.addLog('📊 CSV exported', 'success');
    }

    // ============================================================
    // ALERT SYSTEM
    // ============================================================
    
    showAlert(title, subtitle) {
        document.getElementById('alertTitle').textContent = title;
        document.getElementById('alertSubtitle').textContent = subtitle;
        document.getElementById('alertOverlay').classList.add('show');
        this.alertActive = true;
        this.playBuzzer();
    }
    
    hideAlert() {
        document.getElementById('alertOverlay').classList.remove('show');
        this.alertActive = false;
        this.stopBuzzer();
    }
    
    acknowledgeAlert() {
        for (let i = 0; i < this.schedule.length; i++) {
            if (!this.schedule[i].taken && this.schedule[i].enabled !== false) {
                this.markTaken(i);
                break;
            }
        }
        this.hideAlert();
    }
    
    snoozeAlert() {
        this.hideAlert();
        this.addLog('⏰ Alert snoozed', 'warning');
        setTimeout(() => {
            if (!this.alertActive) {
                this.showAlert(
                    this.languageManager.getTranslation('timeToTakeMedicine') || 'Time to Take Medicine!',
                    this.languageManager.getTranslation('takeYourDose') || "Don't forget to take your medication."
                );
            }
        }, 300000);
    }

    // ============================================================
    // BUZZER (Audio)
    // ============================================================
    
    playBuzzer() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.oscillator = this.audioContext.createOscillator();
            this.gainNode = this.audioContext.createGain();
            this.oscillator.type = 'square';
            this.oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime);
            this.gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.audioContext.destination);
            this.oscillator.start();
            this.oscillator.stop(this.audioContext.currentTime + 0.15);
            if (this.alertActive) setTimeout(() => this.playBuzzer(), 500);
        } catch (e) {
            console.log('Audio not supported');
        }
    }
    
    stopBuzzer() {
        if (this.oscillator) {
            try { this.oscillator.stop(); this.oscillator.disconnect(); this.gainNode.disconnect(); } catch(e) {}
            this.oscillator = null;
            this.gainNode = null;
        }
    }

    // ============================================================
    // THEME
    // ============================================================
    
toggleTheme() {
    console.log('🎨 Toggling theme...');
    const body = document.body;
    const icon = document.querySelector('#themeToggle i');
    
    if (this.currentTheme === 'light') {
        // Switch to Dark Mode
        this.currentTheme = 'dark';
        body.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('nexura_theme', 'dark');
        if (icon) {
            icon.className = 'fas fa-sun';
        }
        console.log('🌙 Switched to Dark Mode');
    } else {
        // Switch to Light Mode
        this.currentTheme = 'light';
        body.classList.remove('dark-mode');
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('nexura_theme', 'light');
        if (icon) {
            icon.className = 'fas fa-moon';
        }
        console.log('☀️ Switched to Light Mode');
    }
    
    // Re-apply translations
    this.translatePage();
}
    
applyTheme(theme) {
    console.log('🎨 Applying theme:', theme);
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
    console.log('✅ Theme applied:', theme);
}

    // ============================================================
    // LOAD/SAVE DATA
    // ============================================================
    
    loadAllData() {
        const savedPills = localStorage.getItem('nexura_pill_count');
        if (savedPills) this.pillCount = parseInt(savedPills);
        
        const savedLog = localStorage.getItem('nexura_dose_log');
        if (savedLog) {
            try { this.doseLog = JSON.parse(savedLog); } catch(e) { this.doseLog = []; }
        }
        
        const savedAdherence = localStorage.getItem('nexura_adherence_data');
        if (savedAdherence) {
            try { this.adherenceData = JSON.parse(savedAdherence); } catch(e) { this.adherenceData = []; }
        }
        
        this.loadScheduleStatus();
    }
    
    loadScheduleStatus() {
        const saved = localStorage.getItem('nexura_schedule_status');
        if (saved) {
            try {
                const status = JSON.parse(saved);
                this.schedule.forEach(dose => {
                    if (status[dose.id] !== undefined) {
                        dose.taken = status[dose.id];
                    }
                });
            } catch(e) {}
        }
    }
    
    saveScheduleStatus() {
        const status = {};
        this.schedule.forEach(dose => {
            status[dose.id] = dose.taken;
        });
        localStorage.setItem('nexura_schedule_status', JSON.stringify(status));
        this.saveScheduleToStorage();
    }

    // ============================================================
    // AUTO REFRESH
    // ============================================================
    
    startAutoRefresh() {
        setInterval(() => this.updateUI(), 5000);
        setInterval(() => this.checkSchedule(), 10000);
        setInterval(() => {
            if (this.esp32IP) {
                this.checkESP32Connection();
            }
        }, 15000);
    }

    // ============================================================
    // EVENT LISTENERS
    // ============================================================
    
    setupEventListeners() {
       // Theme Toggle - FIXED
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    // Remove any existing listeners to prevent duplicates
    themeToggle.removeEventListener('click', this._themeToggleHandler);
    this._themeToggleHandler = () => this.toggleTheme();
    themeToggle.addEventListener('click', this._themeToggleHandler);
    console.log('✅ Theme toggle listener attached');
}
        
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });
        
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('sidebarToggle');
            if (window.innerWidth <= 768 && sidebar && toggle && 
                !sidebar.contains(e.target) && !toggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
        
        document.getElementById('esp32IPInput')?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.connectESP32();
            }
        });
        
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                localStorage.setItem('nexura_language', lang);
                this.languageManager.setLanguage(lang);
                setTimeout(() => this.translatePage(), 50);
                // Update status badge translation
                this.updateESP32Status(this.esp32Online);
                // Update chart label
                if (this.chart) {
                    this.chart.data.datasets[0].label = this.languageManager.getTranslation('adherenceRate') || 'Adherence %';
                    this.chart.update();
                }
            });
        }
    }
}

// ============================================================
// GLOBAL FUNCTIONS
// ============================================================

let dashboardApp = null;

function connectToESP32() {
    if (dashboardApp) {
        dashboardApp.updateESP32Status(false);
        dashboardApp.connectESP32();
    }
}

function discoverESP32() {
    if (dashboardApp) dashboardApp.discoverESP32();
}

function refreshConnection() {
    if (dashboardApp) {
        dashboardApp.updateESP32Status(false);
        dashboardApp.refreshConnection();
    }
}

function toggleTheme() {
    if (dashboardApp) dashboardApp.toggleTheme();
}

function toggleSidebar() {
    document.getElementById('sidebar')?.classList.toggle('open');
}

function manualDispense() {
    if (dashboardApp) dashboardApp.manualDispense();
}

function refillPills() {
    if (dashboardApp) dashboardApp.refillPills();
}

function markTaken(index) {
    if (dashboardApp) dashboardApp.markTaken(index);
}

function resetDoses() {
    if (dashboardApp) dashboardApp.resetDoses();
}

function acknowledgeAlert() {
    if (dashboardApp) dashboardApp.acknowledgeAlert();
}

function snoozeAlert() {
    if (dashboardApp) dashboardApp.snoozeAlert();
}

function changeChartPeriod(period) {
    if (dashboardApp) dashboardApp.changeChartPeriod(period);
}

function exportExcel() {
    if (dashboardApp) dashboardApp.exportExcel();
}

function exportCSV() {
    if (dashboardApp) dashboardApp.exportCSV();
}

function clearLog() {
    if (dashboardApp) dashboardApp.clearLog();
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

// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing dashboard...');
    dashboardApp = new DashboardApp();
    console.log('✅ Dashboard ready');
});

console.log('✅ NEXURA Dashboard loaded');