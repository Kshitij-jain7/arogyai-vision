import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, MicOff, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { getBotResponseInHindi, getBotResponseInEnglish } from './ChatBotResponses';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  rating?: 'up' | 'down';
}

const ChatBot = () => {
  const { t, language } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: t('chatbot.greeting'),
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quickQuestions = [
    t('chatbot.quick.headache'),
    t('chatbot.quick.flu'),
    t('chatbot.quick.bp'),
    t('chatbot.quick.doctor'),
    t('chatbot.quick.vaccine')
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string = inputValue) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    if (language === 'hi') {
      return getBotResponseInHindi(userMessage);
    }
    return getBotResponseInEnglish(userMessage);
  };

  const handleRating = (messageId: string, rating: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, rating } : msg
    ));
    
    toast({
      title: rating === 'up' ? "Thank you for the feedback!" : "Feedback received",
      description: rating === 'up' ? "Glad I could help!" : "We'll work to improve our responses."
    });
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
      };

      recognition.start();
    } else {
      toast({
        title: "Speech recognition not supported",
        description: "Please type your message instead."
      });
    }
  };

  return (
    <section id="chatbot" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 glass border-primary/20">
            {t('chatbot.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('chatbot.title').split(' ').map((word, index) => 
              word === 'Assistant' || word === 'सहायक' ? 
                <span key={index} className="text-gradient">{word} </span> : 
                word + ' '
            )}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('chatbot.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Card className="glass border-glass-border/20 h-[600px] flex flex-col shadow-2xl">
            <CardHeader className="border-b border-glass-border/20">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">{t('chatbot.badge').replace('🤖 ', '')}</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    {t('chatbot.status')}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' ? 'bg-primary' : 'bg-gradient-primary'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-primary-foreground" />
                        ) : (
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                      
                      <div className={`${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'glass border-glass-border/20'
                      } rounded-2xl p-4`}>
                        <div className="whitespace-pre-line">{message.content}</div>
                        
                        {message.type === 'bot' && (
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-glass-border/20">
                            <span className="text-xs text-muted-foreground">{t('chatbot.helpful')}</span>
                            <div className="flex gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`h-7 w-7 p-0 ${message.rating === 'up' ? 'text-success' : ''}`}
                                onClick={() => handleRating(message.id, 'up')}
                              >
                                <ThumbsUp className="w-3 h-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`h-7 w-7 p-0 ${message.rating === 'down' ? 'text-destructive' : ''}`}
                                onClick={() => handleRating(message.id, 'down')}
                              >
                                <ThumbsDown className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="glass border-glass-border/20 rounded-2xl p-4">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="px-6 py-3 border-t border-glass-border/20">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-xs px-3 py-1 rounded-full glass border-glass-border/20 hover:bg-primary/10 hover-lift transition-all duration-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-6 border-t border-glass-border/20">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={t('chatbot.placeholder')}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="glass border-glass-border/30 pr-12"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 ${
                        isListening ? 'text-destructive' : 'text-muted-foreground'
                      }`}
                      onClick={startListening}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                  </div>
                  <Button 
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gradient-primary hover:scale-105 transition-transform duration-200"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;