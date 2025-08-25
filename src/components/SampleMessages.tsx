import React, { useState } from 'react';
import { MessageSquare, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const SampleMessages: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<string>('');
  
  const sampleMessages = [
    {
      text: "Congratulations! You've won a $1000 prize! Call now to claim your reward!",
      type: 'spam',
      confidence: 96.8
    },
    {
      text: "Hey, are we still meeting for lunch at 2pm?",
      type: 'legitimate',
      confidence: 94.2
    },
    {
      text: "URGENT: Your account will be suspended unless you verify immediately. Click here: bit.ly/verify123",
      type: 'spam',
      confidence: 98.9
    },
    {
      text: "Thanks for the meeting today. I'll send you the documents by tomorrow.",
      type: 'legitimate',
      confidence: 97.3
    },
    {
      text: "FREE iPhone! Limited time offer! Text STOP to opt out.",
      type: 'spam',
      confidence: 99.1
    },
    {
      text: "Your appointment is confirmed for 3:30 PM tomorrow. See you then!",
      type: 'legitimate',
      confidence: 95.6
    }
  ];

  const handleMessageClick = (message: string) => {
    setSelectedMessage(message);
    // You could emit this to a parent component to populate the main detector
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-500">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg">
          <MessageSquare className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Sample Messages
        </h2>
      </div>
      
      <p className="text-gray-600 mb-8 text-base font-medium">
        Click on any sample message to test the spam detection system
      </p>
      
      <div className="space-y-5">
        {sampleMessages.map((message, index) => (
          <div
            key={index}
            onClick={() => handleMessageClick(message.text)}
            className="p-5 border-2 border-gray-200 rounded-xl hover:border-blue-400 cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] bg-white/50 hover:bg-white/80"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {message.type === 'spam' ? (
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                ) : (
                  <div className="p-2 bg-emerald-100 rounded-full">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 text-base mb-3 leading-relaxed">{message.text}</p>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    message.type === 'spam' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {message.type === 'spam' ? 'Spam' : 'Legitimate'}
                  </span>
                  <span className="text-sm text-gray-600 font-medium">
                    {message.confidence}% confidence
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200/50">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <h4 className="font-bold text-gray-800 text-lg">Dataset Statistics</h4>
        </div>
        <div className="grid grid-cols-2 gap-6 text-base">
          <div>
            <span className="text-gray-600 font-medium">Total Messages:</span>
            <span className="font-bold ml-2 text-gray-800">5,574</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Spam Messages:</span>
            <span className="font-bold ml-2 text-red-600">747</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Legitimate Messages:</span>
            <span className="font-bold ml-2 text-emerald-600">4,827</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Data Quality:</span>
            <span className="font-bold ml-2 text-emerald-600">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleMessages;