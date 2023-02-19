import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
