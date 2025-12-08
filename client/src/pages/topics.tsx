import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Link } from 'wouter';
import { Search, Plus, ChevronRight, TrendingUp, Bookmark, Briefcase, Heart, Lightbulb, Globe, Camera, Music, Code, BookOpen, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topicCategories = [
  { id: 'technology', name: 'Technology', icon: Code, count: '2.5M topics', color: 'bg-blue-500' },
  { id: 'business', name: 'Business & Finance', icon: Briefcase, count: '1.8M topics', color: 'bg-green-500' },
  { id: 'lifestyle', name: 'Lifestyle', icon: Heart, count: '3.2M topics', color: 'bg-pink-500' },
  { id: 'education', name: 'Education', icon: BookOpen, count: '1.5M topics', color: 'bg-purple-500' },
  { id: 'entertainment', name: 'Entertainment', icon: Music, count: '2.1M topics', color: 'bg-orange-500' },
  { id: 'food', name: 'Food & Cooking', icon: Utensils, count: '980K topics', color: 'bg-red-500' },
  { id: 'travel', name: 'Travel & Places', icon: Globe, count: '1.2M topics', color: 'bg-teal-500' },
  { id: 'photography', name: 'Photography', icon: Camera, count: '750K topics', color: 'bg-indigo-500' },
];

const trendingTopics = [
  { id: 1, name: 'Artificial Intelligence', followers: '15.2M', isFollowing: false },
  { id: 2, name: 'Web Development', followers: '8.7M', isFollowing: true },
  { id: 3, name: 'Digital Marketing', followers: '6.3M', isFollowing: false },
  { id: 4, name: 'Personal Finance', followers: '5.1M', isFollowing: false },
  { id: 5, name: 'Mental Health', followers: '4.8M', isFollowing: true },
];

const suggestedTopics = [
  { id: 1, name: 'Machine Learning', followers: '12.4M', category: 'Technology' },
  { id: 2, name: 'Startup Advice', followers: '3.2M', category: 'Business' },
  { id: 3, name: 'Content Writing', followers: '2.8M', category: 'Education' },
  { id: 4, name: 'Photography Tips', followers: '1.9M', category: 'Photography' },
  { id: 5, name: 'Healthy Recipes', followers: '4.1M', category: 'Food' },
  { id: 6, name: 'Travel Hacks', followers: '2.5M', category: 'Travel' },
];

export default function TopicsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [followedTopics, setFollowedTopics] = useState<number[]>([2, 5]);

  const toggleFollow = (topicId: number) => {
    setFollowedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-foreground">Discover Topics</h1>
            <p className="text-gray-500 dark:text-muted-foreground mt-1">Find and follow topics that interest you</p>
          </div>
          <Link href="/topics/create">
            <Button data-testid="button-create-topic">
              <Plus className="w-4 h-4 mr-2" />
              Create Topic
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            data-testid="input-search-topics"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Topic Categories */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-4">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topicCategories.map((category) => (
                  <Link key={category.id} href={`/topics/category/${category.id}`}>
                    <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-secondary/50 transition-colors cursor-pointer" data-testid={`card-category-${category.id}`}>
                      <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-3`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-foreground text-center">{category.name}</span>
                      <span className="text-xs text-gray-500 dark:text-muted-foreground mt-1">{category.count}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Suggested Topics */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground">Suggested for You</h2>
                <Link href="/topics/suggested" className="text-blue-600 hover:text-blue-700 text-sm font-medium" data-testid="link-see-all-suggested">
                  See all
                </Link>
              </div>
              <div className="space-y-3">
                {suggestedTopics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary/50" data-testid={`card-suggested-topic-${topic.id}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 dark:bg-secondary rounded-full flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-gray-500 dark:text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-foreground text-sm">{topic.name}</p>
                        <p className="text-xs text-gray-500 dark:text-muted-foreground">{topic.followers} followers</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleFollow(topic.id)}
                      data-testid={`button-follow-suggested-${topic.id}`}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6" data-testid="card-trending-topics">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-red-500" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground">Trending Now</h2>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.id} className="flex items-center justify-between" data-testid={`card-trending-topic-${topic.id}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gray-300 dark:text-muted-foreground w-6">{index + 1}</span>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-foreground text-sm">{topic.name}</p>
                        <p className="text-xs text-gray-500 dark:text-muted-foreground">{topic.followers}</p>
                      </div>
                    </div>
                    <Button 
                      variant={followedTopics.includes(topic.id) ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => toggleFollow(topic.id)}
                      data-testid={`button-follow-trending-${topic.id}`}
                    >
                      {followedTopics.includes(topic.id) ? 'Following' : 'Follow'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Topics */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6" data-testid="card-your-topics">
              <div className="flex items-center gap-2 mb-4">
                <Bookmark className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground">Your Topics</h2>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-500 dark:text-muted-foreground">
                  {followedTopics.length > 0 
                    ? `You're following ${followedTopics.length} topics`
                    : "You haven't followed any topics yet."
                  }
                </p>
                <Link href="/topics/following" className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium" data-testid="link-manage-topics">
                  Manage your topics
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
