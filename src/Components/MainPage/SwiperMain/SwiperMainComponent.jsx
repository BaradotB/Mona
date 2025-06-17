import 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import './SwiperMainStyle.min.css'
import img1 from '../../../Images/img/catalog.jpg'
import img2 from '../../../Images/img/catalog2.jpg'
import img3 from '../../../Images/img/outside.jpg'

export default function MainSwiperComponent() {
	const data = [img1, img2, img3]
	return (
		<div>
			<Swiper
				loop={true}
				centeredSlides={true}
				autoplay={{
					on: true,
					delay: 5000,
					disableOnInteraction: false,
				}}
				speed={3000}
				effect={'fade'}
				slidesPerView={1}
				pagination={true}
				modules={[Pagination, Autoplay, EffectFade]}
				className="mySwiper"
			>
				{data.map((img, index) => (
					<SwiperSlide key={index}>
						<div className="portfolio-item">
							<img src={img} alt={'img'} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
