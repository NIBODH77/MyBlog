import { useState } from 'react';
import { Plus, MoreHorizontal, Share2, Bookmark } from 'lucide-react';
import { Header } from '@/components/layout/Header';

export default function QuoraBookmarks() {
  const [bookmarks] = useState([
    {
      id: 1,
      question: "What are some mind-blowing facts about India?",
      author: "Rajesh Kumar",
      authorTitle: "Software Engineer at Google",
      answer: "India is home to the world's largest postal network with over 150,000 post offices. One interesting fact is that India has a floating post office on Dal Lake in Srinagar, which is the only one of its kind in the world...",
      upvotes: 2400,
      date: "2d ago"
    },
    {
      id: 2,
      question: "What is the best way to learn programming?",
      author: "Sarah Johnson",
      authorTitle: "Tech Lead at Microsoft",
      answer: "The best way to learn programming is through consistent practice and building real projects. Start with the fundamentals, pick one language, and stick with it until you're comfortable. Then build small projects that interest you...",
      upvotes: 1800,
      date: "5d ago"
    },
    {
      id: 3,
      question: "How can I improve my productivity?",
      author: "Michael Chen",
      authorTitle: "Entrepreneur & Productivity Coach",
      answer: "Productivity isn't about doing more things, it's about doing the right things. Start by identifying your most important tasks each day. Use the Pomodoro Technique: work for 25 minutes, then take a 5-minute break...",
      upvotes: 3200,
      date: "1w ago"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 sticky top-20 h-fit">
            {/* Create Space Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <button className="w-full flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                <Plus className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Create Space</span>
              </button>
            </div>

            {/* Footer Links Card */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-xs text-gray-500 leading-relaxed">
                <a href="#" className="hover:underline">About Quora</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Terms</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Privacy</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Acceptable Use</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Advertise</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Your Ad Choices</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Grievance Officer</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Careers</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Press</a>
                <span className="mx-1">·</span>
                <a href="#" className="hover:underline">Company</a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Bookmarks Header */}
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-800">Bookmarks</h1>
            </div>

            {/* Bookmarks List */}
            <div className="space-y-4">
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  {/* Question */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:underline cursor-pointer">
                    {bookmark.question}
                  </h2>

                  {/* Author Info */}
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-2">
                      {bookmark.author[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{bookmark.author}</div>
                      <div className="text-xs text-gray-500">{bookmark.authorTitle}</div>
                    </div>
                  </div>

                  {/* Answer Preview */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {bookmark.answer}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm">
                        <span className="text-xs">↑</span>
                        <span>{bookmark.upvotes}</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm">
                        <Share2 className="w-4 h-4 inline" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">
                        <Bookmark className="w-4 h-4 inline fill-current" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-500">{bookmark.date}</span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
