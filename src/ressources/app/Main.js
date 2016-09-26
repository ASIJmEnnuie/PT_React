import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppGlob from './AppGlob';

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppGlob/>
      </MuiThemeProvider>
    );
  }
}

export default Main;
