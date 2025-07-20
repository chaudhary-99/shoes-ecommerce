'use client';

interface FilterSectionProps {
  selectedCategory: string;
  selectedPriceRange: string;
  selectedBrand: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onBrandChange: (brand: string) => void;
}

export default function FilterSection({
  selectedCategory,
  selectedPriceRange,
  selectedBrand,
  onCategoryChange,
  onPriceRangeChange,
  onBrandChange
}: FilterSectionProps) {
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'athletic', name: 'Athletic' },
    { id: 'formal', name: 'Formal' },
    { id: 'casual', name: 'Casual' },
    { id: 'outdoor', name: 'Outdoor' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-5000', name: 'Under ₹5,000' },
    { id: '5000-8000', name: '₹5,000 - ₹8,000' },
    { id: 'above-8000', name: 'Above ₹8,000' }
  ];

  const brands = [
    { id: 'all', name: 'All Brands' },
    { id: 'Nike', name: 'Nike' },
    { id: 'Adidas', name: 'Adidas' },
    { id: 'Clarks', name: 'Clarks' },
    { id: 'Hush Puppies', name: 'Hush Puppies' },
    { id: 'Converse', name: 'Converse' },
    { id: 'Vans', name: 'Vans' },
    { id: 'Timberland', name: 'Timberland' },
    { id: 'Cole Haan', name: 'Cole Haan' },
    { id: 'Skechers', name: 'Skechers' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value={range.id}
                  checked={selectedPriceRange === range.id}
                  onChange={(e) => onPriceRangeChange(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">{range.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Brand</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="brand"
                  value={brand.id}
                  checked={selectedBrand === brand.id}
                  onChange={(e) => onBrandChange(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">{brand.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <button
            onClick={() => {
              onCategoryChange('all');
              onPriceRangeChange('all');
              onBrandChange('all');
            }}
            className="w-full py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer whitespace-nowrap"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
}