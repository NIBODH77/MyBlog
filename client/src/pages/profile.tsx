
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Megaphone, 
  DollarSign, 
  BarChart3, 
  Bookmark, 
  FileText, 
  Plus, 
  Moon, 
  Settings, 
  Globe, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { icon: MessageCircle, label: 'Messages', divider: false },
    { icon: Megaphone, label: 'Create Ad', divider: false },
    { icon: DollarSign, label: 'Monetization', divider: false },
    { icon: BarChart3, label: 'Your content & stats', divider: false },
    { icon: Bookmark, label: 'Bookmarks', divider: false },
    { icon: FileText, label: 'Drafts', divider: false },
    { icon: Plus, label: 'Try Quora+', divider: true },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: 'Settings', divider: false },
    { icon: Globe, label: 'Languages', divider: false },
    { icon: HelpCircle, label: 'Help', divider: false },
    { icon: LogOut, label: 'Logout', divider: false },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header with Profile Icon Only */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-end z-40">
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold hover:bg-green-700 transition-colors"
          >
            L
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-slideDown z-50">
              {/* User Profile Section */}
              <div className="px-4 py-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
                    L
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Lolu</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <button className="w-full px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left">
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 text-sm">{item.label}</span>
                    </button>
                    {item.divider && <div className="border-t border-gray-200 my-2" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <div className="px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 text-sm">Dark mode</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDarkMode(!isDarkMode);
                  }}
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                      isDarkMode ? 'transform translate-x-5' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Bottom Menu Items */}
              <div className="py-2 border-t border-gray-200">
                {bottomMenuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2.5 flex items-center space-x-3 hover:bg-gray-50 transition-colors text-left"
                  >
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Footer Links */}
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                <div className="text-xs text-gray-500 space-x-1 flex flex-wrap">
                  <a href="#" className="hover:underline">About Quora</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Terms</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Privacy</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Acceptable Use</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Advertise</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Your Ad Choices</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Grievance Officer</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Careers</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Press</a>
                  <span>·</span>
                  <a href="#" className="hover:underline">Company</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Demo Content */}
      <div className="max-w-2xl mx-auto mt-24 px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Profile Dropdown Demo</h2>
          <p className="text-gray-600">
            Click on the profile icon (green circle with "L") in the top right corner to open the dropdown menu.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProfileDropdown;
