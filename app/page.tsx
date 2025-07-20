'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20premium%20athletic%20shoes%20store%20interior%20with%20sleek%20minimalist%20design%2C%20bright%20lighting%2C%20contemporary%20shoe%20displays%2C%20clean%20white%20and%20blue%20color%20scheme%2C%20professional%20retail%20environment%2C%20luxurious%20shopping%20atmosphere&width=1920&height=1080&seq=hero1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Step Into Excellence
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover premium footwear that combines style, comfort, and performance. Your perfect pair awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collection">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap text-lg">
                Shop Collection
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 cursor-pointer whitespace-nowrap text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to delivering exceptional quality and service that exceeds your expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-blue-600 w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted with finest materials and attention to detail</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-green-600 w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Free express shipping on orders above ₹999 nationwide</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-purple-600 w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Payment</h3>
              <p className="text-gray-600">Safe and encrypted payment processing with multiple options</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-orange-600 w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service for all your queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find your perfect style from our curated collections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Premium%20athletic%20running%20shoes%20in%20vibrant%20colors%20on%20clean%20white%20background%2C%20professional%20product%20photography%2C%20modern%20sporty%20design%2C%20high-end%20footwear%20collection%20display&width=400&height=300&seq=cat1&orientation=landscape"
                  alt="Athletic Shoes"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Athletic Shoes</h3>
                  <p className="text-gray-200 mb-4">Performance meets style</p>
                  <Link href="/collection">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Elegant%20formal%20dress%20shoes%20in%20black%20and%20brown%20leather%2C%20classic%20business%20footwear%2C%20professional%20shoe%20photography%2C%20luxury%20mens%20formal%20shoes%20on%20clean%20background&width=400&height=300&seq=cat2&orientation=landscape"
                  alt="Formal Shoes"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Formal Shoes</h3>
                  <p className="text-gray-200 mb-4">Elegance redefined</p>
                  <Link href="/collection">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Comfortable%20casual%20lifestyle%20sneakers%20in%20trendy%20colors%2C%20modern%20streetwear%20footwear%2C%20stylish%20everyday%20shoes%2C%20urban%20fashion%20sneakers%20on%20clean%20white%20background&width=400&height=300&seq=cat3&orientation=landscape"
                  alt="Casual Shoes"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Casual Shoes</h3>
                  <p className="text-gray-200 mb-4">Comfort for every day</p>
                  <Link href="/collection">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl text-blue-100">Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl text-blue-100">Cities</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5★</div>
              <div className="text-xl text-blue-100">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">AK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arjun Kumar</h4>
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Amazing quality shoes! The comfort is unmatched and the design is exactly what I was looking for. Highly recommended!&rdquo;</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">PS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Fast delivery and excellent customer service. The shoes fit perfectly and look even better than in the pictures!&rdquo;</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">RG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rahul Gupta</h4>
                  <div className="flex text-yellow-400">
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&ldquo;Best online shopping experience! Great variety, competitive prices, and the quality exceeded my expectations.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">Get the latest updates on new arrivals, exclusive offers, and more</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Store</h3>
              <p className="text-gray-400 mb-4">Premium footwear for every occasion. Quality, comfort, and style in every step.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  <i className="ri-facebook-fill w-4 h-4 flex items-center justify-center"></i>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500">
                  <i className="ri-twitter-fill w-4 h-4 flex items-center justify-center"></i>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700">
                  <i className="ri-instagram-fill w-4 h-4 flex items-center justify-center"></i>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Contact</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Size Guide</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Return Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/collection" className="hover:text-white cursor-pointer">Athletic Shoes</Link></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Formal Shoes</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Casual Shoes</a></li>
                <li><a href="#" className="hover:text-white cursor-pointer">Accessories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-phone-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  +91 98765 43210
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  info@ourstore.com
                </li>
                <li className="flex items-center">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Our Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
