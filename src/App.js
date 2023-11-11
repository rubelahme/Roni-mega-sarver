import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Home/NavBar";
import Verify from "./components/Home/Verify";
import IdVerify from "./components/Home/IdVerify";
import Dashboard from "./components/Home/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/IdVerify" element={<IdVerify />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="/id" element={<Email />} /> */}
          {/* <Route path="/IdVerify" element={<IdVerify />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
