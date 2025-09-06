import { ArrowRight, Bot, Shield, Zap, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-medical-ai.jpg';

const Hero = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const stats = [
    { number: '50K+', label: t('hero.stats.users') },
    { number: '95%', label: t('hero.stats.accuracy') },
    { number: '24/7', label: t('hero.stats.available') },
    { number: '15+', label: t('hero.stats.languages') }
  ];

  const features = [
    { icon: Bot, text: t('hero.features.diagnosis') },
    { icon: Shield, text: t('hero.features.compliant') },
    { icon: Zap, text: t('hero.features.instant') },
    { icon: HeartPulse, text: t('hero.features.monitoring') }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-bg opacity-90" />
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <Badge className="mb-6 glass text-primary border-primary/20">
              {t('hero.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('hero.title').split(' ').map((word, index) => 
                word === 'Healthcare' || word === 'स्वास्थ्य' ? 
                  <span key={index} className="text-gradient">{word} </span> : 
                  word + ' '
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:scale-105 transition-transform duration-300 glow text-lg px-8 py-6"
                onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 hover-lift"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.secondary')}
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg glass hover-lift"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Language Selection */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{t('hero.language')}</span>
              <div className="flex gap-2">
                <Button 
                  variant={language === 'en' ? 'default' : 'outline'} 
                  size="sm" 
                  className="glass"
                  onClick={() => setLanguage('en')}
                >
                  English
                </Button>
                <Button 
                  variant={language === 'hi' ? 'default' : 'outline'} 
                  size="sm" 
                  className="glass"
                  onClick={() => setLanguage('hi')}
                >
                  हिंदी
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in float">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Healthcare Technology" 
                className="w-full h-auto rounded-2xl shadow-glass"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 glass p-4 rounded-xl hover-lift">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl hover-lift">
              <div className="text-2xl font-bold text-medical-green">24/7</div>
              <div className="text-xs text-muted-foreground">Available</div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass p-6 rounded-xl hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;