import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, ShoppingCart } from 'lucide-react';

interface ProductGridProps {
  isPreview?: boolean;
}

const products = [
  {
    id: 1,
    name: 'Plantains Bio',
    farmer: 'Mama Ngozi',
    location: 'Douala, Littoral',
    price: '1,500',
    unit: 'kg',
    image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg',
    rating: 4.9,
    reviews: 127,
    available: '2.5 tonnes',
    organic: true
  },
  {
    id: 2,
    name: 'Tomates Fraîches',
    farmer: 'Jean-Paul Mbamba',
    location: 'Bafoussam, Ouest',
    price: '800',
    unit: 'kg',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    rating: 4.7,
    reviews: 89,
    available: '500 kg',
    organic: false
  },
  {
    id: 3,
    name: 'Avocats Premium',
    farmer: 'Marie Foukou',
    location: 'Bamenda, Nord-Ouest',
    price: '2,200',
    unit: 'kg',
    image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg',
    rating: 4.8,
    reviews: 203,
    available: '800 kg',
    organic: true
  },
  {
    id: 4,
    name: 'Ignames du Terroir',
    farmer: 'Papa Samba',
    location: 'Garoua, Nord',
    price: '1,200',
    unit: 'kg',
    image: 'https://images.pexels.com/photos/4750270/pexels-photo-4750270.jpeg',
    rating: 4.6,
    reviews: 156,
    available: '1.2 tonnes',
    organic: false
  },
  {
    id: 5,
    name: 'Papayes Sucrées',
    farmer: 'Fatou Adamou',
    location: 'Maroua, Extrême-Nord',
    price: '900',
    unit: 'kg',
    image: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg',
    rating: 4.9,
    reviews: 78,
    available: '400 kg',
    organic: true
  },
  {
    id: 6,
    name: 'Cacao de Qualité',
    farmer: 'Michel Owona',
    location: 'Sangmélima, Sud',
    price: '3,500',
    unit: 'kg',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
    rating: 5.0,
    reviews: 234,
    available: '300 kg',
    organic: true
  }
];

const ProductGrid: React.FC<ProductGridProps> = ({ isPreview = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const displayProducts = isPreview ? products.slice(0, 6) : products;

  return (
    <section className={`${isPreview ? 'py-16' : 'py-8'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isPreview && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produits Locaux Frais
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les meilleurs produits agricoles du Cameroun
            </p>
          </div>
        )}

        {!isPreview && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Nos Produits</h1>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">Tous les produits</option>
                  <option value="organic">Bio uniquement</option>
                  <option value="fruits">Fruits</option>
                  <option value="vegetables">Légumes</option>
                  <option value="cereals">Céréales</option>
                </select>
                
                <button className="px-4 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition-colors duration-200">
                  <Filter className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.organic && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Bio
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{product.location}</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Par <span className="font-semibold text-green-700">{product.farmer}</span>
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-gray-600 ml-1">FCFA/{product.unit}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {product.available} disponible
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{product.rating} ({product.reviews} avis)</span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Commander</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors duration-300">
              Voir tous les produits
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;