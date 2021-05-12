import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import TrialList from "./components/Trial_list/TrialList";
import TrialCreation from "./components/Trial_creation/TrialCreation";
import TrialDetail from "./components/Trial_detail/TrialDetail";
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="header-ctn">
                    <div className="logo-app">mars vs wild</div>
                    <nav>
                        <ul className="menu-ctn">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/triallist">Challenges</Link>
                            </li>
                            <li>
                                <Link to="/registration">New player</Link>
                            </li>
                            <li>
                                <Link to="/trialcreation">New Challenge</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/triallist" component={TrialList} />
                    <Route path="/trialcreation" component={TrialCreation} />
                    <Route path="/trialdetail/:id" component={TrialDetail} />
                    <Route path="/registration" component={Registration} />
                </Switch>
            </Router>
        </div>

    );
}

export default App
