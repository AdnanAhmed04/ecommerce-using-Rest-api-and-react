import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
import { AiOutlineLoading } from "react-icons/ai";


const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);
  console.log(product)
  if (!product) return <div className="flex items-center justify-center h-screen">
    <p className="w-[600px] text-center"><AiOutlineLoading className='text-black' />
    </p>
  </div>

  // yahaa perr hum attribute ko get karahee hai . kar kay jo jo humay attribute chayee wo hum get karlay gay like tile price 

  return (
    <div className='flex items-center bg-gray-100 justify-center h-screen'>
      <div className="p-4  bg-white rounded-2xl w-200 ">
        <img src={product.image} className="h-64 mx-auto" alt={product.title} />
        <div className=''>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p className='text-green-600'>Rating : {product.rating.rate}</p>

          <p className="text-xl text-green-600">${product.price}</p>
          <button className='bg-red-600 hover:bg-red-500 p-2 rounded text-white w-full'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
