import React from 'react';
import { Leaf, Bell, User, ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: 'home' | 'products' | 'farmers' | 'dashboard') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-white shadow-lg border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView('home')}>
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">AgriConnect</h1>
              <p className="text-sm text-orange-600 font-medium">Cameroun</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'home'
                  ? 'bg-green-100 text-green-800 font-semibold'
                  : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => setCurrentView('products')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'products'
                  ? 'bg-green-100 text-green-800 font-semibold'
                  : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Produits
            </button>
            <button
              onClick={() => setCurrentView('farmers')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'farmers'
                  ? 'bg-green-100 text-green-800 font-semibold'
                  : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Agriculteurs
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'dashboard'
                  ? 'bg-green-100 text-green-800 font-semibold'
                  : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              Tableau de Bord
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;