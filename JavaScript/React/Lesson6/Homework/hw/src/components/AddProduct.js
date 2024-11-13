import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';
import { nanoid } from 'nanoid';

function AddProduct() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      id: nanoid(),
      name,
      description,
      price: Number(price),
      available,
    }));
    setName('');
    setDescription('');
    setPrice('');
    setAvailable(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></input>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={() => setAvailable(!available)}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
