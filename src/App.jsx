import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Router } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import SignUp from "./Pages/signup";
import Details from "./Pages/details";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/details" component={Details} />
        </Switch>
      </MainLayout>
      <div style={{ marginTop: "120px" }}>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
