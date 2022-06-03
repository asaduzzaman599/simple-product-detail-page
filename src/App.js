import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { axiosBase } from './api/api';
import ProductContext, { ContextProduct } from './ReducerAndContext/ProductContext';
import ProductDetail from './Component/ProductDetail';

function App() {


  return (
    <ProductContext>
      <div className="App max-h-screen">
        <ProductDetail></ProductDetail>

      </div>
    </ProductContext>
  );
}

export default App;
