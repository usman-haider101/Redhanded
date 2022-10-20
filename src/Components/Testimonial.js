import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { reviews } from './reviews';
const Testimonial = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="sec5-bg scroll-area container-fluid pb-5" >
            <div className="row">
                <div className="col-12 pt-5 px-0 text-center">
                    <h1 className='sec5-header  px-0'>Testimonials</h1>
                    <h5 className='testimonial-h5'>See for yourself how others are enjoying the REDHANDED difference!</h5>
                </div>
            </div>
            <div className="row mt-5 pb-4">
                <div className="col-12">
                    <div className="container-fluid">
                        <Slider {...settings}>
                            {reviews.map((item) => (
                                <div key={item.id} className="sec5-card">
                                    <div className="sec5-card-top">
                                        <p><strong className="commas">"</strong>{item.comment}<strong className="commas">"</strong></p>
                                        <div className="d-flex">
                                            <img className="sec5-img" src={item.img} alt="viewers" />
                                            <div className="sec5-card-bottom">
                                                <h4>{item.name}</h4>
                                                <p>{item.prof}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testimonial;