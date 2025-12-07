import { useState } from 'react';
import { Smile, Frown, Meh } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';

export default function MyBlogFollowingPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [spaces] = useState([
    {
      id: 1,
      name: "Instagram Marketing Info",
      followers: "32.3K followers",
      description: "Effective Instagram marketing tips & tricks updates to utilize it for business!",
      icon: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Sonali's Space moz.masti",
      followers: "21.3K followers",
      description: "Moz masti",
      icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Investments and Trading",
      followers: "46K followers",
      description: "A space pertaining to Investing at a fruitful place.",
      icon: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Business & Marketing",
      followers: "328.7K followers",
      description: "1)Business ideas 2)Small Business Start-ups 3) Invest and Earn 4) Buy and sell",
      icon: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Stock Market & Finance - Expertise",
      followers: "90.2K followers",
      description: "1)Updates on Stock Market & Finance 2)Useful Stocks/Financial information",
      icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      name: "Physics problems & soln.",
      followers: "8.7K followers",
      description: "Here you can learn, practice and solve physics problems theory and Numerical .",
      icon: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop"
    }
  ]);

  return (
    <AppShell hideRightSidebar>
      <div className="flex gap-4">
        {/* Left Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white dark:bg-card rounded shadow-sm">
            <button className="w-full px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-secondary/50 flex items-center gap-2 border-b dark:border-border text-sm">
              <span className="text-xl font-light">+</span>
              <span>Create Space</span>
            </button>
            <div className="p-2 text-xs text-gray-500 dark:text-muted-foreground space-y-1">
              <a href="#" className="block py-1 hover:underline">About MyBlog</a>
              <a href="#" className="block py-1 hover:underline">Terms</a>
              <a href="#" className="block py-1 hover:underline">Privacy</a>
              <a href="#" className="block py-1 hover:underline">Acceptable Use</a>
              <a href="#" className="block py-1 hover:underline">Advertise on Your Ad Choices</a>
              <a href="#" className="block py-1 hover:underline">Grievance Officer</a>
              <a href="#" className="block py-1 hover:underline">Careers</a>
              <a href="#" className="block py-1 hover:underline">Press</a>
              <a href="#" className="block py-1 hover:underline">Your Ad Choices</a>
              <a href="#" className="block py-1 hover:underline">© MyBlog, Inc. 2024</a>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="flex-1 max-w-2xl">
          {/* Feedback Banner */}
          {!showThankYou ? (
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-800 rounded-lg p-4 mb-4">
              <div className="mb-3">
                <h3 className="text-blue-700 dark:text-blue-300 font-medium text-sm mb-1">
                  How satisfied are you with your home feed experience today?
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-xs">This helps us improve our product.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-blue-600 dark:text-blue-400 mr-2">Not satisfied</span>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    data-testid={`button-rating-${rating}`}
                    onClick={() => {
                      setSelectedRating(rating);
                      setTimeout(() => {
                        setShowThankYou(true);
                      }, 500);
                    }}
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer hover:scale-110 ${
                      selectedRating === rating
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-blue-400 hover:border-blue-500 bg-white dark:bg-background hover:shadow-md'
                    }`}
                  >
                    {rating === 1 || rating === 2 ? (
                      <Frown className={`w-5 h-5 ${selectedRating === rating ? 'text-white' : 'text-blue-500'}`} />
                    ) : rating === 3 ? (
                      <Meh className={`w-5 h-5 ${selectedRating === rating ? 'text-white' : 'text-blue-500'}`} />
                    ) : (
                      <Smile className={`w-5 h-5 ${selectedRating === rating ? 'text-white' : 'text-blue-500'}`} />
                    )}
                  </button>
                ))}
                <span className="text-xs text-blue-600 dark:text-blue-400 ml-2">Very satisfied</span>
              </div>
            </div>
          ) : (
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 dark:border-green-800 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-green-700 dark:text-green-300 font-medium text-sm">Thank you for your feedback!</h3>
                  <p className="text-green-600 dark:text-green-400 text-xs">Your response helps us improve your experience.</p>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-12 text-center mb-6">
            <div className="flex justify-center mb-6">
              <svg className="w-24 h-24 text-gray-300 dark:text-muted-foreground" viewBox="0 0 100 100" fill="none">
                <rect x="30" y="35" width="40" height="35" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M35 45 L45 52 L35 59" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="60" cy="52" r="2" fill="currentColor"/>
                <line x1="35" y1="65" x2="65" y2="65" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-foreground mb-2">
              You've reached the end of your feed
            </h2>
            <p className="text-gray-500 dark:text-muted-foreground text-sm">
              Follow more Spaces to discover new stories in your feed.
            </p>
          </div>

          {/* Discover Spaces */}
          <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-6">Discover Spaces</h3>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-muted-foreground mb-4">Spaces you might like</h4>

              <div className="space-y-4">
                {spaces.map(space => (
                  <div key={space.id} className="flex gap-3 pb-4 border-b border-gray-100 dark:border-border last:border-b-0" data-testid={`card-space-${space.id}`}>
                    <img
                      src={space.icon}
                      alt={space.name}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-gray-900 dark:text-foreground text-sm mb-0.5">
                        {space.name}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-muted-foreground mb-1">{space.followers}</p>
                      <p className="text-xs text-gray-600 dark:text-muted-foreground line-clamp-2">
                        {space.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Empty */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          {/* Space for ads or other content */}
        </div>
      </div>
    </AppShell>
  );
}
