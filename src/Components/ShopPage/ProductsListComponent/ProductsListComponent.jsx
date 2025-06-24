import './ProductsListStyle.min.css'
import { useContext } from 'react'
import { OrderContext } from '../../../OrderContext.jsx'
import { ProductsContext } from '../../../ProductsContext.jsx'
import noPhoto from '../../../Images/img/noPhoto.webp'
import { Link, useParams } from 'react-router-dom'

export default function ProductsListComponent() {
	const { products, loading, updateQuantity, categories } =
		useContext(ProductsContext)
	const { addToOrder, removeFromOrder } = useContext(OrderContext)
	const { categoryy } = useParams()

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
		<>
			<div className="productsList_categories">
				{categories.map(category => (
					<Link
						to={category === categoryy ? `/shop/all` : `/shop/${category}`}
						className={category === categoryy ? 'category_active' : 'category'}
						key={category}
					>
						{category}
					</Link>
				))}
			</div>
			<div className="productsList_container">
				{products.map(item =>
					item.title ? (
						categoryy !== 'all' ? (
							item.category === categoryy ? (
								<div key={item.id} className="productsList_item">
									<div className="productsList_item_img">
										<Link to={`/item/${item.id}`}>
											<img
												src={
													item.image_file
														? `https://lh3.googleusercontent.com/d/${item.image_file}=s500`
														: noPhoto
												}
												alt={item.title}
											/>
										</Link>
									</div>
									<div className="productsList_item_info">
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
								</div>
							) : (
								<></>
							)
						) : (
							<div key={item.id} className="productsList_item">
								<div className="productsList_item_img">
									<Link to={`/item/${item.id}`}>
										<img
											src={
												item.image_file
													? `https://lh3.googleusercontent.com/d/${item.image_file}=s500`
													: noPhoto
											}
											alt={item.title}
										/>
									</Link>
								</div>
								<div className="productsList_item_info">
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
							</div>
						)
					) : (
						<></>
					)
				)}
			</div>
		</>
	)
}
