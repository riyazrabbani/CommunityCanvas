import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Users from "./user/pages/Users";
export default function App() {
  return (
    <Router>
      <Route path = "/">
        <Users />
      </Route>
      <Route path = "/places/new">
        <Users />
      </Route>
      <Redirect to = "/"/>
    </Router>
  );
}
