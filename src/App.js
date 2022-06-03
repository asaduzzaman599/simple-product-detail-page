
import './App.css';
import ProductContext, { ContextProduct } from './ReducerAndContext/ProductContext';
import ProductDetail from './Component/ProductDetail';

function App() {


  return (
    <ProductContext>
      <div className="App max-h-screen mx-auto">
        <ProductDetail></ProductDetail>

      </div>
    </ProductContext>
  );
}

export default App;
