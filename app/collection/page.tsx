'use client';

import { useState } from 'react';
import BackButton from '../../components/BackButton';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: '1',
      name: 'Air Max Pro Runner',
      brand: 'Nike',
      category: 'athletic',
      price: 8999,
      originalPrice: 12999,
      image: 'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20style%20athletic%20running%20shoes%20in%20white%20and%20blue%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20modern%20sporty%20design&width=400&height=400&seq=prod1&orientation=squarish',
      rating: 4.8,
      reviews: 324,
      colors: ['White', 'Blue', 'Black'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '2',
      name: 'Ultra Boost Energy',
      brand: 'Adidas',
      category: 'athletic',
      price: 7499,
      originalPrice: 9999,
      image: 'https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%20style%20athletic%20shoes%20in%20black%20and%20white%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20modern%20running%20shoe%20design&width=400&height=400&seq=prod2&orientation=squarish',
      rating: 4.7,
      reviews: 289,
      colors: ['Black', 'White', 'Gray'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '3',
      name: 'Classic Oxford',
      brand: 'Clarks',
      category: 'formal',
      price: 6999,
      originalPrice: 8999,
      image: 'https://readdy.ai/api/search-image?query=Classic%20Oxford%20formal%20dress%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20elegant%20business%20shoe%20design&width=400&height=400&seq=prod3&orientation=squarish',
      rating: 4.9,
      reviews: 156,
      colors: ['Brown', 'Black', 'Tan'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '4',
      name: 'Comfort Loafers',
      brand: 'Hush Puppies',
      category: 'casual',
      price: 4999,
      originalPrice: 6999,
      image: 'https://readdy.ai/api/search-image?query=Comfortable%20leather%20loafers%20in%20black%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20casual%20business%20shoe%20design&width=400&height=400&seq=prod4&orientation=squarish',
      rating: 4.6,
      reviews: 198,
      colors: ['Black', 'Brown', 'Navy'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '5',
      name: 'Street Style Sneakers',
      brand: 'Converse',
      category: 'casual',
      price: 3999,
      originalPrice: 5999,
      image: 'https://readdy.ai/api/search-image?query=Converse%20style%20canvas%20sneakers%20in%20white%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20casual%20streetwear%20shoe%20design&width=400&height=400&seq=prod5&orientation=squarish',
      rating: 4.5,
      reviews: 421,
      colors: ['White', 'Black', 'Red', 'Navy'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '6',
      name: 'Basketball Pro',
      brand: 'Nike',
      category: 'athletic',
      price: 9999,
      originalPrice: 13999,
      image: 'https://readdy.ai/api/search-image?query=Nike%20basketball%20shoes%20in%20red%20and%20black%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20high-top%20athletic%20shoe%20design&width=400&height=400&seq=prod6&orientation=squarish',
      rating: 4.9,
      reviews: 267,
      colors: ['Red', 'Black', 'White'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '7',
      name: 'Derby Elegance',
      brand: 'Clarks',
      category: 'formal',
      price: 7999,
      originalPrice: 10999,
      image: 'https://readdy.ai/api/search-image?query=Derby%20style%20formal%20dress%20shoes%20in%20black%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20elegant%20business%20shoe%20design&width=400&height=400&seq=prod7&orientation=squarish',
      rating: 4.8,
      reviews: 134,
      colors: ['Black', 'Brown'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '8',
      name: 'Casual Canvas',
      brand: 'Vans',
      category: 'casual',
      price: 3499,
      originalPrice: 4999,
      image: 'https://readdy.ai/api/search-image?query=Vans%20style%20canvas%20shoes%20in%20blue%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20casual%20skateboard%20shoe%20design&width=400&height=400&seq=prod8&orientation=squarish',
      rating: 4.4,
      reviews: 356,
      colors: ['Blue', 'Black', 'White', 'Gray'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '9',
      name: 'Training Beast',
      brand: 'Adidas',
      category: 'athletic',
      price: 6999,
      originalPrice: 8999,
      image: 'https://readdy.ai/api/search-image?query=Adidas%20training%20shoes%20in%20gray%20and%20orange%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20cross-training%20athletic%20shoe%20design&width=400&height=400&seq=prod9&orientation=squarish',
      rating: 4.7,
      reviews: 203,
      colors: ['Gray', 'Orange', 'Black'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '10',
      name: 'Hiking Explorer',
      brand: 'Timberland',
      category: 'outdoor',
      price: 8499,
      originalPrice: 11999,
      image: 'https://readdy.ai/api/search-image?query=Timberland%20hiking%20boots%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20outdoor%20adventure%20boot%20design&width=400&height=400&seq=prod10&orientation=squarish',
      rating: 4.9,
      reviews: 187,
      colors: ['Brown', 'Black', 'Tan'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '11',
      name: 'Formal Monk',
      brand: 'Cole Haan',
      category: 'formal',
      price: 9499,
      originalPrice: 12999,
      image: 'https://readdy.ai/api/search-image?query=Monk%20strap%20formal%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20elegant%20business%20shoe%20design&width=400&height=400&seq=prod11&orientation=squarish',
      rating: 4.8,
      reviews: 95,
      colors: ['Brown', 'Black'],
      sizes: ['7', '8', '9', '10', '11', '12']
    },
    {
      id: '12',
      name: 'Slip-On Comfort',
      brand: 'Skechers',
      category: 'casual',
      price: 4499,
      originalPrice: 6499,
      image: 'https://readdy.ai/api/search-image?query=Skechers%20slip-on%20casual%20shoes%20in%20navy%20blue%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view%2C%20comfortable%20walking%20shoe%20design&width=400&height=400&seq=prod12&orientation=squarish',
      rating: 4.6,
      reviews: 276,
      colors: ['Navy', 'Black', 'Gray'],
      sizes: ['7', '8', '9', '10', '11', '12']
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    
    let priceMatch = true;
    if (selectedPriceRange === 'under-5000') {
      priceMatch = product.price < 5000;
    } else if (selectedPriceRange === '5000-8000') {
      priceMatch = product.price >= 5000 && product.price <= 8000;
    } else if (selectedPriceRange === 'above-8000') {
      priceMatch = product.price > 8000;
    }

    return categoryMatch && brandMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return 0;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton />
        
        <div className="mt-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shoe Collection</h1>
          <p className="text-gray-600">Discover our complete range of premium footwear</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 flex-shrink-0">
            <FilterSection
              selectedCategory={selectedCategory}
              selectedPriceRange={selectedPriceRange}
              selectedBrand={selectedBrand}
              onCategoryChange={setSelectedCategory}
              onPriceRangeChange={setSelectedPriceRange}
              onBrandChange={setSelectedBrand}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-search-line text-gray-400 w-16 h-16 flex items-center justify-center mx-auto mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}