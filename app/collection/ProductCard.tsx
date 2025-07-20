'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            {discount}% OFF
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 w-4 h-4 flex items-center justify-center`}
                ></i>
              ))}
              <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border border-gray-300 ${
                    color === 'Black' ? 'bg-black' :
                    color === 'White' ? 'bg-white' :
                    color === 'Blue' ? 'bg-blue-500' :
                    color === 'Red' ? 'bg-red-500' :
                    color === 'Gray' ? 'bg-gray-500' :
                    color === 'Brown' ? 'bg-yellow-800' :
                    color === 'Navy' ? 'bg-blue-900' :
                    color === 'Tan' ? 'bg-yellow-600' :
                    color === 'Orange' ? 'bg-orange-500' :
                    'bg-gray-300'
                  }`}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
              )}
            </div>
            <span className="text-sm text-gray-500">{product.sizes.length} sizes</span>
          </div>
        </div>
      </Link>
    </div>
  );
}