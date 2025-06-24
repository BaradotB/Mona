import { Outlet } from 'react-router-dom'
import Header from './Components/UI/Header/Header.jsx'
import Footer from './Components/UI/Footer/FooterComponent.jsx'

export default function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
