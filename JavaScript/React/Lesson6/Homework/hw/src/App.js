import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Product Catalog</h1>
          <AddProduct />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/edit/:productId" element={<EditProduct />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
