import "bootstrap/dist/css/bootstrap.min.css";   // 👈 Add this line
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import Login from "./Components/Login.jsx";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;
