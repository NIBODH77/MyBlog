import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Link, useParams } from 'wouter';
import { ArrowLeft, Plus, Search, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categoryData: Record<string, { name: string; description: string; color: string }> = {
  technology: { name: 'Technology', description: 'Explore the latest in tech, programming, AI, and digital innovation', color: 'bg-blue-500' },
  business: { name: 'Business & Finance', description: 'Topics about entrepreneurship, investing, and career growth', color: 'bg-green-500' },
  lifestyle: { name: 'Lifestyle', description: 'Health, wellness, relationships, and personal development', color: 'bg-pink-500' },
  education: { name: 'Education', description: 'Learning, teaching, and educational resources', color: 'bg-purple-500' },
  entertainment: { name: 'Entertainment', description: 'Movies, music, gaming, and pop culture', color: 'bg-orange-500' },
  food: { name: 'Food & Cooking', description: 'Recipes, cooking tips, and culinary adventures', color: 'bg-red-500' },
  travel: { name: 'Travel & Places', description: 'Destinations, travel tips, and cultural exploration', color: 'bg-teal-500' },
  photography: { name: 'Photography', description: 'Camera techniques, editing, and visual storytelling', color: 'bg-indigo-500' },
};

const topicsInCategory: Record<string, Array<{ id: number; name: string; followers: string; posts: string; trending: boolean }>> = {
  technology: [
    { id: 1, name: 'Artificial Intelligence', followers: '15.2M', posts: '2.3M posts', trending: true },
    { id: 2, name: 'Web Development', followers: '8.7M', posts: '1.8M posts', trending: true },
    { id: 3, name: 'Machine Learning', followers: '12.4M', posts: '980K posts', trending: true },
    { id: 4, name: 'Cybersecurity', followers: '4.2M', posts: '620K posts', trending: false },
    { id: 5, name: 'Cloud Computing', followers: '3.8M', posts: '540K posts', trending: false },
    { id: 6, name: 'Mobile Development', followers: '5.1M', posts: '720K posts', trending: false },
    { id: 7, name: 'Data Science', followers: '7.3M', posts: '890K posts', trending: true },
    { id: 8, name: 'Blockchain', followers: '2.9M', posts: '410K posts', trending: false },
  ],
  business: [
    { id: 1, name: 'Entrepreneurship', followers: '9.8M', posts: '1.5M posts', trending: true },
    { id: 2, name: 'Personal Finance', followers: '5.1M', posts: '890K posts', trending: true },
    { id: 3, name: 'Investing', followers: '6.2M', posts: '1.1M posts', trending: false },
    { id: 4, name: 'Marketing', followers: '4.5M', posts: '720K posts', trending: true },
    { id: 5, name: 'Leadership', followers: '3.2M', posts: '480K posts', trending: false },
  ],
  lifestyle: [
    { id: 1, name: 'Mental Health', followers: '4.8M', posts: '980K posts', trending: true },
    { id: 2, name: 'Fitness', followers: '7.2M', posts: '1.3M posts', trending: true },
    { id: 3, name: 'Relationships', followers: '3.5M', posts: '620K posts', trending: false },
    { id: 4, name: 'Self Improvement', followers: '5.9M', posts: '890K posts', trending: true },
  ],
  education: [
    { id: 1, name: 'Online Learning', followers: '3.2M', posts: '520K posts', trending: true },
    { id: 2, name: 'Study Tips', followers: '2.8M', posts: '410K posts', trending: false },
    { id: 3, name: 'Career Advice', followers: '4.1M', posts: '680K posts', trending: true },
  ],
  entertainment: [
    { id: 1, name: 'Movies', followers: '8.5M', posts: '1.8M posts', trending: true },
    { id: 2, name: 'Music', followers: '7.2M', posts: '1.5M posts', trending: false },
    { id: 3, name: 'Gaming', followers: '9.1M', posts: '2.1M posts', trending: true },
  ],
  food: [
    { id: 1, name: 'Healthy Recipes', followers: '4.1M', posts: '890K posts', trending: true },
    { id: 2, name: 'Baking', followers: '3.5M', posts: '620K posts', trending: false },
    { id: 3, name: 'Meal Prep', followers: '2.8M', posts: '410K posts', trending: true },
  ],
  travel: [
    { id: 1, name: 'Budget Travel', followers: '3.2M', posts: '520K posts', trending: true },
    { id: 2, name: 'Solo Travel', followers: '2.5M', posts: '380K posts', trending: false },
    { id: 3, name: 'Adventure Travel', followers: '2.1M', posts: '320K posts', trending: false },
  ],
  photography: [
    { id: 1, name: 'Portrait Photography', followers: '2.8M', posts: '450K posts', trending: false },
    { id: 2, name: 'Landscape Photography', followers: '2.2M', posts: '380K posts', trending: true },
    { id: 3, name: 'Photo Editing', followers: '3.1M', posts: '520K posts', trending: true },
  ],
};

export default function TopicsCategoryPage() {
  const params = useParams();
  const categoryId = params.category || 'technology';
  const category = categoryData[categoryId] || categoryData.technology;
  const topics = topicsInCategory[categoryId] || topicsInCategory.technology;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [followedTopics, setFollowedTopics] = useState<number[]>([]);

  const toggleFollow = (topicId: number) => {
    setFollowedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const filteredTopics = topics.filter(topic => 
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link href="/topics" className="inline-flex items-center text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground mb-6" data-testid="link-back-to-topics">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Link>

        {/* Category Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-lg p-6 mb-6" data-testid="category-header">
          <h1 className="text-2xl font-bold text-white mb-2" data-testid="text-category-name">{category.name}</h1>
          <p className="text-white/90">{category.description}</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={`Search in ${category.name}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="input-search-category-topics"
          />
        </div>

        {/* Topics List */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200 dark:border-border">
            <h2 className="font-semibold text-gray-900 dark:text-foreground">Topics in {category.name}</h2>
            <p className="text-sm text-gray-500 dark:text-muted-foreground">{filteredTopics.length} topics found</p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-border">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-secondary/50" data-testid={`card-category-topic-${topic.id}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-muted-foreground">{topic.name[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900 dark:text-foreground">{topic.name}</p>
                      {topic.trending && (
                        <span className="flex items-center text-xs text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {topic.followers}
                      </span>
                      <span>{topic.posts}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant={followedTopics.includes(topic.id) ? "secondary" : "outline"}
                  onClick={() => toggleFollow(topic.id)}
                  data-testid={`button-follow-category-topic-${topic.id}`}
                >
                  {followedTopics.includes(topic.id) ? (
                    'Following'
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-1" />
                      Follow
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
