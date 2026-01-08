import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavBar from './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
