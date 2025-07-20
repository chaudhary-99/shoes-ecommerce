'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface OrderData {
  product: {
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
  };
  userData: {
    name: string;
    email: string;
    mobile: string;
  };
  orderId: string;
  paymentId: string;
  amount: number;
}

export default function SuccessPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('orderData');
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <i className="ri-loader-line animate-spin w-8 h-8 flex items-center justify-center mx-auto mb-4"></i>
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-green-600 w-8 h-8 flex items-center justify-center"></i>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been confirmed.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
            
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium text-gray-900">{orderData.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment ID:</span>
                <span className="font-medium text-gray-900">{orderData.paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-medium text-gray-900">₹{orderData.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Product:</span>
                <span className="font-medium text-gray-900">{orderData.product.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium text-gray-900">{orderData.product.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color:</span>
                <span className="font-medium text-gray-900">{orderData.product.color}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Delivery Information</h3>
            <p className="text-sm text-gray-700 mb-2">
              Your order will be delivered to: {orderData.userData.name}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Email: {orderData.userData.email}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Mobile: {orderData.userData.mobile}
            </p>
            <p className="text-sm text-blue-600 font-medium">
              Expected delivery: 3-5 business days
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap">
                Continue Shopping
              </button>
            </Link>
            <Link href="/">
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Next?</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <i className="ri-mail-line text-blue-500 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm text-gray-700">You&apos;ll receive an order confirmation email shortly</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-truck-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm text-gray-700">We&apos;ll send you tracking information once your order ships</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-customer-service-line text-purple-500 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm text-gray-700">Contact our support team if you have any questions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
