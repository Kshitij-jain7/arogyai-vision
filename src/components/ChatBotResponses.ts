export const getBotResponseInHindi = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes('सिरदर्द') || msg.includes('बुखार') || msg.includes('headache') || msg.includes('fever')) {
    return 'सिरदर्द और बुखार के लक्षणों के आधार पर, यह वायरल संक्रमण, तनाव, या निर्जलीकरण सहित विभिन्न स्थितियों को दर्शा सकता है। मैं सुझाव देता हूं:\n\n• आराम करें और हाइड्रेटेड रहें\n• निर्देशानुसार ओवर-द-काउंटर दर्द निवारक लें\n• अपने तापमान की निगरानी करें\n• यदि लक्षण 48 घंटे से अधिक बने रहें या बिगड़ें तो डॉक्टर से सलाह लें\n\nगंभीर लक्षण जैसे सांस लेने में कठिनाई, छाती में दर्द, या लगातार तेज बुखार के मामले में तुरंत चिकित्सा सहायता लें।';
  }
  
  if (msg.includes('फ्लू') || msg.includes('इन्फ्लूएंजा') || msg.includes('flu') || msg.includes('influenza')) {
    return 'सामान्य फ्लू के लक्षणों में शामिल हैं:\n\n• बुखार (आमतौर पर तेज)\n• शरीर में दर्द और मांसपेशियों में दर्द\n• सिरदर्द\n• थकान और कमजोरी\n• खांसी\n• गले में खराश\n• बहती या बंद नाक\n• कभी-कभी मतली या उल्टी\n\nरोकथाम के तरीके:\n• वार्षिक फ्लू टीकाकरण\n• बार-बार हाथ धोना\n• बीमार व्यक्तियों के निकट संपर्क से बचें\n• खांसी और छींक को ढकें\n\nयदि लक्षण गंभीर हैं या आप उच्च जोखिम समूह में हैं तो डॉक्टर से मिलें।';
  }
  
  if (msg.includes('रक्तचाप') || msg.includes('ब्लड प्रेशर') || msg.includes('blood pressure')) {
    return 'स्वस्थ रक्तचाप बनाए रखने के लिए:\n\n• कम सोडियम वाला संतुलित आहार लें\n• नियमित व्यायाम करें (30 मिनट, सप्ताह में 5 दिन)\n• स्वस्थ वजन बनाए रखें\n• शराब का सेवन सीमित करें\n• धूम्रपान न करें\n• तनाव को विश्राम तकनीकों से प्रबंधित करें\n• पर्याप्त नींद लें (7-9 घंटे)\n• नियमित रूप से BP की निगरानी करें\n\nसामान्य BP: <120/80 mmHg\nउच्च BP: ≥130/80 mmHg\n\nव्यक्तिगत सलाह के लिए और यदि रीडिंग लगातार उच्च है तो अपने डॉक्टर से सलाह लें।';
  }
  
  if (msg.includes('डॉक्टर') || msg.includes('अस्पताल') || msg.includes('doctor') || msg.includes('hospital')) {
    return 'आपको डॉक्टर को दिखाना चाहिए जब:\n\n🚨 आपातकालीन स्थितियां:\n• छाती में दर्द या सांस लेने में कठिनाई\n• गंभीर एलर्जी प्रतिक्रिया\n• तेज बुखार (>103°F/39.4°C)\n• गंभीर रक्तस्राव या आघात\n• स्ट्रोक या हार्ट अटैक के संकेत\n\n📋 नियमित जांच:\n• 2 सप्ताह से अधिक के लगातार लक्षण\n• पुरानी स्थिति का प्रबंधन\n• निवारक जांच\n• दवा की समीक्षा\n• वार्षिक शारीरिक जांच\n\nअपनी सहज समझ पर भरोसा करें - यदि कुछ गंभीर रूप से गलत लगता है, तो चिकित्सा देखभाल लेने में झिझक न करें।';
  }
  
  if (msg.includes('कोविड') || msg.includes('टीकाकरण') || msg.includes('covid') || msg.includes('vaccination')) {
    return 'COVID-19 टीकाकरण जानकारी:\n\n💉 वर्तमान सिफारिशें:\n• प्राथमिक श्रृंखला: mRNA वैक्सीन की 2 खुराक\n• बूस्टर: CDC की सिफारिश के अनुसार\n• मौसमी रूप से अपडेटेड बूस्टर उपलब्ध\n\n🩺 किसे टीकाकरण कराना चाहिए:\n• 6 महीने और उससे अधिक उम्र के सभी लोग\n• उच्च जोखिम समूहों के लिए विशेष विचार\n\n📅 समय:\n• खुराक के बीच: 3-8 सप्ताह अंतराल\n• संक्रमण के बाद: 90 दिन प्रतीक्षा करें\n\nअपनी स्वास्थ्य स्थिति और स्थानीय दिशानिर्देशों के आधार पर व्यक्तिगत मार्गदर्शन के लिए अपने स्वास्थ्य सेवा प्रदाता से परामर्श करें।';
  }
  
  return 'आपके प्रश्न के लिए धन्यवाद। जबकि मैं सामान्य स्वास्थ्य जानकारी प्रदान कर सकता हूं, मैं व्यक्तिगत चिकित्सा सलाह के लिए स्वास्थ्य सेवा पेशेवर से परामर्श करने की सलाह देता हूं। क्या आपके लक्षणों या स्वास्थ्य चिंताओं के बारे में कुछ खास है जिसे स्पष्ट करने में मैं आपकी मदद कर सकता हूं?';
};

export const getBotResponseInEnglish = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes('headache') || msg.includes('fever')) {
    return 'Based on your symptoms of headache and fever, this could indicate various conditions including viral infections, stress, or dehydration. I recommend:\n\n• Rest and stay hydrated\n• Take over-the-counter pain relievers as directed\n• Monitor your temperature\n• Consult a doctor if symptoms persist for >48 hours or worsen\n\nPlease seek immediate medical attention if you experience severe symptoms like difficulty breathing, chest pain, or persistent high fever.';
  }
  
  if (msg.includes('flu') || msg.includes('influenza')) {
    return 'Common flu symptoms include:\n\n• Fever (usually high)\n• Body aches and muscle pain\n• Headache\n• Fatigue and weakness\n• Cough\n• Sore throat\n• Runny or stuffy nose\n• Sometimes nausea or vomiting\n\nPrevention tips:\n• Annual flu vaccination\n• Frequent hand washing\n• Avoid close contact with sick individuals\n• Cover coughs and sneezes\n\nSee a doctor if symptoms are severe or if you\'re in a high-risk group.';
  }
  
  if (msg.includes('blood pressure')) {
    return 'To maintain healthy blood pressure:\n\n• Eat a balanced diet low in sodium\n• Exercise regularly (30 min, 5 days/week)\n• Maintain healthy weight\n• Limit alcohol consumption\n• Don\'t smoke\n• Manage stress through relaxation techniques\n• Get adequate sleep (7-9 hours)\n• Monitor BP regularly\n\nNormal BP: <120/80 mmHg\nHigh BP: ≥130/80 mmHg\n\nConsult your doctor for personalized advice and if readings are consistently high.';
  }
  
  if (msg.includes('doctor') || msg.includes('hospital')) {
    return 'You should see a doctor when:\n\n🚨 Emergency situations:\n• Chest pain or difficulty breathing\n• Severe allergic reactions\n• High fever (>103°F/39.4°C)\n• Severe bleeding or trauma\n• Signs of stroke or heart attack\n\n📋 Regular check-ups:\n• Persistent symptoms >2 weeks\n• Chronic condition management\n• Preventive screenings\n• Medication reviews\n• Annual physical exams\n\nTrust your instincts - if something feels seriously wrong, don\'t hesitate to seek medical care.';
  }
  
  if (msg.includes('covid') || msg.includes('vaccination')) {
    return 'COVID-19 vaccination information:\n\n💉 Current recommendations:\n• Primary series: 2 doses of mRNA vaccine\n• Boosters: As recommended by CDC\n• Updated boosters available seasonally\n\n🩺 Who should get vaccinated:\n• Everyone 6 months and older\n• Special consideration for high-risk groups\n\n📅 Timing:\n• Between doses: 3-8 weeks apart\n• After infection: Wait 90 days\n\nConsult your healthcare provider for personalized guidance based on your health status and local guidelines.';
  }
  
  return 'Thank you for your question. While I can provide general health information, I recommend consulting with a healthcare professional for personalized medical advice. Is there anything specific about your symptoms or health concerns you\'d like me to help clarify?';
};