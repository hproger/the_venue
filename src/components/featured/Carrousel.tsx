import * as React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide1.jpg';
import slide_two from '../../resources/images/slide2.jpg';
import slide_three from '../../resources/images/slide3.jpg';

interface CarrouselProps {
}

const Carrousel: React.SFC<CarrouselProps> = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500
    };
  return(
        <div 
            className='carrousel_wrapper'
            style={{ 
              height:`${window.innerHeight}px`,
              overflow: 'hidden'
            }}
        >
        <Slider {...settings}>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background: `url(${slide_one})no-repeat center center`,
                        backgroundSize: 'cover',
                        height: `${window.innerHeight}px`
                    }}
                ></div>
            </div>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background: `url(${slide_two})no-repeat center center`,
                        backgroundSize: 'cover',
                        height: `${window.innerHeight}px`
                    }}
                ></div>
            </div>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background: `url(${slide_three})no-repeat center center`,
                        backgroundSize: 'cover',
                        height: `${window.innerHeight}px`
                    }}
                ></div>
            </div>
        </Slider>
        </div>
  );
};

export default Carrousel;