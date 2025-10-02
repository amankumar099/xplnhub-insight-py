import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Github, Menu, X, ChevronRight, Twitter, Linkedin, Mail, Heart, ExternalLink, Code2, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onOpenOnboarding: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onOpenOnboarding }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/implementation', label: 'Implementation' },
    { path: '/roadmap', label: 'Roadmap' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="cyber-grid"></div>
        <div className="particles"></div>
        <div 
          className="mouse-glow"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <Terminal className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Insight
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors ${
                      isActive(link.path)
                        ? 'text-cyan-400 font-semibold'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <a 
                  href="https://github.com/XplnHUB/Insight-Py" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button-subtle flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div 
              className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Navigation Panel */}
            <div 
              className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gray-900/80 backdrop-blur-xl border-l border-cyan-500/20 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-6 h-6 text-cyan-400" />
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Menu
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg transition-all duration-200 transform hover:translate-x-1 ${
                          isActive(link.path)
                            ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-4 border-cyan-400'
                            : 'text-gray-300 hover:bg-cyan-500/5 hover:text-cyan-400'
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: mobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

                  {/* GitHub Link */}
                  <a 
                    href="https://github.com/XplnHUB/Insight-Py" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  >
                    <Github className="w-5 h-5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-cyan-500/20">
                  <p className="text-xs text-gray-500 text-center">
                    &copy; 2025 XplnHUB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative mt-32 overflow-hidden">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
          
          {/* Animated border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
              {/* Brand Section */}
              <div className="lg:col-span-5">
                <div className="flex items-center space-x-3 mb-6 group">
                  <div className="relative">
                    <Terminal className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 blur-xl bg-cyan-400/30 group-hover:bg-cyan-400/50 transition-all duration-300"></div>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Insight
                  </span>
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  AI-powered code analysis tool that transforms how developers understand and navigate their codebases. 
                  <span className="text-cyan-400/80"> Intelligent insights, effortless exploration.</span>
                </p>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6 flex items-center">
                  <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent mr-3"></div>
                  Navigate
                </h3>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="lg:col-span-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-6 flex items-center">
                  <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent mr-3"></div>
                  Resources
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py/blob/main/README.md" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py/issues" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Issues</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Discussions</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect Section */}
              <div className="lg:col-span-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-pink-400 mb-6 flex items-center">
                  <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-transparent mr-3"></div>
                  Connect
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Join our community and stay updated with the latest features and improvements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/XplnHUB/Insight-Py" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:scale-110"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a 
                    href="" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:scale-110"
                    title="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/arpitsarang/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-purple-500/50 rounded-xl transition-all duration-300 hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                  <a 
                    href="" 
                    className="group p-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-pink-500/50 rounded-xl transition-all duration-300 hover:scale-110"
                    title="Email"
                  >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>&copy; 2025 XplnHUB ~ CodeMaverick-143</span>
                  <span className="hidden md:inline">•</span>
                  <span className="flex items-center gap-1">
                    Built with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> for developers
                  </span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                  <span>•</span>
                  <a href="#" className="hover:text-cyan-400 transition-colors">License</a>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
