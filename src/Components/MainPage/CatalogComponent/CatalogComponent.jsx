import 'react'
import './CatalogStyle.min.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../../ProductsContext.jsx'

export default function CatalogComponent() {
	const { categories, products } = useContext(ProductsContext)

	// Функция для поиска первого товара в категории
	const getFirstProductImage = category => {
		const product = products.find(p => p.category === category)
		return `https://lh3.googleusercontent.com/d/${product.image_file}=s500`
	}

	return (
		<div className="catalog_body">
			<h2>НАШИ ТОВАРЫ</h2>
			{categories.map(item => (
				<div className="catalog_item" key={item}>
					<img
						src={getFirstProductImage(item)}
						alt={item}
						className="catalog_image"
					/>
					<div className="catalog_title">{item}</div>
					<Link to={`/shop/${item}`} className="catalog_link" />
				</div>
			))}
		</div>
	)
}
