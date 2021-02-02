import React from 'react';
import MainPage from "./pages/MainPage";
import {connect} from "react-redux";
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";
import Delivery from "./pages/Delivery";

class App extends React.Component {
    render() {
        const { navbarExpand } = this.props;
        return (
            <div>
                {navbarExpand ? '' : ''}
                <Header/>

                {/*ROUTER*/}

                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>

                        <Route path='/thanks'>
                            <Thanks/>
                        </Route>

                        <Route path='/delivery'>
                            <Delivery/>
                        </Route>

                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>

                {/*ROUTER*/}

                <Footer/>
            </div>
        );
    }
}

export default connect(({navbar: navbarExpand}) => ({
    navbarExpand
}), null)(App)
