
import React, { useState } from 'react';
import { Search, ChevronRight, ChevronDown, MessageCircle, Mail, Phone, Book, HelpCircle, FileText, Shield, Settings as SettingsIcon } from 'lucide-react';
import { Header } from '@/components/layout/Header';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const helpSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      articles: [
        'How to create an account',
        'Setting up your profile',
        'Writing your first answer',
        'Following topics and spaces',
      ]
    },
    {
      id: 'account',
      title: 'Account & Settings',
      icon: SettingsIcon,
      articles: [
        'Change your password',
        'Update email preferences',
        'Privacy settings',
        'Delete your account',
      ]
    },
    {
      id: 'questions',
      title: 'Questions & Answers',
      icon: HelpCircle,
      articles: [
        'How to ask a good question',
        'Writing quality answers',
        'Editing your posts',
        'Understanding upvotes and downvotes',
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Privacy',
      icon: Shield,
      articles: [
        'Reporting inappropriate content',
        'Blocking users',
        'Understanding our policies',
        'Data privacy and security',
      ]
    },
    {
      id: 'myblog-plus',
      title: 'MyBlog+',
      icon: FileText,
      articles: [
        'What is MyBlog+?',
        'Subscription benefits',
        'Billing and payments',
        'Cancel subscription',
      ]
    },
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@myblog.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: '+1 (800) 123-4567',
      action: 'Call Now'
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#b92b27] to-[#8a1e00] rounded-2xl p-12 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-lg mb-6 opacity-90">Search our help center or browse categories below</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Help Topics</h2>
            
            <div className="space-y-4">
              {helpSections.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSection === section.id;
                
                return (
                  <div key={section.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#b92b27]/10 rounded-lg flex items-center justify-center">
                          <Icon className="text-[#b92b27]" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                          <p className="text-sm text-gray-500">{section.articles.length} articles</p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="text-gray-400" size={20} />
                      ) : (
                        <ChevronRight className="text-gray-400" size={20} />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <ul className="space-y-3 mt-4">
                          {section.articles.map((article, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="flex items-center gap-2 text-gray-700 hover:text-[#b92b27] transition-colors"
                              >
                                <ChevronRight size={16} className="text-gray-400" />
                                {article}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Support */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
              <div className="space-y-4">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={index}
                      className="w-full flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#b92b27] hover:bg-[#b92b27]/5 transition-colors text-left"
                    >
                      <Icon className="text-[#b92b27] flex-shrink-0 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{option.title}</h4>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#b92b27] transition-colors">
                    How to write a great answer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#b92b27] transition-colors">
                    Understanding MyBlog's policies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#b92b27] transition-colors">
                    Managing your notifications
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700 hover:text-[#b92b27] transition-colors">
                    Getting started with Spaces
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Guidelines */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Community Guidelines</h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn about our community standards and how to be a good member
              </p>
              <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Read Guidelines
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">What is MyBlog?</h4>
              <p className="text-sm text-gray-600">
                MyBlog is a platform where people can ask questions and connect with others who contribute unique insights and quality answers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">How do I earn credits?</h4>
              <p className="text-sm text-gray-600">
                You can earn credits by writing quality answers, getting upvotes, and being an active member of the community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Is MyBlog free to use?</h4>
              <p className="text-sm text-gray-600">
                Yes, MyBlog is free to use. We also offer MyBlog+ with additional features for a subscription fee.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">How do I report content?</h4>
              <p className="text-sm text-gray-600">
                Click the three-dot menu on any post and select "Report". Our moderation team will review it promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
