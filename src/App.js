import "./App.css";
import About from "./Pages/About";
import Index from "./Pages/Index";
import UserSignin from "./Pages/UserSignIn";
import CompanySignin from "./Pages/CompanySignin";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
// import TechQ from "./Pages/techQ";
import TechnicalQ from "./Pages/TechnicalQ";
import CompanyApplications from "./Pages/CompanyApplications";
import SoftSkillsVideo from "./Pages/SoftSkillsVideo";
import JobListing from "./Components/Jobs/JobListing";
import ApplyForJob from "./Pages/ApplyForJob";
import PostJob from "./Pages/PostJob"
import Header from "./Components/Header";
import JobDetails from './Components/Jobs/JobDetails';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./Root";
import Evaluation from "./Pages/Evaluation";
import JobSingle from "./Pages/JobSingle";
import PostJob from "./Pages/PostJob";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>

      <Route path="/About" element={<About />}></Route>
      <Route path="/Login" element={<Login />}></Route>

      <Route path="/Index" element={<Index />}></Route>

      <Route path="/UserSignIn" element={<UserSignin />}></Route>
      <Route path="/CompanySignin" element={<CompanySignin />}></Route>
      <Route path="/yourEvaluation" element={<Evaluation />}></Route>
      <Route path = "/Dashboard" element = {<Dashboard/>} ></Route>
      <Route path = "/JobSingle" element = {<JobSingle/>} ></Route>
      <Route path = "/TechnicalQ" element = {<TechnicalQ/>} ></Route>
      {/* <Route path = "/PostJob" element = {<PostJob/>} ></Route> */}
      <Route path = "/JobListing" element = {<JobListing/>} ></Route>
      <Route path = "/CompanyApplications" element = {<CompanyApplications/>} ></Route>
      <Route path = "/ApplyForJob" element = {<ApplyForJob/>} ></Route>
      <Route path = "/SoftSkillsVideo" element = {<SoftSkillsVideo/>} ></Route>



      <Route path = "/PostJob" element = {<PostJob/>} ></Route>
      {/* <Route path = "/Header" element = {<Header/>} ></Route> */}

      <Route path="/JobDetails" element = {<JobDetails/>} ></Route>

      {/* <Route path = "/JobDetails" element = {<JobDetails/>} ></Route> */}

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
  )
}

export default App;
