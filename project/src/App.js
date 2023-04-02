import "./App.css";
import AdminPageLogin from "./component/AdminDataBase/AdminPageLogin";
import ResetPasswordForm from "./component/AdminDataBase/ResetPasswordForm";
 import Nav from "./component/Nav";
//  import {Cartpage} from "./pages/Cartpage";
 import KidsWear from "./component/ProductPage/KidsWear";
 import {Cart} from './component/cart/Cart'
 import Footer from './component/footer/Footer'
 import SingleProduct from './component/singlePage/SingleProduct'
 
function App() {
 

  
  return (
    <div className="App">
      {/* <Cart /> */}
  <Nav/>
  <SingleProduct />
  
  <Footer  />
     <KidsWear />
     {/* <AdminPageLogin />
     <ResetPasswordForm /> */}
  
       
    </div>
  );
}

export default App;
