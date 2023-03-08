import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Headers = (props) => {
    const navigate = useNavigate();
    return (
<>
            <div class="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <button class="sign-in-btn" onClick={() => navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Log In" : "Sign In"}
        </button >
    </>
    
    
  )
}

export default Headers