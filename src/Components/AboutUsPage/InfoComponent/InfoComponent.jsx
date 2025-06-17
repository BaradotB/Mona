import 'react'
import './InfoComponentStyle.min.css'
import shop from '../../../Images/img/outside.jpg'
import machine from '../../../Images/img/catalog2.jpg'
import Line from '../../UI/runLine/runLine.jsx'

export default function InfoComponent() {
	return (
		<>
			<div className="yellowLine"></div>
			<div className="info_body">
				<h2>О нас</h2>
				<div className="info_descr">
					Mona - магазин корейских продуктов и не только! Мы располагаемся возле
					Ашана по адресу: просп. Александра Суворова, 19, Симферополь. У нас Вы
					можете приобрести самые разнообразные иностранные продукты, от
					корейской лапши до японских сладостей! Также мы обладаем современным
					оборудованием, которое позволит вам приготовить лапшу прямо в
					магазине!
				</div>
				<img src={shop} alt="" className="info_img" />
				<img src={machine} alt="" className="info_img" />
				<div className="info_descr">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
					magni laudantium beatae non cum impedit minima voluptate eveniet,
					molestiae nihil porro neque accusamus deserunt itaque, provident quia
					odio ut tempora.
				</div>
				<p>Приобрести товары можете здесь:</p>
				<button>магазин</button>
			</div>
			<Line />
		</>
	)
}
