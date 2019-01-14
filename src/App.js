import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Containers/Login';
import Home from './Containers/Home';
import Clients from './Containers/Clients';
import PaymentForm from './Containers/PaymentForm';
import ClientForm from './Containers/ClientForm';
import styles from './styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <Header />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Switch>
                <Route path="/clients/:id" component={ClientForm} />
                <Route path="/clients/new" component={PaymentForm} />
                <Route path="/clients" component={Clients} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>

      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
