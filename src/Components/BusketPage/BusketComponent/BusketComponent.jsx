import { useContext } from 'react'
import { OrderContext } from '../../../OrderContext.jsx'
import { ProductsContext } from '../../../ProductsContext.jsx'
import './BusketStyle.min.css'
import noPhoto from '../../../Images/img/noPhoto.webp'

export default function BusketComponent() {
	const { order, addToOrder, removeFromOrder } = useContext(OrderContext)
	const { productsDict, updateQuantity, loading } = useContext(ProductsContext)

	if (!order || loading)
		return (
			<>
				<div className="HeaderLine"></div>
				<div className="busket_loading">
					<h2>Ваша корзина</h2> <p>Загрузка корзины...</p>
				</div>
			</>
		)

	const cartItems = Array.from(order).map(id => ({
		...productsDict[id],
	}))

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)

	const handleCartAction = (item, quantityChange) => {
		const newQuantity = updateQuantity(item.id, item.quantity + quantityChange)
		if (newQuantity > 0) {
			addToOrder(item.id)
		} else {
			removeFromOrder(item.id)
		}
	}

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
							{cartItems.map(item =>
								item.quantity > 0 ? (
									<div key={item.id} className="busket_item">
										<img
											src={
												item.image_file
													? `https://lh3.googleusercontent.com/d/${item.image_file}=s500`
													: noPhoto
											}
											alt={item.title}
											className="busket_item_image"
										/>
										<div className="busket_item_info">
											<h3 className="busket_item_title">{item.title}</h3>
											<p className="busket_item_price">
												{item.price} ₽ × {item.quantity} шт.
											</p>
										</div>
										<div
											className="productsList_buttons"
											style={{
												background: 'white',
												width: 150,
												marginLeft: 'auto',
											}}
										>
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
										<button
											className="busket_trash"
											onClick={() => handleCartAction(item, -item.quantity)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path
													fill="none"
													stroke="white"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6zM2 6h20m-12 5v5m4-5v5"
												></path>
											</svg>
										</button>
										<p className="busket_item_total">
											{item.price * item.quantity} ₽
										</p>
									</div>
								) : (
									<></>
								)
							)}
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
