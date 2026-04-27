import { Award, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#D4A017]">
          {t('about_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {t('about_text')}
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
            alt="Restaurante La Sal"
            className="rounded-lg shadow-lg object-cover w-full h-96"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="text-center p-8 bg-gray-800 rounded-lg border border-gray-700">
            <Award className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t('about_award')}
            </h3>
          </div>
          <div className="text-center p-8 bg-gray-800 rounded-lg border border-gray-700">
            <Users className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t('about_community')}
            </h3>
          </div>
          <div className="text-center p-8 bg-gray-800 rounded-lg border border-gray-700">
            <Clock className="w-12 h-12 text-[#D4A017] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t('about_fresh')}
            </h3>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#D4A017] to-[#B8890F] text-black p-12 rounded-lg text-center">
          <p className="text-lg font-light max-w-2xl mx-auto italic">
            {t('about_quote')}
          </p>
        </div>
      </div>
    </section>
  );
}