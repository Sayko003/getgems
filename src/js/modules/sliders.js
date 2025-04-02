
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';



const sliders = function(){
    const mainSwiper = new Swiper('.main--slider', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        // autoHeight: true,
        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            // when window width is >= 640px
            1001: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            }
        },
    });

    const aboutSwiper = new Swiper('.about--slider', {
        modules: [Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        // autoHeight: true,
        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: '.about-arrow-right',
            prevEl: '.about-arrow-left',
        },
    });

    mainSwiper.updateSlides();;
    aboutSwiper.updateSlides();;
}

export default sliders;