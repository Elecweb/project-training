import React from "react";
import { BrowserRouter as Router, Route , Switch , Link} from "react-router-dom";
import Register from "./Register_Form";
import Login_Form from "./Login_Form";


function First() {
  return (
    <Switch>
      <div>
        <Route path="/Register" component={Register} />
        <Route path="/login" component={Login_Form} />
      </div>
    </Switch>
  );
}

export default First;
