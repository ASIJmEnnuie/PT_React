import React from 'react';
import Dimensions from 'react-dimensions';
import AppBar from 'material-ui/AppBar';
import AppDrawer from './AppDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';

var AppGlob = React.createClass({
  getInitialState: function() {
    return {
      openLeftDrawer: true,
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
     openLeftDrawer : !this.state.openLeftDrawer
    });
    if (!this.state.openLeftDrawer) {
      this.setState({
        style: {
          width: window.innerWidth - 300,
          position: "relative",
          left: 300
        }
      });
    }
    else {
      this.setState({
        style: {
          width: window.innerWidth,
          position: "relative",
          left: 0
        }
      });
    }
  },

  render: function() {
    return (
      <div>
      <AppDrawer open={this.state.openLeftDrawer} width={this.state.drawerWidth}/>

        <div style={this.state.style}>
          <AppNavbar clickOnLeftButton={this.clickOnLeftButton} />
          <AppContent />
        </div>
      </div>
    );
  }
});

export default AppGlob;
