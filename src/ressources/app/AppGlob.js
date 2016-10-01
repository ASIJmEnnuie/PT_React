import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import AppLeftDrawer from './AppLeftDrawer';
import AppRightDrawer from './AppRightDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';
import $ from "jquery";

var json = [];
$.getJSON( './ressources/datas/style.json', {'async': false})
  .done(function( data ) {
    json.push(data);
  });

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var AppGlob = React.createClass({
  componentDidMount: function() {
    // console.log(racine);
    for (i=0; i < 500; i++)
      console.log(json.length);
  },

  getInitialState: function() {
    return {
      openLeftDrawer: false,
      openRightDrawer: false,
      widthDrawerLeftDesktop: 15,
      widthDrawerLeftMobile: 50
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

console.log(this.state);
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
