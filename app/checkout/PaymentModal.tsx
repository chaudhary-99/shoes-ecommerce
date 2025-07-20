
'use client';

import { useState } from 'react';

interface PaymentModalProps {
  amount: number;
  onSuccess: () => void;
  onFailure: () => void;
  onClose: () => void;
}

export default function PaymentModal({ amount, onSuccess, onFailure, onClose }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState('razorpay');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'razorpay',
      name: 'Razorpay',
      icon: 'ri-bank-card-line',
      description: 'Credit/Debit Card, UPI, Net Banking'
    },
    {
      id: 'paytm',
      name: 'Paytm',
      icon: 'ri-wallet-line',
      description: 'Paytm Wallet, UPI'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: 'ri-smartphone-line',
      description: 'Google Pay, PhonePe, BHIM'
    }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      const success = Math.random() > 0.3;
      
      if (success) {
        onSuccess();
      } else {
        onFailure();
      }
      
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount to Pay</span>
              <span className="text-2xl font-bold text-gray-900">₹{amount}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Select Payment Method</h3>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full text-left p-3 rounded-lg border cursor-pointer ${
                  selectedMethod === method.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${method.icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
                  <div>
                    <div className="font-medium text-gray-900">{method.name}</div>
                    <div className="text-sm text-gray-500">{method.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer ${
              isProcessing
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-2">
                <i className="ri-loader-line animate-spin w-5 h-5 flex items-center justify-center"></i>
                <span>Processing...</span>
              </div>
            ) : (
              `Pay ₹${amount}`
            )}
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Secure payment powered by industry-standard encryption
          </p>
        </div>
      </div>
    </div>
  );
}
