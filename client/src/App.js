import React from "react"
import {BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
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
        <Route path = "/" component = {Home} exact/>
        {/* <Route path = "/login" component = {Login} /> */}
        {/* <Route path = "/random" component = {Random} /> */}
        <Route path = "/search" component = {Search} />
        {/* <Route path = "/park" component = {Park} /> */}
        {/* <Route path = "/compare" component = {ParkOrNot} />  */}
        {/* <Route path = "/leaderboard" component = {Leaderboard} */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
