var React = require('react');
var Slider = require('react-slick');

var Slide = React.createClass({
  render: function() {
  	return (
  		<div className="slide">
      	<h2>this.props.title</h2>
      	<div className="slide-text">
      		<h3>this.props.text</h3>
      	</div>
      </div>
  	);
  }
});

var AppCarousel = React.createClass({
  render: function () {
    var settings = {
      dots: true,
			arrows: true,
      infinite: true,
			centerMode: true,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="slide">
        	<h2>Evt1</h2>
        	<div className="slide-text">
        		<h3>1</h3>
        	</div>
        </div>
        <div className="slide">
        	<h2>Evt2</h2>
        	<div className="slide-text">
        		<h3>2</h3>
        	</div>
        </div>
        <div className="slide">
        	<h2>Evt3</h2>
        	<div className="slide-text">
        		<h3>3</h3>
        	</div>
        </div>
        <div className="slide">
        	<h2>Evt4</h2>
        	<div className="slide-text">
        		<h3>4</h3>
        	</div>
        </div>
        <div className="slide">
        	<h2>Evt5</h2>
        	<div className="slide-text">
        		<h3>5</h3>
        	</div>
        </div>
        <div className="slide">
        	<h2>Evt6</h2>
        	<div className="slide-text">
        		<h3>6</h3>
        	</div>
        </div>
      </Slider>
    );
  }
});

export default AppCarousel;
