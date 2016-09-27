import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import AppLeftDrawer from './AppLeftDrawer';
import AppLeftDrawerBis from './AppLeftDrawerBis';
import AppRightDrawer from './AppRightDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AppGlob = React.createClass({
  getInitialState: function() {
    return {
      openLeftDrawer: true,
      openRightDrawer: false,
    }
  },

  clickOnLeftButton: function(){
    this.setState({
      openRightDrawer: false,
      openLeftDrawer : !this.state.openLeftDrawer
    });
    // var node = ReactDOM.findDOMNode(this);
    // node.style.width = "100%";
    // node.style.margin = "0%";
    // console.log(node);
    if (this.state.openLeftDrawer) {
      document.getElementById("page").style.width = "85%";
      document.getElementById("page").style.marginLeft = "15%";
      document.getElementById("LeftDrawer").style.width = "15%";
    }
    else {
      document.getElementById("page").style.width = "100%";
      document.getElementById("page").style.marginLeft = "0%";
      document.getElementById("LeftDrawer").style.width = "0%";
    }

  },

  clickOnRightButton: function() {
    this.setState({
     openLeftDrawer: false,
     openRightDrawer : !this.state.openRightDrawer
    });
  },

  render: function() {
    return (
      <div>
        <AppLeftDrawerBis open={this.state.openLeftDrawer} />
        <AppRightDrawer open={this.state.openRightDrawer} width={200} clickOnRightButton={this.clickOnRightButton}/>

        <div id="page">
          <AppNavbar clickOnLeftButton={this.clickOnLeftButton} clickOnRightButton={this.clickOnRightButton}/>
          <AppContent />
        </div>
      </div>
    );
  }
});

export default AppGlob;
