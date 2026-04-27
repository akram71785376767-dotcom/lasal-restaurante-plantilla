import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Paella Valenciana',
    image_url: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Tapas variadas',
    image_url: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Ambiente del restaurante',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Croquetas caseras',
    image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Vino y tapas',
    image_url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    title: 'Postres artesanos',
    image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#D4A017]">
          {t('gallery_title')}
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          {t('gallery_subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-72 border border-gray-800"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.image_url}
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <p className="text-[#D4A017] font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-lg">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-[#D4A017] text-center mt-4 text-lg font-semibold">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}