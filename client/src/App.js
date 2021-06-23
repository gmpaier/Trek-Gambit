// import logo from './logo.svg';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import './App.css';
import Home from "./components/Home";
// import login from "./components/Login.js"
// import Random from "./components/Random";
// import Search from "./components/Search";
// import Park from "./components/Park";
// import Compare from "./components/Compare";
// import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Nav />
        <Switch>
          <Route component = {Splash} path = "/" exact />
        </Switch>
    </Router>
  );
}

export default App;