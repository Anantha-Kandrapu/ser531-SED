import React from 'react'
import './loginstyle.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const [user, username] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div class="container">
        <form class="form">
            <h1 class="form_heading">User Login</h1>
            <div class="form_style">
                <input type="text" value = {user} class="input_style" autofocus placeholder="Username or email"/>
            </div>
            <div class="form_style">
                <input type="password" value ={password} class="input_style" autofocus placeholder="Password"/>
            </div>
            <button class="form_button" type="submit">Login</button>
            <p class="form_para">
            <span >Don't have an account?<Link to={"/sign-up"}>Sign up</Link></span>
            </p>
        </form>
        
    </div>
    )
}
export default Login