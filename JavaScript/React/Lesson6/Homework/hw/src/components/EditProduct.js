import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { updateProduct } from '../store/productSlice';

function EditProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Инициализируем navigate

  // Получаем текущий продукт из состояния Redux
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      id: productId,
      name,
      description,
      price: Number(price),
      available,
    }));
    
    // После сохранения изменений, перенаправляем обратно к списку товаров
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
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
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditProduct;
