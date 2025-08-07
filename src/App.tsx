import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FarmerProfiles from './components/FarmerProfiles';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

type View = 'home' | 'products' | 'farmers' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [userType, setUserType] = useState<'buyer' | 'farmer' | null>(null);

  const renderContent = () => {
    switch (currentView) {
      case 'products':
        return <ProductGrid />;
      case 'farmers':
        return <FarmerProfiles />;
      case 'dashboard':
        return <Dashboard userType={userType} />;
      default:
        return (
          <>
            <Hero setCurrentView={setCurrentView} setUserType={setUserType} />
            <div id="features">
              <ProductGrid isPreview={true} />
              <FarmerProfiles isPreview={true} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;