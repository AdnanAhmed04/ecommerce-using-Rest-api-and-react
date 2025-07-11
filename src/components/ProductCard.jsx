import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-4 flex flex-col items-center space-y-3"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain"
      />
      <h3 className="text-center text-md font-semibold line-clamp-2 h-12">
        {product.title}
      </h3>
      <p className="text-green-700 font-bold text-lg">${product.price}</p>
      <p className="text-sm text-gray-500">Rating: ⭐ {product.rating.rate}</p>

      <button
        className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded w-full transition duration-200"
        onClick={(e) => {
          e.stopPropagation(); 
          // Add to Cart logic here
          console.log('Add to Cart:', product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
