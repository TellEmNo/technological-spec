import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../store/favoritesSlice';

const products = {
  products: [
  {
  id: 1,
  name: "Ноутбук",
  description: "Легкий и мощный, идеальный для работы и развлечений.",
  price: 45000,
  available: true
  },
  {
  id: 2,
  name: "Чайник электрический",
  description: "Быстро кипятит воду, с функцией автоотключения.",
  price: 2500,
  available: true
  },
  {
  id: 3,
  name: "Смартфон",
  description: "С большим экраном, высокой производительностью и отличной камерой.",
  price: 60000,
  available: false
  }
  ]
  };

function ProductList() {
  const dispatch = useDispatch();

  const handleAddFavorite = (product) => {
    dispatch(addFavorite(product));
  };

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => handleAddFavorite(product)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
