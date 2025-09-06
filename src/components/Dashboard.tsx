import { useState } from 'react';
import { 
  User, 
  Heart, 
  Activity, 
  Calendar, 
  FileText, 
  Settings,
  Plus,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'normal', icon: Heart },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', icon: Activity },
    { label: 'Weight', value: '70 kg', status: 'stable', icon: TrendingUp },
    { label: 'BMI', value: '22.5', status: 'healthy', icon: User }
  ];

  const recentConsultations = [
    {
      id: 1,
      date: '2024-01-15',
      topic: 'Headache and fever symptoms',
      status: 'completed',
      rating: 5
    },
    {
      id: 2,
      date: '2024-01-12',
      topic: 'Blood pressure consultation',
      status: 'completed',
      rating: 4
    },
    {
      id: 3,
      date: '2024-01-08',
      topic: 'Flu symptoms checker',
      status: 'completed',
      rating: 5
    }
  ];

  const upcomingReminders = [
    { id: 1, type: 'Medication', title: 'Take morning vitamins', time: '9:00 AM', status: 'pending' },
    { id: 2, type: 'Appointment', title: 'Annual checkup', time: '2:00 PM', status: 'upcoming' },
    { id: 3, type: 'Vaccination', title: 'Flu shot reminder', time: 'Next week', status: 'scheduled' }
  ];

  const healthGoals = [
    { name: 'Daily Steps', current: 8500, target: 10000, unit: 'steps' },
    { name: 'Water Intake', current: 6, target: 8, unit: 'glasses' },
    { name: 'Sleep Hours', current: 7.5, target: 8, unit: 'hours' },
    { name: 'Exercise', current: 4, target: 5, unit: 'days/week' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': case 'healthy': case 'completed': return 'text-success';
      case 'pending': case 'upcoming': return 'text-warning';
      case 'scheduled': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'pending': case 'upcoming': case 'scheduled': return AlertCircle;
      default: return Activity;
    }
  };

  return (
    <section id="dashboard" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 glass border-primary/20">
            📊 Your Health Dashboard
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Personal <span className="text-gradient">Health Center</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your health metrics, view consultation history, and manage 
            your wellness journey in one comprehensive dashboard.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 glass">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="consultations">Consultations</TabsTrigger>
              <TabsTrigger value="reminders">Reminders</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Health Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {healthMetrics.map((metric, index) => (
                  <Card key={index} className="glass border-glass-border/20 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <metric.icon className={`w-8 h-8 ${getStatusColor(metric.status)}`} />
                        <Badge variant="outline" className={getStatusColor(metric.status)}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Health Goals */}
              <Card className="glass border-glass-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Health Goals Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {healthGoals.map((goal, index) => {
                      const progress = (goal.current / goal.target) * 100;
                      return (
                        <div key={index} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{goal.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {goal.current}/{goal.target} {goal.unit}
                            </span>
                          </div>
                          <Progress value={progress} className="h-2" />
                          <div className="text-xs text-muted-foreground">
                            {progress.toFixed(0)}% completed
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass border-glass-border/20 hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Plus className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">New Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Start a new chat with AI assistant
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass border-glass-border/20 hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Health Report</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate comprehensive health report
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass border-glass-border/20 hover-lift cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Schedule Checkup</h3>
                    <p className="text-sm text-muted-foreground">
                      Book an appointment with doctor
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="consultations" className="space-y-6">
              <Card className="glass border-glass-border/20">
                <CardHeader>
                  <CardTitle>Recent Consultations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentConsultations.map((consultation) => (
                      <div 
                        key={consultation.id}
                        className="flex items-center justify-between p-4 rounded-lg glass border-glass-border/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{consultation.topic}</h4>
                            <p className="text-sm text-muted-foreground">{consultation.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            {[...Array(consultation.rating)].map((_, i) => (
                              <CheckCircle key={i} className="w-4 h-4 text-success" />
                            ))}
                          </div>
                          <Badge variant="outline" className="text-success">
                            {consultation.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reminders" className="space-y-6">
              <Card className="glass border-glass-border/20">
                <CardHeader>
                  <CardTitle>Upcoming Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingReminders.map((reminder) => {
                      const StatusIcon = getStatusIcon(reminder.status);
                      return (
                        <div 
                          key={reminder.id}
                          className="flex items-center justify-between p-4 rounded-lg glass border-glass-border/20"
                        >
                          <div className="flex items-center gap-4">
                            <StatusIcon className={`w-5 h-5 ${getStatusColor(reminder.status)}`} />
                            <div>
                              <h4 className="font-medium">{reminder.title}</h4>
                              <p className="text-sm text-muted-foreground">{reminder.type} • {reminder.time}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className={getStatusColor(reminder.status)}>
                            {reminder.status}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="glass border-glass-border/20">
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Personal Information</h4>
                      <div className="space-y-3">
                        <div className="glass p-4 rounded-lg">
                          <label className="text-sm text-muted-foreground">Name</label>
                          <p className="font-medium">John Doe</p>
                        </div>
                        <div className="glass p-4 rounded-lg">
                          <label className="text-sm text-muted-foreground">Age</label>
                          <p className="font-medium">32 years</p>
                        </div>
                        <div className="glass p-4 rounded-lg">
                          <label className="text-sm text-muted-foreground">Blood Type</label>
                          <p className="font-medium">O+</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Preferences</h4>
                      <div className="space-y-3">
                        <div className="glass p-4 rounded-lg flex justify-between items-center">
                          <span>Email Notifications</span>
                          <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                        <div className="glass p-4 rounded-lg flex justify-between items-center">
                          <span>Language</span>
                          <Button variant="outline" size="sm">English</Button>
                        </div>
                        <div className="glass p-4 rounded-lg flex justify-between items-center">
                          <span>Data Sharing</span>
                          <Button variant="outline" size="sm">Restricted</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;