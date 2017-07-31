// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MuiThemeProvider>
          <Grid fluid>
            <Row>
              <Col xs={12} md={4}>
                <RaisedButton label="hello 1" />
              </Col>
              <Col xs={6} md={4}>
                <RaisedButton label="hello 2" />
              </Col>
              <Col xs={6} md={4}>
                <RaisedButton label="hello 3" />
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
