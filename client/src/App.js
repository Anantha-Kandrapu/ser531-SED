import './App.css';
import Login from './components/login/login';
import Register from './components/login/register';


const loadData = () => JSON.parse(JSON.stringify(jsonData));
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
