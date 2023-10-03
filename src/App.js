
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
  return (
    <div>
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/edit/:id' element={<Edit />} />
          <Route exact path='/view/:id' element={ <Details />} />
        </Routes>
       
      </Router>
    
    
    </div>
  );
}

export default App;
