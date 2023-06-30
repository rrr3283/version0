import React from "react";
import HomePic from '../Images/welcome.png'
import '../App.css'

export default function Home(){
    return(
        <div className="Home--div">
        <h1 className="title">United Nations</h1>
        <h1 className="title">Ping Pong</h1>
        <img src={HomePic} alt="UN Ping Pong logo" width="50%" align="center" />
        </div>
    )
}