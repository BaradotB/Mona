import 'react'
import MainComponent from './MainComponent/MainComponent.jsx'
import CatalogComponent from './CatalogComponent/CatalogComponent.jsx'
import AboutUsComponent from './AboutUsComponent/AboutUsComponent.jsx'
import RunLine from '../UI/runLine/runLine.jsx'
import Footer from '../UI/Footer/FooterComponent.jsx'
import Header from '../UI/Header/Header.jsx'

export default function MainPage() {
	return (
		<div>
			<Header />
			<MainComponent />
			<CatalogComponent />
			<RunLine />
			<AboutUsComponent />
			<Footer />
		</div>
	)
}
