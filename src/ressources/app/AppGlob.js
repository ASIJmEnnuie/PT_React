import React from 'react';
import AppBar from 'material-ui/AppBar';
import AppLeftDrawer from './AppLeftDrawer';
import AppRightDrawer from './AppRightDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';

var AppGlob = React.createClass({
  getInitialState: function() {
    return {
      openLeftDrawer: true,
      openRightDrawer: false,
      navbarWidth: window.innerWidth - 300,
      drawerWidth: 300,
      style: {
        width: window.innerWidth - 300,
        position: "relative",
        left: 300
      }
    }
  },

  clickOnLeftButton: function(){
    this.setState({
      openRightDrawer: false,
      openLeftDrawer : !this.state.openLeftDrawer
    });
    this.resize();
  },

  clickOnRightButton: function() {
    this.setState({
     openLeftDrawer: false,
     openRightDrawer : !this.state.openRightDrawer
    });
    this.setState({
      style: {
        width: window.innerWidth,
        position: "relative",
        left: 0
      }
    });
  },

  resize: function() {
    if (this.state.openLeftDrawer) {
      this.setState({
        style: {
          width: window.innerWidth,
          position: "relative",
          left: 0
        }
      });
    }
    else {
      this.setState({
        style: {
          width: window.innerWidth - 300,
          position: "relative",
          left: 300
        }
      });
    }
  },

  render: function() {
    return (
      <div>
      <AppLeftDrawer open={this.state.openLeftDrawer} width={this.state.drawerWidth}/>
      <AppRightDrawer open={this.state.openRightDrawer} width={200} clickOnRightButton={this.clickOnRightButton}/>

        <div style={this.state.style}>
          <AppNavbar clickOnLeftButton={this.clickOnLeftButton} clickOnRightButton={this.clickOnRightButton}/>
          <AppContent />
        </div>
      </div>
    );
  }
});

export default AppGlob;
