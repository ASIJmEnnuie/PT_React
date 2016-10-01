import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import AppLeftDrawer from './AppLeftDrawer';
import AppRightDrawer from './AppRightDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';
import $ from "jquery";

var style = require("../datas/style.json");
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AppGlob = React.createClass({
  getInitialState: function() {
    return {
      openLeftDrawer: false,
      openRightDrawer: false,
      widthDrawerLeftDesktop: parseInt(style.widthDrawerLeftDesktop.substring(0, style.widthDrawerLeftDesktop.length - 1)),
      widthDrawerLeftMobile: parseInt(style.widthDrawerLeftMobile.substring(0, style.widthDrawerLeftMobile.length - 1))
    }
  },

  clickOnLeftButton: function(){
    this.setState(function(previousState, currentProps) {
      this.resizePage();

      return {
        openRightDrawer: false,
        openLeftDrawer : !this.state.openLeftDrawer
      };
    });
  },

  clickOnRightButton: function() {
    this.setState(function(previousState, currentProps) {
      this.resizePage();

      return {
        openLeftDrawer: false,
        openRightDrawer : !this.state.openRightDrawer
      };
    });
  },

  resizePage: function() {
    var node = ReactDOM.findDOMNode(this);
    var widthDrawerLeft, widthPage;

    if ($(document).width() >= 900){
      widthDrawerLeft = this.state.widthDrawerLeftDesktop;
    }
    else {
      widthDrawerLeft = this.state.widthDrawerLeftMobile;
    }

    widthPage = 100 - widthDrawerLeft;

    if (this.state.openLeftDrawer === true) {
      $(node).children("#page").css("width", widthPage+"%");
      $(node).children("#page").css("margin-left", widthDrawerLeft+"%");
      $(node).children("#leftDrawer").css("left", "0%");
    }
    else if(this.state.openLeftDrawer === false) {
      $(node).children("#page").css("width", "100%");
      $(node).children("#page").css("margin-left", "0%");
      $(node).children("#leftDrawer").css("left", "-"+widthDrawerLeft+"%");
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
