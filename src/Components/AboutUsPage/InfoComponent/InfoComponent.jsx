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
					Mona — ваш проводник в мир аутентичных азиатских вкусов! Наш магазин
					корейских продуктов и не только расположен в удобном месте — рядом с
					Ашаном по адресу: просп. Александра Суворова, 19, Симферополь. Здесь
					вас ждёт богатый выбор экзотических товаров: от пикантной корейской
					лапши и соусов до нежных японских сладостей и редких снеков.
				</div>
				<img src={shop} alt="" className="info_img" />
				<img src={machine} alt="" className="info_img" />
				<div className="info_descr">
					Мы создали особую атмосферу для гурманов — в Mona вы найдёте не только
					продукты, но и современное оборудование, чтобы сразу приготовить
					ароматную лапшу по-корейски прямо у нас в магазине. Погрузитесь в мир
					ярких вкусов Азии с комфортом!
				</div>
				<p>Приобрести товары можете здесь:</p>
				<button>магазин</button>
			</div>
			<Line />
		</>
	)
}
