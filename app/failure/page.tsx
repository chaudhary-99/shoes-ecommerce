
'use client';

import Link from 'next/link';

export default function FailurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-close-line text-red-600 w-8 h-8 flex items-center justify-center"></i>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Failed</h1>
          <p className="text-gray-600 mb-8">Unfortunately, your payment could not be processed. Please try again.</p>
          
          <div className="bg-red-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-red-900 mb-4">Common Reasons for Payment Failure</h2>
            <ul className="text-left space-y-2 text-sm text-red-800">
              <li className="flex items-start space-x-2">
                <i className="ri-information-line w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span>Insufficient funds in your account</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-information-line w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span>Incorrect card details or expired card</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-information-line w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span>Network connectivity issues</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="ri-information-line w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span>Transaction declined by your bank</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">What You Can Do</h3>
            <div className="space-y-2 text-left">
              <div className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span className="text-sm text-gray-700">Check your internet connection and try again</span>
              </div>
              <div className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span className="text-sm text-gray-700">Verify your card details and account balance</span>
              </div>
              <div className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span className="text-sm text-gray-700">Try using a different payment method</span>
              </div>
              <div className="flex items-start space-x-2">
                <i className="ri-check-line text-blue-600 w-4 h-4 flex items-center justify-center mt-0.5"></i>
                <span className="text-sm text-gray-700">Contact your bank if the issue persists</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap">
                Retry Payment
              </button>
            </Link>
            <Link href="/product">
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                Back to Product
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <i className="ri-customer-service-line text-blue-500 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm text-gray-700">Contact our support team: support@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-phone-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm text-gray-700">Call us: +91-9876543210</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-chat-1-line text-purple-500 w-5 h-5 flex items-center justify-center"></i>
              <span className="text-sm text-gray-700">Live chat available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
