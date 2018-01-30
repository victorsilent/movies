import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './app.scss';

class App extends Component {
  render() {
    return (
      <h1 className={style.text}>{this.props.message}</h1>
    );
  }
}
function mapStateToProps(state) {
  return { message: state.example }
}

export default connect(mapStateToProps, null)(App);
