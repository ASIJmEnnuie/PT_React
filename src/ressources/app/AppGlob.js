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
  getInitialState: function() {
    return {
      openLeftDrawer: true,
      openRightDrawer: false,
      leftDrawerId: "leftDrawerOpen",
      pageId: "pageReduced",
      widthRightDrawer: 200
    }
  },

  clickOnLeftButton: function(){
    this.setState(function(previousState, currentProps) {
      if (previousState.openLeftDrawer === true) {
        return {
          openRightDrawer: false,
          openLeftDrawer : false,
          leftDrawerId: "leftDrawerClose",
          pageId: "pageExtended"
        };
      }
      return {
        openRightDrawer: false,
        openLeftDrawer : true,
        leftDrawerId: "leftDrawerOpen",
        pageId: "pageReduced"
      };
    });
  },

  clickOnRightButton: function() {
    this.setState(function(previousState, currentProps) {
      if (previousState.openLeftDrawer === true) {
        return {
          openRightDrawer: true,
          openLeftDrawer : false,
          leftDrawerId: "leftDrawerClose",
          pageId: "pageExtended"
        };
      }
      else if (previousState.openRightDrawer === false) {
        return {
          openRightDrawer: true,
          openLeftDrawer : false,
          leftDrawerId: "leftDrawerClose",
          pageId: "pageExtended"
        };
      }
      return {
        openRightDrawer: false,
        openLeftDrawer : true,
        leftDrawerId: "leftDrawerOpen",
        pageId: "pageReduced"
      };
    });
  },

  render: function() {
    return (
      <div>
        <AppLeftDrawer id={this.state.leftDrawerId}/>
        <AppRightDrawer open={this.state.openRightDrawer} width={this.state.widthRightDrawer} clickOnRightButton={this.clickOnRightButton} />

        <div id={this.state.pageId}>
          <AppNavbar clickOnLeftButton={this.clickOnLeftButton} clickOnRightButton={this.clickOnRightButton}/>
          <AppContent />
        </div>
      </div>
    );
  }
});

export default AppGlob;
