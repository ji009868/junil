import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Small_Towns from './pages/Small_Towns';
import List from "./pages/List";
import Restaurants from "./pages/Restaurants";
import Recommendation from './pages/Recommendation';
import CityDetail from './pages/CityDetail';
import Planner from './pages/Planner';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Small_Towns />} />
        <Route path="/list" element={<List />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/recommend" element={<Recommendation />} />
        <Route path="/city/:id" element={<CityDetail />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}
export default App;
