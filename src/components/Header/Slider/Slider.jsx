import Container from './Container/Container';
import s from './Slider.module.css';

import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './SliderSwiper.css';

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section className={s.slider}>
            <Container />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={s.slider}>
            <Container />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={s.slider}>
            <Container />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={s.slider}>
            <Container />
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
