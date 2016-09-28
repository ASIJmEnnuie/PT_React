import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppGlob from './AppGlob';

injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(
  <MuiThemeProvider>
    <AppGlob/>
  </MuiThemeProvider>,
  racine);
