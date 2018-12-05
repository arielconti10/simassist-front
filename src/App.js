import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },

});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route path="/Login" component={Login} />
              <Route path="/" component={Home} />
              {/*<Route path="/" component={Tasks}/>*/}
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}
export default App;
