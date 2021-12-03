import React from 'react'
import './loginstyle.css';
import { useContext, createContext, useState } from "react";
import { Navigate,Link} from "react-router-dom";
import axios from 'axios'

function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [login , setlogin] = useState(false);

    const handleClick = async (e) => {
     axios.post('http://localhost:5000/login', {
            uname: username,
            pass: password
        }).then((response) => {
            console.log(response.data);
            if(response.data == 'success')
                setlogin(true)        
        })
    }
    if(login)
    return <Navigate to="/event" />
    return (
        <div class="container">
                <h1 class="form_heading">User Login</h1>
                <div class="form_style">
                    <input type="text" value={username} onChange={e => setusername(e.target.value)} class="input_style" placeholder="Username or email" />
                </div>
                <div class="form_style">
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} class="input_style" placeholder="Password" />
                </div>
                <button class="form_button" onClick={handleClick} type="submit">Login</button>
                <p class="form_para">
                    <span >Don't have an account?<Link to={"/sign-up"}>Sign up</Link></span>
                </p>

        </div>
    )
}
export default Login