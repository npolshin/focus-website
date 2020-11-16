import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
var swiper = new Swiper('.swiper-container', {
	// Optional parameters
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 15,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
