import './ProductsListStyle.min.css'
import { useContext } from 'react'
import { OrderContext } from '../../../OrderContext.jsx'
import { ProductsContext } from '../../../ProductsContext.jsx'

export default function ProductsListComponent() {
	const { products, loading, updateQuantity } = useContext(ProductsContext)
	const { addToOrder, removeFromOrder } = useContext(OrderContext)

	const handleCartAction = (item, quantityChange) => {
		const newQuantity = updateQuantity(item.id, item.quantity + quantityChange)

		if (newQuantity > 0) {
			addToOrder(item.id)
		} else {
			removeFromOrder(item.id)
		}
	}

	if (loading) return <div className="title--loading">Загрузка товаров...</div>

	return (
		<div className="productsList_container">
			{products.map(item => (
				<div key={item.id} className="productsList_item">
					<div className="productsList_img">
						<img src={item.image} alt={item.title} />
					</div>
					<h3>{item.title}</h3>
					<p>
						{item.price} ₽<span>за шт</span>
					</p>
					<div className="productsList_buttons">
						{item.quantity <= 0 ? (
							<button
								className="productsList_buttons_inBusket"
								onClick={() => handleCartAction(item, 1)}
							>
								В корзину
							</button>
						) : (
							<>
								<button
									className="productsList_buttons_quantity"
									onClick={() => handleCartAction(item, -1)}
								>
									<p>−</p>
								</button>
								<input
									className="productsList_buttons_input"
									value={item.quantity}
									readOnly
									min="0"
									max="10"
								/>
								<button
									className="productsList_buttons_quantity"
									onClick={() => handleCartAction(item, 1)}
								>
									<p>+</p>
								</button>
							</>
						)}
					</div>
				</div>
			))}
		</div>
	)
}
