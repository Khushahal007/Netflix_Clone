import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import video from "../assets/Video.mp4"
import { useNavigate } from 'react-router-dom'
import "../CSS/index.css"

  
const Player = () => {
    const navigate=useNavigate();
  return (
    <div className="player">
        <div className="back">
            <BsArrowLeft onClick={()=> navigate('/')}/>
        </div>
        <video src={video} autoPlay loop controls muted></video>
    </div>
  )
}

export default Player