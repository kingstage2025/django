import React from 'react';
import { MapPin, Award, Truck, Phone, Star } from 'lucide-react';

interface FarmerProfilesProps {
  isPreview?: boolean;
}

const farmers = [
  {
    id: 1,
    name: 'Mama Ngozi Ewane',
    location: 'Douala, Littoral',
    speciality: 'Fruits tropicaux',
    experience: '15 ans',
    rating: 4.9,
    reviews: 342,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg',
    products: ['Plantains', 'Papayes', 'Mangues', 'Avocats'],
    certifications: ['Bio', 'Commerce Équitable'],
    delivery: true,
    phone: '+237 6XX XXX XXX',
    description: 'Agricultrice passionnée depuis 15 ans, spécialisée dans la culture biologique de fruits tropicaux. Livraisons dans tout le Littoral.'
  },
  {
    id: 2,
    name: 'Jean-Paul Mbamba',
    location: 'Bafoussam, Ouest',
    speciality: 'Légumes maraîchers',
    experience: '12 ans',
    rating: 4.7,
    reviews: 189,
    image: 'https://images.pexels.com/photos/8534195/pexels-photo-8534195.jpeg',
    products: ['Tomates', 'Oignons', 'Poivrons', 'Courgettes'],
    certifications: ['Agriculture Raisonnée'],
    delivery: true,
    phone: '+237 6XX XXX XXX',
    description: 'Expert en maraîchage moderne avec des techniques respectueuses de l\'environnement. Production constante toute l\'année.'
  },
  {
    id: 3,
    name: 'Marie Foukou Tchinda',
    location: 'Bamenda, Nord-Ouest',
    speciality: 'Agriculture biologique',
    experience: '20 ans',
    rating: 4.8,
    reviews: 567,
    image: 'https://images.pexels.com/photos/8534176/pexels-photo-8534176.jpeg',
    products: ['Avocats', 'Café', 'Haricots verts', 'Épinards'],
    certifications: ['Bio', 'Rainforest Alliance'],
    delivery: true,
    phone: '+237 6XX XXX XXX',
    description: 'Pionnière de l\'agriculture biologique dans la région. Formatrice pour jeunes agriculteurs.'
  },
  {
    id: 4,
    name: 'Papa Samba Ndongo',
    location: 'Garoua, Nord',
    speciality: 'Tubercules & Céréales',
    experience: '18 ans',
    rating: 4.6,
    reviews: 234,
    image: 'https://images.pexels.com/photos/8534091/pexels-photo-8534091.jpeg',
    products: ['Ignames', 'Manioc', 'Mil', 'Sorgho'],
    certifications: ['Agriculture Familiale'],
    delivery: false,
    phone: '+237 6XX XXX XXX',
    description: 'Producteur traditionnel de tubercules et céréales. Grande capacité de production pour grossistes.'
  }
];

const FarmerProfiles: React.FC<FarmerProfilesProps> = ({ isPreview = false }) => {
  const displayFarmers = isPreview ? farmers.slice(0, 3) : farmers;

  return (
    <section className={`${isPreview ? 'py-16' : 'py-8'} bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isPreview && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Agriculteurs Partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Des producteurs expérimentés et certifiés à travers tout le Cameroun
            </p>
          </div>
        )}

        {!isPreview && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Agriculteurs Partenaires</h1>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayFarmers.map((farmer) => (
            <div key={farmer.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-900">{farmer.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{farmer.name}</h3>
                  <div className="flex items-center text-gray-600 mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{farmer.location}</span>
                  </div>
                  <p className="text-green-600 font-semibold">{farmer.speciality}</p>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{farmer.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Expérience:</span>
                    <span className="font-semibold">{farmer.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Évaluations:</span>
                    <span className="font-semibold">{farmer.reviews} avis</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Livraison:</span>
                    <div className="flex items-center">
                      {farmer.delivery ? (
                        <>
                          <Truck className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-green-600 font-semibold">Disponible</span>
                        </>
                      ) : (
                        <span className="text-orange-600 font-semibold">Sur place uniquement</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Produits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {farmer.products.map((product, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-orange-500" />
                    Certifications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {farmer.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200">
                    Voir les produits
                  </button>
                  <button className="bg-orange-100 text-orange-600 p-3 rounded-xl hover:bg-orange-200 transition-colors duration-200">
                    <Phone className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors duration-300">
              Découvrir tous les agriculteurs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FarmerProfiles;