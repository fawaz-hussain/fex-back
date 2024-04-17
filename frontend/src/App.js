import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Intro from './pages/intro';
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <div className='App'>
      <div className="container">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Intro/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/product" element={<Product/>} />
            </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
