import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'es', flag: 'https://flagcdn.com/w40/es.png', name: 'Español' },
  { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', name: 'English' },
  { code: 'fr', flag: 'https://flagcdn.com/w40/fr.png', name: 'Français' },
  { code: 'de', flag: 'https://flagcdn.com/w40/de.png', name: 'Deutsch' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 items-center">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          title={lang.name}
          className={`transition-transform hover:scale-110 ${
            i18n.language === lang.code ? 'scale-110 ring-2 ring-amber-700 rounded' : 'opacity-60'
          }`}
        >
          <img src={lang.flag} alt={lang.name} className="w-8 h-5 object-cover rounded" />
        </button>
      ))}
    </div>
  );
}