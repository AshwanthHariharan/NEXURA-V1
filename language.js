// js/language.js
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('nexura_language') || 'en';
        this.translations = TRANSLATIONS;
        this.listeners = [];
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                let fallback = this.translations['en'];
                for (const fk of keys) {
                    if (fallback && fallback[fk] !== undefined) {
                        fallback = fallback[fk];
                    } else {
                        return key;
                    }
                }
                return fallback;
            }
        }
        return value;
    }

    setLanguage(langCode) {
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('nexura_language', langCode);
            this.notifyListeners();
            return true;
        }
        return false;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getLanguageName(code) {
        const lang = LANGUAGE_LIST.find(l => l.code === code);
        return lang ? lang.name : code;
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(cb => cb !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback(this.currentLanguage));
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getAvailableLanguages() {
        return LANGUAGE_LIST;
        // Inside the availableLanguages array
        
    }
}



// Singleton instance
const languageManager = new LanguageManager();