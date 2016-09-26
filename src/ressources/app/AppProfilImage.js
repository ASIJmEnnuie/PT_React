import React from 'react';

var AppProfilImage = React.createClass({
  getDefaultProps: function() {
    return {
      src:"profil.svg"
    }
  },

  render: function() {
    return(
      <img src={"ressources/images/"+this.props.src} alt="profil" className="profil" onTouchTap={this.props.click} />
    )
  }
});

export default AppProfilImage;
