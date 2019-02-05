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
        <Home classes={this.state.classes} />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
<<<<<<< HEAD
          <Route path="/about" component={About} />
          {/* <Route />
                    <Route />  */}
=======
          <Route path="/about" Component={About} />
          <Redirect to="/home" />
>>>>>>> 53f39f86a5f11870b7ee86d00c74ed52184e2fa5
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
