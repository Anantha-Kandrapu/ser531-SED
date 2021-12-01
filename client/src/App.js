import './App.css';
import Login from './login/login';
import Register from './login/register';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
<Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/sign-in" element={<Login/>}/>
          <Route exact path="/sign-up" element={<Register/>}/>
        </Routes>
    </Router>
  );
}

export default App;
