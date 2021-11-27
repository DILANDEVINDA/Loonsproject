import {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Path extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/register" component={Register} exact/>
                </Switch>
            </Router>
        )
    }
}

export default Path;