import './App.css';
import Navbar from './components/navbar';
import ProductsList from './components/productlist';
import Slider from './components/slider';
import About from './components/About';
import { Route , Routes } from 'react-router-dom';
import Productdetails from './components/Productdetails';
// import Api from './components/api';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<>
        <Slider />
        <ProductsList/>
        </>
        }/>
        <Route path='About' element={<About />}/>
        <Route path='product/:productid' element={<Productdetails/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
