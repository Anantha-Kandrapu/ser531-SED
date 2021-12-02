import React from 'react'
import './loginstyle.css';
import { Link } from 'react-router-dom';
import jsonData from './users.json';

// const loadData = () => JSON.parse(JSON.stringify(jsonData));

function Login() {
    console.log(jsonData);

    return (
        <div class="container">
        <form class="form">
            <h1 class="form_heading">Login</h1>
            <div class="form_style">
                <input type="text" class="input_style" autofocus placeholder="Username or email"/>
            </div>
            <div class="form_style">
                <input type="password" class="input_style" autofocus placeholder="Password"/>
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