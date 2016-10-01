import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import AppLeftDrawer from './AppLeftDrawer';
import AppRightDrawer from './AppRightDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';
import $ from "jquery";


var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AppGlob = React.createClass({
  componentDidMount: function() {
    this.resizePage();
  },

  getInitialState: function() {
    return {
      openLeftDrawer: true,
      openRightDrawer: false,
    }
  },

  clickOnLeftButton: function(){
    this.resizePage();
    this.setState({
      openRightDrawer: false,
      openLeftDrawer : !this.state.openLeftDrawer
    });
  },

  clickOnRightButton: function() {
    this.resizePage();
    this.setState({
      openLeftDrawer: false,
      openRightDrawer : !this.state.openRightDrawer
    });
  },

  resizePage: function() {
    var node = ReactDOM.findDOMNode(this);
    var widthDrawerLeft, widthPage;

    if ($(document).width() >= 900){
      widthDrawerLeft = 15;
    }
    else {
      widthDrawerLeft = 50;
    }

    widthPage = 100 - widthDrawerLeft;

    if (this.state.openLeftDrawer === true) {
      $(node).children("#page").css("width", widthPage+"%");
      $(node).children("#page").css("margin-left", widthDrawerLeft+"%");
      $(node).children("#LeftDrawer").css("left", "0%");
    }
    else if(this.state.openLeftDrawer === false) {
      $(node).children("#page").css("width", "100%");
      $(node).children("#page").css("margin-left", "0%");
      $(node).children("#LeftDrawer").css("left", "-"+widthDrawerLeft+"%");
    }
  },

  render: function() {
    return (
      <div>
        <AppLeftDrawer />
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
