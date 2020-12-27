import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListTopicalitiesComponent from './components/ListTopicalitiesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateTopicalityComponent from './components/CreateTopicalityComponent'
import UpdateTopicalityComponent from './components/UpdateTopicalityComponent';
import CreateUpdateTopicalityComponent from './components/CreateUpdateTopicalityComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="Elan-color">
            <Switch>
              <Route path="/topicalities" exact component={ListTopicalitiesComponent}></Route>

              {/* Add topicality only */}
              {/* <Route path="/add-topicality" component={CreateTopicalityComponent}></Route> */}

              {/* Create Or Update Topicality */}
              <Route path="/add-or-update-topicality/:id" component={CreateUpdateTopicalityComponent}></Route>
              <Route path="/update-topicality/:id" component = { UpdateTopicalityComponent }></Route>
            </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
