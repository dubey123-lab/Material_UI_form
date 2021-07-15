import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import InternalLayout from "./Components/layouts/InternalLayout";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import AddSkillForm from "./Components/pages/AddSkillForm";
import JobPrefrence from "./Components/pages/JobPrefrence";
import UploadResume from "./Components/pages/UploadResume";

//// Import Layouts

//// Import Components

function Routes() {
  return (
    <Router>
      <Switch>
        <InternalLayout exact path="/" component={Login} />
        <InternalLayout path="/signup" component={Signup} />
        <InternalLayout path="/job" component={AddSkillForm} />
        <InternalLayout path="/job_pefrence" component={JobPrefrence} />
        <InternalLayout path="/upload_resume" component={UploadResume} />
      </Switch>
    </Router>
  );
}

export default Routes;
