import React, { useState, useEffect } from 'react';
import { Building2, Users, Globe, Award, TrendingUp, Heart, Sparkles, Target, Rocket, Lightbulb, MessageCircle, BookOpen, ArrowRight, Zap, Shield, Eye, ChevronRight, Star, Brain, Network } from 'lucide-react';

export default function CompanyPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { icon: Target, title: "Mission First", desc: "We place long-term, collective impact ahead of personal achievement." },
    { icon: Zap, title: "Drive", desc: "We aim high and do whatever it takes to get things done." },
    { icon: Rocket, title: "Agility", desc: "We are nimble in our processes and systems, ready to adapt to a changing world." },
    { icon: Shield, title: "Pragmatism", desc: "We stay grounded in the outcomes that truly matter for our mission." },
    { icon: Eye, title: "Awareness", desc: "We are rigorous in our decisions and candid in our communication." },
    { icon: Lightbulb, title: "Innovation", desc: "We constantly push boundaries to create better ways of sharing knowledge." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-semibold backdrop-blur-sm border border-orange-200 shadow-lg">
              <Star className="w-4 h-4" />
              OUR MISSION
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Grow the world's
              <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent mt-2">
                collective intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering humanity through knowledge sharing and AI collaboration
            </p>
            <div className="flex gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Join Our Mission
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-orange-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Network Graphic - Enhanced */}
          <div className="relative h-[500px]" style={{transform: `translateY(${scrollY * -0.05}px)`}}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 rounded-[3rem] shadow-2xl overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 to-transparent animate-pulse"></div>

              {/* Network connections - animated */}
              <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <line x1="80" y1="80" x2="200" y2="140" stroke="url(#lineGradient)" strokeWidth="3" className="animate-pulse" />
                <line x1="200" y1="140" x2="320" y2="100" stroke="url(#lineGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                <line x1="200" y1="140" x2="200" y2="260" stroke="url(#lineGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '1s'}} />
                <line x1="80" y1="260" x2="200" y2="260" stroke="url(#lineGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '1.5s'}} />
                <line x1="200" y1="260" x2="320" y2="320" stroke="url(#lineGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '2s'}} />
                <line x1="320" y1="100" x2="360" y2="200" stroke="url(#lineGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '2.5s'}} />
              </svg>

              {/* Network nodes - enhanced with icons */}
              <div className="absolute top-16 left-16 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer" style={{animation: 'float 3s ease-in-out infinite'}}>
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="absolute top-20 right-16 w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer" style={{animation: 'float 3s ease-in-out infinite 0.5s'}}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer" style={{animation: 'float 3s ease-in-out infinite 1s'}}>
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-20 left-16 w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer" style={{animation: 'float 3s ease-in-out infinite 1.5s'}}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-16 right-16 w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer" style={{animation: 'float 3s ease-in-out infinite 2s'}}>
                <Network className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "300M+", label: "Active Users" },
            { number: "50K+", label: "Topics" },
            { number: "1B+", label: "Questions" },
            { number: "190+", label: "Countries" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-orange-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Description */}
      <div className="relative z-10 bg-white/60 backdrop-blur-sm py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-12 shadow-2xl border border-orange-100">
            <p className="text-xl text-gray-700 leading-relaxed">
              We build platforms that increase the pace at which humanity can grow its collective intelligence. This includes knowledge sharing among humans (MyBlog) and collaboration among humans and all kinds of AI (Poe). By focusing at the platform level, we are not creating knowledge or intelligence ourselves, but instead we focus on the most leveraged place for impact: <span className="font-semibold text-orange-600">removing friction and unlocking the potential</span> in what everyone else has already learned, created, or trained. The more we enable collaborative thinking between humans, and between humans and AI, the faster ideas will diffuse, the faster technology will advance, and the faster the economy will grow.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="relative z-10 py-24 bg-gradient-to-b from-transparent to-orange-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What we are building</h2>
            <p className="text-xl text-gray-600">Innovative platforms for the future of knowledge</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* MyBlog Card - Enhanced */}
            <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-orange-100 hover:border-orange-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">MyBlog</h3>
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Knowledge Platform</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                A global knowledge sharing platform with hundreds of millions of monthly unique visitors, connecting writers who have knowledge across millions of topics with a global audience of readers who want to learn from their collective experience.
              </p>
              <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all">
                Try MyBlog 
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Poe Card - Enhanced */}
            <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-orange-100 hover:border-orange-300">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Poe</h3>
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">AI Platform</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Poe aggregates access to the best models from many different AI companies in a single chat interface across all platforms, and enables creators to build and monetize applications that use these models.
              </p>
              <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all">
                Try Poe
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section - Interactive */}
      <div className="relative z-10 py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our values</h2>
            <p className="text-xl text-gray-600">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div 
                  key={i}
                  onMouseEnter={() => setActiveValue(i)}
                  className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${activeValue === i ? 'border-orange-500 scale-105' : 'border-orange-100 hover:border-orange-300'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all ${activeValue === i ? 'bg-gradient-to-br from-orange-600 to-orange-500' : 'bg-orange-100 group-hover:bg-orange-200'}`}>
                    <Icon className={`w-7 h-7 ${activeValue === i ? 'text-white' : 'text-orange-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section - Premium */}
      <div className="relative z-10 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 400">
            {[...Array(8)].map((_, i) => (
              <circle key={i} cx={100 + i * 120} cy={Math.random() * 400} r="40" fill="white" opacity="0.1" className="animate-pulse" style={{animationDelay: `${i * 0.3}s`}} />
            ))}
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-6">
            Be part of our mission
          </h2>
          <p className="text-2xl text-white/90 mb-10">
            Join a team that's shaping the future of human knowledge
          </p>
          <button className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
            See open positions
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">MyBlog</h3>
              <p className="text-gray-400 leading-relaxed">
                Growing the world's collective intelligence through knowledge sharing and AI collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">MyBlog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Poe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2024 MyBlog, Inc. All rights reserved.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}