import "./App.css";
import About from "./Pages/About";
import Index from "./Pages/Index";
import UserSignin from "./Pages/UserSignIn";
import CompanySignin from "./Pages/CompanySignin";
import Login from "./Pages/Login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Evaluation from "./Pages/Evaluation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Index />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/SignUp" element={<UserSignin />}></Route>
      <Route path="/Login-company" element={<CompanySignin />}></Route>
      <Route path="/yourEvaluation" element={<Evaluation />}></Route>
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
    // <Switch>
    //   <Route path="/" exact>
    //     <Index></Index>
    //   </Route>
    //   <Route path="/About" exact>
    //     <About />
    //   </Route>
    //   <Route path="/Login" exact>
    //     <Login></Login>
    //   </Route>
    //   <Route path="/SignUp" exact>
    //     <UserSignin />
    //   </Route>
    //   <Route path="/Login/company" exact>
    //     <CompanySignin />
    //   </Route>
    // </Switch>
  );
}

export default App;
