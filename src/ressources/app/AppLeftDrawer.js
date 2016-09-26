import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

var AppLeftDrawer = React.createClass({
  getInitialState: function() {
    return {
      docked:true,
    }
  },

  getDefaultProps: function() {
    return {
      open:true
   }
 },

  render: function(){
    return (
      <Drawer
        docked={this.state.docked}
        width={this.props.width}
        open={this.props.open}
      >
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
});

export default AppLeftDrawer;
