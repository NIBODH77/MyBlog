
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Building2, Users, Globe, Award, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CompanyPage() {
  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-lg p-12 mb-8 text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            MyBlog Company
          </h1>
          <p className="text-xl opacity-90">
            Empowering people to share knowledge and better understand the world
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <Building2 className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
                About MyBlog
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-4">
                MyBlog is a global knowledge-sharing platform where people can ask questions and connect with others who contribute unique insights and quality answers. We believe that the best way to learn is through asking questions and sharing expertise.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground">
                Founded with a mission to democratize access to knowledge, MyBlog has grown into one of the world's most trusted platforms for information exchange, connecting millions of people across diverse topics and interests.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-red-50 dark:bg-red-950/30 rounded-lg">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">300M+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Monthly Active Users</div>
            </div>
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">50K+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Topics & Spaces</div>
            </div>
            <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1B+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Questions Answered</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Award className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-muted-foreground text-sm">
                    To share and grow the world's knowledge. We bring people together to ask questions, share insights, and learn from one another in a trusted environment.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Globe className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 dark:text-muted-foreground text-sm">
                    To be the most trusted platform where anyone can learn anything, connecting curious minds with quality knowledge from experts worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            Our Core Values
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">Quality First</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                We prioritize high-quality, helpful content that genuinely helps people learn and grow.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">Community Driven</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                Our community of users is at the heart of everything we do, shaping our platform's future.
              </p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">Accessibility</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                Knowledge should be accessible to everyone, everywhere, regardless of background or location.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground mb-1">Innovation</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                We constantly innovate to improve how people discover, share, and learn from knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <Users className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-4">
                MyBlog is built by a diverse team of passionate individuals from around the world who believe in the power of shared knowledge. Our team includes engineers, designers, content moderators, and community managers working together to create the best knowledge-sharing experience.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground">
                We're always looking for talented people to join our mission. Check out our <a href="/careers" className="text-red-600 dark:text-red-400 hover:underline font-medium">careers page</a> for current opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-foreground mb-4 text-center">
            Get in Touch
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" asChild>
              <a href="/about">Learn More</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/careers">Join Our Team</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/press">Press & Media</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/advertise">Partner With Us</a>
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-muted-foreground mt-6">
            © 2024 MyBlog, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
