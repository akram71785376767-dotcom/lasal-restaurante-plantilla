import { Utensils, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Utensils className="w-6 h-6 text-[#D4A017]" />
              <span className="text-lg font-bold text-[#D4A017]">La Sal</span>
            </div>
            <p className="text-gray-400 text-sm">{t('hero_subtitle')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4A017]">{t('footer_quick_links')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#menu" className="hover:text-[#D4A017] transition-colors">{t('nav_menu')}</a></li>
              <li><a href="#reservations" className="hover:text-[#D4A017] transition-colors">{t('nav_reservations')}</a></li>
              <li><a href="#gallery" className="hover:text-[#D4A017] transition-colors">{t('nav_gallery')}</a></li>
              <li><a href="#contact" className="hover:text-[#D4A017] transition-colors">{t('nav_contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4A017]">{t('contact_hours')}</h4>
            <p className="text-sm text-gray-400 whitespace-pre-line">{t('contact_hours_text')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4A017]">{t('footer_follow')}</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#D4A017] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#D4A017] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#D4A017] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}