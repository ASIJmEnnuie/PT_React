import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppGlob from './AppGlob';


var Main = React.createClass({
  render: function() {
    return (
      <MuiThemeProvider>
        <AppGlob/>
      </MuiThemeProvider>
    );
  }
});

export default Main;
