import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Profile from './Component/Profile';
import Leader from './Component/Leader';
import Friends from './Component/Friends';
import Game from './Component/Game';
import Chat from './Component/Chat';
import Error from './Component/Error';
import Navlist from './Component/Navlist';


export default function App(loginSuccess) {
  return (
    <div className="App">
        <Navlist/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/leader' element={<Leader/>} />
          <Route path='/friends' element={<Friends/>} />
          <Route path='/game' element={<Game/>} />
          <Route path='/chat' element={<Chat/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
    </div>
  
  );
}

 //  