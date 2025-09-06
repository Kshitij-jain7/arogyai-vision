import { Calendar, Clock, User, ArrowRight, Heart, Brain, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Health Habits for a Stronger Immune System',
      excerpt: 'Discover science-backed strategies to boost your immunity naturally through nutrition, exercise, and lifestyle changes.',
      category: 'Wellness',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      icon: Shield
    },
    {
      id: 2,
      title: 'Understanding Mental Health: Breaking the Stigma',
      excerpt: 'A comprehensive guide to mental health awareness, recognizing symptoms, and finding the right support systems.',
      category: 'Mental Health',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      icon: Brain
    },
    {
      id: 3,
      title: 'Heart Health in the Digital Age: Managing Stress and Exercise',
      excerpt: 'Learn how modern lifestyle affects cardiovascular health and practical tips for maintaining a healthy heart.',
      category: 'Cardiology',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      icon: Heart
    },
    {
      id: 4,
      title: 'AI in Healthcare: The Future of Medical Diagnosis',
      excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.',
      category: 'Technology',
      author: 'Dr. James Park',
      date: '2024-01-08',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      icon: Brain
    },
    {
      id: 5,
      title: 'Nutrition Myths Debunked: Evidence-Based Eating',
      excerpt: 'Separating fact from fiction in the world of nutrition science and dietary recommendations.',
      category: 'Nutrition',
      author: 'Dr. Lisa Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      icon: Heart
    },
    {
      id: 6,
      title: 'Preventive Care: Your Guide to Regular Health Screenings',
      excerpt: 'Understanding which health screenings you need at every age and how to stay proactive about your health.',
      category: 'Prevention',
      author: 'Dr. Robert Kumar',
      date: '2024-01-02',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      icon: Shield
    }
  ];

  const categories = ['All', 'Wellness', 'Mental Health', 'Cardiology', 'Technology', 'Nutrition', 'Prevention'];

  const CategoryIcon = ({ category }: { category: string }) => {
    switch (category) {
      case 'Mental Health': case 'Technology': return Brain;
      case 'Cardiology': case 'Nutrition': return Heart;
      case 'Wellness': case 'Prevention': return Shield;
      default: return Heart;
    }
  };

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 glass border-primary/20">
            📚 Health Blog
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Latest <span className="text-gradient">Health Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert articles, health tips, and the latest medical research 
            from our team of healthcare professionals and specialists.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="glass border-glass-border/30 hover:bg-primary/10 hover:border-primary/50"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post) => {
            const IconComponent = post.icon;
            return (
              <Card key={post.id} className="glass border-glass-border/20 hover-lift group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="outline" className="mb-2 text-white border-white/30">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:scale-105 transition-transform duration-300">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => {
            const IconComponent = post.icon;
            return (
              <Card key={post.id} className="glass border-glass-border/20 hover-lift group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  
                  <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="glass border-glass-border/20 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Health Tips</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest health insights, tips, and research 
              delivered directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg glass border-glass-border/30 focus:border-primary/50 focus:outline-none"
              />
              <Button className="bg-gradient-primary hover:scale-105 transition-transform duration-300 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Blog;