import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppNavbar from './AppNavbar';
class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppNavbar/>
      </MuiThemeProvider>
    );
  }
}

export default Main;
