import 'react'
import './mainComponentStyle.min.css'
import Swiper from '../SwiperMain/SwiperMainComponent.jsx'

export default function HOME() {
	return (
		<>
			<div className="mainBody">
				<Swiper />
				<div className="testt">
					<div className="mainBody_content">
						<h1>MONA</h1>
						<hr />
						<h2>Вкус Азии</h2>
					</div>
					<div className="test">
						<p>
							Лучшие товары из Кореи в Симферополе! <br />
							По адресу: проспект Александра Суворова, 19
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
