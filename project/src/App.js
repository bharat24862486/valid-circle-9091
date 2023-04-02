import "./App.css";
import AdminPageLogin from "./component/AdminDataBase/AdminPageLogin";
import ResetPasswordForm from "./component/AdminDataBase/ResetPasswordForm";
 import Nav from "./component/Nav";
//  import {Cartpage} from "./pages/Cartpage";
 import KidsWear from "./component/ProductPage/KidsWear";
 import {Cart} from './component/cart/Cart'
 

 
function App() {
 

  
  return (
    <div className="App">
      {/* <Cart /> */}
  
     <KidsWear />
     {/* <AdminPageLogin />
     <ResetPasswordForm /> */}
  
       
    </div>
  );
}

export default App;
