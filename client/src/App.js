import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Splash from "./pages/Splash";
import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register/Register"
// import Random from "./components/Random";
import Profile from "./pages/Profile/Profile"
import Search from "./pages/Search";
import Park from "./pages/Park";
import Compare from "./pages/Compare/Compare";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Development from "./pages/Development/Development";


function App() {

  return (

    <Router forceRefresh={true}>
    <Nav />
      <Switch >
          <Route path = "/" component = {Splash} exact />
          <Route path = "/home" component = {Home}/>
          <Route path = "/Login" component = {Register} /> 
          <Route path = "/search" component = {Search} />
          <Route path = "/development" component = {Development} />
          <Route path = "/random" component = {Park} />
          <Route path = "/park" component = {Park} />
          <Route path = "/compare" component = {Compare} /> 
          <Route path = "/leaderboard" component = {Leaderboard} />
          <Route path = "/profile" component = {Profile} />
      </Switch>
    </Router>

  );
}

export default App;


