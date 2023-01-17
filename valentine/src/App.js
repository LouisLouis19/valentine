import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Yes from "./pages/Yes";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
