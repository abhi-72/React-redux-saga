
import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import User from "../User";
import UserDetail from "../UserDetail";

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/users" />
                    </Route>
                    <Route path="/users" component={User} />
                    <Route path="/userdetails/:id" component={UserDetail} />
                </Switch>
            </Router>
        </Fragment>
    )
}

export default Routes