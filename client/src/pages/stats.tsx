import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Eye, MessageSquare, Users, Calendar } from 'lucide-react';

export default function StatsPage() {
  const stats = [
    {
      title: 'Total Views',
      value: '12,543',
      change: '+12.5%',
      icon: Eye,
      trend: 'up'
    },
    {
      title: 'Total Answers',
      value: '1,284',
      change: '+8.2%',
      icon: MessageSquare,
      trend: 'up'
    },
    {
      title: 'Followers',
      value: '3,456',
      change: '+15.3%',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Days Active',
      value: '247',
      change: '+1',
      icon: Calendar,
      trend: 'up'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Stats</h1>
          <p className="text-muted-foreground">Track your activity and engagement on MyBlog</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-500">{stat.change}</span>
                    <span>from last month</span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
              <CardDescription>Your recent activity trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Answers this week</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Comments this week</span>
                  <span className="font-medium">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Upvotes received</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Questions asked</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Your most viewed answers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'How to learn programming effectively?', views: 1234 },
                  { title: 'Best practices for React development', views: 987 },
                  { title: 'Understanding TypeScript generics', views: 765 }
                ].map((item, index) => (
                  <div key={index} className="flex items-start justify-between gap-4">
                    <p className="text-sm flex-1 line-clamp-1">{item.title}</p>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {item.views} views
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
