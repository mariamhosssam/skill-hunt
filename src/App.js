import "./App.css";
import About from "./Pages/About";
import Index from "./Pages/Index";
import UserSignin from "./Pages/UserSignIn";
import CompanySignin from "./Pages/CompanySignin";
import Login from "./Pages/Login";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Index></Index>
      </Route>
      <Route path="/About" exact>
        <About />
      </Route>
      <Route path="/Login" exact>
        <Login></Login>
      </Route>
      <Route path="/SignUp" exact>
        <UserSignin />
      </Route>
      <Route path="/Login/company" exact>
        <CompanySignin />
      </Route>
    </Switch>
  );
}

export default App;
