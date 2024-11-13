import React from 'react';
import ProductList from './components/ProductList';
import FavoritesList from './components/FavoritesList';

function App() {
  return (
    <div>
      <h1>Product and Favorites App</h1>
      <ProductList />
      <FavoritesList />
    </div>
  );
}

export default App;
