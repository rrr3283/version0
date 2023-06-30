import React from "react";
import logo from '../Images/logo.png';
import { NavLink } from "react-router-dom";
import '../App.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function Navlist(loginSuccess){
    if (loginSuccess) return(
        
        <>
        <header className="App-header">
        <div className="Navlist--div">
            <div className="logocontainer">
                <img src={logo} alt="UN Ping Pong logo" className="Navlist--logo"/>
            </div>
            <nav>
                <div className="List">
                    <NavLink  to="/" className={({ isActive }) => isActive ? "activeItem" : "listItem"} end><HomeOutlinedIcon/>Home </NavLink>
                    <NavLink  to="/profile" className={({ isActive }) => isActive ? "activeItem" : "listItem"} end><PermIdentityOutlinedIcon/>Profile</NavLink>
                    <NavLink  to="/leader" className={({ isActive }) => isActive ? "activeItem" : "listItem"} end><LeaderboardOutlinedIcon/>Leader</NavLink>
                    <NavLink  to="/friends" className={({ isActive }) => isActive ? "activeItem" : "listItem"} end><Diversity1OutlinedIcon/>Friends</NavLink>
                    <NavLink  to="/game" className={({ isActive }) => isActive ? "activeItem" : "listItem"} end><VideogameAssetOutlinedIcon/>Game</NavLink>
                    <NavLink  to="/chat" className={({ isActive }) => isActive ? "activeItem" : "listItem"} end><ChatOutlinedIcon/>Chat</NavLink>
                </div>
            </nav>
                
        </div>
        </header>
        </>
    
    )
}