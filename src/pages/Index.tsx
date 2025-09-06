import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ChatBot from '@/components/ChatBot';
import Dashboard from '@/components/Dashboard';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatBot />
        <Dashboard />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
