import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer"
import About from "./components/About"
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
     <Router>
        <Nav />
        <div style={{minHeight : "80vh"}}>
          <Switch>
          <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
