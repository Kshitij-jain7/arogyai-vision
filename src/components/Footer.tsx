import { 
  HeartPulse, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Bot,
  Shield,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Health Assistant', href: '#chatbot' },
        { name: 'Symptom Checker', href: '#features' },
        { name: 'Health Dashboard', href: '#dashboard' },
        { name: 'Vaccination Reminders', href: '#features' },
        { name: 'Outbreak Alerts', href: '#features' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Health Blog', href: '#blog' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Medical Guidelines', href: '#' },
        { name: 'Community Support', href: '#' },
        { name: 'API Documentation', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Mission', href: '#' },
        { name: 'Medical Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'HIPAA Compliance', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Disclaimer', href: '#' }
      ]
    }
  ];

  const features = [
    { icon: Bot, text: 'AI-Powered Diagnostics' },
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: Clock, text: '24/7 Availability' },
    { icon: Users, text: '50K+ Users Served' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-glass-border/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <HeartPulse className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-gradient">ArogyaAI</h3>
                <p className="text-sm text-muted-foreground">Smarter Healthcare with AI</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Empowering communities with AI-powered healthcare solutions. 
              Get instant medical advice, track your health, and stay informed 
              about wellness - all in one intelligent platform.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@arogyaai.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Healthcare Innovation Hub, Tech City</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-glass-border/20">
          <div className="max-w-md">
            <h4 className="font-semibold mb-3">Stay Healthy, Stay Informed</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly health tips and updates from our medical experts.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg glass border-glass-border/30 focus:border-primary/50 focus:outline-none text-sm"
              />
              <Button size="sm" className="bg-gradient-primary hover:scale-105 transition-transform duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border/20 bg-muted/80">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 ArogyaAI. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span>Made with ❤️ for healthier communities</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full glass border-glass-border/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 hover-lift"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 pt-6 border-t border-glass-border/20">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided by ArogyaAI is for educational purposes only 
              and should not be considered as medical advice. Always consult with qualified healthcare professionals 
              for diagnosis, treatment, and medical decisions. In case of emergency, contact your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;