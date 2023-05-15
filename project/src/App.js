import { Navbar } from "reactstrap";
import "./App.css";
import CartEmpty from "./Cart/CartEmpty";
import Navbar2 from "./Cart/Navbar2";
import AllRoutes from "./Routes";
import AdminPageLogin from "./component/AdminDataBase/AdminPageLogin";
import ResetPasswordForm from "./component/AdminDataBase/ResetPasswordForm";
 import Nav from "./component/Nav";
//  import {Cartpage} from "./pages/Cartpage";
 import KidsWear from "./component/ProductPage/KidsWear";
 import MensWear from "./component/ProductPage/MensWear";
 import WomensWear from "./component/ProductPage/WomensWear";
 import {Cart} from './component/cart/Cart'
 import Footer from './component/footer/Footer'
 import SingleProduct from './component/singlePage/SingleProduct' 
import Otp from "./pages/Otp";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Signup from "./pages/Signup";
import CartCard from "./Cart/CartCard";
import CartPage from "./Cart/CartPage";
// import Yoga from "./pages/Yoga";
// import Footer from "./pages/Signup";
 
function App() {
 

  
  return (
    <div className="App">
      {/* <Nav /> */}
   <AllRoutes />
  {/* <Footer /> */}
   {/* <Signup />
   <Otp /> */}
   {/* <Yoga /> */}
{/* <Navbar2 /> */}
{/* <Nav /> */}
{/* <CartEmpty /> */}
{/* <CartPage /> */}
{/* <CartCard /> */}

    </div>
  );
}

export default App;
