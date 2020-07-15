import React from "react";
import { Route, Switch } from 'react-router-dom'
import HomePage from "./home/Home.jsx";
import AboutPage from "./about/About.jsx";
import Header from "./common/Header.jsx";
import PageNotFound from "./PageNotFound.jsx";


const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route
                    exact path="/"
                    component={HomePage}
                />
                <Route
                    path="/about"
                    component={AboutPage}
                />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;