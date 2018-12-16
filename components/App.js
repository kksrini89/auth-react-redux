import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../Store';
import AuthForm from './AuthForm/AuthForm';

export class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AuthForm />
        </div>
      </Provider>
    );
  }
}
