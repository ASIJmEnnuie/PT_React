var React = require('react');
var Slider = require('react-slick');

var AppCarousel = React.createClass({
  render: function () {
    var settings = {
      dots: false,
			arrows: false,
      infinite: true,
			centerMode: true,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    var slides = [];
    for (var i=0; i < 6; i++) {
      slides.push(
        <div key={i} className="slide">
          <h2>Evt{i+1}</h2>
          <div className="slide-text">
            <h3>{i+1}</h3>
          </div>
        </div>
      );
    }

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
});

export default AppCarousel;
