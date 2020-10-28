import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import PropertyList from "./components/views/PropertyList.js";
import AppNavbar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import UserRegister from "./components/security/UserRegister.js";
import Login from "./components/security/Login";
import { FirebaseContext } from './server';

function App(props) {
  let firebase = React.useContext(FirebaseContext);
  const [authenticationStarted, setupFirebaseInitial] = React.useState(false);

  useEffect(() => {
    firebase.initiated().then(val => {
      setupFirebaseInitial(val);
    })
  })

  return authenticationStarted !== false ? (
    <Router>
      <MuiThemeProvider theme={theme}>
        <AppNavbar />
        <Grid container>
          <Switch>
            <Route exact path="/" component={PropertyList} />
            <Route exact path="/auth/userRegister" component={UserRegister} />
            <Route exact path="/auth/login" component={Login} />
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  )
  :null
  ;
}

export default App;
