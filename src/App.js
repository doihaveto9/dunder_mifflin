import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import Employees from './Components/Employees/Employees';
import Documentary from './Components/Documentary/Documentary';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Employees' element={<Employees />} />
          <Route path='/Documentary' element={<Documentary />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
