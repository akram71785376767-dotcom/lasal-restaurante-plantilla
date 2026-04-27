import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mensaje contacto:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#D4A017]">
          {t('contact_title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: <MapPin className="w-6 h-6 text-[#D4A017] mt-1" />, label: t('contact_location'), value: t('contact_address') },
              { icon: <Phone className="w-6 h-6 text-[#D4A017] mt-1" />, label: t('contact_phone'), value: '+34 965 123 456' },
              { icon: <Mail className="w-6 h-6 text-[#D4A017] mt-1" />, label: t('contact_email'), value: 'reservas@lasal-restaurante.es' },
              { icon: <Clock className="w-6 h-6 text-[#D4A017] mt-1" />, label: t('contact_hours'), value: t('contact_hours_text') },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                {item.icon}
                <div>
                  <h3 className="text-lg font-bold text-[#D4A017]">{item.label}</h3>
                  <p className="text-gray-300 mt-1 whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-gray-800 h-64">
              <iframe
                title="Ubicación La Sal"
                src="https://www.google.com/maps?q=Torrevieja,Alicante&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800 h-fit">
            {submitted && (
              <div className="p-4 bg-[#D4A017] rounded-lg">
                <p className="text-black font-semibold">✅ ¡Mensaje enviado!</p>
              </div>
            )}
            {[
              { label: t('contact_name'), name: 'name', type: 'text' },
              { label: t('contact_email'), name: 'email', type: 'email' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-[#D4A017] mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4A017] outline-none"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-[#D4A017] mb-2">{t('contact_message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4A017] outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4A017] hover:bg-[#B8890F] text-black font-bold py-3 rounded-lg transition-colors"
            >
              {t('contact_send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}