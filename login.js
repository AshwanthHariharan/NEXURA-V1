// js/login.js

// ================================================================
// TRANSLATIONS FOR LOGIN PAGE
// ================================================================

const LOGIN_TRANSLATIONS = {
    en: {
        selectLanguage: 'SELECT LANGUAGE',
        welcomeBack: 'Welcome Back',
        loginSubtitle: 'Sign in to manage your medications',
        email: 'Email Address',
        password: 'Password',
        rememberMe: 'Remember Me',
        forgotPassword: 'Forgot Password?',
        signIn: 'Sign In',
        dontHaveAccount: "Don't have an account?",
        register: 'Register Now',
        footerText: '© 2026 NEXURA. All rights reserved.',
        resetPassword: 'Reset Password',
        resetPasswordSubtitle: 'Enter your email address and we\'ll send you a link to reset your password',
        cancel: 'Cancel',
        sendResetLink: 'Send Reset Link',
        enterEmail: 'Enter your email',
        enterPassword: 'Enter your password',
        emailPlaceholder: 'Enter your email',
        passwordPlaceholder: 'Enter your password'
    },
    hi: {
        selectLanguage: 'भाषा चुनें',
        welcomeBack: 'वापसी पर स्वागत है',
        loginSubtitle: 'अपनी दवाओं को प्रबंधित करने के लिए साइन इन करें',
        email: 'ईमेल पता',
        password: 'पासवर्ड',
        rememberMe: 'मुझे याद रखें',
        forgotPassword: 'पासवर्ड भूल गए?',
        signIn: 'साइन इन करें',
        dontHaveAccount: 'खाता नहीं है?',
        register: 'अभी पंजीकरण करें',
        footerText: '© 2026 NEXURA. सर्वाधिकार सुरक्षित।',
        resetPassword: 'पासवर्ड रीसेट करें',
        resetPasswordSubtitle: 'अपना ईमेल पता दर्ज करें और हम आपको पासवर्ड रीसेट करने के लिए एक लिंक भेजेंगे',
        cancel: 'रद्द करें',
        sendResetLink: 'रीसेट लिंक भेजें',
        enterEmail: 'अपना ईमेल दर्ज करें',
        enterPassword: 'अपना पासवर्ड दर्ज करें',
        emailPlaceholder: 'अपना ईमेल दर्ज करें',
        passwordPlaceholder: 'अपना पासवर्ड दर्ज करें'
    },
    bn: {
        selectLanguage: 'ভাষা নির্বাচন করুন',
        welcomeBack: 'আবার স্বাগতম',
        loginSubtitle: 'আপনার ওষুধ পরিচালনা করতে সাইন ইন করুন',
        email: 'ইমেইল ঠিকানা',
        password: 'পাসওয়ার্ড',
        rememberMe: 'আমাকে মনে রাখুন',
        forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন?',
        signIn: 'সাইন ইন করুন',
        dontHaveAccount: 'একাউন্ট নেই?',
        register: 'এখন নিবন্ধন করুন',
        footerText: '© 2026 NEXURA. সর্বস্বত্ব সংরক্ষিত।',
        resetPassword: 'পাসওয়ার্ড রিসেট করুন',
        resetPasswordSubtitle: 'আপনার ইমেইল ঠিকানা লিখুন এবং আমরা আপনাকে আপনার পাসওয়ার্ড রিসেট করার জন্য একটি লিঙ্ক পাঠাব',
        cancel: 'বাতিল করুন',
        sendResetLink: 'রিসেট লিঙ্ক পাঠান',
        enterEmail: 'আপনার ইমেইল লিখুন',
        enterPassword: 'আপনার পাসওয়ার্ড লিখুন',
        emailPlaceholder: 'আপনার ইমেইল লিখুন',
        passwordPlaceholder: 'আপনার পাসওয়ার্ড লিখুন'
    },
    te: {
        selectLanguage: 'భాషను ఎంచుకోండి',
        welcomeBack: 'తిరిగి స్వాగతం',
        loginSubtitle: 'మీ మందులను నిర్వహించడానికి సైన్ ఇన్ చేయండి',
        email: 'ఇమెయిల్ చిరునామా',
        password: 'పాస్వర్డ్',
        rememberMe: 'నన్ను గుర్తుంచుకో',
        forgotPassword: 'పాస్వర్డ్ మర్చిపోయారా?',
        signIn: 'సైన్ ఇన్ చేయండి',
        dontHaveAccount: 'ఖాతా లేదా?',
        register: 'ఇప్పుడు నమోదు చేయండి',
        footerText: '© 2026 NEXURA. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
        resetPassword: 'పాస్వర్డ్ రీసెట్ చేయండి',
        resetPasswordSubtitle: 'మీ ఇమెయిల్ చిరునామాను నమోదు చేయండి, పాస్వర్డ్ రీసెట్ చేయడానికి మేము లింక్ పంపుతాము',
        cancel: 'రద్దు చేయండి',
        sendResetLink: 'రీసెట్ లింక్ పంపండి',
        enterEmail: 'మీ ఇమెయిల్ నమోదు చేయండి',
        enterPassword: 'మీ పాస్వర్డ్ నమోదు చేయండి',
        emailPlaceholder: 'మీ ఇమెయిల్ నమోదు చేయండి',
        passwordPlaceholder: 'మీ పాస్వర్డ్ నమోదు చేయండి'
    },
    mr: {
        selectLanguage: 'भाषा निवडा',
        welcomeBack: 'परत स्वागत आहे',
        loginSubtitle: 'आपली औषधे व्यवस्थापित करण्यासाठी साइन इन करा',
        email: 'ईमेल पत्ता',
        password: 'पासवर्ड',
        rememberMe: 'मला आठवा',
        forgotPassword: 'पासवर्ड विसरलात?',
        signIn: 'साइन इन करा',
        dontHaveAccount: 'खाते नाही?',
        register: 'आता नोंदणी करा',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.',
        resetPassword: 'पासवर्ड रीसेट करा',
        resetPasswordSubtitle: 'आपला ईमेल पत्ता प्रविष्ट करा आणि आम्ही आपला पासवर्ड रीसेट करण्यासाठी एक लिंक पाठवू',
        cancel: 'रद्द करा',
        sendResetLink: 'रीसेट लिंक पाठवा',
        enterEmail: 'आपला ईमेल प्रविष्ट करा',
        enterPassword: 'आपला पासवर्ड प्रविष्ट करा',
        emailPlaceholder: 'आपला ईमेल प्रविष्ट करा',
        passwordPlaceholder: 'आपला पासवर्ड प्रविष्ट करा'
    },
    ta: {
        selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
        welcomeBack: 'மீண்டும் வரவேற்கிறோம்',
        loginSubtitle: 'உங்கள் மருந்துகளை நிர்வகிக்க உள்நுழையவும்',
        email: 'மின்னஞ்சல் முகவரி',
        password: 'கடவுச்சொல்',
        rememberMe: 'என்னை நினைவில் கொள்',
        forgotPassword: 'கடவுச்சொல் மறந்துவிட்டீர்களா?',
        signIn: 'உள்நுழைய',
        dontHaveAccount: 'கணக்கு இல்லையா?',
        register: 'இப்போது பதிவு செய்யுங்கள்',
        footerText: '© 2026 NEXURA. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        resetPassword: 'கடவுச்சொல்லை மீட்டமைக்க',
        resetPasswordSubtitle: 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிட்டால், கடவுச்சொல்லை மீட்டமைக்க இணைப்பை அனுப்புவோம்',
        cancel: 'ரத்து செய்யவும்',
        sendResetLink: 'மீட்டமை இணைப்பை அனுப்பவும்',
        enterEmail: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
        enterPassword: 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
        emailPlaceholder: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
        passwordPlaceholder: 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்'
    },
    gu: {
        selectLanguage: 'ભાષા પસંદ કરો',
        welcomeBack: 'પાછા સ્વાગત છે',
        loginSubtitle: 'તમારી દવાઓનું સંચાલન કરવા માટે સાઇન ઇન કરો',
        email: 'ઇમેઇલ સરનામું',
        password: 'પાસવર્ડ',
        rememberMe: 'મને યાદ રાખો',
        forgotPassword: 'પાસવર્ડ ભૂલી ગયા?',
        signIn: 'સાઇન ઇન કરો',
        dontHaveAccount: 'ખાતું નથી?',
        register: 'હવે નોંધણી કરો',
        footerText: '© 2026 NEXURA. સર્વાધિકાર સુરક્ષિત.',
        resetPassword: 'પાસવર્ડ રીસેટ કરો',
        resetPasswordSubtitle: 'તમારું ઇમેઇલ સરનામું દાખલ કરો અને અમે તમને પાસવર્ડ રીસેટ કરવા માટે એક લિંક મોકલીશું',
        cancel: 'રદ કરો',
        sendResetLink: 'રીસેટ લિંક મોકલો',
        enterEmail: 'તમારું ઇમેઇલ દાખલ કરો',
        enterPassword: 'તમારો પાસવર્ડ દાખલ કરો',
        emailPlaceholder: 'તમારું ઇમેઇલ દાખલ કરો',
        passwordPlaceholder: 'તમારો પાસવર્ડ દાખલ કરો'
    },
    kn: {
        selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        welcomeBack: 'ಮರಳಿ ಸ್ವಾಗತ',
        loginSubtitle: 'ನಿಮ್ಮ ಔಷಧಿಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ',
        email: 'ಇಮೇಲ್ ವಿಳಾಸ',
        password: 'ಪಾಸ್ವರ್ಡ್',
        rememberMe: 'ನನ್ನನ್ನು ನೆನಪಿನಲ್ಲಿಡು',
        forgotPassword: 'ಪಾಸ್ವರ್ಡ್ ಮರೆತಿರೆಯೇ?',
        signIn: 'ಸೈನ್ ಇನ್',
        dontHaveAccount: 'ಖಾತೆ ಇಲ್ಲವೇ?',
        register: 'ಈಗ ನೋಂದಾಯಿಸಿ',
        footerText: '© 2026 NEXURA. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
        resetPassword: 'ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ',
        resetPasswordSubtitle: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ, ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಲು ನಾವು ಲಿಂಕ್ ಕಳುಹಿಸುತ್ತೇವೆ',
        cancel: 'ರದ್ದುಮಾಡಿ',
        sendResetLink: 'ಮರುಹೊಂದಿಸುವ ಲಿಂಕ್ ಕಳುಹಿಸಿ',
        enterEmail: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ',
        enterPassword: 'ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ',
        emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ',
        passwordPlaceholder: 'ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ'
    },
    ml: {
        selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
        welcomeBack: 'തിരികെ സ്വാഗതം',
        loginSubtitle: 'നിങ്ങളുടെ മരുന്നുകൾ നിയന്ത്രിക്കാൻ സൈൻ ഇൻ ചെയ്യുക',
        email: 'ഇമെയിൽ വിലാസം',
        password: 'പാസ്വേഡ്',
        rememberMe: 'എന്നെ ഓർക്കുക',
        forgotPassword: 'പാസ്വേഡ് മറന്നോ?',
        signIn: 'സൈൻ ഇൻ',
        dontHaveAccount: 'അക്കൗണ്ട് ഇല്ലേ?',
        register: 'ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക',
        footerText: '© 2026 NEXURA. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
        resetPassword: 'പാസ്വേഡ് പുനഃസജ്ജമാക്കുക',
        resetPasswordSubtitle: 'നിങ്ങളുടെ ഇമെയിൽ വിലാസം നൽകുക, പാസ്വേഡ് പുനഃസജ്ജമാക്കാനുള്ള ലിങ്ക് ഞങ്ങൾ അയയ്ക്കും',
        cancel: 'റദ്ദാക്കുക',
        sendResetLink: 'പുനഃസജ്ജമാക്കൽ ലിങ്ക് അയയ്ക്കുക',
        enterEmail: 'നിങ്ങളുടെ ഇമെയിൽ നൽകുക',
        enterPassword: 'നിങ്ങളുടെ പാസ്വേഡ് നൽകുക',
        emailPlaceholder: 'നിങ്ങളുടെ ഇമെയിൽ നൽകുക',
        passwordPlaceholder: 'നിങ്ങളുടെ പാസ്വേഡ് നൽകുക'
    },
    or: {
        selectLanguage: 'ଭାଷା ଚୟନ କରନ୍ତୁ',
        welcomeBack: 'ପୁନଃ ସ୍ୱାଗତ',
        loginSubtitle: 'ଆପଣଙ୍କ ଔଷଧ ପରିଚାଳନା କରିବାକୁ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ',
        email: 'ଇମେଲ୍ ଠିକଣା',
        password: 'ପାସୱାର୍ଡ',
        rememberMe: 'ମୋତେ ମନେରଖ',
        forgotPassword: 'ପାସୱାର୍ଡ ଭୁଲିଗଲେ?',
        signIn: 'ସାଇନ୍ ଇନ୍ କରନ୍ତୁ',
        dontHaveAccount: 'ଖାତା ନାହିଁ?',
        register: 'ଏବେ ପଞ୍ଜିକରଣ କରନ୍ତୁ',
        footerText: '© 2026 NEXURA. ସମସ୍ତ ଅଧିକାର ସୁରକ୍ଷିତ।',
        resetPassword: 'ପାସୱାର୍ଡ ରିସେଟ୍ କରନ୍ତୁ',
        resetPasswordSubtitle: 'ଆପଣଙ୍କ ଇମେଲ୍ ଠିକଣା ପ୍ରବେଶ କରନ୍ତୁ ଏବଂ ଆମେ ଆପଣଙ୍କୁ ପାସୱାର୍ଡ ରିସେଟ୍ କରିବାକୁ ଏକ ଲିଙ୍କ୍ ପଠାଇବୁ',
        cancel: 'ରଦ୍ଦ କରନ୍ତୁ',
        sendResetLink: 'ରିସେଟ୍ ଲିଙ୍କ୍ ପଠାନ୍ତୁ',
        enterEmail: 'ଆପଣଙ୍କ ଇମେଲ୍ ପ୍ରବେଶ କରନ୍ତୁ',
        enterPassword: 'ଆପଣଙ୍କ ପାସୱାର୍ଡ ପ୍ରବେଶ କରନ୍ତୁ',
        emailPlaceholder: 'ଆପଣଙ୍କ ଇମେଲ୍ ପ୍ରବେଶ କରନ୍ତୁ',
        passwordPlaceholder: 'ଆପଣଙ୍କ ପାସୱାର୍ଡ ପ୍ରବେଶ କରନ୍ତୁ'
    },
    pa: {
        selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
        welcomeBack: 'ਵਾਪਸੀ ਤੇ ਸਵਾਗਤ ਹੈ',
        loginSubtitle: 'ਆਪਣੀਆਂ ਦਵਾਈਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਲਈ ਸਾਈਨ ਇਨ ਕਰੋ',
        email: 'ਈਮੇਲ ਪਤਾ',
        password: 'ਪਾਸਵਰਡ',
        rememberMe: 'ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ',
        forgotPassword: 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?',
        signIn: 'ਸਾਈਨ ਇਨ ਕਰੋ',
        dontHaveAccount: 'ਖਾਤਾ ਨਹੀਂ ਹੈ?',
        register: 'ਹੁਣੇ ਰਜਿਸਟਰ ਕਰੋ',
        footerText: '© 2026 NEXURA. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
        resetPassword: 'ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ',
        resetPasswordSubtitle: 'ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਦਰਜ ਕਰੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰਨ ਲਈ ਇੱਕ ਲਿੰਕ ਭੇਜਾਂਗੇ',
        cancel: 'ਰੱਦ ਕਰੋ',
        sendResetLink: 'ਰੀਸੈੱਟ ਲਿੰਕ ਭੇਜੋ',
        enterEmail: 'ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ',
        enterPassword: 'ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ',
        emailPlaceholder: 'ਆਪਣਾ ਈਮੇਲ ਦਰਜ ਕਰੋ',
        passwordPlaceholder: 'ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ'
    },
    as: {
        selectLanguage: 'ভাষা বাছনি কৰক',
        welcomeBack: 'পুনৰ স্বাগতম',
        loginSubtitle: 'আপোনাৰ ঔষধ পৰিচালনা কৰিবলৈ চাইন ইন কৰক',
        email: 'ইমেইল ঠিকনা',
        password: 'পাছৱৰ্ড',
        rememberMe: 'মোক মনত ৰাখিব',
        forgotPassword: 'পাছৱৰ্ড পাহৰি গৈছে?',
        signIn: 'চাইন ইন কৰক',
        dontHaveAccount: 'একাউণ্ট নাই?',
        register: 'এতিয়া নিবন্ধন কৰক',
        footerText: '© 2026 NEXURA. সকলো অধিকাৰ সংৰক্ষিত।',
        resetPassword: 'পাছৱৰ্ড ৰিচেট কৰক',
        resetPasswordSubtitle: 'আপোনাৰ ইমেইল ঠিকনা সোমাওক আৰু আমি আপোনাক পাছৱৰ্ড ৰিচেট কৰিবলৈ এটা লিংক পঠাম',
        cancel: 'বাতিল কৰক',
        sendResetLink: 'ৰিচেট লিংক পঠাওক',
        enterEmail: 'আপোনাৰ ইমেইল সোমাওক',
        enterPassword: 'আপোনাৰ পাছৱৰ্ড সোমাওক',
        emailPlaceholder: 'আপোনাৰ ইমেইল সোমাওক',
        passwordPlaceholder: 'আপোনাৰ পাছৱৰ্ড সোমাওক'
    },
    ur: {
        selectLanguage: 'زبان منتخب کریں',
        welcomeBack: 'واپسی پر خوش آمدید',
        loginSubtitle: 'اپنی دوائیوں کا انتظام کرنے کے لیے سائن ان کریں',
        email: 'ای میل ایڈریس',
        password: 'پاس ورڈ',
        rememberMe: 'مجھے یاد رکھیں',
        forgotPassword: 'پاس ورڈ بھول گئے؟',
        signIn: 'سائن ان کریں',
        dontHaveAccount: 'اکاؤنٹ نہیں ہے؟',
        register: 'ابھی رجسٹر کریں',
        footerText: '© 2026 NEXURA. جملہ حقوق محفوظ ہیں۔',
        resetPassword: 'پاس ورڈ ری سیٹ کریں',
        resetPasswordSubtitle: 'اپنا ای میل ایڈریس درج کریں اور ہم آپ کو پاس ورڈ ری سیٹ کرنے کے لیے ایک لنک بھیجیں گے',
        cancel: 'منسوخ کریں',
        sendResetLink: 'ری سیٹ لنک بھیجیں',
        enterEmail: 'اپنا ای میل درج کریں',
        enterPassword: 'اپنا پاس ورڈ درج کریں',
        emailPlaceholder: 'اپنا ای میل درج کریں',
        passwordPlaceholder: 'اپنا پاس ورڈ درج کریں'
    },
    sd: {
        selectLanguage: 'ٻولي چونڊيو',
        welcomeBack: 'واپسي تي ڀلي ڪري آيا',
        loginSubtitle: 'پنهنجين دوائن جو انتظام ڪرڻ لاءِ سائن ان ڪريو',
        email: 'اي ميل پتو',
        password: 'پاسورڊ',
        rememberMe: 'مون کي ياد رکو',
        forgotPassword: 'پاسورڊ وسري ويو؟',
        signIn: 'سائن ان ڪريو',
        dontHaveAccount: 'کاتو ناهي؟',
        register: 'هاڻي رجسٽر ڪريو',
        footerText: '© 2026 NEXURA. سڀ حق محفوظ آهن.',
        resetPassword: 'پاسورڊ ري سيٽ ڪريو',
        resetPasswordSubtitle: 'پنهنجو اي ميل پتو داخل ڪريو ۽ اسان توهان کي پاسورڊ ري سيٽ ڪرڻ لاءِ لنڪ موڪلينداسين',
        cancel: 'منسوخ ڪريو',
        sendResetLink: 'ري سيٽ لنڪ موڪليو',
        enterEmail: 'پنهنجو اي ميل داخل ڪريو',
        enterPassword: 'پنهنجو پاسورڊ داخل ڪريو',
        emailPlaceholder: 'پنهنجو اي ميل داخل ڪريو',
        passwordPlaceholder: 'پنهنجو پاسورڊ داخل ڪريو'
    },
    kok: {
        selectLanguage: 'भास वेंचून काडात',
        welcomeBack: 'परत येवकार',
        loginSubtitle: 'तुमचीं औषधां व्यवस्थापित करपाक साइन इन करात',
        email: 'ईमेल पत्तो',
        password: 'पासवर्ड',
        rememberMe: 'म्हाका उगडास दवरात',
        forgotPassword: 'पासवर्ड विसरलात?',
        signIn: 'साइन इन करात',
        dontHaveAccount: 'खातें ना?',
        register: 'आतां नोंदणी करात',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.',
        resetPassword: 'पासवर्ड रीसेट करात',
        resetPasswordSubtitle: 'तुमचो ईमेल पत्तो प्रविष्ट करात आनी आमी तुमकां पासवर्ड रीसेट करपाक एक लिंक पाठवतलें',
        cancel: 'रद्द करात',
        sendResetLink: 'रीसेट लिंक पाठवात',
        enterEmail: 'तुमचो ईमेल प्रविष्ट करात',
        enterPassword: 'तुमचो पासवर्ड प्रविष्ट करात',
        emailPlaceholder: 'तुमचो ईमेल प्रविष्ट करात',
        passwordPlaceholder: 'तुमचो पासवर्ड प्रविष्ट करात'
    },
    mni: {
        selectLanguage: 'লোন পুন্সি',
        welcomeBack: 'ওইরক্তা খুরুমজরি',
        loginSubtitle: 'নগী তানসিং লম্বী তম্ননগীদমক সাইন ইন তৌ',
        email: 'ইমেইল মচা',
        password: 'পাসৱর্ড',
        rememberMe: 'য়েকা নিংসিঙ্বী',
        forgotPassword: 'পাসৱর্ড কাউখ্রব্রা?',
        signIn: 'সাইন ইন তৌ',
        dontHaveAccount: 'একাউণ্ট লৈত্রব্রা?',
        register: 'হৌজিক্কী রেজিষ্টার তৌ',
        footerText: '© 2026 NEXURA. মতম পূন্সি মখা থম্মী।',
        resetPassword: 'পাসৱর্ড রিসেট তৌ',
        resetPasswordSubtitle: 'নগী ইমেইল মচা থম্মী অমসুং ইম্না নগী পাসৱর্ড রিসেট তৌনবগীদমক লিংক থাগৎকনি',
        cancel: 'থাদোক্কী',
        sendResetLink: 'রিসেট লিংক থাগৎকী',
        enterEmail: 'নগী ইমেইল থম্মী',
        enterPassword: 'নগী পাসৱর্ড থম্মী',
        emailPlaceholder: 'নগী ইমেইল থম্মী',
        passwordPlaceholder: 'নগী পাসৱর্ড থম্মী'
    },
    ne: {
        selectLanguage: 'भाषा चयन गर्नुहोस्',
        welcomeBack: 'पुन: स्वागत छ',
        loginSubtitle: 'आफ्ना औषधिहरू व्यवस्थापन गर्न साइन इन गर्नुहोस्',
        email: 'इमेल ठेगाना',
        password: 'पासवर्ड',
        rememberMe: 'मलाई सम्झनुहोस्',
        forgotPassword: 'पासवर्ड बिर्सनुभयो?',
        signIn: 'साइन इन गर्नुहोस्',
        dontHaveAccount: 'खाता छैन?',
        register: 'अहिले दर्ता गर्नुहोस्',
        footerText: '© 2026 NEXURA. सबै अधिकार सुरक्षित।',
        resetPassword: 'पासवर्ड रिसेट गर्नुहोस्',
        resetPasswordSubtitle: 'आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस् र हामी तपाईंलाई पासवर्ड रिसेट गर्न लिङ्क पठाउनेछौं',
        cancel: 'रद्द गर्नुहोस्',
        sendResetLink: 'रिसेट लिङ्क पठाउनुहोस्',
        enterEmail: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्',
        enterPassword: 'आफ्नो पासवर्ड प्रविष्ट गर्नुहोस्',
        emailPlaceholder: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्',
        passwordPlaceholder: 'आफ्नो पासवर्ड प्रविष्ट गर्नुहोस्'
    },
    sa: {
        selectLanguage: 'भाषां चिनुत',
        welcomeBack: 'पुनः स्वागतम्',
        loginSubtitle: 'भवतः औषधानां व्यवस्थापनाय प्रविशतु',
        email: 'विपत्रपत्त्रम्',
        password: 'गुप्तशब्दः',
        rememberMe: 'मां स्मरतु',
        forgotPassword: 'गुप्तशब्दं विस्मृतवान्?',
        signIn: 'प्रविशतु',
        dontHaveAccount: 'खातं नास्ति?',
        register: 'अधुना पंजीकरोतु',
        footerText: '© 2026 NEXURA. सर्वे अधिकाराः सुरक्षिताः।',
        resetPassword: 'गुप्तशब्दं पुनः स्थापयतु',
        resetPasswordSubtitle: 'भवतः विपत्रपत्त्रं प्रवेशयतु वयं गुप्तशब्दं पुनः स्थापनाय लिङ्कं प्रेषयिष्यामः',
        cancel: 'रद्द करोतु',
        sendResetLink: 'पुनःस्थापनालिङ्कं प्रेषयतु',
        enterEmail: 'भवतः विपत्रपत्त्रं प्रवेशयतु',
        enterPassword: 'भवतः गुप्तशब्दं प्रवेशयतु',
        emailPlaceholder: 'भवतः विपत्रपत्त्रं प्रवेशयतु',
        passwordPlaceholder: 'भवतः गुप्तशब्दं प्रवेशयतु'
    },
    es: {
        selectLanguage: 'SELECCIONAR IDIOMA',
        welcomeBack: 'Bienvenido de nuevo',
        loginSubtitle: 'Inicia sesión para gestionar tus medicamentos',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        rememberMe: 'Recuérdame',
        forgotPassword: '¿Olvidaste tu contraseña?',
        signIn: 'Iniciar Sesión',
        dontHaveAccount: '¿No tienes una cuenta?',
        register: 'Regístrate Ahora',
        footerText: '© 2026 NEXURA. Todos los derechos reservados.',
        resetPassword: 'Restablecer Contraseña',
        resetPasswordSubtitle: 'Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña',
        cancel: 'Cancelar',
        sendResetLink: 'Enviar Enlace de Restablecimiento',
        enterEmail: 'Ingresa tu correo electrónico',
        enterPassword: 'Ingresa tu contraseña',
        emailPlaceholder: 'Ingresa tu correo electrónico',
        passwordPlaceholder: 'Ingresa tu contraseña'
    },
    fr: {
        selectLanguage: 'SÉLECTIONNER LA LANGUE',
        welcomeBack: 'Bon retour',
        loginSubtitle: 'Connectez-vous pour gérer vos médicaments',
        email: 'Adresse Email',
        password: 'Mot de Passe',
        rememberMe: 'Se souvenir de moi',
        forgotPassword: 'Mot de passe oublié?',
        signIn: 'Se Connecter',
        dontHaveAccount: 'Vous n\'avez pas de compte?',
        register: 'S\'inscrire Maintenant',
        footerText: '© 2026 NEXURA. Tous droits réservés.',
        resetPassword: 'Réinitialiser le Mot de Passe',
        resetPasswordSubtitle: 'Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe',
        cancel: 'Annuler',
        sendResetLink: 'Envoyer le Lien de Réinitialisation',
        enterEmail: 'Entrez votre email',
        enterPassword: 'Entrez votre mot de passe',
        emailPlaceholder: 'Entrez votre email',
        passwordPlaceholder: 'Entrez votre mot de passe'
    },
    de: {
        selectLanguage: 'SPRACHE AUSWÄHLEN',
        welcomeBack: 'Willkommen zurück',
        loginSubtitle: 'Melden Sie sich an, um Ihre Medikamente zu verwalten',
        email: 'E-Mail-Adresse',
        password: 'Passwort',
        rememberMe: 'Angemeldet bleiben',
        forgotPassword: 'Passwort vergessen?',
        signIn: 'Anmelden',
        dontHaveAccount: 'Kein Konto?',
        register: 'Jetzt registrieren',
        footerText: '© 2026 NEXURA. Alle Rechte vorbehalten.',
        resetPassword: 'Passwort zurücksetzen',
        resetPasswordSubtitle: 'Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts',
        cancel: 'Abbrechen',
        sendResetLink: 'Reset-Link senden',
        enterEmail: 'Geben Sie Ihre E-Mail ein',
        enterPassword: 'Geben Sie Ihr Passwort ein',
        emailPlaceholder: 'Geben Sie Ihre E-Mail ein',
        passwordPlaceholder: 'Geben Sie Ihr Passwort ein'
    },
    ja: {
        selectLanguage: '言語を選択',
        welcomeBack: 'おかえりなさい',
        loginSubtitle: '薬を管理するためにサインインしてください',
        email: 'メールアドレス',
        password: 'パスワード',
        rememberMe: 'ログイン情報を保存',
        forgotPassword: 'パスワードをお忘れですか？',
        signIn: 'サインイン',
        dontHaveAccount: 'アカウントをお持ちでないですか？',
        register: '今すぐ登録',
        footerText: '© 2026 NEXURA. 全著作権所有。',
        resetPassword: 'パスワードをリセット',
        resetPasswordSubtitle: 'メールアドレスを入力すると、パスワードをリセットするためのリンクを送信します',
        cancel: 'キャンセル',
        sendResetLink: 'リセットリンクを送信',
        enterEmail: 'メールアドレスを入力',
        enterPassword: 'パスワードを入力',
        emailPlaceholder: 'メールアドレスを入力',
        passwordPlaceholder: 'パスワードを入力'
    },
    zh: {
        selectLanguage: '选择语言',
        welcomeBack: '欢迎回来',
        loginSubtitle: '登录以管理您的药物',
        email: '电子邮件地址',
        password: '密码',
        rememberMe: '记住我',
        forgotPassword: '忘记密码？',
        signIn: '登录',
        dontHaveAccount: '没有帐户？',
        register: '立即注册',
        footerText: '© 2026 NEXURA. 保留所有权利。',
        resetPassword: '重置密码',
        resetPasswordSubtitle: '输入您的电子邮件地址，我们将向您发送重置密码的链接',
        cancel: '取消',
        sendResetLink: '发送重置链接',
        enterEmail: '输入您的电子邮件',
        enterPassword: '输入您的密码',
        emailPlaceholder: '输入您的电子邮件',
        passwordPlaceholder: '输入您的密码'
    }
};

// ================================================================
// EXTEND LANGUAGE MANAGER WITH LOGIN TRANSLATIONS
// ================================================================

// Check if languageManager exists from external file
if (typeof languageManager !== 'undefined') {
    // Extend existing translations with login translations
    const existingTranslations = languageManager.translations || {};
    Object.keys(LOGIN_TRANSLATIONS).forEach(lang => {
        if (!existingTranslations[lang]) {
            existingTranslations[lang] = {};
        }
        Object.assign(existingTranslations[lang], LOGIN_TRANSLATIONS[lang]);
    });
    languageManager.translations = existingTranslations;
    console.log('✅ Login translations merged into languageManager');
} else {
    console.warn('⚠️ languageManager not found! Login translations will not work.');
}

// ================================================================
// LOGIN APP CLASS - FIXED VERSION
// ================================================================

class LoginApp {
    constructor() {
        console.log('🚀 Initializing Login Application...');
        
        // ============================================================
        // INITIALIZATION
        // ============================================================
        
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        this.languageManager = languageManager;
        this.loginAttempts = 0;
        this.maxLoginAttempts = 5;
        this.isLocked = false;
        this.lockTimeout = null;
        this.rememberMe = false;
        this.toastTimeout = null;
        
        // ============================================================
        // LOAD SAVED CREDENTIALS
        // ============================================================
        
        this.loadSavedCredentials();
        
        // ============================================================
        // INITIALIZE UI
        // ============================================================
        
        this.applyTheme(this.currentTheme);
        this.populateLanguageDropdown();
        this.loadSavedLanguage();
        this.setupEventListeners();
        
        // ============================================================
        // TRANSLATE PAGE
        // ============================================================
        
        this.translatePage();
        setTimeout(() => this.translatePage(), 100);
        setTimeout(() => this.translatePage(), 300);
        
        // ============================================================
        // CHECK FOR EXISTING SESSION
        // ============================================================
        
        this.checkExistingSession();
        
        console.log('✅ Login Application initialized successfully');
    }

    // ================================================================
    // SAVED CREDENTIALS
    // ================================================================
    
    loadSavedCredentials() {
        const savedEmail = localStorage.getItem('nexura_saved_email');
        const savedPassword = localStorage.getItem('nexura_saved_password');
        const rememberMe = localStorage.getItem('nexura_remember_me') === 'true';
        
        if (rememberMe && savedEmail) {
            this.rememberMe = true;
            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');
            if (emailInput) emailInput.value = savedEmail;
            if (passwordInput) passwordInput.value = savedPassword || '';
            const rememberCheck = document.getElementById('rememberMe');
            if (rememberCheck) rememberCheck.checked = true;
        }
    }

    saveCredentials(email, password) {
        if (this.rememberMe) {
            localStorage.setItem('nexura_saved_email', email);
            localStorage.setItem('nexura_saved_password', password);
            localStorage.setItem('nexura_remember_me', 'true');
        } else {
            localStorage.removeItem('nexura_saved_email');
            localStorage.removeItem('nexura_saved_password');
            localStorage.setItem('nexura_remember_me', 'false');
        }
    }

    // ================================================================
    // EXISTING SESSION CHECK
    // ================================================================
    
    checkExistingSession() {
        const session = localStorage.getItem('nexura_session');
        if (session) {
            try {
                const data = JSON.parse(session);
                const expiry = new Date(data.expiry);
                const now = new Date();
                
                if (now < expiry) {
                    console.log('✅ Valid session found, redirecting to dashboard...');
                    window.location.href = 'dashboard.html';
                    return;
                } else {
                    localStorage.removeItem('nexura_session');
                }
            } catch (e) {
                localStorage.removeItem('nexura_session');
            }
        }
    }

    // ================================================================
    // USER AUTHENTICATION
    // ================================================================
    
    authenticateUser(email, password) {
        console.log('🔐 Authenticating user:', email);
        
        const users = JSON.parse(localStorage.getItem('nexura_users') || '[]');
        console.log('📋 Registered users found:', users.length);
        
        if (users.length === 0) {
            return { 
                success: false, 
                message: 'No registered users found. Please create an account first.' 
            };
        }
        
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (!user) {
            return { 
                success: false, 
                message: 'No account found with this email address. Please register first.' 
            };
        }
        
        console.log('👤 User found:', user.fullName);
        
        let storedPassword = user.password;
        
        if (!storedPassword) {
            storedPassword = localStorage.getItem('nexura_user_password_' + user.id);
        }
        
        if (!storedPassword) {
            storedPassword = localStorage.getItem('nexura_password_' + email);
        }
        
        if (!storedPassword) {
            storedPassword = localStorage.getItem('nexura_user_password');
        }
        
        console.log('🔑 Password check:', {
            hasStoredPassword: !!storedPassword,
            hasEnteredPassword: !!password
        });
        
        if (!storedPassword) {
            if (password && password.length >= 8) {
                console.log('✅ Demo login accepted for:', user.fullName);
                return { 
                    success: true, 
                    user: user,
                    message: 'Login successful!'
                };
            } else {
                return { 
                    success: false, 
                    message: 'Invalid credentials. Please try again.' 
                };
            }
        }
        
        if (password !== storedPassword) {
            console.log('❌ Invalid password for user:', email);
            return { 
                success: false, 
                message: 'Invalid password. Please try again.' 
            };
        }
        
        console.log('✅ Authentication successful for:', user.fullName);
        return { 
            success: true, 
            user: user,
            message: 'Login successful!'
        };
    }

    // ================================================================
    // LOGIN HANDLER
    // ================================================================
    
    handleLogin(event) {
        event.preventDefault();
        console.log('🔐 Login form submitted');
        
        if (this.isLocked) {
            this.showStatus('Account temporarily locked. Please try again later.', 'error');
            this.showToast('Account Locked', 'Please wait 5 minutes before trying again.', 'error');
            return;
        }
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        if (!email) {
            this.showStatus('Please enter your email address.', 'error');
            document.getElementById('loginEmail').focus();
            return;
        }
        
        if (!password) {
            this.showStatus('Please enter your password.', 'error');
            document.getElementById('loginPassword').focus();
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            this.showStatus('Please enter a valid email address.', 'error');
            document.getElementById('loginEmail').focus();
            return;
        }
        
        if (password.length < 8) {
            this.showStatus('Password must be at least 8 characters long.', 'error');
            document.getElementById('loginPassword').focus();
            return;
        }
        
        this.rememberMe = rememberMe;
        
        const loginBtn = document.getElementById('loginBtn');
        const originalText = loginBtn.innerHTML;
        loginBtn.disabled = true;
        loginBtn.innerHTML = '<span class="spinner"></span> Signing In...';
        
        setTimeout(() => {
            const result = this.authenticateUser(email, password);
            
            if (result.success) {
                this.loginAttempts = 0;
                this.saveCredentials(email, password);
                this.createSession(result.user);
                this.showStatus(result.message, 'success');
                this.showToast('Success', result.message, 'success');
                
                document.getElementById('loginForm').reset();
                
                console.log('✅ User logged in successfully:', result.user.fullName);
                
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                this.loginAttempts++;
                this.showStatus(result.message, 'error');
                this.showToast('Login Failed', result.message, 'error');
                
                if (this.loginAttempts >= this.maxLoginAttempts) {
                    this.lockAccount();
                }
                
                loginBtn.disabled = false;
                loginBtn.innerHTML = originalText;
            }
        }, 800);
    }

    // ================================================================
    // SESSION MANAGEMENT
    // ================================================================
    
    createSession(user) {
        const session = {
            userId: user.id,
            email: user.email,
            fullName: user.fullName,
            role: user.role,
            productCode: user.productCode || 'NEX123',
            productType: user.productType || '',
            loginTime: new Date().toISOString(),
            expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };
        
        localStorage.setItem('nexura_session', JSON.stringify(session));
        localStorage.setItem('nexura_current_user', JSON.stringify(user));
        localStorage.setItem('nexura_user_email', user.email);
        localStorage.setItem('nexura_user_fullname', user.fullName);
        
        console.log('✅ Session created for:', user.fullName);
        console.log('📅 Session expires:', new Date(session.expiry).toLocaleString());
    }

    // ================================================================
    // ACCOUNT LOCKING
    // ================================================================
    
    lockAccount() {
        this.isLocked = true;
        this.showStatus('Account locked due to multiple failed attempts. Please try again in 5 minutes.', 'error');
        this.showToast('Account Locked', 'Too many failed attempts. Please wait 5 minutes.', 'error');
        
        this.lockTimeout = setTimeout(() => {
            this.isLocked = false;
            this.loginAttempts = 0;
            this.showStatus('Account unlocked. You can try logging in again.', 'info');
            this.showToast('Account Unlocked', 'You can now try logging in again.', 'info');
            
            const loginBtn = document.getElementById('loginBtn');
            if (loginBtn) {
                loginBtn.disabled = false;
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span>Sign In</span> <i class="fas fa-arrow-right"></i>';
            }
        }, 5 * 60 * 1000);
    }

    // ================================================================
    // FORGOT PASSWORD
    // ================================================================
    
    sendResetLink() {
        const email = document.getElementById('resetEmail').value.trim();
        const statusEl = document.getElementById('resetStatus');
        
        if (!email) {
            statusEl.style.display = 'block';
            statusEl.className = 'status-message error';
            statusEl.textContent = 'Please enter your email address.';
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            statusEl.style.display = 'block';
            statusEl.className = 'status-message error';
            statusEl.textContent = 'Please enter a valid email address.';
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('nexura_users') || '[]');
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        
        if (!user) {
            statusEl.style.display = 'block';
            statusEl.className = 'status-message error';
            statusEl.textContent = 'No account found with this email address.';
            return;
        }
        
        const token = 'reset_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
        localStorage.setItem('nexura_reset_token_' + user.id, token);
        localStorage.setItem('nexura_reset_email', email);
        localStorage.setItem('nexura_reset_token', token);
        
        statusEl.style.display = 'block';
        statusEl.className = 'status-message success';
        statusEl.textContent = 'Password reset link sent! Check your email (demo).';
        
        this.showToast('Reset Link Sent', 'Check your email for the password reset link.', 'success');
        
        setTimeout(() => {
            this.closeForgotPasswordModal();
        }, 3000);
    }

    // ================================================================
    // UI HELPERS
    // ================================================================
    
    showStatus(message, type) {
        const statusEl = document.getElementById('loginStatus');
        if (!statusEl) return;
        
        statusEl.textContent = message;
        statusEl.className = 'status-message ' + type;
        statusEl.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 5000);
        }
    }

    showToast(title, message, type = 'info') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        const titleEl = document.getElementById('toastTitle');
        const messageEl = document.getElementById('toastMessage');
        const iconEl = toast.querySelector('.toast-icon');
        
        if (titleEl) titleEl.textContent = title;
        if (messageEl) messageEl.textContent = message;
        
        if (iconEl) {
            iconEl.className = 'toast-icon';
            if (type === 'success') {
                iconEl.classList.add('success');
                iconEl.innerHTML = '<i class="fas fa-check-circle"></i>';
            } else if (type === 'error') {
                iconEl.classList.add('error');
                iconEl.innerHTML = '<i class="fas fa-times-circle"></i>';
            } else if (type === 'warning') {
                iconEl.classList.add('warning');
                iconEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            } else {
                iconEl.classList.add('info');
                iconEl.innerHTML = '<i class="fas fa-info-circle"></i>';
            }
        }
        
        toast.classList.add('show');
        
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        this.toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    closeToast() {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.remove('show');
        }
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
            this.toastTimeout = null;
        }
    }

    // ================================================================
    // PASSWORD VISIBILITY TOGGLE
    // ================================================================
    
    togglePasswordVisibility() {
        const passwordInput = document.getElementById('loginPassword');
        const icon = document.getElementById('passwordToggleIcon');
        
        if (!passwordInput || !icon) {
            console.error('Password toggle elements not found');
            return;
        }
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            icon.className = 'fas fa-eye';
        }
        
        passwordInput.focus();
    }

    // ================================================================
    // FORGOT PASSWORD MODAL
    // ================================================================
    
    openForgotPasswordModal() {
        const modal = document.getElementById('forgotPasswordModal');
        if (modal) {
            modal.classList.add('show');
        }
        const resetEmail = document.getElementById('resetEmail');
        if (resetEmail) {
            resetEmail.value = '';
        }
        const resetStatus = document.getElementById('resetStatus');
        if (resetStatus) {
            resetStatus.style.display = 'none';
        }
    }

    closeForgotPasswordModal() {
        const modal = document.getElementById('forgotPasswordModal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // ================================================================
    // LANGUAGE
    // ================================================================
    
    populateLanguageDropdown() {
        const select = document.getElementById('languageSelect');
        if (!select) return;
        
        if (this.languageManager) {
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
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('nexura_language') || 'en';
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = savedLang;
        }
        if (this.languageManager) {
            this.languageManager.setLanguage(savedLang);
        }
    }

    // ================================================================
    // TRANSLATE PAGE - FIXED
    // ================================================================
    
    translatePage() {
        console.log('🌐 Translating login page...');
        
        if (!this.languageManager) {
            console.warn('⚠️ languageManager not available');
            return;
        }
        
        // Get current language from localStorage or default to English
        const currentLang = localStorage.getItem('nexura_language') || 'en';
        
        // Make sure translations are loaded
        if (this.languageManager.translations && this.languageManager.translations[currentLang]) {
            const translations = this.languageManager.translations[currentLang];
            
            // Translate elements with data-i18n
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key] !== undefined && translations[key] !== null) {
                    el.textContent = translations[key];
                }
            });
            
            // Translate placeholders with data-i18n-placeholder
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[key] !== undefined && translations[key] !== null) {
                    el.placeholder = translations[key];
                }
            });
            
            console.log('✅ Login page translated to:', currentLang);
        } else {
            console.warn('⚠️ Translations not found for language:', currentLang);
        }
    }

    // ================================================================
    // THEME
    // ================================================================
    
    toggleTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('i');
        
        if (this.currentTheme === 'light') {
            this.currentTheme = 'dark';
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-mode');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            this.currentTheme = 'light';
            document.documentElement.removeAttribute('data-theme');
            document.body.classList.remove('dark-mode');
            if (icon) {
                icon.className = 'fas fa-moon';
            }
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
        
        localStorage.setItem('nexura_theme', this.currentTheme);
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

    // ================================================================
    // EVENT LISTENERS
    // ================================================================
    
    setupEventListeners() {
        console.log('🔗 Setting up event listeners...');
        
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                const lang = e.target.value;
                console.log('🌐 Language changing to:', lang);
                localStorage.setItem('nexura_language', lang);
                if (this.languageManager) {
                    this.languageManager.setLanguage(lang);
                }
                // Force re-translate
                setTimeout(() => {
                    this.translatePage();
                }, 50);
                console.log('🌐 Language changed to:', lang);
            });
        }

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                this.handleLogin(e);
            });
        }

        const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.openForgotPasswordModal();
            });
        }

        const registerLink = document.getElementById('registerLink');
        if (registerLink) {
            registerLink.addEventListener('click', (e) => {
                console.log('🔗 Navigating to register page');
            });
        }

        const toggleBtn = document.getElementById('passwordToggleBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.togglePasswordVisibility();
            });
        }

        const toggleIcon = document.getElementById('passwordToggleIcon');
        if (toggleIcon) {
            toggleIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.togglePasswordVisibility();
            });
        }

        const resetEmail = document.getElementById('resetEmail');
        if (resetEmail) {
            resetEmail.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.sendResetLink();
                }
            });
        }

        const loginPassword = document.getElementById('loginPassword');
        if (loginPassword) {
            loginPassword.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('loginForm').dispatchEvent(new Event('submit'));
                }
            });
        }

        const loginEmail = document.getElementById('loginEmail');
        if (loginEmail) {
            loginEmail.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('loginPassword').focus();
                }
            });
        }

        const modal = document.getElementById('forgotPasswordModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    this.closeForgotPasswordModal();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeForgotPasswordModal();
            }
        });

        const toastClose = document.querySelector('.toast-close');
        if (toastClose) {
            toastClose.addEventListener('click', () => {
                this.closeToast();
            });
        }

        console.log('✅ Event listeners setup complete');
    }

    // ================================================================
    // CLEANUP
    // ================================================================
    
    destroy() {
        console.log('🧹 Cleaning up login...');
        
        if (this.lockTimeout) {
            clearTimeout(this.lockTimeout);
            this.lockTimeout = null;
        }
        
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
            this.toastTimeout = null;
        }
        
        console.log('✅ Login cleaned up');
    }
}

// ================================================================
// GLOBAL FUNCTIONS
// ================================================================

function togglePasswordVisibility() {
    if (window.loginApp) {
        window.loginApp.togglePasswordVisibility();
    } else {
        const passwordInput = document.getElementById('loginPassword');
        const icon = document.getElementById('passwordToggleIcon');
        
        if (!passwordInput || !icon) return;
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            icon.className = 'fas fa-eye';
        }
        passwordInput.focus();
    }
}

function closeForgotPasswordModal() {
    if (window.loginApp) {
        window.loginApp.closeForgotPasswordModal();
    }
}

function sendResetLink() {
    if (window.loginApp) {
        window.loginApp.sendResetLink();
    }
}

function closeToast() {
    if (window.loginApp) {
        window.loginApp.closeToast();
    }
}

// ================================================================
// INITIALIZE
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing login...');
    
    const savedTheme = localStorage.getItem('nexura_theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.className = 'fas fa-sun';
        }
    }
    
    try {
        window.loginApp = new LoginApp();
        console.log('✅ Login app initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize login app:', error);
    }
    
    console.log('✅ Login initialization complete');
});