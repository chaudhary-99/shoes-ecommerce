
'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer"
    >
      <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
      <span>Back</span>
    </button>
  );
}
