import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../../ProductsContext.jsx'
import './ItemStyle.min.css'
import { OrderContext } from '../../../OrderContext.jsx'

export default function ItemComponent() {
	const { addToOrder, removeFromOrder } = useContext(OrderContext)
	const { updateQuantity } = useContext(ProductsContext)
	const { products } = useContext(ProductsContext)
	const { id } = useParams()
	const currId = id - 1
	const navigate = useNavigate()
	const handleBack = () => {
		navigate(-1)
	}

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
			<div className="yellowLine"></div>
			<div className="product_body">
				<div className="product_back">
					<button onClick={handleBack}> {'<'} Назад в магазин</button>
				</div>
				<div className="product_img">
					<img
						src={`https://lh3.googleusercontent.com/d/${products[currId].image_file}=s500`}
						alt=""
					/>
				</div>
				<div className="product_info">
					<p className="product_title">{products[currId].title}</p>
					<p className="product_price">
						Цена: {products[currId].price} ₽ за шт
					</p>
					<div
						className="productsList_buttons"
						style={{
							width: 150,
						}}
					>
						{products[currId].quantity <= 0 ? (
							<button
								className="productsList_buttons_inBusket"
								onClick={() => handleCartAction(products[currId], 1)}
							>
								В корзину
							</button>
						) : (
							<>
								<button
									className="productsList_buttons_quantity"
									onClick={() => handleCartAction(products[currId], -1)}
								>
									<p>−</p>
								</button>
								<input
									className="productsList_buttons_input"
									value={products[currId].quantity}
									readOnly
									min="0"
									max="10"
								/>
								<button
									className="productsList_buttons_quantity"
									onClick={() => handleCartAction(products[currId], 1)}
								>
									<p>+</p>
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
