import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const menuData = [
  { id: '1', name: 'Gambas al ajillo', category: 'appetizers', description: 'Gambas salteadas con ajo y aceite de oliva', price: 12.50, image_url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=200' },
  { id: '2', name: 'Croquetas caseras', category: 'appetizers', description: 'Croquetas de jamón ibérico', price: 8.00, image_url: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200' },
  { id: '3', name: 'Paella valenciana', category: 'mains', description: 'Paella tradicional con pollo y verduras', price: 18.00, image_url: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=200' },
  { id: '4', name: 'Lubina a la sal', category: 'mains', description: 'Lubina fresca cocinada a la sal', price: 22.00, image_url: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=200' },
  { id: '5', name: 'Tiramisú', category: 'desserts', description: 'Tiramisú casero con café y mascarpone', price: 6.50, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200' },
  { id: '6', name: 'Sangría', category: 'drinks', description: 'Sangría de la casa con frutas frescas', price: 5.00, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200' },
];

export default function MenuSection() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'appetizers', 'mains', 'desserts', 'drinks'];
  const categoryLabels: Record<string, string> = {
    all: t('cat_all'), appetizers: t('cat_appetizers'), mains: t('cat_mains'),
    desserts: t('cat_desserts'), drinks: t('cat_drinks'),
  };
  const filteredItems = selectedCategory === 'all' ? menuData : menuData.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">{t('menu_title')}</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">{t('menu_subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
                selectedCategory === cat
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}>
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="flex gap-4 hover:shadow-lg transition-shadow rounded-lg p-4 bg-gray-800 border border-gray-700">
              <img src={item.image_url} alt={item.name} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <span className="text-yellow-500 font-bold text-lg">{item.price.toFixed(2)}€</span>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}