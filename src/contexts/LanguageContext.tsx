import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.logo': 'ArogyaAI',
    'header.tagline': 'Smarter Healthcare',
    'header.search': 'Search health topics...',
    'header.nav.home': 'Home',
    'header.nav.assistant': 'AI Assistant',
    'header.nav.dashboard': 'Dashboard', 
    'header.nav.faq': 'FAQ',
    'header.nav.blog': 'Blog',

    // Hero
    'hero.badge': '🚀 New: AI Health Assistant 2.0',
    'hero.title': 'Smarter Healthcare with AI',
    'hero.description': 'ArogyaAI empowers communities with real-time health insights, AI-powered diagnostics, and personalized care recommendations—all in one intelligent platform.',
    'hero.cta.primary': 'Start AI Consultation',
    'hero.cta.secondary': 'Learn More',
    'hero.features.diagnosis': 'AI-Powered Diagnosis',
    'hero.features.compliant': 'HIPAA Compliant',
    'hero.features.instant': 'Instant Results',
    'hero.features.monitoring': 'Real-time Monitoring',
    'hero.language': 'Choose your language:',
    'hero.stats.users': 'Users Helped',
    'hero.stats.accuracy': 'Accuracy Rate',
    'hero.stats.available': 'Available',
    'hero.stats.languages': 'Languages',

    // Features
    'features.badge': '✨ Core Features',
    'features.title': 'Everything you need for smarter healthcare',
    'features.description': 'Our comprehensive platform combines AI technology with medical expertise to deliver personalized healthcare solutions.',
    'features.ai.title': 'AI Health Assistant',
    'features.ai.description': 'Get instant, personalized health advice powered by advanced AI algorithms trained on medical knowledge.',
    'features.ai.feature1': 'Natural language processing',
    'features.ai.feature2': 'Symptom analysis', 
    'features.ai.feature3': 'Treatment suggestions',
    'features.symptom.title': 'Smart Symptom Checker',
    'features.symptom.description': 'Advanced diagnostic tool that analyzes your symptoms and provides accurate health assessments.',
    'features.symptom.feature1': 'Multi-symptom analysis',
    'features.symptom.feature2': 'Risk assessment',
    'features.symptom.feature3': 'Doctor recommendations',
    'features.alerts.title': 'Health Alerts & Reminders',
    'features.alerts.description': 'Stay on top of your health with intelligent notifications and personalized reminders.',
    'features.alerts.feature1': 'Vaccination reminders',
    'features.alerts.feature2': 'Medication alerts',
    'features.alerts.feature3': 'Health checkups',
    'features.privacy.title': 'Privacy First',
    'features.privacy.description': 'End-to-end encryption for all your health data',
    'features.family.title': 'Family Profiles',
    'features.family.description': 'Manage health for your entire family',
    'features.analytics.title': 'Health Analytics',
    'features.analytics.description': 'Track trends and get insights',
    'features.availability.title': '24/7 Availability',
    'features.availability.description': 'Access healthcare advice anytime',
    'features.wellness.title': 'Wellness Tracking',
    'features.wellness.description': 'Monitor vital signs and activities',
    'features.mental.title': 'Mental Health',
    'features.mental.description': 'AI-powered mental wellness support',
    'features.cta.title': 'Ready to experience the future of healthcare?',
    'features.cta.description': 'Join thousands of users who trust ArogyaAI for their health and wellness needs.',
    'features.cta.try': 'Try AI Assistant Now',
    'features.cta.view': 'View Dashboard',

    // ChatBot
    'chatbot.badge': '🤖 AI Assistant',
    'chatbot.title': 'Chat with our AI Health Assistant',
    'chatbot.description': 'Get instant health advice, symptom analysis, and medical information from our advanced AI system trained on medical knowledge.',
    'chatbot.status': 'Online • Powered by Medical AI',
    'chatbot.placeholder': 'Ask me about your health concerns...',
    'chatbot.helpful': 'Was this helpful?',
    'chatbot.greeting': 'Hello! I\'m your AI Health Assistant. How can I help you today? You can ask me about symptoms, medications, health advice, or general wellness questions.',
    'chatbot.quick.headache': 'I have a headache and fever',
    'chatbot.quick.flu': 'What are the symptoms of flu?',
    'chatbot.quick.bp': 'How to maintain healthy blood pressure?',
    'chatbot.quick.doctor': 'When should I see a doctor?',
    'chatbot.quick.vaccine': 'COVID-19 vaccination schedule',

    // Dashboard
    'dashboard.badge': '📊 Your Health Dashboard',
    'dashboard.title': 'Personal Health Center',
    'dashboard.description': 'Track your health metrics, view consultation history, and manage your wellness journey in one comprehensive dashboard.',
    'dashboard.tabs.overview': 'Overview',
    'dashboard.tabs.consultations': 'Consultations',
    'dashboard.tabs.reminders': 'Reminders',
    'dashboard.tabs.vaccines': 'Vaccines',
    'dashboard.tabs.settings': 'Settings',
    'dashboard.metrics.bp': 'Blood Pressure',
    'dashboard.metrics.hr': 'Heart Rate',
    'dashboard.metrics.weight': 'Weight',
    'dashboard.metrics.bmi': 'BMI',
    'dashboard.goals.title': 'Health Goals Progress',
    'dashboard.goals.steps': 'Daily Steps',
    'dashboard.goals.water': 'Water Intake',
    'dashboard.goals.sleep': 'Sleep Hours',
    'dashboard.goals.exercise': 'Exercise',
    'dashboard.vaccines.title': 'Vaccination Schedule',
    'dashboard.vaccines.completed': 'Completed',
    'dashboard.vaccines.upcoming': 'Upcoming',
    'dashboard.vaccines.overdue': 'Overdue',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.retry': 'Try Again',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm'
  },
  hi: {
    // Header
    'header.logo': 'आरोग्यAI',
    'header.tagline': 'बेहतर स्वास्थ्य सेवा',
    'header.search': 'स्वास्थ्य विषयों की खोज करें...',
    'header.nav.home': 'होम',
    'header.nav.assistant': 'AI सहायक',
    'header.nav.dashboard': 'डैशबोर्ड',
    'header.nav.faq': 'प्रश्न उत्तर',
    'header.nav.blog': 'ब्लॉग',

    // Hero
    'hero.badge': '🚀 नया: AI स्वास्थ्य सहायक 2.0',
    'hero.title': 'AI के साथ बेहतर स्वास्थ्य सेवा',
    'hero.description': 'आरोग्यAI समुदायों को वास्तविक समय स्वास्थ्य अंतर्दृष्टि, AI-संचालित निदान, और व्यक्तिगत देखभाल सिफारिशों के साथ सशक्त बनाता है—सब कुछ एक बुद्धिमान प्लेटफॉर्म में।',
    'hero.cta.primary': 'AI परामर्श शुरू करें',
    'hero.cta.secondary': 'और जानें',
    'hero.features.diagnosis': 'AI-संचालित निदान',
    'hero.features.compliant': 'HIPAA अनुपालित',
    'hero.features.instant': 'तत्काल परिणाम',
    'hero.features.monitoring': 'वास्तविक समय निगरानी',
    'hero.language': 'अपनी भाषा चुनें:',
    'hero.stats.users': 'उपयोगकर्ता मदद की',
    'hero.stats.accuracy': 'सटीकता दर',
    'hero.stats.available': 'उपलब्ध',
    'hero.stats.languages': 'भाषाएं',

    // Features
    'features.badge': '✨ मुख्य सुविधाएं',
    'features.title': 'बेहतर स्वास्थ्य सेवा के लिए आपको जो कुछ चाहिए',
    'features.description': 'हमारा व्यापक प्लेटफॉर्म व्यक्तिगत स्वास्थ्य समाधान प्रदान करने के लिए AI तकनीक को चिकित्सा विशेषज्ञता के साथ जोड़ता है।',
    'features.ai.title': 'AI स्वास्थ्य सहायक',
    'features.ai.description': 'चिकित्सा ज्ञान पर प्रशिक्षित उन्नत AI एल्गोरिदम द्वारा संचालित तत्काल, व्यक्तिगत स्वास्थ्य सलाह प्राप्त करें।',
    'features.ai.feature1': 'प्राकृतिक भाषा प्रसंस्करण',
    'features.ai.feature2': 'लक्षण विश्लेषण',
    'features.ai.feature3': 'उपचार सुझाव',
    'features.symptom.title': 'स्मार्ट लक्षण जांचकर्ता',
    'features.symptom.description': 'उन्नत निदान उपकरण जो आपके लक्षणों का विश्लेषण करता है और सटीक स्वास्थ्य मूल्यांकन प्रदान करता है।',
    'features.symptom.feature1': 'बहु-लक्षण विश्लेषण',
    'features.symptom.feature2': 'जोखिम मूल्यांकन',
    'features.symptom.feature3': 'डॉक्टर सिफारिशें',
    'features.alerts.title': 'स्वास्थ्य अलर्ट और अनुस्मारक',
    'features.alerts.description': 'बुद्धिमान सूचनाओं और व्यक्तिगत अनुस्मारकों के साथ अपने स्वास्थ्य के शीर्ष पर रहें।',
    'features.alerts.feature1': 'टीकाकरण अनुस्मारक',
    'features.alerts.feature2': 'दवा अलर्ट',
    'features.alerts.feature3': 'स्वास्थ्य जांच',
    'features.privacy.title': 'गोपनीयता पहले',
    'features.privacy.description': 'आपके सभी स्वास्थ्य डेटा के लिए एंड-टू-एंड एन्क्रिप्शन',
    'features.family.title': 'पारिवारिक प्रोफाइल',
    'features.family.description': 'अपने पूरे परिवार के स्वास्थ्य का प्रबंधन करें',
    'features.analytics.title': 'स्वास्थ्य विश्लेषण',
    'features.analytics.description': 'रुझानों को ट्रैक करें और अंतर्दृष्टि प्राप्त करें',
    'features.availability.title': '24/7 उपलब्धता',
    'features.availability.description': 'कभी भी स्वास्थ्य सलाह का उपयोग करें',
    'features.wellness.title': 'स्वास्थ्य ट्रैकिंग',
    'features.wellness.description': 'महत्वपूर्ण संकेतक और गतिविधियों की निगरानी करें',
    'features.mental.title': 'मानसिक स्वास्थ्य',
    'features.mental.description': 'AI-संचालित मानसिक कल्याण समर्थन',
    'features.cta.title': 'स्वास्थ्य सेवा के भविष्य का अनुभव करने के लिए तैयार हैं?',
    'features.cta.description': 'हजारों उपयोगकर्ताओं में शामिल हों जो अपनी स्वास्थ्य और कल्याण आवश्यकताओं के लिए आरोग्यAI पर भरोसा करते हैं।',
    'features.cta.try': 'AI सहायक को अभी आज़माएं',
    'features.cta.view': 'डैशबोर्ड देखें',

    // ChatBot
    'chatbot.badge': '🤖 AI सहायक',
    'chatbot.title': 'हमारे AI स्वास्थ्य सहायक के साथ चैट करें',
    'chatbot.description': 'चिकित्सा ज्ञान पर प्रशिक्षित हमारे उन्नत AI सिस्टम से तत्काल स्वास्थ्य सलाह, लक्षण विश्लेषण और चिकित्सा जानकारी प्राप्त करें।',
    'chatbot.status': 'ऑनलाइन • मेडिकल AI द्वारा संचालित',
    'chatbot.placeholder': 'अपनी स्वास्थ्य चिंताओं के बारे में मुझसे पूछें...',
    'chatbot.helpful': 'क्या यह सहायक था?',
    'chatbot.greeting': 'नमस्ते! मैं आपका AI स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे सहायता कर सकता हूं? आप मुझसे लक्षण, दवाएं, स्वास्थ्य सलाह, या सामान्य कल्याण प्रश्नों के बारे में पूछ सकते हैं।',
    'chatbot.quick.headache': 'मुझे सिरदर्द और बुखार है',
    'chatbot.quick.flu': 'फ्लू के लक्षण क्या हैं?',
    'chatbot.quick.bp': 'स्वस्थ रक्तचाप कैसे बनाए रखें?',
    'chatbot.quick.doctor': 'डॉक्टर को कब दिखाना चाहिए?',
    'chatbot.quick.vaccine': 'COVID-19 टीकाकरण अनुसूची',

    // Dashboard
    'dashboard.badge': '📊 आपका स्वास्थ्य डैशबोर्ड',
    'dashboard.title': 'व्यक्तिगत स्वास्थ्य केंद्र',
    'dashboard.description': 'अपने स्वास्थ्य मेट्रिक्स को ट्रैक करें, परामर्श इतिहास देखें, और एक व्यापक डैशबोर्ड में अपनी कल्याण यात्रा का प्रबंधन करें।',
    'dashboard.tabs.overview': 'अवलोकन',
    'dashboard.tabs.consultations': 'परामर्श',
    'dashboard.tabs.reminders': 'अनुस्मारक',
    'dashboard.tabs.vaccines': 'टीके',
    'dashboard.tabs.settings': 'सेटिंग्स',
    'dashboard.metrics.bp': 'रक्तचाप',
    'dashboard.metrics.hr': 'हृदय गति',
    'dashboard.metrics.weight': 'वजन',
    'dashboard.metrics.bmi': 'BMI',
    'dashboard.goals.title': 'स्वास्थ्य लक्ष्य प्रगति',
    'dashboard.goals.steps': 'दैनिक कदम',
    'dashboard.goals.water': 'पानी का सेवन',
    'dashboard.goals.sleep': 'नींद के घंटे',
    'dashboard.goals.exercise': 'व्यायाम',
    'dashboard.vaccines.title': 'टीकाकरण अनुसूची',
    'dashboard.vaccines.completed': 'पूर्ण',
    'dashboard.vaccines.upcoming': 'आगामी',
    'dashboard.vaccines.overdue': 'बकाया',

    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'कुछ गलत हुआ',
    'common.retry': 'फिर से कोशिश करें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सेव करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.confirm': 'पुष्टि करें'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};