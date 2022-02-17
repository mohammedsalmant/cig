import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductList from './Components/Product/ProductList/ProductList';
import Home  from './Components/Home';
import Nav1 from './Components/Navbar/Nav1.js/Nav1';
import Nav2 from './Components/Navbar/Nav2.js/Nav2';
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/Product/ProductPage/ProductPage';

function App() {
  return (
<BrowserRouter>
      <Nav1/>
      <Nav2 className="display"/>
      {/* <ProductList/> */}
      <Routes>
        <Route className="display" path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/product-list" element={<ProductList/>}/>
      </Routes>
      <Routes>
        <Route path="/product-page/:id" element={<ProductPage/>}/>
      </Routes>
      <Footer />
</BrowserRouter>
  );
}

export default App;
