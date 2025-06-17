import 'react'
import { Link } from 'react-router-dom'
import './HeaderStyle.min.css'

export default function Header() {
	return (
		<>
			<div className="header">
				<div className="header_logo">
					{/*<p>
				ВКУС
				<br />
				АЗИИ
			</p>*/}
					<Link to="/"></Link>
				</div>
				<nav>
					<Link to="/" className="nav_link">
						ГЛАВНАЯ
					</Link>
					<Link to="/shop" className="nav_link">
						МАГАЗИН
					</Link>
					<Link to="/aboutUs" className="nav_link">
						О НАС
					</Link>
					<Link to="/contacts" className="nav_link">
						КОНТАКТЫ
					</Link>
					<Link to="/busket" className="nav_link">
						КОРЗИНА
					</Link>
				</nav>
			</div>
		</>
	)
}
