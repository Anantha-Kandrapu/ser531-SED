import React from 'react'
import './loginstyle.css';
import { Link } from 'react-router-dom';
function Register() {
    return(
        <div>
            <form>
            <h1 class="form_heading">Registration</h1>
            <div class="form_style">
                <input type="text" class="input_style" autofocus placeholder="Username"/>
            </div>
            <div class="form_style">
                <input type="text" class="input_style" autofocus placeholder="Email Address"/>
            </div>
            <div class="form_style">
                <input type="password" class="input_style" autofocus placeholder="Password"/>
            </div>
            <div class="form_style">
                <input type="password" class="input_style" autofocus placeholder="Confirm password"/>
            </div>
            <div class="form_style">
                <input type="text" class="input_style" autofocus placeholder="Location"/>
            </div>
            <div class="form_style">
                <input type="text" class="input_style" autofocus placeholder="Event Preference"/>
            </div>            
            <button class="form_button" type="submit">Register</button>
            <p class="form_para">
            <span >Already have an account?<Link to={"/sign-in"}>Sign in</Link></span>
            </p>
        </form>
        </div>
        )
    }
    export default Register;