import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80")`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">La Sal</h1>
        <p className="text-xl md:text-2xl mb-4 drop-shadow-md font-light">
          {t('hero_subtitle')}
        </p>
        <p className="text-base md:text-lg mb-8 drop-shadow-md text-amber-300">
          ⭐ {t('hero_social_proof')}
        </p>
        <button
          onClick={onReserveClick}
          className="bg-[#D4A017] hover:bg-[#B8890F] text-black px-8 py-3 rounded-lg font-semibold transition-colors mb-16 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
        >
          {t('hero_button')}
        </button>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}