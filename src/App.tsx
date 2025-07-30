import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Play, Zap, Shield, Globe, ChevronDown } from 'lucide-react';

export default function ModernUI() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance" },
    { icon: Shield, title: "Secure by Design", desc: "Enterprise-grade security built-in" },
    { icon: Globe, title: "Global Scale", desc: "Deploy anywhere in the world" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">NexaUI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
          
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 pt-20">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              New: Advanced AI Integration Available
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Build the
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Future
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Create stunning applications with our next-generation UI framework. 
              Designed for developers who demand excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center text-white hover:text-purple-400 transition-colors">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NexaUI?</h2>
            <p className="text-gray-300 text-lg">Everything you need to build exceptional user experiences</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeFeature === index ? 'ring-2 ring-purple-500 bg-white/10' : ''
                  }`}
                  onMouseMove={handleMouseMove}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Stats Section */}
      <div className="relative z-10 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50K+', label: 'Developers' },
                { number: '1M+', label: 'Downloads' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of developers already building with NexaUI
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-12 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-12 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}