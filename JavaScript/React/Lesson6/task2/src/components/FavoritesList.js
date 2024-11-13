import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../store/favoritesSlice';

function FavoritesList() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite products added yet.</p>
      ) : (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Available: {product.available ? 'Yes' : 'No'}</p>
              <button onClick={() => handleRemoveFavorite(product.id)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;
