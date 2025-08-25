import React from 'react';
import { Shield, Brain, BarChart3, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="relative p-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Shield className="h-7 w-7 text-white" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SMS Spam Detector
              </h1>
              <p className="text-sm text-gray-600 font-medium">Machine Learning Powered</p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                <Brain className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-200">3 ML Models</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-200">
                <BarChart3 className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors duration-200">100% Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;