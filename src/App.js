import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div className='App'>
      <div className="container">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
