import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./Register_Form";
import Login_Form from "./Login_Form";
import Profile_Form from "./Profile_Form";

function First() {
  return (
    <Switch>
      <div>
        <Route path="/Register" component={Register} />
        <Route path="/login" component={Login_Form} />
        <Route path="/Profile" component={Profile_Form} />
        <Route component={Login_Form} />
      </div>
    </Switch>
  );
}

export default First;
