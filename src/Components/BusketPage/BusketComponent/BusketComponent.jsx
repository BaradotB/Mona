import { useContext } from 'react'
import { OrderContext } from '../../../OrderContext.jsx'
import { ProductsContext } from '../../../ProductsContext.jsx'
import './BusketStyle.min.css'

export default function BusketComponent() {
	const { order } = useContext(OrderContext)
	const { productsDict } = useContext(ProductsContext)

	if (!order || !productsDict) return <div>Загрузка корзины...</div>

	const cartItems = Array.from(order).map(id => ({
		...productsDict[id],
		quantity: productsDict[id]?.quantity || 1,
	}))

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	return (
		<>
			<div className="HeaderLine"></div>
			<div className="busket_body">
				<h2>Ваша корзина</h2>
				{cartItems.length === 0 ? (
					<div className="busket_empty">
						<p>Корзина пуста</p>
					</div>
				) : (
					<>
						<div className="busket_items">
							{cartItems.map(item => (
								<div key={item.id} className="busket_item">
									<img
										src={item.image}
										alt={item.title}
										className="busket_item_image"
									/>
									<div className="busket_item_info">
										<h3 className="busket_item_title">{item.title}</h3>
										<p className="busket_item_price">
											{item.price} ₽ × {item.quantity} шт.
										</p>
									</div>
									<p className="busket_item_total">
										{item.price * item.quantity} ₽
									</p>
								</div>
							))}
						</div>
						<div className="busket_total">
							<p>Итого: {total} ₽</p>
							<button className="busket_buy">Оформить заказ</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}
