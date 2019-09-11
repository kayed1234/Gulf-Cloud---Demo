import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./HomePage/Dashboard";
import Signin from "./HomePage/Signin";
import Users from "./Directory/Users";
import Cities from "./Directory/Cities";
import Associations from "./Directory/Associations";
import Families from "./Directory/Families";
import Regions from "./Directory/Regions";
import Specialities from "./Directory/Specialities";
import ForApproval from "./Directory/ForApproval";
import Zest from "./Zest/Stupid-Form";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/Cities' component={Cities} />
        <Route path='/Users' component={Users} />
        <Route path='/Associations' component={Associations} />
        <Route path='/Families' component={Families} />
        <Route path='/ForApproval' component={ForApproval} />
        <Route path='/Regions' component={Regions} />
        <Route path='/Specialities' component={Specialities} />
        <Route path='/Signin' component={Signin} />
      </Switch>
    </div>
  );
}

export default App;

// <Header />
//
