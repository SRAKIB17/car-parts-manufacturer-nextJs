import React from 'react';
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='mt-2'>
            <Carousel infiniteLoop={true} autoPlay={true} emulateTouch={true} interval={2500}>
                <div>
                    <img src='/image/banner/banner-1.jpg' />

                </div>
                <div>
                    <img src="/image/banner/banner-2.jpg" />

                </div>
                <div>
                    <img src="/image/banner/banner-3.jpg" />

                </div>
                <div>
                    <img src="/image/banner/banner-4.jpg" />

                </div>

            </Carousel>
        </div>
    );
};

export default Banner;