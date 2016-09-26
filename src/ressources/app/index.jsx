import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component

injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(<Main />, racine);
