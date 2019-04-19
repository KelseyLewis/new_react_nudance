import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CLASSES } from "../shared/classes";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: CLASSES
    };
  }

  render() {
    const HomePage = () => {
      return (
        <div>
          <Home />
          {/* <img src="http://www.wikidancesport.com/Attachments/dances/Salsa/Salsa%20-%204.jpg" /> */}
        </div>
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
