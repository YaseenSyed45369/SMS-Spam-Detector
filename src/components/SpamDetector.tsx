import React, { useState } from 'react';
import { Send, AlertTriangle, CheckCircle, Loader2, Zap } from 'lucide-react';

interface DetectionResult {
  prediction: 'spam' | 'legitimate';
  confidence: number;
  modelResults: {
    naiveBayes: { prediction: string; confidence: number };
    decisionTree: { prediction: string; confidence: number };
    svm: { prediction: string; confidence: number };
  };
}

const SpamDetector: React.FC = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const detectSpam = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    
    // Simulate ML processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock ML prediction logic
    const spamKeywords = ['free', 'win', 'prize', 'urgent', 'click', 'limited', 'offer', 'congratulations'];
    const lowerMessage = message.toLowerCase();
    const spamScore = spamKeywords.filter(keyword => lowerMessage.includes(keyword)).length;
    
    const isSpam = spamScore > 0 || lowerMessage.includes('call now') || lowerMessage.includes('$');
    const baseConfidence = isSpam ? 0.75 + (spamScore * 0.05) : 0.80 + Math.random() * 0.15;
    
    const mockResult: DetectionResult = {
      prediction: isSpam ? 'spam' : 'legitimate',
      confidence: Math.min(baseConfidence, 0.98),
      modelResults: {
        naiveBayes: {
          prediction: isSpam ? 'spam' : 'legitimate',
          confidence: Math.min(baseConfidence + (Math.random() * 0.1 - 0.05), 0.99)
        },
        decisionTree: {
          prediction: isSpam ? 'spam' : 'legitimate',
          confidence: Math.min(baseConfidence + (Math.random() * 0.08 - 0.04), 0.97)
        },
        svm: {
          prediction: isSpam ? 'spam' : 'legitimate',
          confidence: Math.min(baseConfidence + (Math.random() * 0.06 - 0.03), 0.96)
        }
      }
    };
    
    setResult(mockResult);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      detectSpam();
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          SMS Spam Detection
        </h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="sms-input" className="block text-sm font-semibold text-gray-700 mb-3">
            Enter SMS Message
          </label>
          <div className="relative">
            <textarea
              id="sms-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your SMS message here..."
              className="w-full p-5 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none h-36 transition-all duration-300 text-gray-800 placeholder-gray-400 shadow-sm hover:shadow-md"
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-md">
              {message.length}/160
            </div>
          </div>
        </div>
        
        <button
          onClick={detectSpam}
          disabled={!message.trim() || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="text-lg">Analyzing...</span>
            </>
          ) : (
            <>
              <Send className="h-6 w-6" />
              <span className="text-lg">Detect Spam</span>
            </>
          )}
        </button>
        
        {result && (
          <div className="mt-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200/50 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center space-x-4 mb-6">
              {result.prediction === 'spam' ? (
                <div className="p-3 bg-red-100 rounded-full animate-pulse">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
              ) : (
                <div className="p-3 bg-emerald-100 rounded-full animate-bounce">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
              )}
              <div>
                <h3 className={`text-2xl font-bold ${result.prediction === 'spam' ? 'text-red-700' : 'text-emerald-700'}`}>
                  {result.prediction === 'spam' ? 'SPAM DETECTED' : 'LEGITIMATE MESSAGE'}
                </h3>
                <p className="text-base text-gray-600 font-medium">
                  Confidence: {(result.confidence * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Naïve Bayes</h4>
                <div className="flex items-center justify-between">
                  <span className={`text-base font-semibold ${result.modelResults.naiveBayes.prediction === 'spam' ? 'text-red-600' : 'text-emerald-600'}`}>
                    {result.modelResults.naiveBayes.prediction}
                  </span>
                  <span className="text-base font-bold text-gray-700">
                    {(result.modelResults.naiveBayes.confidence * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${result.modelResults.naiveBayes.prediction === 'spam' ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-emerald-400 to-emerald-600'}`}
                    style={{ width: `${result.modelResults.naiveBayes.confidence * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Decision Tree</h4>
                <div className="flex items-center justify-between">
                  <span className={`text-base font-semibold ${result.modelResults.decisionTree.prediction === 'spam' ? 'text-red-600' : 'text-emerald-600'}`}>
                    {result.modelResults.decisionTree.prediction}
                  </span>
                  <span className="text-base font-bold text-gray-700">
                    {(result.modelResults.decisionTree.confidence * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${result.modelResults.decisionTree.prediction === 'spam' ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-emerald-400 to-emerald-600'}`}
                    style={{ width: `${result.modelResults.decisionTree.confidence * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Support Vector Machine</h4>
                <div className="flex items-center justify-between">
                  <span className={`text-base font-semibold ${result.modelResults.svm.prediction === 'spam' ? 'text-red-600' : 'text-emerald-600'}`}>
                    {result.modelResults.svm.prediction}
                  </span>
                  <span className="text-base font-bold text-gray-700">
                    {(result.modelResults.svm.confidence * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${result.modelResults.svm.prediction === 'spam' ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-emerald-400 to-emerald-600'}`}
                    style={{ width: `${result.modelResults.svm.confidence * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpamDetector;