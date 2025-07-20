'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TrackingEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'completed' | 'current' | 'pending';
  icon: string;
}

interface OrderDetails {
  orderId: string;
  trackingNumber: string;
  estimatedDelivery: string;
  currentStatus: string;
  product: {
    name: string;
    image: string;
    size: string;
    color: string;
    price: number;
  };
  deliveryAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  };
}

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const mockOrderData: OrderDetails = {
    orderId: 'ORD-2024-001234',
    trackingNumber: 'TRK789456123',
    estimatedDelivery: 'March 15, 2024',
    currentStatus: 'Out for Delivery',
    product: {
      name: 'Nike Air Max 270 - Black/White',
      image: 'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20270%20black%20white%20running%20shoes%20modern%20athletic%20footwear%20clean%20product%20photography%20with%20white%20background%20minimal%20style&width=400&height=400&seq=track1&orientation=squarish',
      size: 'US 9',
      color: 'Black/White',
      price: 12999
    },
    deliveryAddress: {
      name: 'John Doe',
      street: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      phone: '+91 98765 43210'
    }
  };

  const trackingEvents: TrackingEvent[] = [
    {
      id: '1',
      title: 'Order Placed',
      description: 'Your order has been successfully placed and confirmed',
      date: 'March 10, 2024',
      time: '02:30 PM',
      location: 'Mumbai, Maharashtra',
      status: 'completed',
      icon: 'ri-shopping-bag-line'
    },
    {
      id: '2',
      title: 'Payment Confirmed',
      description: 'Payment has been processed successfully',
      date: 'March 10, 2024',
      time: '02:32 PM',
      location: 'Mumbai, Maharashtra',
      status: 'completed',
      icon: 'ri-secure-payment-line'
    },
    {
      id: '3',
      title: 'Order Processing',
      description: 'Your order is being prepared for shipment',
      date: 'March 11, 2024',
      time: '10:15 AM',
      location: 'Warehouse, Delhi',
      status: 'completed',
      icon: 'ri-settings-line'
    },
    {
      id: '4',
      title: 'Shipped',
      description: 'Your order has been shipped from our warehouse',
      date: 'March 12, 2024',
      time: '04:45 PM',
      location: 'Delhi Distribution Center',
      status: 'completed',
      icon: 'ri-truck-line'
    },
    {
      id: '5',
      title: 'In Transit',
      description: 'Package is on its way to your city',
      date: 'March 13, 2024',
      time: '08:20 AM',
      location: 'Mumbai Sorting Facility',
      status: 'completed',
      icon: 'ri-road-map-line'
    },
    {
      id: '6',
      title: 'Out for Delivery',
      description: 'Your package is out for delivery and will arrive today',
      date: 'March 14, 2024',
      time: '09:00 AM',
      location: 'Mumbai Local Delivery Hub',
      status: 'current',
      icon: 'ri-e-bike-line'
    },
    {
      id: '7',
      title: 'Delivered',
      description: 'Package has been delivered successfully',
      date: 'Expected: March 15, 2024',
      time: 'Before 08:00 PM',
      location: 'Your Address',
      status: 'pending',
      icon: 'ri-check-line'
    }
  ];

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      setError('Please enter a valid order ID');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setOrderDetails(mockOrderData);
      setLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'current':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-500 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-500 border-gray-200';
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'bg-blue-500 text-white';
      case 'pending':
        return 'bg-gray-300 text-gray-500';
      default:
        return 'bg-gray-300 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mr-4">
              <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Track Your Order</h1>
          </div>
          <p className="text-gray-600">Enter your order ID to track your package in real-time</p>
        </div>

        {/* Order ID Input */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID (e.g., ORD-2024-001234)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleTrackOrder}
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? (
                  <span className="flex items-center">
                    <i className="ri-loader-line animate-spin w-4 h-4 mr-2"></i>
                    Tracking...
                  </span>
                ) : (
                  'Track Order'
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <i className="ri-error-warning-line w-4 h-4 mr-1"></i>
              {error}
            </p>
          )}
        </div>

        {/* Order Details */}
        {orderDetails && (
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={orderDetails.product.image}
                      alt={orderDetails.product.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{orderDetails.product.name}</h3>
                      <p className="text-sm text-gray-600">Size: {orderDetails.product.size}</p>
                      <p className="text-sm text-gray-600">Color: {orderDetails.product.color}</p>
                      <p className="text-lg font-semibold text-gray-900">₹{orderDetails.product.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-medium text-gray-900">{orderDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tracking Number:</span>
                    <span className="font-medium text-gray-900">{orderDetails.trackingNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Delivery:</span>
                    <span className="font-medium text-gray-900">{orderDetails.estimatedDelivery}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor('current')}`}>
                      {orderDetails.currentStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Address</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-gray-500 w-5 h-5 flex items-center justify-center mt-1"></i>
                  <div>
                    <p className="font-medium text-gray-900">{orderDetails.deliveryAddress.name}</p>
                    <p className="text-gray-600">{orderDetails.deliveryAddress.street}</p>
                    <p className="text-gray-600">
                      {orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress.state} - {orderDetails.deliveryAddress.pincode}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <i className="ri-phone-line w-4 h-4 inline mr-1"></i>
                      {orderDetails.deliveryAddress.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Tracking Timeline</h2>
              
              <div className="relative">
                {trackingEvents.map((event, index) => (
                  <div key={event.id} className="flex items-start space-x-4 pb-8 last:pb-0">
                    {/* Timeline Line */}
                    {index < trackingEvents.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                    )}
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColor(event.status)} relative z-10`}>
                      <i className={`${event.icon} w-5 h-5 flex items-center justify-center`}></i>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                          {event.status === 'completed' ? 'Completed' : event.status === 'current' ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <i className="ri-calendar-line w-4 h-4 mr-1"></i>
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <i className="ri-time-line w-4 h-4 mr-1"></i>
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <i className="ri-map-pin-line w-4 h-4 mr-1"></i>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <i className="ri-file-download-line text-blue-600 w-6 h-6 flex items-center justify-center mx-auto mb-2"></i>
                  <span className="text-sm font-medium text-gray-700">Download Invoice</span>
                </button>
                
                <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <i className="ri-customer-service-line text-blue-600 w-6 h-6 flex items-center justify-center mx-auto mb-2"></i>
                  <span className="text-sm font-medium text-gray-700">Contact Support</span>
                </button>
                
                <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <i className="ri-repeat-line text-blue-600 w-6 h-6 flex items-center justify-center mx-auto mb-2"></i>
                  <span className="text-sm font-medium text-gray-700">Reorder</span>
                </button>
                
                <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <i className="ri-star-line text-blue-600 w-6 h-6 flex items-center justify-center mx-auto mb-2"></i>
                  <span className="text-sm font-medium text-gray-700">Rate Product</span>
                </button>
              </div>
            </div>

            {/* Delivery Instructions */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Delivery Instructions</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Please ensure someone is available to receive the package</p>
                <p>• A valid ID proof may be required for delivery</p>
                <p>• Package will be delivered between 9:00 AM to 8:00 PM</p>
                <p>• In case of any issues, contact our support team</p>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <i className="ri-phone-line text-blue-600 w-8 h-8 flex items-center justify-center mx-auto mb-2"></i>
              <h3 className="font-medium text-gray-900 mb-1">Call Support</h3>
              <p className="text-sm text-gray-600">+91 1800-123-4567</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <i className="ri-mail-line text-blue-600 w-8 h-8 flex items-center justify-center mx-auto mb-2"></i>
              <h3 className="font-medium text-gray-900 mb-1">Email Support</h3>
              <p className="text-sm text-gray-600">support@shoestore.com</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <i className="ri-chat-1-line text-blue-600 w-8 h-8 flex items-center justify-center mx-auto mb-2"></i>
              <h3 className="font-medium text-gray-900 mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
