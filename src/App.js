import logo from './logo.svg';
import NavbarComponent from './Components/NavbarComponent';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';

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
