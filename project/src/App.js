import "./App.css";
import AdminPageLogin from "./component/AdminDataBase/AdminPageLogin";
import ResetPasswordForm from "./component/AdminDataBase/ResetPasswordForm";
 import Nav from "./component/Nav";
 import ProductPage from "./component/ProductPage/ProductPage";

function App() { 

  
  return (
    <div className="App">
      {/* <Cart/> */}
      <Nav />
     <ProductPage />
     {/* <AdminPageLogin /> */}
     {/* <ResetPasswordForm /> */}
       
    </div>
  );
}

export default App;
