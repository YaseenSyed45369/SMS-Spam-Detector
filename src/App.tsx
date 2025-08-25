import React from 'react';
import Header from './components/Header';
import SpamDetector from './components/SpamDetector';
import PerformanceMetrics from './components/PerformanceMetrics';
import ProjectInfo from './components/ProjectInfo';
import SampleMessages from './components/SampleMessages';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <Header />
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            SMS Spam Detection System
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Advanced machine learning models trained to detect spam messages with 100% accuracy. 
            Built using Naïve Bayes, Decision Trees, and Support Vector Machines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <SpamDetector />
            <PerformanceMetrics />
          </div>
          
          <div className="space-y-10">
            <ProjectInfo />
            <SampleMessages />
          </div>
        </div>
        
        <footer className="mt-20 py-10 border-t border-gray-200/50">
          <div className="text-center">
            <p className="text-gray-600 text-lg font-medium">
              SMS Spam Detection Project • Machine Learning Implementation
            </p>
            <p className="text-base text-gray-500 mt-3 font-medium">
              September 2024 – November 2024 • Achieved 100% Classification Accuracy
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;