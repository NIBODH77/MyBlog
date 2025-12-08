import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Link } from 'wouter';
import { ArrowLeft, Search, X, Bell, BellOff, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const followedTopicsData = [
  { id: 1, name: 'Artificial Intelligence', followers: '15.2M', posts: '2.3M posts', category: 'Technology', notifications: true },
  { id: 2, name: 'Web Development', followers: '8.7M', posts: '1.8M posts', category: 'Technology', notifications: true },
  { id: 3, name: 'Mental Health', followers: '4.8M', posts: '980K posts', category: 'Lifestyle', notifications: false },
  { id: 4, name: 'Personal Finance', followers: '5.1M', posts: '890K posts', category: 'Business', notifications: true },
  { id: 5, name: 'Photography Tips', followers: '1.9M', posts: '320K posts', category: 'Photography', notifications: false },
  { id: 6, name: 'Healthy Recipes', followers: '4.1M', posts: '890K posts', category: 'Food', notifications: true },
];

export default function TopicsFollowingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [topics, setTopics] = useState(followedTopicsData);

  const toggleNotification = (topicId: number) => {
    setTopics(prev => prev.map(topic => 
      topic.id === topicId ? { ...topic, notifications: !topic.notifications } : topic
    ));
  };

  const unfollowTopic = (topicId: number) => {
    setTopics(prev => prev.filter(topic => topic.id !== topicId));
  };

  const filteredTopics = topics.filter(topic => 
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = [];
    }
    acc[topic.category].push(topic);
    return acc;
  }, {} as Record<string, typeof followedTopicsData>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link href="/topics" className="inline-flex items-center text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground mb-6" data-testid="link-back-to-topics">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Link>

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-foreground">Your Topics</h1>
          <p className="text-gray-500 dark:text-muted-foreground mt-1">Manage the topics you're following</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-4 text-center" data-testid="stat-following">
            <p className="text-2xl font-bold text-gray-900 dark:text-foreground">{topics.length}</p>
            <p className="text-sm text-gray-500 dark:text-muted-foreground">Following</p>
          </div>
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-4 text-center" data-testid="stat-notifications">
            <p className="text-2xl font-bold text-gray-900 dark:text-foreground">{topics.filter(t => t.notifications).length}</p>
            <p className="text-sm text-gray-500 dark:text-muted-foreground">Notifications On</p>
          </div>
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-4 text-center" data-testid="stat-categories">
            <p className="text-2xl font-bold text-gray-900 dark:text-foreground">{Object.keys(groupedTopics).length}</p>
            <p className="text-sm text-gray-500 dark:text-muted-foreground">Categories</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search your topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="input-search-following-topics"
          />
        </div>

        {/* Topics by Category */}
        {Object.entries(groupedTopics).map(([category, categoryTopics]) => (
          <div key={category} className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-muted-foreground uppercase tracking-wide mb-3">{category}</h2>
            <div className="bg-white dark:bg-card rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-border">
              {categoryTopics.map((topic) => (
                <div key={topic.id} className="p-4 flex items-center justify-between" data-testid={`card-following-topic-${topic.id}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{topic.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-foreground">{topic.name}</p>
                      <p className="text-sm text-gray-500 dark:text-muted-foreground">{topic.followers} followers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleNotification(topic.id)}
                      title={topic.notifications ? "Turn off notifications" : "Turn on notifications"}
                      data-testid={`button-toggle-notification-${topic.id}`}
                    >
                      {topic.notifications ? (
                        <Bell className="w-5 h-5 text-blue-500" />
                      ) : (
                        <BellOff className="w-5 h-5 text-gray-400" />
                      )}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => unfollowTopic(topic.id)}
                      title="Unfollow topic"
                      data-testid={`button-unfollow-${topic.id}`}
                    >
                      <X className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredTopics.length === 0 && (
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500 dark:text-muted-foreground mb-4">
              {searchQuery ? 'No topics match your search' : "You're not following any topics yet"}
            </p>
            <Link href="/topics">
              <Button data-testid="button-discover-topics">Discover Topics</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
