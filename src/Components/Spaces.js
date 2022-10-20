import React from 'react';
import Slider from 'react-slick';
import { exploreSpaces } from './data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Spaces() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows:true,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className="scroll-area sec3-bg container-fluid  pb-5">
            <div className="row">
                <div className="col-12 pt-4 px-0 spaces-text text-center ">
                    <h1 className= 'spaces-h1  pt-5 px-0'>Browse Spaces</h1>
                    <h5 className= 'spaces-h5 '>Check out the hottest spaces on REDHANDED</h5>
                </div>
                <div className="col-12 ">
                    <div className="container-fluid py-4">
                        <Slider {...settings}>
                            {exploreSpaces.map((item) => (
                                <div key={item.id} className="card">
                                    <div className="card-top">
                                        <img src={item.img} alt='Spaces' />
                                    </div>
                                    <div className="card-bottom">
                                        <h4>{item.title}</h4>
                                        <h5>{item.region}</h5>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='area'>{item.area} SQR FT</p>
                                            <p className='price d-flex justify-content-end'>${item.price}/month</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Spaces;