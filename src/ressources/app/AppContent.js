import React from 'react';
import AppCarousel from './AppCarousel';

var AppContent = React.createClass({
  render : function() {
    return (
    <div id="content">
      <h1> Juste une simple percée technique de ReactJS avec Material-UI </h1>
      <h2>avec un carousselle fait avec react-slick</h2>
			<AppCarousel />
    </div>
  );
  }
});

export default AppContent;
