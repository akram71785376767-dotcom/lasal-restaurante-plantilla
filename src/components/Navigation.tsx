import { Menu, X, Utensils } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen, activeSection, onNavigate }: NavigationProps) {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t('nav_home') },
    { id: 'menu', label: t('nav_menu') },
    { id: 'reservations', label: t('nav_reservations') },
    { id: 'about', label: t('nav_about') },
    { id: 'contact', label: t('nav_contact') },
  ];

  return (
    <nav className="fixed w-full bg-black border-b border-yellow-500 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Utensils className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold text-yellow-500">La Sal</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-gray-300 hover:text-yellow-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageSelector />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}