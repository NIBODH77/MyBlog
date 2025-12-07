import React from 'react';
import { Building2, Users, Globe, Award, TrendingUp, Heart, Sparkles, Target, Rocket, Lightbulb, Shield } from 'lucide-react';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl shadow-2xl p-12 mb-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-800 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-14 h-14 mr-3 animate-pulse" />
              <h1 className="text-6xl font-extrabold tracking-tight">
                MyBlog Company
              </h1>
            </div>
            <p className="text-xl opacity-95 max-w-2xl mx-auto font-light">
              Empowering people to share knowledge and better understand the world
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Global Impact</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Innovation Leader</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-orange-200 hover:shadow-2xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-900 mb-4">
                About MyBlog
              </h2>
              <p className="text-orange-950/80 mb-4 leading-relaxed">
                MyBlog is a global knowledge-sharing platform where people can ask questions and connect with others who contribute unique insights and quality answers. We believe that the best way to learn is through asking questions and sharing expertise.
              </p>
              <p className="text-orange-950/80 leading-relaxed">
                Founded with a mission to democratize access to knowledge, MyBlog has grown into one of the world's most trusted platforms for information exchange, connecting millions of people across diverse topics and interests.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-orange-200 hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-orange-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-orange-300 hover:scale-105 hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl font-extrabold text-orange-600 mb-3">300M+</div>
              <div className="text-sm font-semibold text-orange-900">Monthly Active Users</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-orange-300 hover:scale-105 hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl font-extrabold text-orange-600 mb-3">50K+</div>
              <div className="text-sm font-semibold text-orange-900">Topics & Spaces</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl border-2 border-orange-300 hover:scale-105 hover:shadow-lg transition-all cursor-pointer">
              <div className="text-5xl font-extrabold text-orange-600 mb-3">1B+</div>
              <div className="text-sm font-semibold text-orange-900">Questions Answered</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-orange-200 hover:shadow-2xl transition-shadow">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-7 rounded-2xl border-2 border-orange-300 hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-orange-950/80 leading-relaxed">
                    To share and grow the world's knowledge. We bring people together to ask questions, share insights, and learn from one another in a trusted environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-7 rounded-2xl border-2 border-orange-300 hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-3">
                    Our Vision
                  </h3>
                  <p className="text-orange-950/80 leading-relaxed">
                    To be the most trusted platform where anyone can learn anything, connecting curious minds with quality knowledge from experts worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-orange-200 hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-orange-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-orange-600 pl-6 py-4 bg-gradient-to-r from-orange-100 to-transparent rounded-r-xl hover:from-orange-200 transition-all hover:shadow-md">
              <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-600" />
                Quality First
              </h4>
              <p className="text-orange-950/70">
                We prioritize high-quality, helpful content that genuinely helps people learn and grow.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6 py-4 bg-gradient-to-r from-orange-100 to-transparent rounded-r-xl hover:from-orange-200 transition-all hover:shadow-md">
              <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                Community Driven
              </h4>
              <p className="text-orange-950/70">
                Our community of users is at the heart of everything we do, shaping our platform's future.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6 py-4 bg-gradient-to-r from-orange-100 to-transparent rounded-r-xl hover:from-orange-200 transition-all hover:shadow-md">
              <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-600" />
                Accessibility
              </h4>
              <p className="text-orange-950/70">
                Knowledge should be accessible to everyone, everywhere, regardless of background or location.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6 py-4 bg-gradient-to-r from-orange-100 to-transparent rounded-r-xl hover:from-orange-200 transition-all hover:shadow-md">
              <h4 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-orange-600" />
                Innovation
              </h4>
              <p className="text-orange-950/70">
                We constantly innovate to improve how people discover, share, and learn from knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-orange-200 hover:shadow-2xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-900 mb-4">
                Our Team
              </h2>
              <p className="text-orange-950/80 mb-4 leading-relaxed">
                MyBlog is built by a diverse team of passionate individuals from around the world who believe in the power of shared knowledge. Our team includes engineers, designers, content moderators, and community managers working together to create the best knowledge-sharing experience.
              </p>
              <p className="text-orange-950/80 leading-relaxed">
                We're always looking for talented people to join our mission. Check out our <a href="/careers" className="text-orange-600 hover:text-orange-700 hover:underline font-semibold transition-colors">careers page</a> for current opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl shadow-2xl p-10 border-2 border-orange-400 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Get in Touch With Us
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <a href="/about" className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Learn More
            </a>
            <a href="/careers" className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Join Our Team
            </a>
            <a href="/press" className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Press & Media
            </a>
            <a href="/advertise" className="px-6 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Partner With Us
            </a>
          </div>
          <p className="text-center text-sm font-medium opacity-90">
            © 2024 MyBlog, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}