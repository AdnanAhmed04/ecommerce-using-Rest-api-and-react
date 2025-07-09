import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
