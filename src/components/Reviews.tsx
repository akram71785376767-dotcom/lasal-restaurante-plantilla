import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Review {
  autor: string;
  rating: number;
  texto: string;
  tiempo: string;
}

interface ReviewsProps {
  reviews?: Review[];
  rating?: number;
  numReviews?: number;
}

// Datos por defecto (se sustituyen al personalizar)
const DEFAULT_REVIEWS: Review[] = [
  {
    autor: "María González",
    rating: 5,
    texto: "Comida exquisita y trato excelente. El ambiente es muy agradable y los precios razonables. Sin duda volveremos.",
    tiempo: "hace 2 semanas"
  },
  {
    autor: "Carlos Martínez",
    rating: 5,
    texto: "De los mejores restaurantes de la zona. La calidad de los ingredientes se nota en cada plato. Muy recomendable.",
    tiempo: "hace 1 mes"
  },
  {
    autor: "Laura Pérez",
    rating: 4,
    texto: "Muy buena experiencia. El servicio fue atento y la comida estaba deliciosa. El postre casero es espectacular.",
    tiempo: "hace 3 semanas"
  }
];

export default function Reviews({ 
  reviews = DEFAULT_REVIEWS, 
  rating = 4.8, 
  numReviews = 500 
}: ReviewsProps) {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con rating */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
            {t('reviews_title', 'Lo que dicen nuestros clientes')}
          </h2>
          
          <div className="flex items-center justify-center space-x-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-8 h-8 ${
                  i < Math.round(rating) 
                    ? 'text-yellow-500 fill-yellow-500' 
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          
          <p className="text-2xl font-bold text-white mb-2">
            {rating.toFixed(1)} / 5.0
          </p>
          <p className="text-gray-400">
            {t('reviews_based_on', 'Basado en')} <span className="text-yellow-500 font-semibold">{numReviews}</span> {t('reviews_google', 'reseñas de Google')}
          </p>
        </div>

        {/* Grid de reseñas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all hover:shadow-xl hover:shadow-yellow-500/10"
            >
              <Quote className="w-10 h-10 text-yellow-500/30 mb-4" />
              
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating 
                        ? 'text-yellow-500 fill-yellow-500' 
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.texto}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <p className="font-semibold text-yellow-500">
                  {review.autor}
                </p>
                <p className="text-sm text-gray-500">
                  {review.tiempo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            {t('reviews_cta', '¿Ya has estado con nosotros?')}
          </p>
          <a
            href="#reservations"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            {t('reviews_book_now', 'Reserva tu mesa')}
          </a>
        </div>
      </div>
    </section>
  );
}
