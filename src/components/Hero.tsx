import React from 'react';
import { ArrowRight, Users, Truck, Star, TrendingUp } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: 'home' | 'products' | 'farmers' | 'dashboard') => void;
  setUserType: (type: 'buyer' | 'farmer') => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentView, setUserType }) => {
  const handleGetStarted = (type: 'buyer' | 'farmer') => {
    setUserType(type);
    setCurrentView('dashboard');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connectons l'
              <span className="text-green-600">agriculture</span> 
              <br />camerounaise
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              La première plateforme qui met en relation directe les agriculteurs camerounais 
              avec les acheteurs urbains. Des produits frais, des prix justes, une livraison fiable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleGetStarted('buyer')}
                className="group bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Je suis acheteur</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => handleGetStarted('farmer')}
                className="group bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Je suis agriculteur</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1458831/pexels-photo-1458831.jpeg"
                alt="Agriculture camerounaise"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-green-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+127%</p>
                  <p className="text-sm text-gray-600">Revenus agriculteurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2,847</div>
              <div className="text-gray-600">Agriculteurs inscrits</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">12,450</div>
              <div className="text-gray-600">Livraisons effectuées</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.8/5</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">156</div>
              <div className="text-gray-600">Villes desservies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;