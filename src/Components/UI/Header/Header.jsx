import { Link, useLocation } from 'react-router-dom'
import './HeaderStyle.min.css'

export default function Header() {
	const location = useLocation()
	const navMenu = [
		{ title: 'ГЛАВНАЯ', link: '/' },
		{ title: 'МАГАЗИН', link: '/shop/all', matchPattern: '/shop' },
		{ title: 'О НАС', link: '/aboutUs' },
		{ title: 'КОНТАКТЫ', link: '/contacts' },
		{ title: 'КОРЗИНА', link: '/busket' },
	]

	return (
		<div className="header">
			<div className="header_logo">
				<Link to="/"></Link>
			</div>
			<nav>
				{navMenu.map(item => (
					<Link
						key={item.link}
						to={item.link}
						className={
							(
								item.matchPattern
									? location.pathname.startsWith(item.matchPattern)
									: location.pathname === item.link
							)
								? 'nav_link_active nav_link'
								: 'nav_link'
						}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</div>
	)
}
