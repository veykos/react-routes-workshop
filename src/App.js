import logo from './logo.svg';
import './App.css';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cats" element={<Cats/>} />
            <Route path="/dogs" element={<Dogs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
