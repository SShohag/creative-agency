import React from 'react';
import './Works.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png'

const Works = () => {
  return (
    <section className="work-container my-5 py-5">
            <h2 className="text-white text-center">Here are some of <span className="text-success">our works</span></h2>
            <div className="my-5">
                <Carousel>
                    <div>
                        <img style={{width:'300px',height:'250'}} src={carousel1} alt="" />
                    </div>
                    <div>
                        <img  style={{width:'300px',height:'250'}} src={carousel2} alt="" />
                    </div>
                    <div>
                        <img style={{width:'300px',height:'250'}} src={carousel3} alt="" />
                    </div>
                    <div>
                        <img style={{width:'300px',height:'250'}} src={carousel4} alt="" />
                    </div> 
                    <div>
                        <img style={{width:'300px',height:'250'}} src={carousel5} alt="" />
                    </div>
                </Carousel>
            </div>
        </section>
  );
};

export default Works;