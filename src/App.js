import logo from './logo.svg';
import './App.css';
import Dogs from './pages/Dogs';
import { DogsBreedsPage } from './pages/Dogs/dogs-breed';
import Cats from './pages/Cats';
import Home from './pages/Home';
import { CatsBreedsPage } from './pages/Cats/cats-breed';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cats" element={<Cats/>} />
            <Route path="/cats/:id" element={<CatsBreedsPage />} />
            <Route path="/dogs" element={<Dogs/>} />
            <Route path="/dogs/:id" element={<DogsBreedsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
