import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Mintpage from "./pages/Mintpage";

function App() {
  return (
    <div className="App">
      {/*pages as a componets  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mintpage" element={<Mintpage />} />
      </Routes>
    </div>
  );
}

export default App;
