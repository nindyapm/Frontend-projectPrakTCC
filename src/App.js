import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProducts";
import EditProduct from "./components/EditProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
