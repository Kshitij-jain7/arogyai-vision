import { 
  Bot, 
  Stethoscope, 
  Shield, 
  Bell, 
  Users, 
  BarChart3,
  Clock,
  Heart,
  Brain
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const mainFeatures = [
    {
      icon: Bot,
      title: 'AI Health Assistant',
      description: 'Get instant, personalized health advice powered by advanced AI algorithms trained on medical knowledge.',
      features: ['Natural language processing', 'Symptom analysis', 'Treatment suggestions'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Stethoscope,
      title: 'Smart Symptom Checker',
      description: 'Advanced diagnostic tool that analyzes your symptoms and provides accurate health assessments.',
      features: ['Multi-symptom analysis', 'Risk assessment', 'Doctor recommendations'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Bell,
      title: 'Health Alerts & Reminders',
      description: 'Stay on top of your health with intelligent notifications and personalized reminders.',
      features: ['Vaccination reminders', 'Medication alerts', 'Health checkups'],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: 'Privacy First', description: 'End-to-end encryption for all your health data' },
    { icon: Users, title: 'Family Profiles', description: 'Manage health for your entire family' },
    { icon: BarChart3, title: 'Health Analytics', description: 'Track trends and get insights' },
    { icon: Clock, title: '24/7 Availability', description: 'Access healthcare advice anytime' },
    { icon: Heart, title: 'Wellness Tracking', description: 'Monitor vital signs and activities' },
    { icon: Brain, title: 'Mental Health', description: 'AI-powered mental wellness support' }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 glass border-primary/20">
            ✨ Core Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need for
            <br />
            <span className="text-gradient">smarter healthcare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform combines AI technology with medical expertise 
            to deliver personalized healthcare solutions.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="glass border-glass-border/20 hover-lift group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="glass border-glass-border/20 hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass border-glass-border/20 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to experience the future of healthcare?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust ArogyaAI for their health and wellness needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform duration-300 glow"
                onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try AI Assistant Now
              </button>
              <button 
                className="px-8 py-3 glass border-primary/30 rounded-lg font-semibold hover-lift"
                onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Dashboard
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;