import Home from "./pages/Home";
import "./styles/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
