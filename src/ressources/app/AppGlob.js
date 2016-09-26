import React from 'react';
import AppBar from 'material-ui/AppBar';
import AppDrawer from './AppDrawer';
import AppNavbar from './AppNavbar';
import AppContent from './AppContent';


var AppGlob = React.createClass({
  getInitialState: function() {
    return {
      openLeftDrawer:true
    }
  },

  clickOnLeftButton : function(){
   this.setState({
     openLeftDrawer : !this.state.openLeftDrawer
   });
  },

  render: function() {
    return (
      <div>
        <AppNavbar
          clickOnLeftButton={this.clickOnLeftButton}
        />
        <AppDrawer open={this.state.openLeftDrawer} />
      </div>
    );
  }
});

export default AppGlob;
