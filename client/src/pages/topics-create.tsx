import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Link, useLocation } from 'wouter';
import { ArrowLeft, Plus, X, Image, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const availableCategories = [
  { id: 'technology', name: 'Technology' },
  { id: 'business', name: 'Business & Finance' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'education', name: 'Education' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'food', name: 'Food & Cooking' },
  { id: 'travel', name: 'Travel & Places' },
  { id: 'photography', name: 'Photography' },
  { id: 'science', name: 'Science' },
  { id: 'sports', name: 'Sports' },
  { id: 'arts', name: 'Arts & Culture' },
  { id: 'other', name: 'Other' },
];

const suggestedTags = [
  'Beginner Friendly', 'Advanced', 'Tutorial', 'Discussion', 'News', 
  'Tips & Tricks', 'How-To', 'Opinion', 'Research', 'Case Study'
];

export default function TopicsCreatePage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [topicName, setTopicName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : prev.length < 5 ? [...prev, tag] : prev
    );
  };

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim()) && selectedTags.length < 5) {
      setSelectedTags(prev => [...prev, customTag.trim()]);
      setCustomTag('');
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  const handleSubmit = async () => {
    if (!topicName.trim()) {
      toast({
        title: "Topic name required",
        description: "Please enter a name for your topic.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedCategory) {
      toast({
        title: "Category required",
        description: "Please select a category for your topic.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Topic created!",
      description: `Your topic "${topicName}" has been created successfully.`,
    });
    
    setIsSubmitting(false);
    setLocation('/topics');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link href="/topics" className="inline-flex items-center text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground mb-6" data-testid="link-back-to-topics">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Topics
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-foreground">Create a New Topic</h1>
          <p className="text-gray-500 dark:text-muted-foreground mt-1">Start a new topic for the community to discuss</p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 space-y-6">
          {/* Topic Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
              Topic Name *
            </label>
            <input
              type="text"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              placeholder="Enter topic name"
              maxLength={100}
              className="w-full px-4 py-3 bg-white dark:bg-secondary border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="input-topic-name"
            />
            <p className="text-xs text-gray-500 dark:text-muted-foreground mt-1">{topicName.length}/100 characters</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what this topic is about..."
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 bg-white dark:bg-secondary border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              data-testid="input-topic-description"
            />
            <p className="text-xs text-gray-500 dark:text-muted-foreground mt-1">{description.length}/500 characters</p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
              Category *
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-secondary border border-gray-200 dark:border-border rounded-lg text-gray-900 dark:text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="select-topic-category"
            >
              <option value="">Select a category</option>
              {availableCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-foreground">
                Tags (Optional)
              </label>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 dark:text-muted-foreground mb-3">Select up to 5 tags to help people find your topic</p>
            
            {/* Selected Tags */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedTags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="hover:text-blue-900 dark:hover:text-blue-100" data-testid={`button-remove-tag-${tag}`}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Suggested Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestedTags.filter(tag => !selectedTags.includes(tag)).map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  disabled={selectedTags.length >= 5}
                  className="px-3 py-1 border border-gray-200 dark:border-border rounded-full text-sm text-gray-600 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid={`button-add-tag-${tag}`}
                >
                  + {tag}
                </button>
              ))}
            </div>

            {/* Custom Tag Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={customTag}
                onChange={(e) => setCustomTag(e.target.value)}
                placeholder="Add custom tag..."
                maxLength={30}
                className="flex-1 px-3 py-2 bg-white dark:bg-secondary border border-gray-200 dark:border-border rounded-lg text-sm text-gray-900 dark:text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && addCustomTag()}
                data-testid="input-custom-tag"
              />
              <Button variant="outline" size="sm" onClick={addCustomTag} disabled={selectedTags.length >= 5} data-testid="button-add-custom-tag">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-foreground mb-2">
              Cover Image (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-200 dark:border-border rounded-lg p-8 text-center hover:bg-gray-50 dark:hover:bg-secondary/50 cursor-pointer transition-colors">
              <Image className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 dark:text-muted-foreground">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">Topic Guidelines</h3>
            <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>Choose a clear, descriptive name</li>
              <li>Make sure the topic doesn't already exist</li>
              <li>Select the most relevant category</li>
              <li>Add helpful tags to improve discoverability</li>
            </ul>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-border">
            <Link href="/topics">
              <Button variant="outline" data-testid="button-cancel-create">Cancel</Button>
            </Link>
            <Button onClick={handleSubmit} disabled={isSubmitting} data-testid="button-submit-create">
              {isSubmitting ? 'Creating...' : 'Create Topic'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
