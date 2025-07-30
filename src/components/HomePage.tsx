import { useState, useEffect } from 'react';
import { Code, Bot, Clock, Trophy, Terminal, LogIn, ArrowRight, Play } from 'lucide-react';

// Reusable Button Component
const Button = ({ children, className = '', ...props }) => (
  <button 
    className={`px-6 py-3 rounded-lg font-medium transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Code in Multiple Languages',
      description: 'Write, test, and debug code in Python, JavaScript, Java, and more.'
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Assistance',
      description: 'Get instant help from our AI tutor and improve your coding skills.'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Timed Challenges',
      description: 'Test your skills with our timed coding challenges.'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: 'Compete & Learn',
      description: 'Climb the leaderboard and see how you compare with others.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeMentor
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#languages" className="text-gray-700 hover:text-blue-600 transition-colors">Languages</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-transparent text-gray-700 hover:bg-gray-100">
              <LogIn className="w-4 h-4 mr-2" />
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block mb-4 py-1 px-3 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200">
            🚀 New: AI Code Review
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master Coding with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-Powered</span> Assistance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Practice coding, solve challenges, and get instant feedback from our AI tutor. Perfect for developers of all levels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              Start Coding Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="text-lg px-8 py-3 border border-gray-300 bg-white hover:bg-gray-50">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
