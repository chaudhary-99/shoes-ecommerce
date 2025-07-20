'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProductGallery from '../ProductGallery';
import ProductInfo from '../ProductInfo';
import BackButton from '../../../components/BackButton';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('details');

  const products = {
    '1': {
      id: '1',
      name: 'Air Max Pro Runner',
      brand: 'Nike',
      category: 'Athletic',
      price: 8999,
      originalPrice: 12999,
      images: [
        'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20style%20athletic%20running%20shoes%20in%20white%20and%20blue%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20modern%20sporty%20design%2C%20high%20quality%20materials%2C%20premium%20athletic%20footwear&width=600&height=600&seq=detail1a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20style%20athletic%20running%20shoes%20in%20white%20and%20blue%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20front%20view%2C%20modern%20sporty%20design%2C%20high%20quality%20materials%2C%20premium%20athletic%20footwear&width=600&height=600&seq=detail1b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20style%20athletic%20running%20shoes%20in%20white%20and%20blue%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20back%20view%2C%20modern%20sporty%20design%2C%20high%20quality%20materials%2C%20premium%20athletic%20footwear&width=600&height=600&seq=detail1c&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20style%20athletic%20running%20shoes%20in%20white%20and%20blue%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20top%20view%2C%20modern%20sporty%20design%2C%20high%20quality%20materials%2C%20premium%20athletic%20footwear&width=600&height=600&seq=detail1d&orientation=squarish'
      ],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['White', 'Blue', 'Black', 'Red'],
      description: 'Experience ultimate comfort and performance with the Air Max Pro Runner. Featuring Nike\'s signature Air cushioning technology, breathable mesh upper, and durable rubber outsole designed for serious runners.',
      features: [
        'Nike Air cushioning technology for superior comfort',
        'Breathable mesh upper for optimal ventilation',
        'Durable rubber outsole with enhanced traction',
        'Lightweight foam midsole for responsive feel',
        'Reflective details for low-light visibility',
        'Perfect for daily runs and intensive training'
      ],
      rating: 4.8,
      reviews: 324,
      specifications: {
        'Weight': '280g (Size 9)',
        'Drop': '10mm',
        'Upper Material': 'Mesh and synthetic leather',
        'Sole': 'Rubber with waffle pattern',
        'Closure': 'Lace-up',
        'Technology': 'Nike Air Max'
      },
      sizeGuide: {
        'US 7': 'EU 40 | UK 6 | CM 25',
        'US 8': 'EU 41 | UK 7 | CM 26',
        'US 9': 'EU 42 | UK 8 | CM 27',
        'US 10': 'EU 43 | UK 9 | CM 28',
        'US 11': 'EU 44 | UK 10 | CM 29',
        'US 12': 'EU 45 | UK 11 | CM 30'
      },
      careInstructions: [
        'Remove loose dirt with a soft brush',
        'Use mild soap and water for cleaning',
        'Air dry at room temperature',
        'Avoid direct sunlight and heat sources',
        'Use shoe trees to maintain shape'
      ]
    },
    '2': {
      id: '2',
      name: 'Ultra Boost Energy',
      brand: 'Adidas',
      category: 'Athletic',
      price: 7499,
      originalPrice: 9999,
      images: [
        'https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%20style%20athletic%20shoes%20in%20black%20and%20white%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20modern%20running%20shoe%20design%2C%20premium%20materials%2C%20sporty%20aesthetic&width=600&height=600&seq=detail2a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%20style%20athletic%20shoes%20in%20black%20and%20white%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20front%20view%2C%20modern%20running%20shoe%20design%2C%20premium%20materials%2C%20sporty%20aesthetic&width=600&height=600&seq=detail2b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%20style%20athletic%20shoes%20in%20black%20and%20white%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20back%20view%2C%20modern%20running%20shoe%20design%2C%20premium%20materials%2C%20sporty%20aesthetic&width=600&height=600&seq=detail2c&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%20style%20athletic%20shoes%20in%20black%20and%20white%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20top%20view%2C%20modern%20running%20shoe%20design%2C%20premium%20materials%2C%20sporty%20aesthetic&width=600&height=600&seq=detail2d&orientation=squarish'
      ],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Black', 'White', 'Gray', 'Navy'],
      description: 'The Ultra Boost Energy delivers exceptional energy return with every step. Featuring Boost cushioning technology and a flexible Primeknit upper for adaptive comfort.',
      features: [
        'Boost cushioning for maximum energy return',
        'Primeknit upper for adaptive, sock-like fit',
        'Continental rubber outsole for superior grip',
        'Torsion System for enhanced midfoot integrity',
        'Supportive heel counter for stability',
        'Ideal for long-distance running and training'
      ],
      rating: 4.7,
      reviews: 289,
      specifications: {
        'Weight': '310g (Size 9)',
        'Drop': '10mm',
        'Upper Material': 'Primeknit textile',
        'Sole': 'Continental rubber',
        'Closure': 'Lace-up',
        'Technology': 'Boost cushioning'
      },
      sizeGuide: {
        'US 7': 'EU 40 | UK 6 | CM 25',
        'US 8': 'EU 41 | UK 7 | CM 26',
        'US 9': 'EU 42 | UK 8 | CM 27',
        'US 10': 'EU 43 | UK 9 | CM 28',
        'US 11': 'EU 44 | UK 10 | CM 29',
        'US 12': 'EU 45 | UK 11 | CM 30'
      },
      careInstructions: [
        'Clean with soft cloth and mild detergent',
        'Remove insoles before washing',
        'Machine wash cold on gentle cycle',
        'Air dry away from direct heat',
        'Use sneaker cleaner for tough stains'
      ]
    },
    '3': {
      id: '3',
      name: 'Classic Oxford',
      brand: 'Clarks',
      category: 'Formal',
      price: 6999,
      originalPrice: 8999,
      images: [
        'https://readdy.ai/api/search-image?query=Classic%20Oxford%20formal%20dress%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20elegant%20business%20shoe%20design%2C%20premium%20leather%20finish%2C%20sophisticated%20style&width=600&height=600&seq=detail3a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Classic%20Oxford%20formal%20dress%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20front%20view%2C%20elegant%20business%20shoe%20design%2C%20premium%20leather%20finish%2C%20sophisticated%20style&width=600&height=600&seq=detail3b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Classic%20Oxford%20formal%20dress%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20back%20view%2C%20elegant%20business%20shoe%20design%2C%20premium%20leather%20finish%2C%20sophisticated%20style&width=600&height=600&seq=detail3c&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Classic%20Oxford%20formal%20dress%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20top%20view%2C%20elegant%20business%20shoe%20design%2C%20premium%20leather%20finish%2C%20sophisticated%20style&width=600&height=600&seq=detail3d&orientation=squarish'
      ],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Brown', 'Black', 'Tan', 'Burgundy'],
      description: 'Timeless elegance meets modern comfort in these Classic Oxford shoes. Crafted from premium leather with traditional construction methods for lasting durability.',
      features: [
        'Premium full-grain leather upper',
        'Traditional Goodyear welt construction',
        'Leather-lined interior for breathability',
        'Cushioned OrthoLite insole for comfort',
        'Durable leather sole with rubber heel',
        'Perfect for business and formal occasions'
      ],
      rating: 4.9,
      reviews: 156,
      specifications: {
        'Weight': '450g (Size 9)',
        'Upper Material': 'Full-grain leather',
        'Sole': 'Leather with rubber heel',
        'Closure': 'Lace-up',
        'Construction': 'Goodyear welt',
        'Lining': 'Leather'
      },
      sizeGuide: {
        'US 7': 'EU 40 | UK 6 | CM 25',
        'US 8': 'EU 41 | UK 7 | CM 26',
        'US 9': 'EU 42 | UK 8 | CM 27',
        'US 10': 'EU 43 | UK 9 | CM 28',
        'US 11': 'EU 44 | UK 10 | CM 29',
        'US 12': 'EU 45 | UK 11 | CM 30'
      },
      careInstructions: [
        'Clean with leather cleaner and soft cloth',
        'Apply leather conditioner monthly',
        'Use cedar shoe trees when not wearing',
        'Polish regularly to maintain shine',
        'Store in dust bag when not in use'
      ]
    },
    '4': {
      id: '4',
      name: 'Comfort Loafers',
      brand: 'Hush Puppies',
      category: 'Casual',
      price: 4999,
      originalPrice: 6999,
      images: [
        'https://readdy.ai/api/search-image?query=Comfortable%20leather%20loafers%20in%20black%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20casual%20business%20shoe%20design%2C%20soft%20leather%20finish%2C%20comfortable%20style&width=600&height=600&seq=detail4a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Comfortable%20leather%20loafers%20in%20black%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20front%20view%2C%20casual%20business%20shoe%20design%2C%20soft%20leather%20finish%2C%20comfortable%20style&width=600&height=600&seq=detail4b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Comfortable%20leather%20loafers%20in%20black%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20back%20view%2C%20casual%20business%20shoe%20design%2C%20soft%20leather%20finish%2C%20comfortable%20style&width=600&height=600&seq=detail4c&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Comfortable%20leather%20loafers%20in%20black%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20top%20view%2C%20casual%20business%20shoe%20design%2C%20soft%20leather%20finish%2C%20comfortable%20style&width=600&height=600&seq=detail4d&orientation=squarish'
      ],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Black', 'Brown', 'Navy', 'Tan'],
      description: 'Step into comfort with these premium leather loafers. Perfect for both casual and business casual occasions, featuring cushioned comfort and slip-on convenience.',
      features: [
        'Soft leather upper for comfort',
        'Cushioned comfort insole with arch support',
        'Slip-on design for easy wear',
        'Flexible rubber sole for traction',
        'Breathable leather lining',
        'Versatile for multiple occasions'
      ],
      rating: 4.6,
      reviews: 198,
      specifications: {
        'Weight': '380g (Size 9)',
        'Upper Material': 'Soft leather',
        'Sole': 'Rubber',
        'Closure': 'Slip-on',
        'Fit': 'Regular width',
        'Lining': 'Leather'
      },
      sizeGuide: {
        'US 7': 'EU 40 | UK 6 | CM 25',
        'US 8': 'EU 41 | UK 7 | CM 26',
        'US 9': 'EU 42 | UK 8 | CM 27',
        'US 10': 'EU 43 | UK 9 | CM 28',
        'US 11': 'EU 44 | UK 10 | CM 29',
        'US 12': 'EU 45 | UK 11 | CM 30'
      },
      careInstructions: [
        'Wipe with damp cloth regularly',
        'Use leather conditioner monthly',
        'Allow to air dry completely',
        'Store with shoe trees',
        'Professional cleaning recommended'
      ]
    },
    '5': {
      id: '5',
      name: 'Street Style Sneakers',
      brand: 'Converse',
      category: 'Casual',
      price: 3999,
      originalPrice: 5999,
      images: [
        'https://readdy.ai/api/search-image?query=Converse%20style%20canvas%20sneakers%20in%20white%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20casual%20streetwear%20shoe%20design%2C%20classic%20canvas%20material%2C%20urban%20style&width=600&height=600&seq=detail5a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Converse%20style%20canvas%20sneakers%20in%20white%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20front%20view%2C%20casual%20streetwear%20shoe%20design%2C%20classic%20canvas%20material%2C%20urban%20style&width=600&height=600&seq=detail5b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Converse%20style%20canvas%20sneakers%20in%20white%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20back%20view%2C%20casual%20streetwear%20shoe%20design%2C%20classic%20canvas%20material%2C%20urban%20style&width=600&height=600&seq=detail5c&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Converse%20style%20canvas%20sneakers%20in%20white%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20top%20view%2C%20casual%20streetwear%20shoe%20design%2C%20classic%20canvas%20material%2C%20urban%20style&width=600&height=600&seq=detail5d&orientation=squarish'
      ],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['White', 'Black', 'Red', 'Navy', 'Gray'],
      description: 'Iconic streetwear style meets everyday comfort in these classic canvas sneakers. A timeless design that pairs perfectly with any casual outfit.',
      features: [
        'Durable canvas upper material',
        'Iconic rubber toe cap protection',
        'Cushioned insole for comfort',
        'Flexible rubber sole for movement',
        'Classic lace-up design',
        'Perfect for casual everyday wear'
      ],
      rating: 4.5,
      reviews: 421,
      specifications: {
        'Weight': '320g (Size 9)',
        'Upper Material': 'Canvas',
        'Sole': 'Rubber',
        'Closure': 'Lace-up',
        'Style': 'Low-top',
        'Fit': 'Regular'
      },
      sizeGuide: {
        'US 7': 'EU 40 | UK 6 | CM 25',
        'US 8': 'EU 41 | UK 7 | CM 26',
        'US 9': 'EU 42 | UK 8 | CM 27',
        'US 10': 'EU 43 | UK 9 | CM 28',
        'US 11': 'EU 44 | UK 10 | CM 29',
        'US 12': 'EU 45 | UK 11 | CM 30'
      },
      careInstructions: [
        'Machine wash cold with similar colors',
        'Use mild detergent only',
        'Air dry completely',
        'Avoid bleach and fabric softeners',
        'Clean rubber soles with soft brush'
      ]
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link href="/collection">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap">
              Back to Collection
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const canPurchase = selectedSize && selectedColor;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <i className="ri-arrow-right-s-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
            <Link href="/collection" className="text-gray-600 hover:text-blue-600">Collection</Link>
            <i className="ri-arrow-right-s-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <ProductGallery images={product.images} />
          
          <ProductInfo 
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
          />
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 bg-white">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'details'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'specifications'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('sizeGuide')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'sizeGuide'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Size Guide
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`py-4 px-1 border-b-2 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === 'care'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Care Instructions
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose This Product?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <i className="ri-award-line text-yellow-500 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <p className="font-medium text-gray-900">Premium Quality</p>
                        <p className="text-sm text-gray-600">Made with high-quality materials</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-truck-line text-green-500 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <p className="font-medium text-gray-900">Fast Shipping</p>
                        <p className="text-sm text-gray-600">Free delivery on orders above ₹999</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-arrow-left-right-line text-blue-500 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <p className="font-medium text-gray-900">Easy Returns</p>
                        <p className="text-sm text-gray-600">30-day hassle-free returns</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-customer-service-line text-purple-500 w-6 h-6 flex items-center justify-center"></i>
                      <div>
                        <p className="font-medium text-gray-900">Customer Support</p>
                        <p className="text-sm text-gray-600">24/7 customer assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <dl className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-3">
                        <dt className="font-medium text-gray-900 mb-1 sm:mb-0">{key}</dt>
                        <dd className="text-gray-700 sm:text-right">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            {activeTab === 'sizeGuide' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Size Guide</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Find your perfect fit using our size conversion chart:
                    </p>
                    <div className="space-y-3">
                      {Object.entries(product.sizeGuide).map(([size, conversion]) => (
                        <div key={size} className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-900">{size}</span>
                          <span className="text-gray-700">{conversion}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <i className="ri-information-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        For the best fit, measure your foot length and refer to our size chart above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Care Instructions</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Follow these care instructions to maintain your shoes and extend their lifespan:
                  </p>
                  <ul className="space-y-3">
                    {product.careInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-500 mr-3 mt-1 w-5 h-5 flex items-center justify-center"></i>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i}
                    className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 w-5 h-5 flex items-center justify-center`}
                  ></i>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">R</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Rahul Sharma</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                &ldquo;Excellent quality and very comfortable! Perfect for daily wear and the delivery was super fast.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">P</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Priya Patel</p>
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                    ))}
                    <i className="ri-star-line text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                &ldquo;Great value for money. The fit is perfect and the style is exactly what I was looking for.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Fixed Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-40">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
              <span className="text-lg text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
            </div>
            <Link href={canPurchase ? `/checkout?product=${product.id}&size=${selectedSize}&color=${selectedColor}` : '#'}>
              <button 
                className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap cursor-pointer ${
                  canPurchase 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!canPurchase}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
