import React from 'react';
import './SampleWork.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import WorkSlide from '../WorkSlide/WorkSlide';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
const SampleWork = () => {
    const slides = [
        {id:'01', img: carousel1},
        {id:'02', img: carousel2},
        {id:'03', img: carousel3},
        {id:'04', img: carousel4},
        {id:'05', img: carousel5}

    ]
    return (
    <section className='text-center pt-5 sample-work'>
        <h5 className='text-white mb-5'>Here are some of <span style={{color:'#7AB259'}}> our works</span></h5>
        <div className='m-5'>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
    >
        { slides.map(slide=>{
                return<SwiperSlide key={slide.id}>
                    {({isActive}) => (
                        <WorkSlide isActive= {isActive} slide={slide}></WorkSlide>
                    )}
                </SwiperSlide>
                })
         }
        </Swiper>
    </div>
    </section>
    );
};

export default SampleWork;