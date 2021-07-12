import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"
import { Home, Dashboard, Signin } from './components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home title={'Heroes and Villains'}/>
          </Route>

          <Route path='/Dashboard'>
            <Dashboard></Dashboard>
          </Route>

          <Route path='/Signin'>
            <Signin></Signin>
          </Route>

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
