import React, { useEffect, useState, memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const { url } = useRouteMatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let didCancel = false;

    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');

      if (!didCancel) setProducts(response.data);
    };

    getProducts();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            /* eslint-disable react/no-array-index-key */
            <Link
              key={product.id}
              to={`${url}/${product.id}`}
              className="group"
            >
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="inset-0" />
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category || 'category'}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Products);
