import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { CLASSES } from '../shared/classes';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: CLASSES,
        };
    }

    render() {

        const HomePage = () => {
            return (
              <Home classes={this.state.classes} />
            );
        }

        return (
            <div>
               <Header />
               <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* <Route />
                    <Route />
                    <Route /> */}
               </Switch>
               <Footer /> 
            </div>
        );
    }
}

export default Main;