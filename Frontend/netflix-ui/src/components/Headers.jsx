import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'



const Headers = () => {



    return (
        <>
            <div class="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>

            <NavLink to="/login">
                <button className="sign-in-btn">Sign In</button>
            </NavLink>

        </>


    )
}

export default Headers