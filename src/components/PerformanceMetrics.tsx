import React from 'react';
import { TrendingUp, Target, Zap, Award } from 'lucide-react';

const PerformanceMetrics: React.FC = () => {
  const metrics = [
    { name: 'Accuracy', value: 100, icon: Target, color: 'text-emerald-600', bgColor: 'bg-emerald-100', gradientFrom: 'from-emerald-400', gradientTo: 'to-emerald-600' },
    { name: 'Precision', value: 98.7, icon: TrendingUp, color: 'text-blue-600', bgColor: 'bg-blue-100', gradientFrom: 'from-blue-400', gradientTo: 'to-blue-600' },
    { name: 'Recall', value: 99.2, icon: Zap, color: 'text-purple-600', bgColor: 'bg-purple-100', gradientFrom: 'from-purple-400', gradientTo: 'to-purple-600' },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
          <Award className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Model Performance
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric) => (
          <div key={metric.name} className="text-center group">
            <div className={`inline-flex items-center justify-center w-20 h-20 ${metric.bgColor} rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
              <metric.icon className={`h-10 w-10 ${metric.color}`} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">{metric.name}</h3>
              <div className="relative">
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}%</div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${metric.gradientFrom} ${metric.gradientTo}`}
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-2xl border border-emerald-200/50 shadow-inner">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">F1 Score</h4>
            <p className="text-base text-gray-600 font-medium">Harmonic mean of precision and recall</p>
          </div>
          <div className="flex-grow text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">98.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;