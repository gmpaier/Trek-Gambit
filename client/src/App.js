import React from "react"
import {BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";

import Splash from "./components/Splash";
// import login from "./components/Login.js"
// import Random from "./components/Random";
import Search from "./pages/Search";
// import Park from "./components/Park";
// import Compare from "./components/Compare";
// import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar /> */}
      <Switch >
        <Route path = "/home" component = {Home}/>
        {/* <Route path = "/login" component = {Login} /> */}
        {/* <Route path = "/random" component = {Random} /> */}
        <Route component = {Splash} path = "/" exact />
        {/* <Route path = "/park" component = {Park} /> */}
        {/* <Route path = "/compare" component = {ParkOrNot} />  */}
        {/* <Route path = "/leaderboard" component = {Leaderboard} */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
