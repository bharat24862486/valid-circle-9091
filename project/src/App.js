 
import './App.css';
import { Cart } from './component/cart/Cart';
import Nav from './component/Nav';
import ProductPage from './component/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
     {/* <Cart/> */}
     <Nav />
     <ProductPage />
    </div>
  );
}

export default App;
