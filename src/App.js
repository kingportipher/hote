import React from 'react'
import './App.css';
import Home from './Components/Pages/Home'
import Rooms from './Components/Pages/Rooms'
import SignIn from './Components/Pages/SignIn'
import SignUp from './Components/Pages/SignUp'
import SingleRoom from './Components/Pages/SingleRoom'
import Error from './Components/Pages/Error'
import NavBar from './Components/NavBar'
import {Route, Switch} from 'react-router-dom'




function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/Navbar' component={NavBar}/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/rooms' component={Rooms}/>
        <Route exact path='/rooms/:slug' component={SingleRoom}/>
        <Route exact path='/sigin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route  component={Error}/>
      </Switch>
      
    </>
  );
}

export default App;
