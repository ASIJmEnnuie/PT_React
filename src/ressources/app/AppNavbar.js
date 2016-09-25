import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import AppDrawer from './AppDrawer';


var AppNavbar = React.createClass({
  getInitialState: function() {
    return {
      open:true
    }
  },

  toggle : function(){
   this.setState({
     open : !this.state.open
   })
  },

  render: function() {
    return (
      <div>
        <AppBar
          className="navbar"
          title="ReactJS with Material-UI"
          iconElementLeft={
            <IconButton onTouchTap={this.toggle}>
              <ActionReorder />
            </IconButton>
          }
        />
        <AppDrawer open={this.state.open} />
        <div>
          Je suis du contenu
        </div>
      </div>
    );
  }
});

export default AppNavbar;
