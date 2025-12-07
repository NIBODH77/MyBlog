import { Header } from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { currentUser } from '@/lib/mock-data';
import { MapPin, Calendar, Users, Eye, PenSquare, Award } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="h-24 w-24 ring-4 ring-background">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback className="bg-green-600 text-white text-2xl">
                  {currentUser.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-2xl font-bold">{currentUser.name}</h1>
                    <p className="text-muted-foreground">{currentUser.bio}</p>
                  </div>
                  <Button variant="outline" size="sm" data-testid="button-edit-profile">
                    <PenSquare className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined December 2023</span>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold">{currentUser.stats.followers}</span>
                    <span className="text-muted-foreground">Followers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{currentUser.stats.following}</span>
                    <span className="text-muted-foreground">Following</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-900">
                  <PenSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{currentUser.stats.answers}</p>
                  <p className="text-sm text-muted-foreground">Answers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg dark:bg-green-900">
                  <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{currentUser.stats.questions}</p>
                  <p className="text-sm text-muted-foreground">Questions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900">
                  <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{currentUser.stats.followers + currentUser.stats.following}</p>
                  <p className="text-sm text-muted-foreground">Connections</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="answers" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="answers" data-testid="tab-answers">Answers</TabsTrigger>
            <TabsTrigger value="questions" data-testid="tab-questions">Questions</TabsTrigger>
            <TabsTrigger value="posts" data-testid="tab-posts">Posts</TabsTrigger>
            <TabsTrigger value="spaces" data-testid="tab-spaces">Spaces</TabsTrigger>
          </TabsList>
          
          <TabsContent value="answers" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border-b last:border-0 pb-4 last:pb-0">
                      <h3 className="font-medium mb-2">
                        What are the best practices for learning programming?
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        The best approach to learning programming is to start with fundamentals, 
                        practice consistently, and build real projects...
                      </p>
                      <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                        <span>1.2K views</span>
                        <span>45 upvotes</span>
                        <span>12 comments</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="questions" className="mt-6">
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No questions yet
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="posts" className="mt-6">
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No posts yet
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="spaces" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Technology</Badge>
                  <Badge variant="secondary">Programming</Badge>
                  <Badge variant="secondary">Startups</Badge>
                  <Badge variant="secondary">AI & Machine Learning</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
