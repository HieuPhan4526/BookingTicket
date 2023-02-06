import './App.css';
import Home from './pages/Home';
import "./assets/css/style.css";
import { Router, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Home exact path="/home" />
        <Login exact path="/login" />
        <Register exact path="/register" />



        <Home exact path="/" />

      </Switch>

    </Router>

  );
}

export default App;
