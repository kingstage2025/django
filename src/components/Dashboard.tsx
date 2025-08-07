import React, { useState } from 'react';
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Edit3,
  Eye,
  Users,
  DollarSign,
  Truck
} from 'lucide-react';

interface DashboardProps {
  userType: 'buyer' | 'farmer' | null;
}

const Dashboard: React.FC<DashboardProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!userType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Veuillez vous connecter</h2>
          <p className="text-gray-600">Sélectionnez votre type de profil pour accéder au tableau de bord</p>
        </div>
      </div>
    );
  }

  const farmerStats = [
    { label: 'Produits actifs', value: '12', icon: Package, color: 'bg-green-500' },
    { label: 'Commandes ce mois', value: '47', icon: ShoppingCart, color: 'bg-blue-500' },
    { label: 'Revenus (FCFA)', value: '2,840,000', icon: DollarSign, color: 'bg-yellow-500' },
    { label: 'Évaluation moyenne', value: '4.8/5', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const buyerStats = [
    { label: 'Commandes totales', value: '23', icon: ShoppingCart, color: 'bg-blue-500' },
    { label: 'En cours', value: '3', icon: Clock, color: 'bg-orange-500' },
    { label: 'Livraisons reçues', value: '20', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Agriculteurs favoris', value: '8', icon: Users, color: 'bg-purple-500' },
  ];

  const stats = userType === 'farmer' ? farmerStats : buyerStats;

  const recentOrders = [
    {
      id: '#CMD001',
      product: 'Plantains Bio - 25kg',
      customer: userType === 'farmer' ? 'Restaurant Le Palmier' : 'Mama Ngozi',
      status: 'En transit',
      amount: '37,500 FCFA',
      date: '23 Oct 2024',
      statusColor: 'text-orange-600 bg-orange-100'
    },
    {
      id: '#CMD002',
      product: 'Tomates Fraîches - 15kg',
      customer: userType === 'farmer' ? 'Supermarché City' : 'Jean-Paul Mbamba',
      status: 'Livrée',
      amount: '12,000 FCFA',
      date: '22 Oct 2024',
      statusColor: 'text-green-600 bg-green-100'
    },
    {
      id: '#CMD003',
      product: 'Avocats Premium - 10kg',
      customer: userType === 'farmer' ? 'Hôtel Hilton' : 'Marie Foukou',
      status: 'En préparation',
      amount: '22,000 FCFA',
      date: '21 Oct 2024',
      statusColor: 'text-blue-600 bg-blue-100'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tableau de Bord {userType === 'farmer' ? 'Agriculteur' : 'Acheteur'}
          </h1>
          <p className="text-gray-600 mt-2">
            {userType === 'farmer' 
              ? 'Gérez vos produits, commandes et suivez vos performances'
              : 'Suivez vos commandes, découvrez de nouveaux produits et gérez vos achats'
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Actions Rapides</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {userType === 'farmer' ? (
                  <>
                    <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex flex-col items-center space-y-2">
                      <Plus className="h-6 w-6" />
                      <span className="text-sm font-medium">Ajouter Produit</span>
                    </button>
                    <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex flex-col items-center space-y-2">
                      <Edit3 className="h-6 w-6" />
                      <span className="text-sm font-medium">Modifier Stock</span>
                    </button>
                    <button className="bg-orange-600 text-white p-4 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex flex-col items-center space-y-2">
                      <Truck className="h-6 w-6" />
                      <span className="text-sm font-medium">Planifier Livraison</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex flex-col items-center space-y-2">
                      <Package className="h-6 w-6" />
                      <span className="text-sm font-medium">Parcourir Produits</span>
                    </button>
                    <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex flex-col items-center space-y-2">
                      <Users className="h-6 w-6" />
                      <span className="text-sm font-medium">Agriculteurs</span>
                    </button>
                    <button className="bg-orange-600 text-white p-4 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex flex-col items-center space-y-2">
                      <MapPin className="h-6 w-6" />
                      <span className="text-sm font-medium">Près de moi</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {userType === 'farmer' ? 'Commandes Récentes' : 'Mes Commandes'}
                </h3>
                <button className="text-green-600 hover:text-green-700 font-semibold">
                  Voir tout
                </button>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{order.id}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">{order.product}</p>
                        <p className="text-sm text-gray-500">
                          {userType === 'farmer' ? 'Client: ' : 'Agriculteur: '}
                          {order.customer}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-gray-900">{order.amount}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Performance Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {userType === 'farmer' ? 'Performances du Mois' : 'Activité Récente'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cette semaine</span>
                  <span className="font-semibold text-green-600">+23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Objectif mensuel</span>
                  <span className="text-gray-700">75% atteint</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Commande livrée</p>
                    <p className="text-xs text-gray-500">Il y a 2 heures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Stock faible détecté</p>
                    <p className="text-xs text-gray-500">Il y a 4 heures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Package className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Nouvelle commande</p>
                    <p className="text-xs text-gray-500">Hier</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-bold mb-2">Météo Aujourd'hui</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">28°C</p>
                  <p className="text-blue-100">Ensoleillé</p>
                </div>
                <div className="text-right text-sm text-blue-100">
                  <p>Douala</p>
                  <p>Idéal pour les récoltes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;