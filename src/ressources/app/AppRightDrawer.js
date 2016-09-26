import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import AppProfilImage from './AppProfilImage';


var AppRightDrawer = React.createClass({
  getInitialState: function() {
    return {
      docked:true,
      openSecondary:true
    }
  },

  getDefaultProps: function() {
    return {
      open:false
   }
 },

  render: function(){
    return (
      <Drawer
        docked={this.state.docked}
        openSecondary={this.state.openSecondary}
        width={this.props.width}
        open={this.props.open}
      >
        <AppBar
          iconElementLeft={<div/>}
          iconElementRight={<AppProfilImage src={"profil.svg"} click={this.props.clickOnRightButton} />}
        />
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
});

export default AppRightDrawer;
