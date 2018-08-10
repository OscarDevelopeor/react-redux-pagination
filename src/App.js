import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Clients from './Components/Clients/Clients';

class App extends Component {
  render() {
    return (
      <Provider store = { Store } >
          <div className="App">
                <Clients/>         
          </div>
      </Provider>
    );
  }
}

export default App;
