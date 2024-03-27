import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slide from "./pages/slide";
import SlideTwo from "./pages/slidetwo";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" exact element={<Slide />} />
            <Route path="/slide2" element={<SlideTwo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
