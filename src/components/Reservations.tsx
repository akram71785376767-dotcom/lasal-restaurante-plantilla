import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Reservations() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', party_size: '2', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', party_size: '2', notes: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">{t('reserve_title')}</h2>
        <p className="text-center text-gray-400 mb-12 text-lg">{t('reserve_subtitle')}</p>

        {submitted && (
          <div className="mb-6 p-4 bg-yellow-500 rounded-lg">
            <p className="text-black font-bold">✅ {t('reserve_title')}!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black border border-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: t('reserve_name'), name: 'name', type: 'text' },
              { label: t('reserve_email'), name: 'email', type: 'email' },
              { label: t('reserve_phone'), name: 'phone', type: 'tel' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">{field.label}</label>
                <input type={field.type} name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange} required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">{t('reserve_size')}</label>
              <select name="party_size" value={formData.party_size} onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none">
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">{t('reserve_date')}</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">{t('reserve_time')}</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">{t('reserve_requests')}</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none" />
          </div>
          <button type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-colors">
            {t('reserve_button')}
          </button>
        </form>
      </div>
    </section>
  );
}