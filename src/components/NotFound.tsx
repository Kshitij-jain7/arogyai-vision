import { Home, ArrowLeft, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto glass border-glass-border/20 text-center">
          <CardContent className="p-12">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-gradient mb-4">404</div>
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center float">
                <Bot className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* Content */}
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off. 
              Our AI assistant is still here to help with your health needs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-transform duration-300"
                onClick={() => window.location.href = '/'}
              >
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/30 hover:bg-primary/10 hover-lift"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-glass-border/20">
              <p className="text-sm text-muted-foreground mb-4">
                Or try these popular sections:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a href="/#chatbot" className="text-sm px-4 py-2 rounded-full glass border-glass-border/20 hover:bg-primary/10 hover-lift transition-all duration-200">
                  AI Assistant
                </a>
                <a href="/#dashboard" className="text-sm px-4 py-2 rounded-full glass border-glass-border/20 hover:bg-primary/10 hover-lift transition-all duration-200">
                  Dashboard
                </a>
                <a href="/#faq" className="text-sm px-4 py-2 rounded-full glass border-glass-border/20 hover:bg-primary/10 hover-lift transition-all duration-200">
                  FAQ
                </a>
                <a href="/#blog" className="text-sm px-4 py-2 rounded-full glass border-glass-border/20 hover:bg-primary/10 hover-lift transition-all duration-200">
                  Health Blog
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;