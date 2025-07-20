
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice: number;
    category: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    sizes: string[];
    colors: string[];
    discount: number;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      return;
    }
    
    const params = new URLSearchParams({
      product: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity.toString()
    });
    
    router.push(`/checkout?${params.toString()}`);
  };

  const canPurchase = selectedSize && selectedColor;

  const getColorClass = (color: string) => {
    switch (color.toLowerCase()) {
      case 'white': return 'bg-white border-2 border-gray-300';
      case 'black': return 'bg-black';
      case 'blue': return 'bg-blue-500';
      case 'red': return 'bg-red-500';
      case 'gray': return 'bg-gray-500';
      case 'brown': return 'bg-yellow-800';
      case 'navy': return 'bg-blue-900';
      case 'tan': return 'bg-yellow-600';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Product Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
            {product.brand}
          </span>
          <span className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
        
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-500 w-4 h-4`}
                ></i>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <span className="text-sm text-gray-600">{product.reviews} reviews</span>
          <div className="h-4 w-px bg-gray-200"></div>
          <span className={`text-sm font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
          </span>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100">
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
        </div>
        <p className="text-sm text-green-700 font-semibold">You save ₹{(product.originalPrice - product.price).toLocaleString()} ({product.discount}% off)</p>
        <div className="flex items-center gap-2 mt-3">
          <i className="ri-time-line text-orange-600 w-4 h-4"></i>
          <span className="text-sm text-orange-700 font-medium">Limited time offer - ends soon!</span>
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Select Size</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer transition-colors">
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-lg border-2 transition-all font-semibold text-sm cursor-pointer whitespace-nowrap ${
                selectedSize === size
                  ? 'border-blue-600 bg-blue-600 text-white shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Select Color</h3>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-lg border-2 transition-all cursor-pointer relative ${
                selectedColor === color
                  ? 'border-blue-600 shadow-md ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              title={color}
            >
              <div className={`w-full h-full rounded-md ${getColorClass(color)}`}>
                {selectedColor === color && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="ri-check-line text-white w-4 h-4 drop-shadow-lg"></i>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quantity</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-9 h-9 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all"
          >
            <i className="ri-subtract-line w-4 h-4"></i>
          </button>
          <span className="text-lg font-bold text-gray-900 min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-9 h-9 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all"
          >
            <i className="ri-add-line w-4 h-4"></i>
          </button>
        </div>
      </div>

      {/* Warning Message */}
      {!canPurchase && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center">
            <i className="ri-error-warning-line text-amber-600 mr-2 w-5 h-5"></i>
            <p className="text-sm text-amber-800 font-medium">
              Please select both size and color to proceed with purchase.
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="hidden lg:block">
          <button
            onClick={handleBuyNow}
            disabled={!canPurchase}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all cursor-pointer whitespace-nowrap shadow-lg flex items-center justify-center gap-2 ${
              canPurchase
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <i className="ri-shopping-bag-line w-5 h-5"></i>
            Buy Now - ₹{(product.price * quantity).toLocaleString()}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer whitespace-nowrap shadow-sm flex items-center justify-center gap-2 ${
              isWishlisted
                ? 'bg-red-100 text-red-700 border-2 border-red-200 hover:bg-red-200'
                : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
            }`}
          >
            <i className={`w-4 h-4 ${isWishlisted ? 'ri-heart-fill' : 'ri-heart-line'}`}></i>
            {isWishlisted ? 'Wishlisted' : 'Wishlist'}
          </button>
          
          <button className="py-3 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all cursor-pointer whitespace-nowrap shadow-sm flex items-center justify-center gap-2">
            <i className="ri-share-line w-4 h-4"></i>
            Share
          </button>
        </div>
      </div>

      {/* Product Benefits */}
      <div className="border-t pt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Why Choose This Product</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
              <i className="ri-truck-line text-green-700 w-5 h-5"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Free Delivery</p>
              <p className="text-xs text-gray-600">On orders above ₹999</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <i className="ri-arrow-left-right-line text-blue-700 w-5 h-5"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Easy Returns</p>
              <p className="text-xs text-gray-600">30-day return policy</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
              <i className="ri-shield-check-line text-purple-700 w-5 h-5"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Secure Payment</p>
              <p className="text-xs text-gray-600">100% secure transactions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50">
            <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
              <i className="ri-customer-service-line text-orange-700 w-5 h-5"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">24/7 Support</p>
              <p className="text-xs text-gray-600">Customer assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <i className="ri-flashlight-line text-blue-700 w-5 h-5"></i>
          <span className="font-bold text-blue-900 text-sm">Limited Time Special Offer</span>
        </div>
        <p className="text-sm text-blue-800">
          Get additional 5% off on prepaid orders. Use code: <span className="font-bold">PREPAID5</span>
        </p>
      </div>
    </div>
  );
}
