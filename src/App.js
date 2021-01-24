import React from 'react';
import MainPage from "./pages/MainPage";
import {connect} from "react-redux";
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";

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
