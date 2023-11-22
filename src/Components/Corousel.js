import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2 className='texting'>Our Dinings</h2>
      <Slider {...settings}>
        <div>
          <img src="https://fearingsrestaurant.com/wp-content/uploads/2017/08/Deans-Kitchen_web.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg" alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
