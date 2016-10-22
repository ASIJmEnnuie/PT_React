import React from 'react';
import MenuItem from 'material-ui/MenuItem';

var AppLeftDrawer = React.createClass({
  getDefaultProps: function() {
    return {
      open: true,
      id: "leftDrawerOpen"
   }
 },

  render: function() {
    return (
      <div id={this.props.id} open={this.props.open}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
        <MenuItem>Menu Item 4</MenuItem>
      </div>
    );
  }
});

export default AppLeftDrawer;
