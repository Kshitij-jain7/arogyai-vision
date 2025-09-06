import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Search, Bot, User, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for: ${searchQuery}`,
      });
    }
  };

  const navItems = [
    { label: 'Home', href: '#home', icon: HeartPulse },
    { label: 'AI Assistant', href: '#chatbot', icon: Bot },
    { label: 'Dashboard', href: '#dashboard', icon: User },
    { label: 'FAQ', href: '#faq', icon: HeartPulse },
    { label: 'Blog', href: '#blog', icon: HeartPulse },
  ];

  const NavContent = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover-lift"
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <HeartPulse className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl text-gradient">ArogyaAI</h1>
              <p className="text-xs text-muted-foreground">Smarter Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavContent />
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search health topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 glass border-glass-border/30 focus:border-primary/50"
                />
              </div>
            </form>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="glass hover:bg-primary/20 hover-glow"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden glass">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass">
                <div className="flex flex-col gap-4 mt-8">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="md:hidden">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search health topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 glass border-glass-border/30"
                      />
                    </div>
                  </form>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    <NavContent />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;