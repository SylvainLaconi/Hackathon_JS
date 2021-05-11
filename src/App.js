import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from "./components/Homepage/HomePage";
import { TrialList } from "./components/Trial_list/TrialList";
import { TrialCreation } from "./components/Trial_creation/TrialCreation";
import { TrialDetail } from "./components/Trial_detail/TrialDetail";
import { Registration } from "./components/Registration/Registration";
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/triallist' component={TrialList} />
          <Route path='/trialcreation' component={TrialCreation} />
          <Route path='/trialdetail' component={TrialDetail} />
          <Route path='/registration' component={Registration} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
