import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import PropertyList from "./components/views/PropertyList.js";
import AppNavbar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import UserRegister from './components/security/UserRegister.js';
import Login from "./components/security/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />
          <Grid container>
            <Switch>
              <Route path="/" exact>
                <PropertyList />
              </Route>
              <Route path="/auth/userRegister" exact>
                <UserRegister />
              </Route>
              <Route path="/auth/login" exact>
                <Login />
              </Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
