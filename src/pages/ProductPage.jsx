import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);
console.log(product)
  if (!product) return <p>Loading...</p>;

  // yahaa perr hum attribute ko get karahee hai . kar kay jo jo humay attribute chayee wo hum get karlay gay like tile price 

  return (
    <div className="p-4">
      <img src={product.image} className="h-64 mx-auto" alt={product.title} />
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="text-xl text-green-600">${product.price}</p>
    </div>
  );
};

export default ProductPage;
