import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import {
  Bell,
  MessageSquare,
  Users,
  TrendingUp,
  Award,
  DollarSign,
  Zap,
  User,
} from "lucide-react";

type Notification = {
  id: string;
  category: string;
  icon: any;
  title: string;
  message: string;
  time: string;
  read: boolean;
};

export default function MyBlogNotificationsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Notifications" },
    { id: "stories", label: "Stories" },
    { id: "questions", label: "Questions" },
    { id: "spaces", label: "Spaces" },
    { id: "people", label: "People updates" },
    { id: "comments", label: "Comments and mentions" },
    { id: "upvotes", label: "Upvotes" },
    { id: "content", label: "Your content" },
    { id: "profile", label: "Your profile" },
    { id: "announcements", label: "Announcements" },
    { id: "earnings", label: "Earnings" },
    { id: "subscriptions", label: "Subscriptions" },
  ];

  const notifications: Notification[] = [
    // Stories notifications
    {
      id: "story1",
      category: "stories",
      icon: TrendingUp,
      title: "New Story Published",
      message: 'John Doe published a new story: "The Future of AI in 2024"',
      time: "2 hours ago",
      read: false,
    },
    {
      id: "story2",
      category: "stories",
      icon: TrendingUp,
      title: "Trending Story",
      message:
        'A story you might like is trending: "10 Tips for Better Productivity"',
      time: "5 hours ago",
      read: false,
    },

    // Questions notifications
    {
      id: "question1",
      category: "questions",
      icon: MessageSquare,
      title: "New Question",
      message: 'Sarah asked: "What is the best way to learn React?"',
      time: "1 hour ago",
      read: false,
    },
    {
      id: "question2",
      category: "questions",
      icon: MessageSquare,
      title: "Question You Might Answer",
      message: 'Mike asked: "How do I optimize my website performance?"',
      time: "3 hours ago",
      read: true,
    },

    // Spaces notifications
    {
      id: "space1",
      category: "spaces",
      icon: Users,
      title: "New Space Created",
      message: "Tech Enthusiasts space was just created. Join now!",
      time: "4 hours ago",
      read: false,
    },
    {
      id: "space2",
      category: "spaces",
      icon: Users,
      title: "Space Activity",
      message: "Web Development space has 15 new posts",
      time: "6 hours ago",
      read: true,
    },

    // People updates notifications
    {
      id: "people1",
      category: "people",
      icon: User,
      title: "New Follower",
      message: "Alex started following you",
      time: "30 minutes ago",
      read: false,
    },
    {
      id: "people2",
      category: "people",
      icon: User,
      title: "Friend Activity",
      message: "Emma updated their profile",
      time: "2 hours ago",
      read: true,
    },

    // Comments and mentions notifications
    {
      id: "comment1",
      category: "comments",
      icon: MessageSquare,
      title: "New Comment",
      message: 'David commented on your post: "Great insights!"',
      time: "45 minutes ago",
      read: false,
    },
    {
      id: "comment2",
      category: "comments",
      icon: MessageSquare,
      title: "You were mentioned",
      message: "Lisa mentioned you in a comment",
      time: "3 hours ago",
      read: false,
    },

    // Upvotes notifications
    {
      id: "upvote1",
      category: "upvotes",
      icon: Award,
      title: "Your answer was upvoted",
      message: '5 people upvoted your answer to "What is TypeScript?"',
      time: "1 hour ago",
      read: false,
    },
    {
      id: "upvote2",
      category: "upvotes",
      icon: Award,
      title: "Popular Answer",
      message: "Your answer reached 100 upvotes!",
      time: "4 hours ago",
      read: true,
    },

    // Your content notifications
    {
      id: "content1",
      category: "content",
      icon: TrendingUp,
      title: "Content Performance",
      message: 'Your post "React Best Practices" got 50 new views',
      time: "2 hours ago",
      read: false,
    },
    {
      id: "content2",
      category: "content",
      icon: TrendingUp,
      title: "Content Milestone",
      message: "Your story reached 1,000 reads!",
      time: "5 hours ago",
      read: true,
    },

    // Your profile notifications
    {
      id: "profile1",
      category: "profile",
      icon: User,
      title: "Profile View",
      message: "10 people viewed your profile today",
      time: "3 hours ago",
      read: false,
    },
    {
      id: "profile2",
      category: "profile",
      icon: User,
      title: "Profile Completion",
      message: "Complete your profile to get more visibility",
      time: "1 day ago",
      read: true,
    },

    // Announcements notifications
    {
      id: "announcement1",
      category: "announcements",
      icon: Bell,
      title: "New Feature",
      message: "Check out our new dark mode feature!",
      time: "6 hours ago",
      read: false,
    },
    {
      id: "announcement2",
      category: "announcements",
      icon: Bell,
      title: "System Update",
      message: "MyBlog will undergo maintenance tonight at 2 AM",
      time: "8 hours ago",
      read: true,
    },

    // Earnings notifications
    {
      id: "earning1",
      category: "earnings",
      icon: DollarSign,
      title: "Payment Received",
      message: "You earned $25 from your content this month",
      time: "1 day ago",
      read: false,
    },
    {
      id: "earning2",
      category: "earnings",
      icon: DollarSign,
      title: "Monetization Update",
      message: "Your content is now eligible for monetization",
      time: "2 days ago",
      read: true,
    },

    // Subscriptions notifications
    {
      id: "subscription1",
      category: "subscriptions",
      icon: Zap,
      title: "New Subscriber",
      message: "Rachel subscribed to your content",
      time: "4 hours ago",
      read: false,
    },
    {
      id: "subscription2",
      category: "subscriptions",
      icon: Zap,
      title: "Subscription Milestone",
      message: "You reached 100 subscribers!",
      time: "1 day ago",
      read: true,
    },
  ];

  const filteredNotifications =
    selectedFilter === "all"
      ? notifications
      : notifications.filter((n) => n.category === selectedFilter);

  return (
    <AppShell hideRightSidebar>
      {/* Notifications Header */}
      {/* <div className="bg-white dark:bg-card rounded-lg shadow-sm mb-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-border">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground">Notifications</h2>
          <button className="text-sm text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground" data-testid="button-settings">Settings</button>
        </div>
      </div> */}

      <div className="flex gap-4">
        {/* Left Sidebar - Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-22 bg-white dark:bg-card rounded-lg shadow-sm p-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-foreground px-3 py-2">
              Filters
            </h3>
            <div className="space-y-1">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  data-testid={`button-filter-${filter.id}`}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-red-50 dark:bg-primary/10 text-gray-900 dark:text-foreground"
                      : "text-gray-600 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-secondary/50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="bg-white dark:bg-card rounded-lg shadow-sm">
            {filteredNotifications.length > 0 ? (
              <div className="divide-y divide-gray-200 dark:divide-border">
                {filteredNotifications.map((notification) => {
                  const IconComponent = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 dark:hover:bg-secondary/50 transition-colors cursor-pointer ${
                        !notification.read
                          ? "bg-blue-50/30 dark:bg-blue-950/20"
                          : ""
                      }`}
                    >
                      <div className="flex gap-3">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            !notification.read
                              ? "bg-blue-100 dark:bg-blue-900"
                              : "bg-gray-100 dark:bg-secondary"
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 ${
                              !notification.read
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-gray-600 dark:text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h4
                              className={`text-sm font-medium ${
                                !notification.read
                                  ? "text-gray-900 dark:text-foreground"
                                  : "text-gray-700 dark:text-muted-foreground"
                              }`}
                            >
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-muted-foreground mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 px-6">
                <svg
                  className="w-32 h-32 text-gray-300 dark:text-muted-foreground mb-6"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle
                    cx="50"
                    cy="35"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 43 L50 55"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M42 50 C42 50 42 60 50 60 C58 60 58 50 58 50"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M35 65 L35 75 C35 78 37 80 40 80 L60 80 C63 80 65 78 65 75 L65 65"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M50 25 L50 20 M35 30 L31 26 M65 30 L69 26"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-foreground mb-2">
                  No New Notifications
                </h3>
                <p className="text-sm text-gray-500 dark:text-muted-foreground text-center">
                  Notifications you received in the last 30 days will show up
                  here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
