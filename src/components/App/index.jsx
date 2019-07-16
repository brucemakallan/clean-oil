import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from '../Dashboard';
import Home from '../Home';


class App extends Component {
  state = { }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
