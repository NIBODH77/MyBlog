
import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Building2, Users, Globe, Award, TrendingUp, Heart, Sparkles, Target, Rocket, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CompanyPage() {
  return (
    <AppShell hideRightSidebar>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-2xl p-12 mb-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 mr-3" />
              <h1 className="text-5xl font-extrabold">
                MyBlog Company
              </h1>
            </div>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              Empowering people to share knowledge and better understand the world
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Global Impact</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Innovation Leader</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8 mb-6 border border-blue-100 dark:border-blue-900/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-4">
                About MyBlog
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                MyBlog is a global knowledge-sharing platform where people can ask questions and connect with others who contribute unique insights and quality answers. We believe that the best way to learn is through asking questions and sharing expertise.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                Founded with a mission to democratize access to knowledge, MyBlog has grown into one of the world's most trusted platforms for information exchange, connecting millions of people across diverse topics and interests.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8 mb-6 border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform shadow-sm">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">300M+</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-muted-foreground">Monthly Active Users</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 hover:scale-105 transition-transform shadow-sm">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">50K+</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-muted-foreground">Topics & Spaces</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/40 dark:to-blue-950/40 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform shadow-sm">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">1B+</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-muted-foreground">Questions Answered</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8 mb-6 border border-blue-100 dark:border-blue-900/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                    To share and grow the world's knowledge. We bring people together to ask questions, share insights, and learn from one another in a trusted environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                    To be the most trusted platform where anyone can learn anything, connecting curious minds with quality knowledge from experts worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8 mb-6 border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20 rounded-r-lg hover:from-blue-50 dark:hover:from-blue-950/30 transition-colors">
              <h4 className="font-bold text-lg text-gray-900 dark:text-foreground mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Quality First
              </h4>
              <p className="text-gray-600 dark:text-muted-foreground">
                We prioritize high-quality, helpful content that genuinely helps people learn and grow.
              </p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-gradient-to-r from-indigo-50/50 to-transparent dark:from-indigo-950/20 rounded-r-lg hover:from-indigo-50 dark:hover:from-indigo-950/30 transition-colors">
              <h4 className="font-bold text-lg text-gray-900 dark:text-foreground mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Community Driven
              </h4>
              <p className="text-gray-600 dark:text-muted-foreground">
                Our community of users is at the heart of everything we do, shaping our platform's future.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-4 bg-gradient-to-r from-purple-50/50 to-transparent dark:from-purple-950/20 rounded-r-lg hover:from-purple-50 dark:hover:from-purple-950/30 transition-colors">
              <h4 className="font-bold text-lg text-gray-900 dark:text-foreground mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                Accessibility
              </h4>
              <p className="text-gray-600 dark:text-muted-foreground">
                Knowledge should be accessible to everyone, everywhere, regardless of background or location.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20 rounded-r-lg hover:from-blue-50 dark:hover:from-blue-950/30 transition-colors">
              <h4 className="font-bold text-lg text-gray-900 dark:text-foreground mb-2 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-500" />
                Innovation
              </h4>
              <p className="text-gray-600 dark:text-muted-foreground">
                We constantly innovate to improve how people discover, share, and learn from knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white dark:bg-card rounded-xl shadow-lg p-8 mb-6 border border-blue-100 dark:border-blue-900/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-gray-700 dark:text-muted-foreground mb-4 leading-relaxed">
                MyBlog is built by a diverse team of passionate individuals from around the world who believe in the power of shared knowledge. Our team includes engineers, designers, content moderators, and community managers working together to create the best knowledge-sharing experience.
              </p>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                We're always looking for talented people to join our mission. Check out our <a href="/careers" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">careers page</a> for current opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 rounded-xl shadow-lg p-10 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6 text-center">
            Get in Touch With Us
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <Button variant="outline" className="border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-blue-700 dark:text-blue-300" asChild>
              <a href="/about">Learn More</a>
            </Button>
            <Button variant="outline" className="border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300" asChild>
              <a href="/careers">Join Our Team</a>
            </Button>
            <Button variant="outline" className="border-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/50 text-purple-700 dark:text-purple-300" asChild>
              <a href="/press">Press & Media</a>
            </Button>
            <Button variant="outline" className="border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-blue-700 dark:text-blue-300" asChild>
              <a href="/advertise">Partner With Us</a>
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-muted-foreground font-medium">
            © 2024 MyBlog, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
