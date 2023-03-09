import React, {useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { Container } from 'react-bootstrap';
import Background from '../components/Background'
import Headers from '../components/Headers'
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';




function Signup() {
  
  const navigate=useNavigate();

  const [formValues, setformValues] = useState({
    email:"",
    password:"",
  });

  const handleSignIn=async ()=>{
    try {
      const {email, password}=formValues;
      // import from firebase build in method
      await createUserWithEmailAndPassword(firebaseAuth,email, password);
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(currentUser) navigate("/")
  })
  return (
    <Container>

      <Background />
      <div className="content">
        <Headers />

        <div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.7rem'
          }}>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>

          <div style={{
            position: 'absolute',
            top: '80%',
            left: '40.7%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.7rem',
            
          }}>
            <input style={{margin: '10px', width:'220px', height:'35px'}} type="email" placeholder='Email Address' name="email"   onChange={(e) =>
                setformValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
            }
              value={formValues.email}
          />
            <input style={{margin: '10px', width:'220px', height:'35px'}} type="password" placeholder='Password' name="password" onChange={(e) =>
                  setformValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                value={formValues.password}
              />
          </div>
          <button className="getStarted" onClick={handleSignIn}>Get Started</button>
        </div>
      </div>
    </Container >
  )
}



export default Signup;