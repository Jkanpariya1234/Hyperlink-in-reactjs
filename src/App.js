import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Link to="/home">Home</Link>
      <Link to="/About">About</Link> */}
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;