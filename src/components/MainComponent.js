import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
               <Header />
               <Switch>
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