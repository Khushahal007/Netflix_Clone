import React, { useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { Container } from 'react-bootstrap';
import Background from '../components/Background'
import Headers from '../components/Headers'
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import "../CSS/index.css"
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'




function Login() {

  const navigate = useNavigate();

  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      // import from firebase build in method
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/")
  })
  return (
    <Container>
      <Background />
      <div >
      <div class="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
        <div className="loginBlock">
          <div>
            <h3>Sign In</h3>
          </div>
          <div >
            <input className="email" type="email" placeholder='Email Address' name="email" onChange={(e) =>
              setformValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
              value={formValues.email}
            />
            <input className="password" type="password" placeholder='Password' name="password" onChange={(e) =>
              setformValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
              value={formValues.password}
            />
          </div>
          <button  className="loginBut" onClick={handleLogIn}>Sign In</button>
          <p className="new">New to Netflix?<NavLink to="/signup" style={{ padding: '10px'}}>Sign up now.</NavLink></p>
         
    
        </div>
      </div>

    </Container >
  )
}



export default Login;