import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeBar from "./components/HomeBar";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <HomeBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/beer/:id" element={<BeerDetails />} />
        <Route path="/newbeer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
