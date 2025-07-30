import { useState, useEffect } from 'react';
import { Code, Bot, Clock, Trophy, Terminal, LogIn, ArrowRight, Play, Check, Users, Zap, Code2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-500/30',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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
      description: 'Write, test, and debug code in Python, JavaScript, Java, and more.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Assistance',
      description: 'Get instant help from our AI tutor and improve your coding skills.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Clock className="w-8 h--8 text-green-500" />,
      title: 'Timed Challenges',
      description: 'Test your skills with our timed coding challenges.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: 'Compete & Learn',
      description: 'Climb the leaderboard and see how you compare with others.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  const benefits = [
    'Real-time code execution',
    'Interactive coding challenges',
    'Personalized learning paths',
    'Progress tracking',
    'Community support',
    'Regular updates with new content'
  ];

  const stats = [
    { value: '10,000+', label: 'Active Learners' },
    { value: '500+', label: 'Coding Challenges' },
    { value: '8+', label: 'Programming Languages' },
    { value: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/50 to-gray-900">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <Code2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">CodeMentor</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors font-medium">Benefits</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">Pricing</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hidden md:block">
                <Button 
                  variant="outline"
                  className="hidden md:block"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button 
                  variant="primary"
                  className="hidden md:block"
                >
                  Sign Up
                </Button>
              </Link>
              <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Master Coding with <span className="text-blue-400">AI-Powered</span> Mentorship
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Level up your programming skills with personalized guidance, real-time feedback, and hands-on coding challenges designed to help you succeed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                onClick={() => {}}
              >
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto px-8 py-4 text-lg"
                onClick={() => {}}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">Join 10,000+ developers already learning with us</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 h-80 overflow-auto">
                  <p><span className="text-purple-400">function</span> <span className="text-blue-400">calculateSum</span>(n) {'{'}</p>
                  <p className="ml-4"><span className="text-purple-400">let</span> sum = <span className="text-yellow-400">0</span>;</p>
                  <p className="ml-4"><span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = <span className="text-yellow-400">1</span>; i &lt;= n; i++) {'{'}</p>
                  <p className="ml-8">sum += i;</p>
                  <p className="ml-4">{'}'}</p>
                  <p className="ml-4"><span className="text-purple-400">return</span> sum;</p>
                  <p>{'}'}</p>
                  <p className="mt-4">// Calculate sum of first 100 numbers</p>
                  <p><span className="text-purple-400">const</span> result = <span className="text-blue-400">calculateSum</span>(<span className="text-yellow-400">100</span>);</p>
                  <p>console.<span className="text-blue-400">log</span>(result); <span className="text-gray-600">// 5050</span></p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-2"></div>
            </div>
          </div>
        </div>
      </section>

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
            <Button 
              variant="outline"
              className="text-lg px-8 py-3 bg-white hover:bg-gray-50"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Releases</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-white">CodeMentor</span>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CodeMentor. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
