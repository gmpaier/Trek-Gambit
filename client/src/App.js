// import logo from './logo.svg';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Splash from "./components/Splash";
import './App.css';

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