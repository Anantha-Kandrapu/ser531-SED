import './App.css';
import Login from './login/login';
import Register from './login/register';
import Event from './events/events';



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
<Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          {/* <Route exact path="/sign-in" element={<Login/>}/> */}
          <Route exact path="/sign-up" element={<Register/>}/>
          <Route exact path="/event" element={<Event/>}/>

        </Routes>
    </Router>
  );
}

export default App;
