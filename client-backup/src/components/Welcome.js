import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    if (this.props.authenticated) {
      return <h3>Home page</h3>;
    } else {
      return <h3>Welcome! Sign up or sign in!</h3>;
    }
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Welcome);
