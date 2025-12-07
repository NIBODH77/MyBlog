
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Users, Globe, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Global Community',
      description: 'Connect with millions of users worldwide sharing knowledge and experiences.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Diverse Topics',
      description: 'Explore thousands of topics from technology to arts, science to lifestyle.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe Platform',
      description: 'We prioritize user safety with robust moderation and privacy controls.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered',
      description: 'Get intelligent recommendations and insights powered by advanced AI.'
    }
  ];

  return (
    <AppShell hideRightSidebar>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            About MyBlog
          </h1>
          <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6">
            A place to share knowledge and better understand the world
          </p>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-muted-foreground mb-4">
              MyBlog is a platform where people can ask questions and connect with others who contribute unique insights and quality answers. This empowers people to learn from each other and to better understand the world.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-muted-foreground mb-4">
              We believe that the best way to learn is by asking questions and sharing knowledge with others. Our mission is to create a platform where everyone can share their expertise, ask questions, and discover new perspectives.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-foreground mt-8 mb-4">
              Why MyBlog?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-card rounded-lg shadow-sm p-6">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-sm p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6 opacity-90">
            Start asking questions, sharing knowledge, and connecting with people worldwide.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </AppShell>
  );
}
