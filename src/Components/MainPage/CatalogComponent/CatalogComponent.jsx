import 'react'
import './CatalogStyle.min.css'
import { Link } from 'react-router-dom'

export default function CatalogComponent() {
	return (
		<div className="catalog_body">
			<h2>НАШИ ТОВАРЫ</h2>
			<div className="catalog_item">
				<img
					src="https://marmeladmall34.ru/wp-content/uploads/2019/01/og_og_1457357093212044457.jpg"
					alt="img"
				/>
				<div className="catalog_title">СЛАДОСТИ</div>
				<Link to="#" />
			</div>
			<div className="catalog_item">
				<img
					src="https://cdn1.ozone.ru/s3/multimedia-1-2/7020512282.jpg"
					alt="img"
				/>
				<div className="catalog_title">ЛАПША</div>
				<Link to="#" />
			</div>
			<div className="catalog_item">
				<img
					src="https://avatars.mds.yandex.net/i?id=911742eedc09f4b576664f57be8d2b89_l-5369423-images-thumbs&n=13"
					alt="img"
				/>
				<div className="catalog_title">НАПИТКИ</div>
				<Link to="#" />
			</div>
		</div>
	)
}
