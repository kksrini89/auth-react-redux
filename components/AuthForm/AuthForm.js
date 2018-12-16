import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login, logout } from '../../Store/actions/authAction';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  login() {
    this.props.login({ email: this.state.email, password: this.state.password });
  }

  logout() {}

  render() {
    return (
      <div className="nav_bar">
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            value={this.state.email}
            placeholder="Please enter Email!"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            value={this.state.password}
            placeholder="Please enter Password!"
          />
        </div>
        <hr />
        <div>
          <span>Please login!</span>
          <button onClick={this.login}>LOGIN</button>
        </div>
        <div>
          <span>User Name: </span> {this.props.name}
          <button onClick={this.logout}>LOG OUT</button>
        </div>
      </div>
    );
  }
}

AuthForm.defaultProps = {
  name: ''
};

AuthForm.propTypes = {
  name: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: function(user) {
      dispatch(login(user));
    },
    logout: function() {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { login, logout }
)(AuthForm);
