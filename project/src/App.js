import "./App.css";
import AdminPage from "./component/AdminDataBase/AdminPage";
 import Nav from "./component/Nav";
 import ProductPage from "./component/ProductPage/ProductPage";

function App() {
  // const images = [
  //   "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/60004/water-splash-flow-drop-of-water-60004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/8096777/pexels-photo-8096777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // ];

  return (
    <div className="App">
      {/* <Cart/> */}
      <Nav />
     <ProductPage />
     {/* <AdminPage /> */}
     
       
    </div>
  );
}

export default App;
