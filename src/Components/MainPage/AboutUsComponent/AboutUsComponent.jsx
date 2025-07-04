import 'react'
import './AboutUsStyle.min.css'
import buldak from '../../../Images/img/catalog2.jpg'
import naruto from '../../../Images/stickers/naruto.png'

export default function AboutUsComponent() {
	return (
		<div className="about_body">
			<div className="about_descr">
				<h2>Корейские впечатления без границ!</h2>
				{/*<p>
					Отведайте горячую лапшу не выходя из магазина! Современное
					оборудование приготовит еду за вас. Также попробуйте наши добавки: от
					мяса до овощей!
				</p>*/}
				<p>
					Только у нас: попробуйте аутентичную корейскую еду не выходя из
					магазина!
				</p>
				<p>
					✨Приготовьте сами: cочную лапшу с пикантным бульоном и нежными
					добавками <br />- Ароматные токпокки в пряном соусе —{' '}
					<b>хит корейских улиц</b> <br />- Все блюда готовятся на{' '}
					<b>современном оборудовании</b> с сохранением традиционных рецептур{' '}
					<br />- Свежие добавки на ваш вкус: <b>от мяса до овощей</b>
				</p>
				<p>
					🎥<b>Погружение в атмосферу</b>: Пока вы наслаждаетесь едой, на нашем
					большом экране идут лучшие дорамы — от романтических мелодрам до
					захватывающих исторических саг. <br />
				</p>
				<p>
					Почему у нас? <br />
					✔ Свежие ингредиенты каждый день <br />
					✔ Быстрое приготовление (3-5 минут) <br />✔ Удобные места для
					комфортного перекуса
				</p>
			</div>
			<div className="about_img">
				<img src={buldak} alt="" />
			</div>
			<img src={naruto} alt="img" className="naruto" />
		</div>
	)
}
