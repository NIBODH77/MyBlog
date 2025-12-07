import { useState } from 'react';
import { ChevronDown, Plus, Mail } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';

export default function MyBlogSpacesPage() {
  const [spaces] = useState([
    {
      id: 1,
      name: "Sonali's Space moz.masti",
      description: "Moz masti",
      coverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Beutiful Indian Aunty",
      description: "",
      coverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "World History",
      description: "My answers on World History here",
      coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Business & Marketing",
      description: "1)Business ideas 2)Small Business Start-ups 3) Invest and Earn 4) Buy and sell",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Indian Stock Market",
      description: "Share your shares here",
      coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      name: "MISSION NEET",
      description: "This space is made for NEET Aspirants. Share your experience | Ask your Doubts",
      coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
    {
      id: 7,
      name: "The Digital Marketing",
      description: "Share and Discuss every thing about digital marketing like SEO , SM...",
      coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
      id: 8,
      name: "Physics problems & soln.",
      description: "Here you can learn, practice and solve physics problems theory and...",
      coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      avatar: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=100&h=100&fit=crop"
    }
  ]);

  return (
    <AppShell hideRightSidebar>
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Welcome Banner */}
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-2">Welcome to Spaces!</h2>
              <p className="text-gray-600 dark:text-muted-foreground text-sm mb-4">Follow Spaces to explore your interests on MyBlog.</p>
              <div className="flex gap-3 flex-wrap">
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 flex items-center gap-2" data-testid="button-create-space">
                  <Plus size={16} />
                  Create a Space
                </button>
                <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 flex items-center gap-2" data-testid="button-discover-spaces">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" fill="none" strokeWidth="1.5"/>
                    <circle cx="8" cy="8" r="2" fill="currentColor"/>
                  </svg>
                  Discover Spaces
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 hidden sm:block">
              <svg width="180" height="120" viewBox="0 0 180 120" fill="none">
                <path d="M40 60 L60 40 L70 50 L80 30" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="70" r="15" fill="#EF4444"/>
                <rect x="90" y="20" width="30" height="30" fill="#10B981" transform="rotate(45 105 35)"/>
                <path d="M130 50 L145 35 L160 50 L145 65 Z" fill="#8B5CF6"/>
                <circle cx="40" cy="90" r="8" fill="#F59E0B"/>
                <circle cx="140" cy="85" r="10" fill="#EC4899"/>
                <rect x="70" y="75" width="15" height="15" fill="#6366F1" rx="3"/>
              </svg>
            </div>
          </div>

          {/* Discover Spaces Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">Discover Spaces</h3>
            <h4 className="text-sm font-medium text-gray-700 dark:text-muted-foreground mb-4">Spaces you might like</h4>

            {/* Spaces Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
              {spaces.map(space => (
                <div key={space.id} className="bg-white dark:bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-testid={`card-space-${space.id}`}>
                  <div className="relative h-24">
                    <img src={space.coverImage} alt={space.name} className="w-full h-full object-cover"/>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                      <img src={space.avatar} alt={space.name} className="w-10 h-10 rounded-full border-2 border-white dark:border-card"/>
                    </div>
                  </div>
                  <div className="pt-7 px-3 pb-4 text-center">
                    <h5 className="font-semibold text-sm text-gray-900 dark:text-foreground mb-1 line-clamp-1">{space.name}</h5>
                    <p className="text-xs text-gray-600 dark:text-muted-foreground line-clamp-2 min-h-[32px]">{space.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View More */}
            <div className="text-center">
              <button className="text-gray-600 dark:text-muted-foreground text-sm font-medium hover:text-gray-900 dark:hover:text-foreground flex items-center justify-center gap-1 mx-auto" data-testid="button-view-more">
                View more
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20 bg-white dark:bg-card rounded-lg shadow-sm p-6 border border-gray-200 dark:border-border">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-foreground mb-4">Pending Invites</h3>

            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 bg-gray-100 dark:bg-secondary rounded-full flex items-center justify-center mb-3">
                <Mail size={24} className="text-gray-400 dark:text-muted-foreground" />
              </div>
              <p className="text-sm text-gray-500 dark:text-muted-foreground">No invites</p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
