
'use client';

import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  size: string;
  color: string;
}

interface OrderSummaryProps {
  product: Product;
}

export default function OrderSummary({ product }: OrderSummaryProps) {
  const deliveryCharge = 99;
  const discount = product.originalPrice - product.price;
  const total = product.price + deliveryCharge;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={80}
            height={80}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">Size: {product.size}</p>
          <p className="text-sm text-gray-600">Color: {product.color}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">₹{product.price}</p>
          <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
        </div>
      </div>

      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">₹{product.price}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Delivery Charges</span>
          <span className="text-gray-900">₹{deliveryCharge}</span>
        </div>
        <div className="flex justify-between text-sm text-green-600">
          <span>Discount</span>
          <span>-₹{discount}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-semibold text-lg">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">₹{total}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <i className="ri-truck-line text-green-600 w-5 h-5 flex items-center justify-center"></i>
          <span className="text-sm text-green-800">Free delivery on orders above ₹999</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <i className="ri-shield-check-line text-green-600 w-5 h-5 flex items-center justify-center"></i>
          <span className="text-sm text-green-800">Secure payment guaranteed</span>
        </div>
      </div>
    </div>
  );
}
