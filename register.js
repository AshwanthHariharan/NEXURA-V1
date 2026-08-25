// js/register.js

// ================================================================
// COMPLETE TRANSLATIONS FOR REGISTER PAGE - ALL LANGUAGES
// ================================================================

const REGISTER_TRANSLATIONS = {
    en: {
        selectLanguage: 'SELECT LANGUAGE',
        registerTitle: 'Create Your Account',
        registerSubtitle: 'Join NEXURA for smart medication management',
        productActivation: 'Product Code Activation',
        selectProductType: 'Select Your Product Type',
        tabletsProduct: 'Tablets',
        syrupsProduct: 'Syrups',
        userDetails: 'User Details',
        fullName: 'Full Name',
        email: 'Email Address',
        mobile: 'Mobile Number',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        roleSelection: 'Select Your Role',
        patient: 'Patient',
        patientDesc: 'Manage your own medications',
        caregiver: 'Caregiver',
        caregiverDesc: 'Manage medications for others',
        admin: 'Admin',
        adminDesc: 'Full system access',
        termsText: 'I agree to the Terms & Conditions and Privacy Policy',
        registerAndStart: 'Register & Start with Personal Details',
        alreadyHaveAccount: 'Already have an account?',
        signIn: 'Sign In',
        forgotPassword: 'Forgot Password?',
        footerText: '© 2026 NEXURA. All rights reserved.',
        resetPassword: 'Reset Password',
        resetPasswordSubtitle: 'Enter your email or mobile number to receive OTP',
        emailOrMobile: 'Email or Mobile',
        enterOTP: 'Enter OTP',
        newPassword: 'New Password',
        cancel: 'Cancel',
        sendOTP: 'Send OTP',
        resetPasswordBtn: 'Reset Password',
        otpVerification: 'OTP Verification',
        otpSentMessage: "We've sent a 6-digit OTP to your registered email/mobile",
        verifyOTP: 'Verify OTP',
        resendOTP: 'Resend OTP',
        enterEmailOrMobile: 'Enter email or mobile',
        minChars: 'Min 8 characters',
        uppercase: 'Uppercase',
        lowercase: 'Lowercase',
        number: 'Number',
        specialChar: 'Special character',
        emailPlaceholder: 'Enter your email',
        mobilePlaceholder: 'Enter 10-digit mobile number',
        passwordPlaceholder: 'Create a strong password',
        confirmPasswordPlaceholder: 'Confirm your password'
    },
    hi: {
        selectLanguage: 'भाषा चुनें',
        registerTitle: 'अपना खाता बनाएं',
        registerSubtitle: 'स्मार्ट दवा प्रबंधन के लिए NEXURA से जुड़ें',
        productActivation: 'उत्पाद कोड सक्रियण',
        selectProductType: 'अपना उत्पाद प्रकार चुनें',
        tabletsProduct: 'गोलियाँ',
        syrupsProduct: 'सीरप',
        userDetails: 'उपयोगकर्ता विवरण',
        fullName: 'पूरा नाम',
        email: 'ईमेल पता',
        mobile: 'मोबाइल नंबर',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        roleSelection: 'अपनी भूमिका चुनें',
        patient: 'रोगी',
        patientDesc: 'अपनी दवाओं का प्रबंधन करें',
        caregiver: 'देखभालकर्ता',
        caregiverDesc: 'दूसरों के लिए दवाओं का प्रबंधन करें',
        admin: 'प्रशासक',
        adminDesc: 'पूर्ण सिस्टम पहुंच',
        termsText: 'मैं नियम और शर्तों और गोपनीयता नीति से सहमत हूं',
        registerAndStart: 'पंजीकरण करें और व्यक्तिगत विवरण से शुरू करें',
        alreadyHaveAccount: 'पहले से खाता है?',
        signIn: 'साइन इन करें',
        forgotPassword: 'पासवर्ड भूल गए?',
        footerText: '© 2026 NEXURA. सर्वाधिकार सुरक्षित।',
        resetPassword: 'पासवर्ड रीसेट करें',
        resetPasswordSubtitle: 'OTP प्राप्त करने के लिए अपना ईमेल या मोबाइल नंबर दर्ज करें',
        emailOrMobile: 'ईमेल या मोबाइल',
        enterOTP: 'OTP दर्ज करें',
        newPassword: 'नया पासवर्ड',
        cancel: 'रद्द करें',
        sendOTP: 'OTP भेजें',
        resetPasswordBtn: 'पासवर्ड रीसेट करें',
        otpVerification: 'OTP सत्यापन',
        otpSentMessage: 'हमने आपके पंजीकृत ईमेल/मोबाइल पर 6-अंकीय OTP भेजा है',
        verifyOTP: 'OTP सत्यापित करें',
        resendOTP: 'OTP पुनः भेजें',
        enterEmailOrMobile: 'ईमेल या मोबाइल दर्ज करें',
        minChars: 'कम से कम 8 अक्षर',
        uppercase: 'बड़े अक्षर',
        lowercase: 'छोटे अक्षर',
        number: 'संख्या',
        specialChar: 'विशेष वर्ण',
        emailPlaceholder: 'अपना ईमेल दर्ज करें',
        mobilePlaceholder: '10 अंकों का मोबाइल नंबर दर्ज करें',
        passwordPlaceholder: 'एक मजबूत पासवर्ड बनाएं',
        confirmPasswordPlaceholder: 'अपने पासवर्ड की पुष्टि करें'
    },
    bn: {
        selectLanguage: 'ভাষা নির্বাচন করুন',
        registerTitle: 'আপনার অ্যাকাউন্ট তৈরি করুন',
        registerSubtitle: 'স্মার্ট ঔষধ পরিচালনার জন্য NEXURA-তে যোগ দিন',
        productActivation: 'পণ্য কোড সক্রিয়করণ',
        selectProductType: 'আপনার পণ্যের ধরন নির্বাচন করুন',
        tabletsProduct: 'ট্যাবলেট',
        syrupsProduct: 'সিরাপ',
        userDetails: 'ব্যবহারকারীর বিবরণ',
        fullName: 'পুরো নাম',
        email: 'ইমেইল ঠিকানা',
        mobile: 'মোবাইল নম্বর',
        password: 'পাসওয়ার্ড',
        confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন',
        roleSelection: 'আপনার ভূমিকা নির্বাচন করুন',
        patient: 'রোগী',
        patientDesc: 'আপনার নিজের ঔষধ পরিচালনা করুন',
        caregiver: 'যত্নদাতা',
        caregiverDesc: 'অন্যদের জন্য ঔষধ পরিচালনা করুন',
        admin: 'প্রশাসক',
        adminDesc: 'সম্পূর্ণ সিস্টেম অ্যাক্সেস',
        termsText: 'আমি শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত হয়েছি',
        registerAndStart: 'নিবন্ধন করুন এবং ব্যক্তিগত বিবরণ দিয়ে শুরু করুন',
        alreadyHaveAccount: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে?',
        signIn: 'সাইন ইন করুন',
        forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন?',
        footerText: '© 2026 NEXURA. সর্বস্বত্ব সংরক্ষিত।',
        resetPassword: 'পাসওয়ার্ড রিসেট করুন',
        resetPasswordSubtitle: 'OTP পেতে আপনার ইমেইল বা মোবাইল নম্বর লিখুন',
        emailOrMobile: 'ইমেইল বা মোবাইল',
        enterOTP: 'OTP লিখুন',
        newPassword: 'নতুন পাসওয়ার্ড',
        cancel: 'বাতিল করুন',
        sendOTP: 'OTP পাঠান',
        resetPasswordBtn: 'পাসওয়ার্ড রিসেট করুন',
        otpVerification: 'OTP যাচাইকরণ',
        otpSentMessage: 'আমরা আপনার নিবন্ধিত ইমেইল/মোবাইলে 6-অঙ্কের OTP পাঠিয়েছি',
        verifyOTP: 'OTP যাচাই করুন',
        resendOTP: 'OTP পুনরায় পাঠান',
        enterEmailOrMobile: 'ইমেইল বা মোবাইল লিখুন',
        minChars: 'ন্যূনতম ৮ অক্ষর',
        uppercase: 'বড় হাতের অক্ষর',
        lowercase: 'ছোট হাতের অক্ষর',
        number: 'সংখ্যা',
        specialChar: 'বিশেষ অক্ষর',
        emailPlaceholder: 'আপনার ইমেইল লিখুন',
        mobilePlaceholder: '১০ অঙ্কের মোবাইল নম্বর লিখুন',
        passwordPlaceholder: 'একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন',
        confirmPasswordPlaceholder: 'আপনার পাসওয়ার্ড নিশ্চিত করুন'
    },
    te: {
        selectLanguage: 'భాషను ఎంచుకోండి',
        registerTitle: 'మీ ఖాతాను సృష్టించండి',
        registerSubtitle: 'స్మార్ట్ మందుల నిర్వహణ కోసం NEXURAలో చేరండి',
        productActivation: 'ఉత్పత్తి కోడ్ యాక్టివేషన్',
        selectProductType: 'మీ ఉత్పత్తి రకాన్ని ఎంచుకోండి',
        tabletsProduct: 'మాత్రలు',
        syrupsProduct: 'సిరప్',
        userDetails: 'వినియోగదారు వివరాలు',
        fullName: 'పూర్తి పేరు',
        email: 'ఇమెయిల్ చిరునామా',
        mobile: 'మొబైల్ నంబర్',
        password: 'పాస్వర్డ్',
        confirmPassword: 'పాస్వర్డ్ నిర్ధారించండి',
        roleSelection: 'మీ పాత్రను ఎంచుకోండి',
        patient: 'రోగి',
        patientDesc: 'మీ స్వంత మందులను నిర్వహించండి',
        caregiver: 'సంరక్షకుడు',
        caregiverDesc: 'ఇతరుల కోసం మందులను నిర్వహించండి',
        admin: 'నిర్వాహకుడు',
        adminDesc: 'పూర్తి సిస్టమ్ యాక్సెస్',
        termsText: 'నేను నిబంధనలు మరియు గోప్యతా విధానంతో అంగీకరిస్తున్నాను',
        registerAndStart: 'నమోదు చేసి వ్యక్తిగత వివరాలతో ప్రారంభించండి',
        alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
        signIn: 'సైన్ ఇన్ చేయండి',
        forgotPassword: 'పాస్వర్డ్ మర్చిపోయారా?',
        footerText: '© 2026 NEXURA. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
        resetPassword: 'పాస్వర్డ్ రీసెట్ చేయండి',
        resetPasswordSubtitle: 'OTP పొందడానికి మీ ఇమెయిల్ లేదా మొబైల్ నంబర్ నమోదు చేయండి',
        emailOrMobile: 'ఇమెయిల్ లేదా మొబైల్',
        enterOTP: 'OTP నమోదు చేయండి',
        newPassword: 'కొత్త పాస్వర్డ్',
        cancel: 'రద్దు చేయండి',
        sendOTP: 'OTP పంపండి',
        resetPasswordBtn: 'పాస్వర్డ్ రీసెట్ చేయండి',
        otpVerification: 'OTP ధృవీకరణ',
        otpSentMessage: 'మేము మీ రిజిస్టర్ చేసిన ఇమెయిల్/మొబైల్కు 6-అంకెల OTP పంపాము',
        verifyOTP: 'OTP ధృవీకరించండి',
        resendOTP: 'OTP మళ్లీ పంపండి',
        enterEmailOrMobile: 'ఇమెయిల్ లేదా మొబైల్ నమోదు చేయండి',
        minChars: 'కనీసం 8 అక్షరాలు',
        uppercase: 'పెద్ద అక్షరాలు',
        lowercase: 'చిన్న అక్షరాలు',
        number: 'సంఖ్య',
        specialChar: 'ప్రత్యేక అక్షరం',
        emailPlaceholder: 'మీ ఇమెయిల్ నమోదు చేయండి',
        mobilePlaceholder: '10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి',
        passwordPlaceholder: 'బలమైన పాస్వర్డ్ సృష్టించండి',
        confirmPasswordPlaceholder: 'మీ పాస్వర్డ్ నిర్ధారించండి'
    },
    mr: {
        selectLanguage: 'भाषा निवडा',
        registerTitle: 'तुमचे खाते तयार करा',
        registerSubtitle: 'स्मार्ट औषध व्यवस्थापनासाठी NEXURA मध्ये सामील व्हा',
        productActivation: 'उत्पादन कोड सक्रियकरण',
        selectProductType: 'तुमचा उत्पादन प्रकार निवडा',
        tabletsProduct: 'गोळ्या',
        syrupsProduct: 'सिरप',
        userDetails: 'वापरकर्ता तपशील',
        fullName: 'पूर्ण नाव',
        email: 'ईमेल पत्ता',
        mobile: 'मोबाइल नंबर',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्डची पुष्टी करा',
        roleSelection: 'तुमची भूमिका निवडा',
        patient: 'रुग्ण',
        patientDesc: 'तुमची स्वतःची औषधे व्यवस्थापित करा',
        caregiver: 'काळजीवाहू',
        caregiverDesc: 'इतरांसाठी औषधे व्यवस्थापित करा',
        admin: 'प्रशासक',
        adminDesc: 'संपूर्ण प्रणाली प्रवेश',
        termsText: 'मी अटी व शर्ती आणि गोपनीयता धोरणाशी सहमत आहे',
        registerAndStart: 'नोंदणी करा आणि वैयक्तिक तपशीलांसह प्रारंभ करा',
        alreadyHaveAccount: 'आधीच खाते आहे?',
        signIn: 'साइन इन करा',
        forgotPassword: 'पासवर्ड विसरलात?',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.',
        resetPassword: 'पासवर्ड रीसेट करा',
        resetPasswordSubtitle: 'OTP प्राप्त करण्यासाठी तुमचा ईमेल किंवा मोबाइल नंबर प्रविष्ट करा',
        emailOrMobile: 'ईमेल किंवा मोबाइल',
        enterOTP: 'OTP प्रविष्ट करा',
        newPassword: 'नवीन पासवर्ड',
        cancel: 'रद्द करा',
        sendOTP: 'OTP पाठवा',
        resetPasswordBtn: 'पासवर्ड रीसेट करा',
        otpVerification: 'OTP सत्यापन',
        otpSentMessage: 'आम्ही तुमच्या नोंदणीकृत ईमेल/मोबाइलवर 6-अंकी OTP पाठवला आहे',
        verifyOTP: 'OTP सत्यापित करा',
        resendOTP: 'OTP पुन्हा पाठवा',
        enterEmailOrMobile: 'ईमेल किंवा मोबाइल प्रविष्ट करा',
        minChars: 'किमान ८ अक्षरे',
        uppercase: 'मोठे अक्षर',
        lowercase: 'लहान अक्षर',
        number: 'संख्या',
        specialChar: 'विशेष वर्ण',
        emailPlaceholder: 'तुमचा ईमेल प्रविष्ट करा',
        mobilePlaceholder: '१० अंकी मोबाइल नंबर प्रविष्ट करा',
        passwordPlaceholder: 'मजबूत पासवर्ड तयार करा',
        confirmPasswordPlaceholder: 'तुमचा पासवर्ड पुष्टी करा'
    },
    ta: {
        selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
        registerTitle: 'உங்கள் கணக்கை உருவாக்கவும்',
        registerSubtitle: 'ஸ்மார்ட் மருந்து மேலாண்மைக்கு NEXURA-வில் இணையுங்கள்',
        productActivation: 'தயாரிப்பு குறியீடு செயல்படுத்தல்',
        selectProductType: 'உங்கள் தயாரிப்பு வகையைத் தேர்ந்தெடுக்கவும்',
        tabletsProduct: 'மாத்திரைகள்',
        syrupsProduct: 'சிரப்',
        userDetails: 'பயனர் விவரங்கள்',
        fullName: 'முழு பெயர்',
        email: 'மின்னஞ்சல் முகவரி',
        mobile: 'கைபேசி எண்',
        password: 'கடவுச்சொல்',
        confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
        roleSelection: 'உங்கள் பாத்திரத்தைத் தேர்ந்தெடுக்கவும்',
        patient: 'நோயாளி',
        patientDesc: 'உங்கள் சொந்த மருந்துகளை நிர்வகிக்கவும்',
        caregiver: 'பராமரிப்பாளர்',
        caregiverDesc: 'மற்றவர்களுக்கான மருந்துகளை நிர்வகிக்கவும்',
        admin: 'நிர்வாகி',
        adminDesc: 'முழு அமைப்பு அணுகல்',
        termsText: 'நான் விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்கிறேன்',
        registerAndStart: 'பதிவு செய்து தனிப்பட்ட விவரங்களுடன் தொடங்கவும்',
        alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
        signIn: 'உள்நுழைய',
        forgotPassword: 'கடவுச்சொல் மறந்துவிட்டீர்களா?',
        footerText: '© 2026 NEXURA. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        resetPassword: 'கடவுச்சொல்லை மீட்டமைக்க',
        resetPasswordSubtitle: 'OTP பெற உங்கள் மின்னஞ்சல் அல்லது கைபேசி எண்ணை உள்ளிடவும்',
        emailOrMobile: 'மின்னஞ்சல் அல்லது கைபேசி',
        enterOTP: 'OTP உள்ளிடவும்',
        newPassword: 'புதிய கடவுச்சொல்',
        cancel: 'ரத்து செய்யவும்',
        sendOTP: 'OTP அனுப்பவும்',
        resetPasswordBtn: 'கடவுச்சொல்லை மீட்டமைக்க',
        otpVerification: 'OTP சரிபார்ப்பு',
        otpSentMessage: 'உங்கள் பதிவு செய்யப்பட்ட மின்னஞ்சல்/கைபேசிக்கு 6-இலக்க OTP அனுப்பப்பட்டுள்ளது',
        verifyOTP: 'OTP சரிபார்க்கவும்',
        resendOTP: 'OTP மீண்டும் அனுப்பவும்',
        enterEmailOrMobile: 'மின்னஞ்சல் அல்லது கைபேசியை உள்ளிடவும்',
        minChars: 'குறைந்தது 8 எழுத்துகள்',
        uppercase: 'பெரிய எழுத்து',
        lowercase: 'சிறிய எழுத்து',
        number: 'எண்',
        specialChar: 'சிறப்பு எழுத்து',
        emailPlaceholder: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
        mobilePlaceholder: '10 இலக்க கைபேசி எண்ணை உள்ளிடவும்',
        passwordPlaceholder: 'வலுவான கடவுச்சொல்லை உருவாக்கவும்',
        confirmPasswordPlaceholder: 'உங்கள் கடவுச்சொல்லை உறுதிப்படுத்தவும்'
    },
    gu: {
        selectLanguage: 'ભાષા પસંદ કરો',
        registerTitle: 'તમારું ખાતું બનાવો',
        registerSubtitle: 'સ્માર્ટ દવા વ્યવસ્થાપન માટે NEXURA માં જોડાઓ',
        productActivation: 'ઉત્પાદન કોડ સક્રિયકરણ',
        selectProductType: 'તમારો ઉત્પાદન પ્રકાર પસંદ કરો',
        tabletsProduct: 'ગોળીઓ',
        syrupsProduct: 'સીરપ',
        userDetails: 'વપરાશકર્તા વિગતો',
        fullName: 'પૂરું નામ',
        email: 'ઇમેઇલ સરનામું',
        mobile: 'મોબાઇલ નંબર',
        password: 'પાસવર્ડ',
        confirmPassword: 'પાસવર્ડની પુષ્ટિ કરો',
        roleSelection: 'તમારી ભૂમિકા પસંદ કરો',
        patient: 'દર્દી',
        patientDesc: 'તમારી પોતાની દવાઓનું સંચાલન કરો',
        caregiver: 'સંભાળ રાખનાર',
        caregiverDesc: 'અન્ય માટે દવાઓનું સંચાલન કરો',
        admin: 'વ્યવસ્થાપક',
        adminDesc: 'સંપૂર્ણ સિસ્ટમ ઍક્સેસ',
        termsText: 'હું નિયમો અને શરતો અને ગોપનીયતા નીતિ સાથે સહમત છું',
        registerAndStart: 'નોંધણી કરો અને વ્યક્તિગત વિગતો સાથે પ્રારંભ કરો',
        alreadyHaveAccount: 'પહેલેથી ખાતું છે?',
        signIn: 'સાઇન ઇન કરો',
        forgotPassword: 'પાસવર્ડ ભૂલી ગયા?',
        footerText: '© 2026 NEXURA. સર્વાધિકાર સુરક્ષિત.',
        resetPassword: 'પાસવર્ડ રીસેટ કરો',
        resetPasswordSubtitle: 'OTP મેળવવા માટે તમારું ઇમેઇલ અથવા મોબાઇલ નંબર દાખલ કરો',
        emailOrMobile: 'ઇમેઇલ અથવા મોબાઇલ',
        enterOTP: 'OTP દાખલ કરો',
        newPassword: 'નવો પાસવર્ડ',
        cancel: 'રદ કરો',
        sendOTP: 'OTP મોકલો',
        resetPasswordBtn: 'પાસવર્ડ રીસેટ કરો',
        otpVerification: 'OTP ચકાસણી',
        otpSentMessage: 'અમે તમારા નોંધાયેલ ઇમેઇલ/મોબાઇલ પર 6-અંકનો OTP મોકલ્યો છે',
        verifyOTP: 'OTP ચકાસો',
        resendOTP: 'OTP ફરીથી મોકલો',
        enterEmailOrMobile: 'ઇમેઇલ અથવા મોબાઇલ દાખલ કરો',
        minChars: 'ઓછામાં ઓછા 8 અક્ષરો',
        uppercase: 'મોટા અક્ષર',
        lowercase: 'નાના અક્ષર',
        number: 'આંકડો',
        specialChar: 'વિશેષ અક્ષર',
        emailPlaceholder: 'તમારું ઇમેઇલ દાખલ કરો',
        mobilePlaceholder: '10 આંકડાનો મોબાઇલ નંબર દાખલ કરો',
        passwordPlaceholder: 'મજબૂત પાસવર્ડ બનાવો',
        confirmPasswordPlaceholder: 'તમારા પાસવર્ડની પુષ્ટિ કરો'
    },
    kn: {
        selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        registerTitle: 'ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ',
        registerSubtitle: 'ಸ್ಮಾರ್ಟ್ ಔಷಧಿ ನಿರ್ವಹಣೆಗಾಗಿ NEXURA ಗೆ ಸೇರಿ',
        productActivation: 'ಉತ್ಪನ್ನ ಕೋಡ್ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ',
        selectProductType: 'ನಿಮ್ಮ ಉತ್ಪನ್ನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        tabletsProduct: 'ಮಾತ್ರೆಗಳು',
        syrupsProduct: 'ಸಿರಪ್',
        userDetails: 'ಬಳಕೆದಾರ ವಿವರಗಳು',
        fullName: 'ಪೂರ್ಣ ಹೆಸರು',
        email: 'ಇಮೇಲ್ ವಿಳಾಸ',
        mobile: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
        password: 'ಪಾಸ್ವರ್ಡ್',
        confirmPassword: 'ಪಾಸ್ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ',
        roleSelection: 'ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        patient: 'ರೋಗಿ',
        patientDesc: 'ನಿಮ್ಮ ಸ್ವಂತ ಔಷಧಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
        caregiver: 'ಆರೈಕೆದಾರ',
        caregiverDesc: 'ಇತರರಿಗಾಗಿ ಔಷಧಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
        admin: 'ನಿರ್ವಾಹಕ',
        adminDesc: 'ಸಂಪೂರ್ಣ ಸಿಸ್ಟಮ್ ಪ್ರವೇಶ',
        termsText: 'ನಾನು ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು ಮತ್ತು ಗೌಪ್ಯತಾ ನೀತಿಗೆ ಒಪ್ಪುತ್ತೇನೆ',
        registerAndStart: 'ನೋಂದಾಯಿಸಿ ಮತ್ತು ವೈಯಕ್ತಿಕ ವಿವರಗಳೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿ',
        alreadyHaveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?',
        signIn: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
        forgotPassword: 'ಪಾಸ್ವರ್ಡ್ ಮರೆತಿರೆಯೇ?',
        footerText: '© 2026 NEXURA. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
        resetPassword: 'ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ',
        resetPasswordSubtitle: 'OTP ಪಡೆಯಲು ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
        emailOrMobile: 'ಇಮೇಲ್ ಅಥವಾ ಮೊಬೈಲ್',
        enterOTP: 'OTP ನಮೂದಿಸಿ',
        newPassword: 'ಹೊಸ ಪಾಸ್ವರ್ಡ್',
        cancel: 'ರದ್ದುಮಾಡಿ',
        sendOTP: 'OTP ಕಳುಹಿಸಿ',
        resetPasswordBtn: 'ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ',
        otpVerification: 'OTP ಪರಿಶೀಲನೆ',
        otpSentMessage: 'ನಾವು ನಿಮ್ಮ ನೋಂದಾಯಿತ ಇಮೇಲ್/ಮೊಬೈಲ್ಗೆ 6-ಅಂಕಿಯ OTP ಕಳುಹಿಸಿದ್ದೇವೆ',
        verifyOTP: 'OTP ಪರಿಶೀಲಿಸಿ',
        resendOTP: 'OTP ಮರುಕಳುಹಿಸಿ',
        enterEmailOrMobile: 'ಇಮೇಲ್ ಅಥವಾ ಮೊಬೈಲ್ ನಮೂದಿಸಿ',
        minChars: 'ಕನಿಷ್ಠ 8 ಅಕ್ಷರಗಳು',
        uppercase: 'ದೊಡ್ಡಕ್ಷರ',
        lowercase: 'ಸಣ್ಣಕ್ಷರ',
        number: 'ಸಂಖ್ಯೆ',
        specialChar: 'ವಿಶೇಷ ಅಕ್ಷರ',
        emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ',
        mobilePlaceholder: '10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
        passwordPlaceholder: 'ಬಲವಾದ ಪಾಸ್ವರ್ಡ್ ರಚಿಸಿ',
        confirmPasswordPlaceholder: 'ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ'
    },
    ml: {
        selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
        registerTitle: 'നിങ്ങളുടെ അക്കൗണ്ട് സൃഷ്ടിക്കുക',
        registerSubtitle: 'സ്മാർട്ട് മരുന്ന് മാനേജ്മെന്റിനായി NEXURA-യിൽ ചേരുക',
        productActivation: 'ഉൽപ്പന്ന കോഡ് സജീവമാക്കൽ',
        selectProductType: 'നിങ്ങളുടെ ഉൽപ്പന്ന തരം തിരഞ്ഞെടുക്കുക',
        tabletsProduct: 'ഗുളികകൾ',
        syrupsProduct: 'സിറപ്പ്',
        userDetails: 'ഉപയോക്തൃ വിവരങ്ങൾ',
        fullName: 'പൂർണ്ണ നാമം',
        email: 'ഇമെയിൽ വിലാസം',
        mobile: 'മൊബൈൽ നമ്പർ',
        password: 'പാസ്വേഡ്',
        confirmPassword: 'പാസ്വേഡ് സ്ഥിരീകരിക്കുക',
        roleSelection: 'നിങ്ങളുടെ റോൾ തിരഞ്ഞെടുക്കുക',
        patient: 'രോഗി',
        patientDesc: 'നിങ്ങളുടെ സ്വന്തം മരുന്നുകൾ കൈകാര്യം ചെയ്യുക',
        caregiver: 'പരിചരണകാരൻ',
        caregiverDesc: 'മറ്റുള്ളവർക്കായി മരുന്നുകൾ കൈകാര്യം ചെയ്യുക',
        admin: 'അഡ്മിൻ',
        adminDesc: 'പൂർണ്ണ സിസ്റ്റം ആക്സസ്',
        termsText: 'ഞാൻ നിബന്ധനകളും വ്യവസ്ഥകളും സ്വകാര്യതാ നയവും അംഗീകരിക്കുന്നു',
        registerAndStart: 'രജിസ്റ്റർ ചെയ്ത് വ്യക്തിഗത വിവരങ്ങളുമായി ആരംഭിക്കുക',
        alreadyHaveAccount: 'ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?',
        signIn: 'സൈൻ ഇൻ ചെയ്യുക',
        forgotPassword: 'പാസ്വേഡ് മറന്നോ?',
        footerText: '© 2026 NEXURA. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
        resetPassword: 'പാസ്വേഡ് പുനഃസജ്ജമാക്കുക',
        resetPasswordSubtitle: 'OTP ലഭിക്കുന്നതിന് നിങ്ങളുടെ ഇമെയിൽ അല്ലെങ്കിൽ മൊബൈൽ നമ്പർ നൽകുക',
        emailOrMobile: 'ഇമെയിൽ അല്ലെങ്കിൽ മൊബൈൽ',
        enterOTP: 'OTP നൽകുക',
        newPassword: 'പുതിയ പാസ്വേഡ്',
        cancel: 'റദ്ദാക്കുക',
        sendOTP: 'OTP അയയ്ക്കുക',
        resetPasswordBtn: 'പാസ്വേഡ് പുനഃസജ്ജമാക്കുക',
        otpVerification: 'OTP പരിശോധന',
        otpSentMessage: 'നിങ്ങളുടെ രജിസ്റ്റർ ചെയ്ത ഇമെയിൽ/മൊബൈലിലേക്ക് 6 അക്ക OTP അയച്ചു',
        verifyOTP: 'OTP പരിശോധിക്കുക',
        resendOTP: 'OTP വീണ്ടും അയയ്ക്കുക',
        enterEmailOrMobile: 'ഇമെയിൽ അല്ലെങ്കിൽ മൊബൈൽ നൽകുക',
        minChars: 'കുറഞ്ഞത് 8 പ്രതീകങ്ങൾ',
        uppercase: 'വലിയ അക്ഷരം',
        lowercase: 'ചെറിയ അക്ഷരം',
        number: 'അക്കം',
        specialChar: 'പ്രത്യേക പ്രതീകം',
        emailPlaceholder: 'നിങ്ങളുടെ ഇമെയിൽ നൽകുക',
        mobilePlaceholder: '10 അക്ക മൊബൈൽ നമ്പർ നൽകുക',
        passwordPlaceholder: 'ശക്തമായ പാസ്വേഡ് സൃഷ്ടിക്കുക',
        confirmPasswordPlaceholder: 'നിങ്ങളുടെ പാസ്വേഡ് സ്ഥിരീകരിക്കുക'
    },
    or: {
        selectLanguage: 'ଭାଷା ଚୟନ କରନ୍ତୁ',
        registerTitle: 'ଆପଣଙ୍କ ଖାତା ତିଆରି କରନ୍ତୁ',
        registerSubtitle: 'ସ୍ମାର୍ଟ ଔଷଧ ପରିଚାଳନା ପାଇଁ NEXURA ରେ ଯୋଗ ଦିଅନ୍ତୁ',
        productActivation: 'ଉତ୍ପାଦ କୋଡ୍ ସକ୍ରିୟକରଣ',
        selectProductType: 'ଆପଣଙ୍କ ଉତ୍ପାଦ ପ୍ରକାର ଚୟନ କରନ୍ତୁ',
        tabletsProduct: 'ଟ୍ୟାବଲେଟ୍',
        syrupsProduct: 'ସିରପ୍',
        userDetails: 'ବ୍ୟବହାରକାରୀ ବିବରଣୀ',
        fullName: 'ପୂର୍ଣ୍ଣ ନାମ',
        email: 'ଇମେଲ୍ ଠିକଣା',
        mobile: 'ମୋବାଇଲ୍ ନମ୍ବର',
        password: 'ପାସୱାର୍ଡ',
        confirmPassword: 'ପାସୱାର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ',
        roleSelection: 'ଆପଣଙ୍କ ଭୂମିକା ଚୟନ କରନ୍ତୁ',
        patient: 'ରୋଗୀ',
        patientDesc: 'ଆପଣଙ୍କ ନିଜ ଔଷଧ ପରିଚାଳନା କରନ୍ତୁ',
        caregiver: 'ଯତ୍ନବାନ',
        caregiverDesc: 'ଅନ୍ୟମାନଙ୍କ ପାଇଁ ଔଷଧ ପରିଚାଳନା କରନ୍ତୁ',
        admin: 'ପ୍ରଶାସକ',
        adminDesc: 'ସମ୍ପୂର୍ଣ୍ଣ ସିଷ୍ଟମ୍ ପ୍ରବେଶ',
        termsText: 'ମୁଁ ନିୟମ ଏବଂ ଶର୍ତ୍ତାବଳୀ ଏବଂ ଗୋପନୀୟତା ନୀତି ସହ ସହମତ',
        registerAndStart: 'ପଞ୍ଜିକରଣ କରନ୍ତୁ ଏବଂ ବ୍ୟକ୍ତିଗତ ବିବରଣୀ ସହ ଆରମ୍ଭ କରନ୍ତୁ',
        alreadyHaveAccount: 'ପୂର୍ବରୁ ଖାତା ଅଛି?',
        signIn: 'ସାଇନ୍ ଇନ୍ କରନ୍ତୁ',
        forgotPassword: 'ପାସୱାର୍ଡ ଭୁଲିଗଲେ?',
        footerText: '© 2026 NEXURA. ସମସ୍ତ ଅଧିକାର ସୁରକ୍ଷିତ।',
        resetPassword: 'ପାସୱାର୍ଡ ରିସେଟ୍ କରନ୍ତୁ',
        resetPasswordSubtitle: 'OTP ପାଇବା ପାଇଁ ଆପଣଙ୍କ ଇମେଲ୍ କିମ୍ବା ମୋବାଇଲ୍ ନମ୍ବର ପ୍ରବେଶ କରନ୍ତୁ',
        emailOrMobile: 'ଇମେଲ୍ କିମ୍ବା ମୋବାଇଲ୍',
        enterOTP: 'OTP ପ୍ରବେଶ କରନ୍ତୁ',
        newPassword: 'ନୂଆ ପାସୱାର୍ଡ',
        cancel: 'ରଦ୍ଦ କରନ୍ତୁ',
        sendOTP: 'OTP ପଠାନ୍ତୁ',
        resetPasswordBtn: 'ପାସୱାର୍ଡ ରିସେଟ୍ କରନ୍ତୁ',
        otpVerification: 'OTP ଯାଞ୍ଚ',
        otpSentMessage: 'ଆମେ ଆପଣଙ୍କ ପଞ୍ଜୀକୃତ ଇମେଲ୍/ମୋବାଇଲ୍ ରେ 6-ଅଙ୍କ OTP ପଠାଇଛୁ',
        verifyOTP: 'OTP ଯାଞ୍ଚ କରନ୍ତୁ',
        resendOTP: 'OTP ପୁନଃପଠାନ୍ତୁ',
        enterEmailOrMobile: 'ଇମେଲ୍ କିମ୍ବା ମୋବାଇଲ୍ ପ୍ରବେଶ କରନ୍ତୁ',
        minChars: 'ସର୍ବନିମ୍ନ 8 ଅକ୍ଷର',
        uppercase: 'ବଡ଼ ଅକ୍ଷର',
        lowercase: 'ଛୋଟ ଅକ୍ଷର',
        number: 'ସଂଖ୍ୟା',
        specialChar: 'ବିଶେଷ ଅକ୍ଷର',
        emailPlaceholder: 'ଆପଣଙ୍କ ଇମେଲ୍ ପ୍ରବେଶ କରନ୍ତୁ',
        mobilePlaceholder: '10 ଅଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର ପ୍ରବେଶ କରନ୍ତୁ',
        passwordPlaceholder: 'ଶକ୍ତିଶାଳୀ ପାସୱାର୍ଡ ତିଆରି କରନ୍ତୁ',
        confirmPasswordPlaceholder: 'ଆପଣଙ୍କ ପାସୱାର୍ଡ ନିଶ୍ଚିତ କରନ୍ତୁ'
    },
    pa: {
        selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
        registerTitle: 'ਆਪਣਾ ਖਾਤਾ ਬਣਾਓ',
        registerSubtitle: 'ਸਮਾਰਟ ਦਵਾਈ ਪ੍ਰਬੰਧਨ ਲਈ NEXURA ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ',
        productActivation: 'ਉਤਪਾਦ ਕੋਡ ਸਰਗਰਮੀ',
        selectProductType: 'ਆਪਣਾ ਉਤਪਾਦ ਕਿਸਮ ਚੁਣੋ',
        tabletsProduct: 'ਗੋਲੀਆਂ',
        syrupsProduct: 'ਸ਼ਰਬਤ',
        userDetails: 'ਉਪਭੋਗਤਾ ਵੇਰਵੇ',
        fullName: 'ਪੂਰਾ ਨਾਮ',
        email: 'ਈਮੇਲ ਪਤਾ',
        mobile: 'ਮੋਬਾਈਲ ਨੰਬਰ',
        password: 'ਪਾਸਵਰਡ',
        confirmPassword: 'ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
        roleSelection: 'ਆਪਣੀ ਭੂਮਿਕਾ ਚੁਣੋ',
        patient: 'ਮਰੀਜ਼',
        patientDesc: 'ਆਪਣੀਆਂ ਦਵਾਈਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
        caregiver: 'ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਾ',
        caregiverDesc: 'ਦੂਜਿਆਂ ਲਈ ਦਵਾਈਆਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
        admin: 'ਪ੍ਰਬੰਧਕ',
        adminDesc: 'ਪੂਰੀ ਸਿਸਟਮ ਪਹੁੰਚ',
        termsText: 'ਮੈਂ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਅਤੇ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਨਾਲ ਸਹਿਮਤ ਹਾਂ',
        registerAndStart: 'ਰਜਿਸਟਰ ਕਰੋ ਅਤੇ ਨਿੱਜੀ ਵੇਰਵਿਆਂ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ',
        alreadyHaveAccount: 'ਪਹਿਲਾਂ ਹੀ ਖਾਤਾ ਹੈ?',
        signIn: 'ਸਾਈਨ ਇਨ ਕਰੋ',
        forgotPassword: 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?',
        footerText: '© 2026 NEXURA. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
        resetPassword: 'ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ',
        resetPasswordSubtitle: 'OTP ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਆਪਣਾ ਈਮੇਲ ਜਾਂ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
        emailOrMobile: 'ਈਮੇਲ ਜਾਂ ਮੋਬਾਈਲ',
        enterOTP: 'OTP ਦਾਖਲ ਕਰੋ',
        newPassword: 'ਨਵਾਂ ਪਾਸਵਰਡ',
        cancel: 'ਰੱਦ ਕਰੋ',
        sendOTP: 'OTP ਭੇਜੋ',
        resetPasswordBtn: 'ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ',
        otpVerification: 'OTP ਪੁਸ਼ਟੀ',
        otpSentMessage: 'ਅਸੀਂ ਤੁਹਾਡੇ ਰਜਿਸਟਰਡ ਈਮੇਲ/ਮੋਬਾਈਲ ਤੇ 6-ਅੰਕੀ OTP ਭੇਜਿਆ ਹੈ',
        verifyOTP: 'OTP ਪੁਸ਼ਟੀ ਕਰੋ',
        resendOTP: 'OTP ਮੁੜ ਭੇਜੋ',
        enterEmailOrMobile: 'ਈਮੇਲ ਜਾਂ ਮੋਬਾਈਲ ਦਾਖਲ ਕਰੋ',
        minChars: 'ਘੱਟੋ-ਘੱਟ 8 ਅੱਖਰ',
        uppercase: 'ਵੱਡੇ ਅੱਖਰ',
        lowercase: 'ਛੋਟੇ ਅੱਖਰ',
        number: 'ਅੰਕ',
        specialChar: 'ਵਿਸ਼ੇਸ਼ ਅੱਖਰ',
        emailPlaceholder: 'ਆਪਣਾ ਈਮੇਲ ਦਾਖਲ ਕਰੋ',
        mobilePlaceholder: '10 ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
        passwordPlaceholder: 'ਮਜ਼ਬੂਤ ਪਾਸਵਰਡ ਬਣਾਓ',
        confirmPasswordPlaceholder: 'ਆਪਣੇ ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ'
    },
    as: {
        selectLanguage: 'ভাষা বাছনি কৰক',
        registerTitle: 'আপোনাৰ একাউণ্ট সৃষ্টি কৰক',
        registerSubtitle: 'স্মাৰ্ট ঔষধ পৰিচালনাৰ বাবে NEXURA ত যোগদান কৰক',
        productActivation: 'উৎপাদন ক ড সক্ৰিয়কৰণ',
        selectProductType: 'আপোনাৰ উৎপাদন প্ৰকাৰ নিৰ্বাচন কৰক',
        tabletsProduct: 'টেবলেট',
        syrupsProduct: 'ছিৰাপ',
        userDetails: 'ব্যৱহাৰকাৰীৰ বিৱৰণ',
        fullName: 'সম্পূৰ্ণ নাম',
        email: 'ইমেইল ঠিকনা',
        mobile: 'মোবাইল নম্বৰ',
        password: 'পাছৱৰ্ড',
        confirmPassword: 'পাছৱৰ্ড নিশ্চিত কৰক',
        roleSelection: 'আপোনাৰ ভূমিকা নিৰ্বাচন কৰক',
        patient: 'ৰোগী',
        patientDesc: 'আপোনাৰ নিজা ঔষধ পৰিচালনা কৰক',
        caregiver: 'যত্নশীল',
        caregiverDesc: 'অন্যসকলৰ বাবে ঔষধ পৰিচালনা কৰক',
        admin: 'প্ৰশাসক',
        adminDesc: 'সম্পূৰ্ণ চিস্টেম প্ৰৱেশ',
        termsText: 'মই নিয়ম আৰু চৰ্ত আৰু গোপনীয়তা নীতিৰ সৈতে সন্মত',
        registerAndStart: 'পঞ্জীয়ন কৰক আৰু ব্যক্তিগত বিৱৰণৰ সৈতে আৰম্ভ কৰক',
        alreadyHaveAccount: 'ইতিমধ্যে একাউণ্ট আছে?',
        signIn: 'চাইন ইন কৰক',
        forgotPassword: 'পাছৱৰ্ড পাহৰি গৈছে?',
        footerText: '© 2026 NEXURA. সকলো অধিকাৰ সংৰক্ষিত।',
        resetPassword: 'পাছৱৰ্ড ৰিচেট কৰক',
        resetPasswordSubtitle: 'OTP পাবলৈ আপোনাৰ ইমেইল বা মোবাইল নম্বৰ সোমাওক',
        emailOrMobile: 'ইমেইল বা মোবাইল',
        enterOTP: 'OTP সোমাওক',
        newPassword: 'নতুন পাছৱৰ্ড',
        cancel: 'বাতিল কৰক',
        sendOTP: 'OTP পঠাওক',
        resetPasswordBtn: 'পাছৱৰ্ড ৰিচেট কৰক',
        otpVerification: 'OTP যাচাইকৰণ',
        otpSentMessage: 'আমি আপোনাৰ পঞ্জীয়নভুক্ত ইমেইল/মোবাইললৈ 6-অংকৰ OTP পঠাইছো',
        verifyOTP: 'OTP যাচাই কৰক',
        resendOTP: 'OTP পুনৰ পঠাওক',
        enterEmailOrMobile: 'ইমেইল বা মোবাইল সোমাওক',
        minChars: 'ন্যূনতম 8 আখৰ',
        uppercase: 'ডাঙৰ আখৰ',
        lowercase: 'সৰু আখৰ',
        number: 'সংখ্যা',
        specialChar: 'বিশেষ আখৰ',
        emailPlaceholder: 'আপোনাৰ ইমেইল সোমাওক',
        mobilePlaceholder: '10 অংকৰ মোবাইল নম্বৰ সোমাওক',
        passwordPlaceholder: 'শক্তিশালী পাছৱৰ্ড সৃষ্টি কৰক',
        confirmPasswordPlaceholder: 'আপোনাৰ পাছৱৰ্ড নিশ্চিত কৰক'
    },
    ur: {
        selectLanguage: 'زبان منتخب کریں',
        registerTitle: 'اپنا اکاؤنٹ بنائیں',
        registerSubtitle: 'سمارٹ ادویات کے انتظام کے لیے NEXURA میں شامل ہوں',
        productActivation: 'پروڈکٹ کوڈ ایکٹیویشن',
        selectProductType: 'اپنی پروڈکٹ کی قسم منتخب کریں',
        tabletsProduct: 'گولیاں',
        syrupsProduct: 'شربت',
        userDetails: 'صارف کی تفصیلات',
        fullName: 'مکمل نام',
        email: 'ای میل ایڈریس',
        mobile: 'موبائل نمبر',
        password: 'پاس ورڈ',
        confirmPassword: 'پاس ورڈ کی تصدیق کریں',
        roleSelection: 'اپنا کردار منتخب کریں',
        patient: 'مریض',
        patientDesc: 'اپنی دوائیوں کا انتظام کریں',
        caregiver: 'نگہبان',
        caregiverDesc: 'دوسروں کے لیے دوائیوں کا انتظام کریں',
        admin: 'ایڈمن',
        adminDesc: 'مکمل نظام تک رسائی',
        termsText: 'میں شرائط و ضوابط اور رازداری کی پالیسی سے اتفاق کرتا ہوں',
        registerAndStart: 'رجسٹر کریں اور ذاتی تفصیلات سے شروع کریں',
        alreadyHaveAccount: 'پہلے سے اکاؤنٹ ہے؟',
        signIn: 'سائن ان کریں',
        forgotPassword: 'پاس ورڈ بھول گئے؟',
        footerText: '© 2026 NEXURA. جملہ حقوق محفوظ ہیں۔',
        resetPassword: 'پاس ورڈ ری سیٹ کریں',
        resetPasswordSubtitle: 'OTP حاصل کرنے کے لیے اپنا ای میل یا موبائل نمبر درج کریں',
        emailOrMobile: 'ای میل یا موبائل',
        enterOTP: 'OTP درج کریں',
        newPassword: 'نیا پاس ورڈ',
        cancel: 'منسوخ کریں',
        sendOTP: 'OTP بھیجیں',
        resetPasswordBtn: 'پاس ورڈ ری سیٹ کریں',
        otpVerification: 'OTP تصدیق',
        otpSentMessage: 'ہم نے آپ کے رجسٹرڈ ای میل/موبائل پر 6 ہندسوں کا OTP بھیجا ہے',
        verifyOTP: 'OTP کی تصدیق کریں',
        resendOTP: 'OTP دوبارہ بھیجیں',
        enterEmailOrMobile: 'ای میل یا موبائل درج کریں',
        minChars: 'کم از کم 8 حروف',
        uppercase: 'بڑے حروف',
        lowercase: 'چھوٹے حروف',
        number: 'عدد',
        specialChar: 'خاص حرف',
        emailPlaceholder: 'اپنا ای میل درج کریں',
        mobilePlaceholder: '10 ہندسوں کا موبائل نمبر درج کریں',
        passwordPlaceholder: 'مضبوط پاس ورڈ بنائیں',
        confirmPasswordPlaceholder: 'اپنے پاس ورڈ کی تصدیق کریں'
    },
    sd: {
        selectLanguage: 'ٻولي چونڊيو',
        registerTitle: 'پنهنجو کاتو ٺاهيو',
        registerSubtitle: 'سمارٽ دوائن جي انتظام لاءِ NEXURA ۾ شامل ٿيو',
        productActivation: 'پروڊڪٽ ڪوڊ چالو ڪرڻ',
        selectProductType: 'پنهنجي پروڊڪٽ جو قسم چونڊيو',
        tabletsProduct: 'گوليون',
        syrupsProduct: 'شربت',
        userDetails: 'استعمال ڪندڙ تفصيل',
        fullName: 'مڪمل نالو',
        email: 'اي ميل پتو',
        mobile: 'موبائل نمبر',
        password: 'پاسورڊ',
        confirmPassword: 'پاسورڊ جي تصديق ڪريو',
        roleSelection: 'پنهنجو ڪردار چونڊيو',
        patient: 'مريض',
        patientDesc: 'پنهنجين دوائن جو انتظام ڪريو',
        caregiver: 'سنڀاليندڙ',
        caregiverDesc: 'ٻين لاءِ دوائن جو انتظام ڪريو',
        admin: 'منتظم',
        adminDesc: 'مڪمل سسٽم تائين رسائي',
        termsText: 'مان شرطن ۽ رازداري پاليسي سان متفق آهيان',
        registerAndStart: 'رجسٽر ڪريو ۽ ذاتي تفصيلن سان شروع ڪريو',
        alreadyHaveAccount: 'اڳ ۾ ئي کاتو آهي؟',
        signIn: 'سائن ان ڪريو',
        forgotPassword: 'پاسورڊ وسري ويو؟',
        footerText: '© 2026 NEXURA. سڀ حق محفوظ آهن.',
        resetPassword: 'پاسورڊ ري سيٽ ڪريو',
        resetPasswordSubtitle: 'OTP حاصل ڪرڻ لاءِ پنهنجو اي ميل يا موبائل نمبر داخل ڪريو',
        emailOrMobile: 'اي ميل يا موبائل',
        enterOTP: 'OTP داخل ڪريو',
        newPassword: 'نئون پاسورڊ',
        cancel: 'منسوخ ڪريو',
        sendOTP: 'OTP موڪليو',
        resetPasswordBtn: 'پاسورڊ ري سيٽ ڪريو',
        otpVerification: 'OTP تصديق',
        otpSentMessage: 'اسان توهان جي رجسٽرڊ اي ميل/موبائل تي 6-هندسي OTP موڪليو آهي',
        verifyOTP: 'OTP تصديق ڪريو',
        resendOTP: 'OTP ٻيهر موڪليو',
        enterEmailOrMobile: 'اي ميل يا موبائل داخل ڪريو',
        minChars: 'گهٽ ۾ گهٽ 8 اکر',
        uppercase: 'وڏا اکر',
        lowercase: 'ننڍا اکر',
        number: 'عدد',
        specialChar: 'خاص اکر',
        emailPlaceholder: 'پنهنجو اي ميل داخل ڪريو',
        mobilePlaceholder: '10 هندسن وارو موبائل نمبر داخل ڪريو',
        passwordPlaceholder: 'مضبوط پاسورڊ ٺاهيو',
        confirmPasswordPlaceholder: 'پنهنجي پاسورڊ جي تصديق ڪريو'
    },
    kok: {
        selectLanguage: 'भास वेंचून काडात',
        registerTitle: 'तुमचें खातें तयार करात',
        registerSubtitle: 'स्मार्ट औषधां व्यवस्थापनाखातीर NEXURA हांगा सामील जावात',
        productActivation: 'उत्पादन कोड सक्रिय',
        selectProductType: 'तुमचो उत्पादन प्रकार निवडात',
        tabletsProduct: 'गोळ्या',
        syrupsProduct: 'सिरप',
        userDetails: 'वापरपी तपशील',
        fullName: 'पूर्ण नांव',
        email: 'ईमेल पत्तो',
        mobile: 'मोबाईल नंबर',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्डाची खात्री करात',
        roleSelection: 'तुमची भूमिका निवडात',
        patient: 'रुग्ण',
        patientDesc: 'तुमचीं स्वताचीं औषधां व्यवस्थापित करात',
        caregiver: 'सांबाळपी',
        caregiverDesc: 'हेरांचीं औषधां व्यवस्थापित करात',
        admin: 'प्रशासक',
        adminDesc: 'पूर्ण सिस्टम प्रवेश',
        termsText: 'हांव अटी आनी गोपनियता नितीक सहमत आसा',
        registerAndStart: 'नोंदणी करात आनी वैयक्तिक तपशिलांनी सुरवात करात',
        alreadyHaveAccount: 'आधींच खातें आसा?',
        signIn: 'साइन इन करात',
        forgotPassword: 'पासवर्ड विसरलात?',
        footerText: '© 2026 NEXURA. सर्व हक्क राखीव.',
        resetPassword: 'पासवर्ड रीसेट करात',
        resetPasswordSubtitle: 'OTP मेळोवपाखातीर तुमचो ईमेल वा मोबाईल नंबर प्रविष्ट करात',
        emailOrMobile: 'ईमेल वा मोबाईल',
        enterOTP: 'OTP प्रविष्ट करात',
        newPassword: 'नवो पासवर्ड',
        cancel: 'रद्द करात',
        sendOTP: 'OTP पाठवात',
        resetPasswordBtn: 'पासवर्ड रीसेट करात',
        otpVerification: 'OTP तपासणी',
        otpSentMessage: 'आमी तुमच्या नोंदणीकृत ईमेल/मोबाईलाचेर 6-अंकी OTP पाठवला',
        verifyOTP: 'OTP तपासात',
        resendOTP: 'OTP परत पाठवात',
        enterEmailOrMobile: 'ईमेल वा मोबाईल प्रविष्ट करात',
        minChars: 'कमीत कमी 8 अक्षरां',
        uppercase: 'मोठीं अक्षरां',
        lowercase: 'ल्हान अक्षरां',
        number: 'अंक',
        specialChar: 'विशेश चिन्ह',
        emailPlaceholder: 'तुमचो ईमेल प्रविष्ट करात',
        mobilePlaceholder: '10 अंकी मोबाईल नंबर प्रविष्ट करात',
        passwordPlaceholder: 'बळीस्त पासवर्ड तयार करात',
        confirmPasswordPlaceholder: 'तुमचो पासवर्ड खात्री करात'
    },
    mni: {
        selectLanguage: 'লোন পুন্সি',
        registerTitle: 'নগী একাউণ্ট সেম্বী',
        registerSubtitle: 'স্মার্ট তান লম্বী তম্ননগীদমক NEXURA দা য়াম্মী',
        productActivation: 'প্রোডাক্ট কোড সক্রিয় তৌ',
        selectProductType: 'নগী প্রোডাক্ট মঙ লৌরক্কী',
        tabletsProduct: 'টেবলেট',
        syrupsProduct: 'সিরাপ',
        userDetails: 'মীঙগী বিবরণ',
        fullName: 'মমাং মিং',
        email: 'ইমেইল মচা',
        mobile: 'মোবাইল নম্বর',
        password: 'পাসৱর্ড',
        confirmPassword: 'পাসৱর্ড সঞ্জেৎ তৌ',
        roleSelection: 'নগী রোল পুন্সি',
        patient: 'মীকুপী',
        patientDesc: 'নগী ওইবা তানসিং লম্বী তম্ন',
        caregiver: 'চম্বী',
        caregiverDesc: 'অতীপগীদমক তানসিং লম্বী তম্ন',
        admin: 'অদ্মিন',
        adminDesc: 'মপুং সিস্টেম মঙহল্লী',
        termsText: 'ঐ ঙকপী অমসুং গোপনীয়তা নিতি দা ইয়াম্নে',
        registerAndStart: 'রেজিষ্টার তৌ অমসুং অহক্ত বিবরণগা হৌদোক্কী',
        alreadyHaveAccount: 'ঙকপা একাউণ্ট লৈব্রা?',
        signIn: 'সাইন ইন তৌ',
        forgotPassword: 'পাসৱর্ড কাউখ্রব্রা?',
        footerText: '© 2026 NEXURA. মতম পূন্সি মখা থম্মী।',
        resetPassword: 'পাসৱর্ড রিসেট তৌ',
        resetPasswordSubtitle: 'OTP ফংনগীদমক নগী ইমেইল নত্রগা মোবাইল নম্বর থম্মী',
        emailOrMobile: 'ইমেইল নত্রগা মোবাইল',
        enterOTP: 'OTP থম্মী',
        newPassword: 'অঙাং পাসৱর্ড',
        cancel: 'থাদোক্কী',
        sendOTP: 'OTP থাগৎকী',
        resetPasswordBtn: 'পাসৱর্ড রিসেট তৌ',
        otpVerification: 'OTP সঞ্জেৎ তৌ',
        otpSentMessage: 'ঐমখোয়না নগী রেজিষ্টার তৌখ্রবা ইমেইল/মোবাইল দা 6-অংকী OTP থাগৎখ্রে',
        verifyOTP: 'OTP সঞ্জেৎ তৌ',
        resendOTP: 'OTP অমুক্কী থাগৎকী',
        enterEmailOrMobile: 'ইমেইল নত্রগা মোবাইল থম্মী',
        minChars: 'ঙাইবা 8 অক্ষর',
        uppercase: 'অঙাং অক্ষর',
        lowercase: 'মচা অক্ষর',
        number: 'অংকী',
        specialChar: 'খুদম অক্ষর',
        emailPlaceholder: 'নগী ইমেইল থম্মী',
        mobilePlaceholder: '10 অংকী মোবাইল নম্বর থম্মী',
        passwordPlaceholder: 'শক্তিসালী পাসৱর্ড সেম্বী',
        confirmPasswordPlaceholder: 'নগী পাসৱর্ড সঞ্জেৎ তৌ'
    },
    ne: {
        selectLanguage: 'भाषा चयन गर्नुहोस्',
        registerTitle: 'आफ्नो खाता बनाउनुहोस्',
        registerSubtitle: 'स्मार्ट औषधि व्यवस्थापनको लागि NEXURA मा सामेल हुनुहोस्',
        productActivation: 'उत्पादन कोड सक्रियता',
        selectProductType: 'आफ्नो उत्पादन प्रकार चयन गर्नुहोस्',
        tabletsProduct: 'चक्की',
        syrupsProduct: 'सिरप',
        userDetails: 'प्रयोगकर्ता विवरण',
        fullName: 'पूरा नाम',
        email: 'इमेल ठेगाना',
        mobile: 'मोबाइल नम्बर',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड पुष्टि गर्नुहोस्',
        roleSelection: 'आफ्नो भूमिका चयन गर्नुहोस्',
        patient: 'बिरामी',
        patientDesc: 'आफ्ना औषधिहरू व्यवस्थापन गर्नुहोस्',
        caregiver: 'हेरचाहकर्ता',
        caregiverDesc: 'अरूको लागि औषधिहरू व्यवस्थापन गर्नुहोस्',
        admin: 'प्रशासक',
        adminDesc: 'पूर्ण प्रणाली पहुँच',
        termsText: 'म नियम र सर्तहरू र गोपनीयता नीति सँग सहमत छु',
        registerAndStart: 'दर्ता गर्नुहोस् र व्यक्तिगत विवरणको साथ सुरु गर्नुहोस्',
        alreadyHaveAccount: 'पहिले नै खाता छ?',
        signIn: 'साइन इन गर्नुहोस्',
        forgotPassword: 'पासवर्ड बिर्सनुभयो?',
        footerText: '© 2026 NEXURA. सबै अधिकार सुरक्षित।',
        resetPassword: 'पासवर्ड रिसेट गर्नुहोस्',
        resetPasswordSubtitle: 'OTP प्राप्त गर्न आफ्नो इमेल वा मोबाइल नम्बर प्रविष्ट गर्नुहोस्',
        emailOrMobile: 'इमेल वा मोबाइल',
        enterOTP: 'OTP प्रविष्ट गर्नुहोस्',
        newPassword: 'नयाँ पासवर्ड',
        cancel: 'रद्द गर्नुहोस्',
        sendOTP: 'OTP पठाउनुहोस्',
        resetPasswordBtn: 'पासवर्ड रिसेट गर्नुहोस्',
        otpVerification: 'OTP प्रमाणीकरण',
        otpSentMessage: 'हामीले तपाईंको दर्ता गरिएको इमेल/मोबाइलमा 6-अंकको OTP पठाएका छौं',
        verifyOTP: 'OTP प्रमाणित गर्नुहोस्',
        resendOTP: 'OTP पुन: पठाउनुहोस्',
        enterEmailOrMobile: 'इमेल वा मोबाइल प्रविष्ट गर्नुहोस्',
        minChars: 'कम्तिमा 8 वर्ण',
        uppercase: 'ठूलो अक्षर',
        lowercase: 'सानो अक्षर',
        number: 'संख्या',
        specialChar: 'विशेष वर्ण',
        emailPlaceholder: 'आफ्नो इमेल प्रविष्ट गर्नुहोस्',
        mobilePlaceholder: '10 अंकको मोबाइल नम्बर प्रविष्ट गर्नुहोस्',
        passwordPlaceholder: 'बलियो पासवर्ड सिर्जना गर्नुहोस्',
        confirmPasswordPlaceholder: 'आफ्नो पासवर्ड पुष्टि गर्नुहोस्'
    },
    sa: {
        selectLanguage: 'भाषां चिनुत',
        registerTitle: 'स्वकीयं लेखां सृजतु',
        registerSubtitle: 'स्मार्ट-औषध-व्यवस्थापनाय NEXURA-यां योज्यताम्',
        productActivation: 'उत्पाद-कोड-सक्रियणम्',
        selectProductType: 'स्वकीय-उत्पाद-प्रकारं चिनुत',
        tabletsProduct: 'गोलिकाः',
        syrupsProduct: 'सिरपः',
        userDetails: 'उपयोक्तृविवरणम्',
        fullName: 'पूर्णनाम',
        email: 'विपत्रपत्त्रम्',
        mobile: 'भ्रमणध्वनिसंख्या',
        password: 'गुप्तशब्दः',
        confirmPassword: 'गुप्तशब्दं पुष्टीकरोतु',
        roleSelection: 'स्वकीयं भूमिकां चिनुत',
        patient: 'रोगी',
        patientDesc: 'स्वकीयानि औषधानि व्यवस्थापयतु',
        caregiver: 'परिचारकः',
        caregiverDesc: 'परेषाम् औषधानि व्यवस्थापयतु',
        admin: 'प्रशासकः',
        adminDesc: 'पूर्णतन्त्रप्रवेशः',
        termsText: 'अहं नियमान् गोपनीयतानीतिं च स्वीकरोमि',
        registerAndStart: 'पंजीकरोतु वैयक्तिकविवरणेन च आरभ्यताम्',
        alreadyHaveAccount: 'लेखः अस्ति किम्?',
        signIn: 'प्रविशतु',
        forgotPassword: 'गुप्तशब्दं विस्मृतवान्?',
        footerText: '© 2026 NEXURA. सर्वे अधिकाराः सुरक्षिताः।',
        resetPassword: 'गुप्तशब्दं पुनः स्थापयतु',
        resetPasswordSubtitle: 'OTP प्राप्त्यै भवतः विपत्रपत्त्रं भ्रमणध्वनिसंख्यां वा प्रवेशयतु',
        emailOrMobile: 'विपत्रपत्त्रं भ्रमणध्वनिः वा',
        enterOTP: 'OTP प्रवेशयतु',
        newPassword: 'नवीनः गुप्तशब्दः',
        cancel: 'रद्द करोतु',
        sendOTP: 'OTP प्रेषयतु',
        resetPasswordBtn: 'गुप्तशब्दं पुनः स्थापयतु',
        otpVerification: 'OTP प्रमाणीकरणम्',
        otpSentMessage: 'वयं भवतः पंजीकृत-विपत्रपत्त्र/भ्रमणध्वनिं प्रति 6-अङ्क-OTP प्रेषितवन्तः',
        verifyOTP: 'OTP प्रमाणयतु',
        resendOTP: 'OTP पुनः प्रेषयतु',
        enterEmailOrMobile: 'विपत्रपत्त्रं भ्रमणध्वनिं वा प्रवेशयतु',
        minChars: 'न्यूनतम 8 अक्षराणि',
        uppercase: 'वृहदक्षरम्',
        lowercase: 'ह्रस्वाक्षरम्',
        number: 'अङ्कः',
        specialChar: 'विशेषाक्षरम्',
        emailPlaceholder: 'भवतः विपत्रपत्त्रं प्रवेशयतु',
        mobilePlaceholder: '10 अङ्कानां भ्रमणध्वनिसंख्यां प्रवेशयतु',
        passwordPlaceholder: 'प्रबलं गुप्तशब्दं सृजतु',
        confirmPasswordPlaceholder: 'भवतः गुप्तशब्दं पुष्टीकरोतु'
    },
    es: {
        selectLanguage: 'SELECCIONAR IDIOMA',
        registerTitle: 'Crea tu Cuenta',
        registerSubtitle: 'Únete a NEXURA para una gestión inteligente de medicamentos',
        productActivation: 'Activación de Código de Producto',
        selectProductType: 'Selecciona tu Tipo de Producto',
        tabletsProduct: 'Tabletas',
        syrupsProduct: 'Jarabes',
        userDetails: 'Detalles del Usuario',
        fullName: 'Nombre Completo',
        email: 'Correo Electrónico',
        mobile: 'Número de Móvil',
        password: 'Contraseña',
        confirmPassword: 'Confirmar Contraseña',
        roleSelection: 'Selecciona tu Rol',
        patient: 'Paciente',
        patientDesc: 'Gestiona tus propios medicamentos',
        caregiver: 'Cuidador',
        caregiverDesc: 'Gestiona medicamentos para otros',
        admin: 'Administrador',
        adminDesc: 'Acceso completo al sistema',
        termsText: 'Acepto los Términos y Condiciones y la Política de Privacidad',
        registerAndStart: 'Registrar y Comenzar con Detalles Personales',
        alreadyHaveAccount: '¿Ya tienes una cuenta?',
        signIn: 'Iniciar Sesión',
        forgotPassword: '¿Olvidaste tu Contraseña?',
        footerText: '© 2026 NEXURA. Todos los derechos reservados.',
        resetPassword: 'Restablecer Contraseña',
        resetPasswordSubtitle: 'Ingresa tu correo electrónico o número de móvil para recibir OTP',
        emailOrMobile: 'Correo o Móvil',
        enterOTP: 'Ingresa OTP',
        newPassword: 'Nueva Contraseña',
        cancel: 'Cancelar',
        sendOTP: 'Enviar OTP',
        resetPasswordBtn: 'Restablecer Contraseña',
        otpVerification: 'Verificación OTP',
        otpSentMessage: 'Hemos enviado un OTP de 6 dígitos a tu correo/móvil registrado',
        verifyOTP: 'Verificar OTP',
        resendOTP: 'Reenviar OTP',
        enterEmailOrMobile: 'Ingresa correo o móvil',
        minChars: 'Mínimo 8 caracteres',
        uppercase: 'Mayúscula',
        lowercase: 'Minúscula',
        number: 'Número',
        specialChar: 'Carácter especial',
        emailPlaceholder: 'Ingresa tu correo',
        mobilePlaceholder: 'Ingresa número de móvil de 10 dígitos',
        passwordPlaceholder: 'Crea una contraseña fuerte',
        confirmPasswordPlaceholder: 'Confirma tu contraseña'
    },
    fr: {
        selectLanguage: 'SÉLECTIONNER LA LANGUE',
        registerTitle: 'Créez Votre Compte',
        registerSubtitle: 'Rejoignez NEXURA pour une gestion intelligente des médicaments',
        productActivation: 'Activation du Code Produit',
        selectProductType: 'Sélectionnez Votre Type de Produit',
        tabletsProduct: 'Comprimés',
        syrupsProduct: 'Sirops',
        userDetails: 'Détails de l\'Utilisateur',
        fullName: 'Nom Complet',
        email: 'Adresse Email',
        mobile: 'Numéro de Mobile',
        password: 'Mot de Passe',
        confirmPassword: 'Confirmer le Mot de Passe',
        roleSelection: 'Choisissez Votre Rôle',
        patient: 'Patient',
        patientDesc: 'Gérez vos propres médicaments',
        caregiver: 'Soignant',
        caregiverDesc: 'Gérez les médicaments pour les autres',
        admin: 'Administrateur',
        adminDesc: 'Accès complet au système',
        termsText: 'J\'accepte les Conditions Générales et la Politique de Confidentialité',
        registerAndStart: 'S\'inscrire et Commencer avec les Détails Personnels',
        alreadyHaveAccount: 'Vous avez déjà un compte?',
        signIn: 'Se Connecter',
        forgotPassword: 'Mot de passe oublié?',
        footerText: '© 2026 NEXURA. Tous droits réservés.',
        resetPassword: 'Réinitialiser le Mot de Passe',
        resetPasswordSubtitle: 'Entrez votre email ou numéro de mobile pour recevoir OTP',
        emailOrMobile: 'Email ou Mobile',
        enterOTP: 'Entrez OTP',
        newPassword: 'Nouveau Mot de Passe',
        cancel: 'Annuler',
        sendOTP: 'Envoyer OTP',
        resetPasswordBtn: 'Réinitialiser le Mot de Passe',
        otpVerification: 'Vérification OTP',
        otpSentMessage: 'Nous avons envoyé un OTP à 6 chiffres à votre email/mobile enregistré',
        verifyOTP: 'Vérifier OTP',
        resendOTP: 'Renvoyer OTP',
        enterEmailOrMobile: 'Entrez email ou mobile',
        minChars: 'Minimum 8 caractères',
        uppercase: 'Majuscule',
        lowercase: 'Minuscule',
        number: 'Chiffre',
        specialChar: 'Caractère spécial',
        emailPlaceholder: 'Entrez votre email',
        mobilePlaceholder: 'Entrez le numéro de mobile à 10 chiffres',
        passwordPlaceholder: 'Créez un mot de passe fort',
        confirmPasswordPlaceholder: 'Confirmez votre mot de passe'
    },
    de: {
        selectLanguage: 'SPRACHE AUSWÄHLEN',
        registerTitle: 'Konto Erstellen',
        registerSubtitle: 'Treten Sie NEXURA bei für intelligentes Medikamentenmanagement',
        productActivation: 'Produktcode-Aktivierung',
        selectProductType: 'Wählen Sie Ihren Produkttyp',
        tabletsProduct: 'Tabletten',
        syrupsProduct: 'Sirupe',
        userDetails: 'Benutzerdetails',
        fullName: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        mobile: 'Mobilnummer',
        password: 'Passwort',
        confirmPassword: 'Passwort bestätigen',
        roleSelection: 'Rolle auswählen',
        patient: 'Patient',
        patientDesc: 'Verwalten Sie Ihre eigenen Medikamente',
        caregiver: 'Pflegekraft',
        caregiverDesc: 'Verwalten Sie Medikamente für andere',
        admin: 'Administrator',
        adminDesc: 'Voller Systemzugriff',
        termsText: 'Ich stimme den Allgemeinen Geschäftsbedingungen und der Datenschutzrichtlinie zu',
        registerAndStart: 'Registrieren und mit Persönlichen Details Starten',
        alreadyHaveAccount: 'Bereits ein Konto?',
        signIn: 'Anmelden',
        forgotPassword: 'Passwort vergessen?',
        footerText: '© 2026 NEXURA. Alle Rechte vorbehalten.',
        resetPassword: 'Passwort zurücksetzen',
        resetPasswordSubtitle: 'Geben Sie Ihre E-Mail oder Mobilnummer ein, um OTP zu erhalten',
        emailOrMobile: 'E-Mail oder Mobil',
        enterOTP: 'OTP eingeben',
        newPassword: 'Neues Passwort',
        cancel: 'Abbrechen',
        sendOTP: 'OTP senden',
        resetPasswordBtn: 'Passwort zurücksetzen',
        otpVerification: 'OTP-Verifizierung',
        otpSentMessage: 'Wir haben eine 6-stellige OTP an Ihre registrierte E-Mail/Mobil gesendet',
        verifyOTP: 'OTP verifizieren',
        resendOTP: 'OTP erneut senden',
        enterEmailOrMobile: 'E-Mail oder Mobil eingeben',
        minChars: 'Mindestens 8 Zeichen',
        uppercase: 'Großbuchstabe',
        lowercase: 'Kleinbuchstabe',
        number: 'Zahl',
        specialChar: 'Sonderzeichen',
        emailPlaceholder: 'E-Mail eingeben',
        mobilePlaceholder: '10-stellige Mobilnummer eingeben',
        passwordPlaceholder: 'Starkes Passwort erstellen',
        confirmPasswordPlaceholder: 'Passwort bestätigen'
    },
    ja: {
        selectLanguage: '言語を選択',
        registerTitle: 'アカウントを作成',
        registerSubtitle: 'スマートな薬物管理のためにNEXURAに参加する',
        productActivation: '製品コードの有効化',
        selectProductType: '製品タイプを選択',
        tabletsProduct: '錠剤',
        syrupsProduct: 'シロップ',
        userDetails: 'ユーザー詳細',
        fullName: 'フルネーム',
        email: 'メールアドレス',
        mobile: '携帯番号',
        password: 'パスワード',
        confirmPassword: 'パスワード確認',
        roleSelection: '役割を選択',
        patient: '患者',
        patientDesc: '自分の薬を管理する',
        caregiver: '介護者',
        caregiverDesc: '他の人の薬を管理する',
        admin: '管理者',
        adminDesc: 'フルシステムアクセス',
        termsText: '利用規約とプライバシーポリシーに同意します',
        registerAndStart: '登録して個人詳細から始める',
        alreadyHaveAccount: 'すでにアカウントをお持ちですか？',
        signIn: 'サインイン',
        forgotPassword: 'パスワードをお忘れですか？',
        footerText: '© 2026 NEXURA. 全著作権所有。',
        resetPassword: 'パスワードをリセット',
        resetPasswordSubtitle: 'OTPを受け取るためにメールまたは携帯番号を入力',
        emailOrMobile: 'メールまたは携帯',
        enterOTP: 'OTPを入力',
        newPassword: '新しいパスワード',
        cancel: 'キャンセル',
        sendOTP: 'OTPを送信',
        resetPasswordBtn: 'パスワードをリセット',
        otpVerification: 'OTP検証',
        otpSentMessage: '登録されたメール/携帯に6桁のOTPを送信しました',
        verifyOTP: 'OTPを検証',
        resendOTP: 'OTPを再送信',
        enterEmailOrMobile: 'メールまたは携帯を入力',
        minChars: '最低8文字',
        uppercase: '大文字',
        lowercase: '小文字',
        number: '数字',
        specialChar: '特殊文字',
        emailPlaceholder: 'メールを入力',
        mobilePlaceholder: '10桁の携帯番号を入力',
        passwordPlaceholder: '強いパスワードを作成',
        confirmPasswordPlaceholder: 'パスワードを確認'
    },
    zh: {
        selectLanguage: '选择语言',
        registerTitle: '创建您的账户',
        registerSubtitle: '加入NEXURA进行智能药物管理',
        productActivation: '产品代码激活',
        selectProductType: '选择您的产品类型',
        tabletsProduct: '片剂',
        syrupsProduct: '糖浆',
        userDetails: '用户详情',
        fullName: '全名',
        email: '电子邮件地址',
        mobile: '手机号码',
        password: '密码',
        confirmPassword: '确认密码',
        roleSelection: '选择您的角色',
        patient: '患者',
        patientDesc: '管理您自己的药物',
        caregiver: '护理人员',
        caregiverDesc: '为他人管理药物',
        admin: '管理员',
        adminDesc: '完整系统访问权限',
        termsText: '我同意条款和条件以及隐私政策',
        registerAndStart: '注册并开始填写个人详情',
        alreadyHaveAccount: '已有账户？',
        signIn: '登录',
        forgotPassword: '忘记密码？',
        footerText: '© 2026 NEXURA. 保留所有权利。',
        resetPassword: '重置密码',
        resetPasswordSubtitle: '输入您的电子邮件或手机号码以接收OTP',
        emailOrMobile: '电子邮件或手机',
        enterOTP: '输入OTP',
        newPassword: '新密码',
        cancel: '取消',
        sendOTP: '发送OTP',
        resetPasswordBtn: '重置密码',
        otpVerification: 'OTP验证',
        otpSentMessage: '我们已向您注册的电子邮件/手机发送了6位OTP',
        verifyOTP: '验证OTP',
        resendOTP: '重新发送OTP',
        enterEmailOrMobile: '输入电子邮件或手机',
        minChars: '至少8个字符',
        uppercase: '大写字母',
        lowercase: '小写字母',
        number: '数字',
        specialChar: '特殊字符',
        emailPlaceholder: '输入您的电子邮件',
        mobilePlaceholder: '输入10位手机号码',
        passwordPlaceholder: '创建强密码',
        confirmPasswordPlaceholder: '确认您的密码'
    }
};

// ================================================================
// REGISTER APP CLASS
// ================================================================

class RegisterApp {
    constructor() {
        console.log('🚀 Initializing Register Application...');
        
        // ============================================================
        // INITIALIZATION
        // ============================================================
        
        this.currentTheme = localStorage.getItem('nexura_theme') || 'light';
        this.languageManager = languageManager;
        this.productVerified = false;
        
        // ============================================================
        // INITIALIZE UI
        // ============================================================
        
        this.populateLanguageDropdown();
        this.setupEventListeners();
        this.loadSavedLanguage();
        this.translatePage();
        this.applyTheme(this.currentTheme);
        this.setupPasswordStrength();
        this.enableFormInteractions();
        
        // Auto-select first product
        const tabletsRadio = document.getElementById('productTablets');
        if (tabletsRadio) {
            tabletsRadio.checked = true;
            this.verifyProductCode();
        }
        
        console.log('✅ Register Application initialized successfully');
    }

    enableFormInteractions() {
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.removeAttribute('disabled');
            input.style.pointerEvents = 'auto';
            input.style.opacity = '1';
        });

        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.removeAttribute('disabled');
            button.style.pointerEvents = 'auto';
        });

        const labels = document.querySelectorAll('.form-label');
        labels.forEach(label => {
            label.style.pointerEvents = 'auto';
        });
        
        // Ensure product radio buttons work
        document.querySelectorAll('.product-option input[type="radio"]').forEach(radio => {
            radio.style.pointerEvents = 'auto';
            radio.style.cursor = 'pointer';
        });
        
        document.querySelectorAll('.product-option label').forEach(label => {
            label.style.pointerEvents = 'auto';
            label.style.cursor = 'pointer';
        });
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

        // Product selection - auto verify when radio changes
        const productRadios = document.querySelectorAll('input[name="productCode"]');
        productRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                this.verifyProductCode();
            });
            radio.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });

        // Password strength
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.addEventListener('input', () => {
                this.checkPasswordStrength(passwordInput.value);
            });
            passwordInput.style.pointerEvents = 'auto';
        }

        // Confirm password matching
        const confirmPasswordInput = document.getElementById('confirmPassword');
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', () => {
                this.checkPasswordMatch();
            });
            confirmPasswordInput.style.pointerEvents = 'auto';
        }

        // Form submission
        const form = document.getElementById('registrationForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistration();
            });
        }

        // Sign in link
        const signInLink = document.getElementById('signInLink');
        if (signInLink) {
            signInLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'login.html';
            });
        }

        // Forgot password link
        const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('forgotPasswordModal').classList.add('show');
            });
        }

        this.languageManager.addListener(() => {
            this.translatePage();
            const select = document.getElementById('languageSelect');
            if (select) {
                select.value = this.languageManager.getCurrentLanguage();
            }
        });

        document.querySelectorAll('.form-control, .btn, .checkbox-label, .role-option label, .language-select, .product-option label').forEach(el => {
            el.style.pointerEvents = 'auto';
            el.style.cursor = 'pointer';
        });
    }

    verifyProductCode() {
        const statusDiv = document.getElementById('productStatus');
        const selectedProduct = document.querySelector('input[name="productCode"]:checked');
        
        if (!selectedProduct) {
            this.showStatus(statusDiv, 'Please select a product type (Tablets or Syrups)', 'error');
            this.productVerified = false;
            return;
        }

        const code = selectedProduct.value;
        this.productVerified = true;
        
        let productType = '';
        if (code === 'NEX123') {
            productType = 'Tablets';
        } else if (code === 'NEX234') {
            productType = 'Syrups';
        }
        
        this.showStatus(statusDiv, `Product selected: ${code} (${productType})`, 'success');
        
        // Update UI to show selection
        const allLabels = document.querySelectorAll('.product-option label');
        allLabels.forEach(label => {
            label.style.borderColor = '';
            label.style.background = '';
        });
        
        const selectedLabel = selectedProduct.closest('.product-option').querySelector('label');
        if (selectedLabel) {
            selectedLabel.style.borderColor = '#28a745';
            selectedLabel.style.background = 'rgba(40, 167, 69, 0.05)';
        }
        
        localStorage.setItem('nexura_product_code', code);
        localStorage.setItem('nexura_product_type', productType);
        
        console.log('✅ Product selected:', code, productType);
        console.log('💾 Stored in localStorage:', {
            productCode: localStorage.getItem('nexura_product_code'),
            productType: localStorage.getItem('nexura_product_type')
        });
    }

    checkPasswordStrength(password) {
        const strengthFill = document.getElementById('strengthFill');
        const strengthText = document.getElementById('strengthText');
        
        const reqLength = document.getElementById('reqLength');
        const reqUppercase = document.getElementById('reqUppercase');
        const reqLowercase = document.getElementById('reqLowercase');
        const reqNumber = document.getElementById('reqNumber');
        const reqSpecial = document.getElementById('reqSpecial');
        
        [reqLength, reqUppercase, reqLowercase, reqNumber, reqSpecial].forEach(el => {
            if (el) el.classList.remove('valid');
        });
        
        if (!password) {
            strengthFill.style.width = '0%';
            strengthFill.style.background = '#dee2e6';
            strengthText.textContent = '';
            return;
        }

        let score = 0;
        let color = '';
        let label = '';

        if (password.length >= 8) {
            score += 1;
            if (reqLength) reqLength.classList.add('valid');
        }
        if (/[A-Z]/.test(password)) {
            score += 1;
            if (reqUppercase) reqUppercase.classList.add('valid');
        }
        if (/[a-z]/.test(password)) {
            score += 1;
            if (reqLowercase) reqLowercase.classList.add('valid');
        }
        if (/[0-9]/.test(password)) {
            score += 1;
            if (reqNumber) reqNumber.classList.add('valid');
        }
        if (/[^a-zA-Z0-9]/.test(password)) {
            score += 1;
            if (reqSpecial) reqSpecial.classList.add('valid');
        }

        if (score <= 2) {
            color = '#dc3545';
            label = 'Weak';
        } else if (score <= 3) {
            color = '#ffc107';
            label = 'Fair';
        } else if (score <= 4) {
            color = '#17a2b8';
            label = 'Good';
        } else {
            color = '#28a745';
            label = 'Strong';
        }

        const percentage = (score / 5) * 100;
        strengthFill.style.width = percentage + '%';
        strengthFill.style.background = color;
        strengthText.textContent = label;
        strengthText.style.color = color;

        this.checkPasswordMatch();
    }

    checkPasswordMatch() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const confirmInput = document.getElementById('confirmPassword');

        if (confirmPassword) {
            if (password === confirmPassword) {
                confirmInput.style.borderColor = '#28a745';
            } else {
                confirmInput.style.borderColor = '#dc3545';
            }
        } else {
            confirmInput.style.borderColor = '';
        }
    }

    handleRegistration() {
        const statusDiv = document.getElementById('registrationStatus');
        
        const selectedProduct = document.querySelector('input[name="productCode"]:checked');
        if (!selectedProduct) {
            this.showStatus(statusDiv, 'Please select a product type (Tablets or Syrups)', 'error');
            return;
        }

        if (!this.productVerified) {
            this.verifyProductCode();
            if (!this.productVerified) {
                this.showStatus(statusDiv, 'Please select a valid product type', 'error');
                return;
            }
        }

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const role = document.querySelector('input[name="role"]:checked');
        const termsChecked = document.getElementById('termsCheck').checked;

        if (!fullName || !email || !mobile || !password || !confirmPassword) {
            this.showStatus(statusDiv, 'Please fill in all required fields', 'error');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            this.showStatus(statusDiv, 'Please enter a valid email address', 'error');
            return;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            this.showStatus(statusDiv, 'Please enter a valid 10-digit mobile number', 'error');
            return;
        }

        if (password.length < 8) {
            this.showStatus(statusDiv, 'Password must be at least 8 characters long', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showStatus(statusDiv, 'Passwords do not match', 'error');
            return;
        }

        if (!termsChecked) {
            this.showStatus(statusDiv, 'Please accept the Terms & Conditions', 'error');
            return;
        }

        if (!role) {
            this.showStatus(statusDiv, 'Please select a role', 'error');
            return;
        }

        const productCode = localStorage.getItem('nexura_product_code') || selectedProduct.value;
        const productType = localStorage.getItem('nexura_product_type') || 
                           (productCode === 'NEX123' ? 'Tablets' : 'Syrups');

        const userData = {
            id: Date.now().toString(),
            fullName: fullName,
            email: email,
            mobile: mobile,
            password: password,
            role: role.value,
            productCode: productCode,
            productType: productType,
            registeredAt: new Date().toISOString(),
            registrationDate: new Date().toLocaleDateString(),
            registrationTime: new Date().toLocaleTimeString()
        };

        const users = JSON.parse(localStorage.getItem('nexura_users') || '[]');
        
        if (users.find(u => u.email === email || u.mobile === mobile)) {
            this.showStatus(statusDiv, 'User already exists with this email or mobile', 'error');
            return;
        }
        
        users.push(userData);
        localStorage.setItem('nexura_users', JSON.stringify(users));
        localStorage.setItem('nexura_current_user', JSON.stringify(userData));
        localStorage.setItem('nexura_user_password_' + userData.id, password);
        localStorage.setItem('nexura_password_' + email, password);
        localStorage.setItem('nexura_user_fullname', fullName);
        localStorage.setItem('nexura_user_email', email);
        localStorage.setItem('nexura_user_mobile', mobile);
        localStorage.setItem('nexura_user_role', role.value);
        localStorage.setItem('nexura_fullname', fullName);
        localStorage.setItem('nexura_email', email);
        localStorage.setItem('nexura_mobile', mobile);

        const profileData = {
            fullName: fullName,
            email: email,
            mobile: mobile,
            role: role.value,
            productCode: productCode,
            productType: productType,
            dob: '',
            age: '',
            sex: '',
            medicalConditions: [],
            allergies: [],
            emergencyContact: {
                name: '',
                relation: '',
                phone: ''
            },
            doctor: {
                name: '',
                specialty: '',
                phone: '',
                email: ''
            },
            medications: []
        };
        localStorage.setItem('nexura_profile_data', JSON.stringify(profileData));

        // Log all stored data for verification
        console.log('✅ Registration successful! Data stored:');
        console.log('📋 Users:', JSON.parse(localStorage.getItem('nexura_users')));
        console.log('👤 Current User:', JSON.parse(localStorage.getItem('nexura_current_user')));
        console.log('📧 Email:', localStorage.getItem('nexura_email'));
        console.log('📱 Mobile:', localStorage.getItem('nexura_mobile'));
        console.log('🔑 Product Code:', localStorage.getItem('nexura_product_code'));
        console.log('📦 Product Type:', localStorage.getItem('nexura_product_type'));
        console.log('👤 Full Name:', localStorage.getItem('nexura_fullname'));

        this.showStatus(statusDiv, 'Registration successful! Redirecting to personal details...', 'success');

        const registerBtn = document.getElementById('registerBtn');
        registerBtn.disabled = true;
        registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

        setTimeout(() => {
            registerBtn.disabled = false;
            registerBtn.innerHTML = '<i class="fas fa-rocket"></i> Register & Start with Personal Details <i class="fas fa-arrow-right"></i>';
            window.location.href = 'personal-details.html';
        }, 2000);
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

    translatePage() {
        const lang = localStorage.getItem('nexura_language') || 'en';
        const translations = this.getTranslations();
        const t = translations[lang] || translations.en || {};
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined && t[key] !== null) {
                el.textContent = t[key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined && t[key] !== null) {
                el.placeholder = t[key];
            }
        });
        
        // Update password strength requirement texts
        const reqMap = {
            reqLength: 'minChars',
            reqUppercase: 'uppercase',
            reqLowercase: 'lowercase',
            reqNumber: 'number',
            reqSpecial: 'specialChar'
        };
        Object.keys(reqMap).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const key = reqMap[id];
                if (t[key] !== undefined && t[key] !== null) {
                    const icon = el.querySelector('i');
                    if (icon) {
                        el.innerHTML = icon.outerHTML + ' ' + t[key];
                    } else {
                        el.textContent = t[key];
                    }
                }
            }
        });
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

    setupPasswordStrength() {
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.addEventListener('input', () => {
                this.checkPasswordStrength(passwordInput.value);
            });
        }
    }

    getTranslations() {
        return REGISTER_TRANSLATIONS;
    }
}

// ================================================================
// GLOBAL FUNCTIONS
// ================================================================

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
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

function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').classList.remove('show');
}

function sendOTP() {
    alert('OTP sent! (Demo)');
    document.getElementById('resetOTPSection').style.display = 'block';
    document.getElementById('sendOTPBtn').style.display = 'none';
    document.getElementById('resetPasswordBtn').style.display = 'inline-block';
}

function resetPassword() {
    alert('Password reset successful! (Demo)');
    closeForgotPasswordModal();
}

function closeOTPModal() {
    document.getElementById('otpVerificationModal').classList.remove('show');
}

function verifyOTP() {
    alert('OTP verified! (Demo)');
    closeOTPModal();
}

function resendOTP() {
    alert('OTP resent! (Demo)');
}

function moveToNext(current, nextId) {
    if (current.value.length === 1) {
        const next = document.getElementById(nextId);
        if (next) next.focus();
    }
}

// ================================================================
// INITIALIZE
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    const app = new RegisterApp();
    window.registerApp = app;
    
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2a7de1';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '';
        });
    });
    
    console.log('✅ Register app initialized');
    console.log('💾 localStorage items:');
    console.log('  - nexura_language:', localStorage.getItem('nexura_language'));
    console.log('  - nexura_theme:', localStorage.getItem('nexura_theme'));
    console.log('  - nexura_users:', localStorage.getItem('nexura_users'));
    console.log('  - nexura_product_code:', localStorage.getItem('nexura_product_code'));
    console.log('  - nexura_product_type:', localStorage.getItem('nexura_product_type'));
});