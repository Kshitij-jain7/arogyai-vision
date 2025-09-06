import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, Shield, Clock, Heart, Brain, Users } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: 'General',
      icon: HelpCircle,
      questions: [
        {
          q: 'What is ArogyaAI and how does it work?',
          a: 'ArogyaAI is an advanced AI-powered health assistant that provides personalized medical information, symptom analysis, and health recommendations. Our system uses machine learning algorithms trained on vast medical knowledge to offer accurate, reliable health guidance 24/7.'
        },
        {
          q: 'Is ArogyaAI free to use?',
          a: 'Yes! ArogyaAI offers free access to basic health consultations, symptom checking, and health information. We also offer premium features for advanced analytics, personalized health plans, and priority support.'
        },
        {
          q: 'Can ArogyaAI replace my doctor?',
          a: 'No, ArogyaAI is designed to complement, not replace, professional medical care. While we provide valuable health insights and guidance, we always recommend consulting with qualified healthcare professionals for serious medical concerns, diagnosis, and treatment.'
        }
      ]
    },
    {
      category: 'Privacy & Security',
      icon: Shield,
      questions: [
        {
          q: 'How is my health data protected?',
          a: 'We take privacy seriously. All your health data is encrypted using industry-standard protocols, stored securely, and never shared with third parties without your explicit consent. We comply with HIPAA and other relevant privacy regulations.'
        },
        {
          q: 'Who has access to my medical information?',
          a: 'Only you have access to your complete health profile. Our AI processes data anonymously for consultations. Healthcare providers can only access information you explicitly choose to share through our secure sharing features.'
        },
        {
          q: 'Can I delete my health data?',
          a: 'Absolutely! You have full control over your data. You can view, edit, export, or permanently delete your health information at any time through your dashboard settings. We also provide data portability options.'
        }
      ]
    },
    {
      category: 'Medical Accuracy',
      icon: Heart,
      questions: [
        {
          q: 'How accurate are the AI health recommendations?',
          a: 'Our AI maintains a 95%+ accuracy rate for common health queries and symptom analysis. However, accuracy can vary based on the complexity of symptoms and individual health factors. We continuously update our models with the latest medical research.'
        },
        {
          q: 'What should I do if I disagree with the AI assessment?',
          a: 'If you have concerns about an AI assessment, we encourage you to: 1) Consult with a healthcare professional, 2) Provide feedback through our rating system, 3) Seek a second opinion from our medical advisory team for complex cases.'
        },
        {
          q: 'Are emergency situations handled appropriately?',
          a: 'Yes, our AI is trained to identify potential emergency symptoms and will immediately recommend seeking urgent medical care. For true emergencies, always call emergency services (911) directly rather than using any digital health tool.'
        }
      ]
    },
    {
      category: 'Features & Usage',
      icon: Brain,
      questions: [
        {
          q: 'What languages does ArogyaAI support?',
          a: 'Currently, we support English and Hindi, with plans to add more languages including Tamil, Bengali, Telugu, and Marathi. Our AI can understand regional dialects and medical terminology in supported languages.'
        },
        {
          q: 'Can I use voice commands with the AI assistant?',
          a: 'Yes! Our voice recognition feature allows you to speak your symptoms and questions directly to the AI. This is particularly helpful for users who prefer speaking over typing or have accessibility needs.'
        },
        {
          q: 'How do I set up medication and appointment reminders?',
          a: 'Navigate to your Dashboard > Reminders section. You can set up custom reminders for medications, appointments, health checkups, and wellness goals. Notifications can be sent via email, SMS, or push notifications.'
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: Clock,
      questions: [
        {
          q: 'What devices and browsers are supported?',
          a: 'ArogyaAI works on all modern web browsers (Chrome, Firefox, Safari, Edge) and is fully responsive for mobile devices. We also offer dedicated mobile apps for iOS and Android with additional features.'
        },
        {
          q: 'The AI is not responding correctly. What should I do?',
          a: 'Try refreshing the page, clearing your browser cache, or rephrasing your question. If issues persist, contact our support team at support@arogyaai.com or use the help chat feature in your dashboard.'
        },
        {
          q: 'How can I provide feedback or report issues?',
          a: 'We welcome your feedback! You can rate AI responses directly in the chat, submit feedback through your dashboard, or contact us at feedback@arogyaai.com. Your input helps us continuously improve our services.'
        }
      ]
    },
    {
      category: 'Family & Community',
      icon: Users,
      questions: [
        {
          q: 'Can I manage health profiles for my family?',
          a: 'Yes! Premium users can create and manage health profiles for family members. Parents can manage profiles for children under 18, and you can share appropriate health information with family caregivers.'
        },
        {
          q: 'How do outbreak alerts work in my area?',
          a: 'We monitor public health data and provide district-level alerts for disease outbreaks, vaccination drives, and health advisories. You can customize alert preferences and geographic areas in your settings.'
        },
        {
          q: 'Is there a community feature for health discussions?',
          a: 'Our moderated health communities allow users to share experiences, ask questions, and support each other under professional oversight. All discussions are anonymous and focused on general wellness topics.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 glass border-primary/20">
            ❓ Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Got questions? <span className="text-gradient">We have answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about ArogyaAI, our AI health assistant, 
            privacy policies, and how to get the most out of our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="glass border-glass-border/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border-glass-border/20"
                      >
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <Card className="glass border-glass-border/20 mt-12">
            <CardContent className="p-8 text-center">
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is available 24/7 to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300 glow">
                  Contact Support
                </button>
                <button className="px-6 py-3 glass border-primary/30 rounded-lg font-semibold hover-lift">
                  Schedule a Call
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;