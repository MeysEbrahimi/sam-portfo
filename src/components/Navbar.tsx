import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 text-gray-900">
            <Monitor size={28} className="text-primary-600" />
            <span className="text-xl font-bold">Sam Ebrahimi</span>
          </Link>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-medium px-2 py-1 rounded ${
                    isActive(link.path) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4">
            <ul className="space-y-4">
              {links.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2 px-4 rounded font-medium ${
                      isActive(link.path) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 