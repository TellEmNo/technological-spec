import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleProductAvailability } from '../store/productSlice';
import { Link } from 'react-router-dom';

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleProductAvailability(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => handleToggleAvailability(product.id)}>
              Toggle Availability
            </button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button>
              <Link to={`/edit/${product.id}`}>Edit</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
