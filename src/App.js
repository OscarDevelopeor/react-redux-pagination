import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Header from './Components/Layout/Header/Header';
import SideNav from './Components/Layout/Sidenav';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Provider store = { Store } >
        <Router>
          <div className="App">
                <Header/>             
                <SideNav
                  routes={Routes}
                />
                <main>
                  <div className="container">
                    <div className="row">
                      <div className="col s12 m10 offset-m2 xl10 offset-xl2">
                        <Switch>
                              {Routes.map((prop, key) => {
                                return <Route exact path={prop.path} component={prop.component} key={key} />;
                              })}
                          </Switch>
                      </div>
                    </div>
                  </div>
                </main>         
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
