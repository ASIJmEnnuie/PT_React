import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <h1>
          Hello World from ReactJS with Material-ui.
        </h1>
      </MuiThemeProvider>
    );
  }
}

export default Main;
