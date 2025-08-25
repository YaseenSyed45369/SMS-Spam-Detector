import React from 'react';
import { Calendar, Database, Cpu, Award, Sparkles } from 'lucide-react';

const ProjectInfo: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Data Curation',
      description: 'Collected and curated comprehensive SMS datasets with focus on spam and non-spam categorization, ensuring data cleanliness and integrity.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cpu,
      title: 'ML Models',
      description: 'Applied multiple machine learning models including Naïve Bayes, Decision Trees, and Support Vector Machines for optimal performance.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Model Validation',
      description: 'Trained and validated models on labeled data, evaluating precision, recall, and F1 score to measure effectiveness.',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Project Overview
          </h2>
          <p className="text-base text-gray-600 font-medium">September 2024 – November 2024</p>
        </div>
      </div>
      
      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-5 group hover:bg-gray-50/50 p-4 rounded-xl transition-all duration-300">
            <div className="flex-shrink-0">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-200/50 shadow-inner">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
            <h4 className="text-xl font-bold text-gray-900">Achievement</h4>
            <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            100% Accuracy Achieved
          </p>
          <p className="text-base text-gray-600 font-medium">
            Through iterative improvement and comprehensive model evaluation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;