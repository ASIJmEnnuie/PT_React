import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

var AppDrawer = React.createClass({
  getInitialState: function() {
    return {
      docked:true,
      width:300,
      swipeAreaWidth:300
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
        width={this.state.width}
        swipeAreaWidth={this.state.swipeAreaWidth}
        open={this.props.open}
      >
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
});

export default AppDrawer;
