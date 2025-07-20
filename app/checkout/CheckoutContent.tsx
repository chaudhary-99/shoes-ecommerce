
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BackButton from '../../components/BackButton';
import OrderSummary from './OrderSummary';
import UserForm from './UserForm';
import PaymentModal from './PaymentModal';

interface UserData {
  name: string;
  age: string;
  mobile: string;
  email: string;
}

export default function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    mobile: '',
    email: ''
  });

  const productId = searchParams.get('product');
  const size = searchParams.get('size');
  const color = searchParams.get('color');

  const products = {
    '1': {
      id: '1',
      name: 'Air Max Pro Runner',
      brand: 'Nike',
      price: 8999,
      originalPrice: 12999,
      image: 'https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20style%20athletic%20running%20shoes%20in%20white%20and%20blue%20colors%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view&width=200&height=200&seq=checkout1&orientation=squarish'
    },
    '2': {
      id: '2',
      name: 'Ultra Boost Energy',
      brand: 'Adidas',
      price: 7499,
      originalPrice: 9999,
      image: 'https://readdy.ai/api/search-image?query=Adidas%20Ultra%20Boost%20style%20athletic%20shoes%20in%20black%20and%20white%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view&width=200&height=200&seq=checkout2&orientation=squarish'
    },
    '3': {
      id: '3',
      name: 'Classic Oxford',
      brand: 'Clarks',
      price: 6999,
      originalPrice: 8999,
      image: 'https://readdy.ai/api/search-image?query=Classic%20Oxford%20formal%20dress%20shoes%20in%20brown%20leather%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view&width=200&height=200&seq=checkout3&orientation=squarish'
    },
    '4': {
      id: '4',
      name: 'Comfort Loafers',
      brand: 'Hush Puppies',
      price: 4999,
      originalPrice: 6999,
      image: 'https://readdy.ai/api/search-image?query=Comfortable%20leather%20loafers%20in%20black%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view&width=200&height=200&seq=checkout4&orientation=squarish'
    },
    '5': {
      id: '5',
      name: 'Street Style Sneakers',
      brand: 'Converse',
      price: 3999,
      originalPrice: 5999,
      image: 'https://readdy.ai/api/search-image?query=Converse%20style%20canvas%20sneakers%20in%20white%20color%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20side%20view&width=200&height=200&seq=checkout5&orientation=squarish'
    }
  };

  const selectedProduct = products[productId as keyof typeof products];

  const product = {
    id: selectedProduct?.id || '1',
    name: selectedProduct?.name || 'Premium Running Shoes',
    price: selectedProduct?.price || 4999,
    originalPrice: selectedProduct?.originalPrice || 6999,
    image: selectedProduct?.image || 'https://readdy.ai/api/search-image?query=premium%20running%20shoes%20product%20photo%20with%20clean%20white%20background%2C%20professional%20lighting%2C%20side%20view%2C%20modern%20athletic%20footwear%2C%20comfortable%20design%2C%20high%20quality%20materials%2C%20sleek%20silhouette&width=300&height=300&seq=checkout1&orientation=squarish',
    size: size || '',
    color: color || ''
  };

  const handleFormSubmit = (data: UserData) => {
    setUserData(data);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    const orderData = {
      product,
      userData,
      orderId: 'ORD' + Date.now(),
      paymentId: 'PAY' + Date.now(),
      amount: product.price + 99
    };

    localStorage.setItem('orderData', JSON.stringify(orderData));
    router.push('/success');
  };

  const handlePaymentFailure = () => {
    router.push('/failure');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackButton />

        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <UserForm onSubmit={handleFormSubmit} />
            </div>

            <div>
              <OrderSummary product={product} />
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          amount={product.price + 99}
          onSuccess={handlePaymentSuccess}
          onFailure={handlePaymentFailure}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}
