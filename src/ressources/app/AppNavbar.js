import React from 'react';
import Dimensions from 'react-dimensions';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

var AppIconLeft = React.createClass({
  render: function() {
    return(
      <IconButton onTouchTap={this.props.click}>
        <ActionReorder />
      </IconButton>
    );
  }
});

var AppNavbar = React.createClass({
  getInitialState: function() {
    return {
      className:"navbar",
      title:"ReactJS with Material-UI",
    }
  },

  render: function() {
    return (
      <AppBar
        className={this.state.className}
        title={this.state.title}
        iconElementLeft={<AppIconLeft click={this.props.clickOnLeftButton} />}
      />
    );
  }
});

export default Dimensions()(AppNavbar);
