
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';



const sliders = function(){
    const mainSwiper = new Swiper('.main--slider', {
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
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        },
    });
}

export default sliders;