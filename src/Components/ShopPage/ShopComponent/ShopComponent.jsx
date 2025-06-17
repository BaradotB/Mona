import 'react'
import './ShopStyle.min.css'
import ProductsList from '../ProductsListComponent/ProductsListComponent.jsx'

export default function ShopComponent() {
	return (
		<>
			<div className="HeaderLine"></div>
			<div className="shop_body">
				<h2>Каталог товаров</h2>
				<ProductsList />
			</div>
		</>
	)
}
