import 'react'
import MainComponent from './MainComponent/MainComponent.jsx'
import CatalogComponent from './CatalogComponent/CatalogComponent.jsx'
import AboutUsComponent from './AboutUsComponent/AboutUsComponent.jsx'
import RunLine from '../UI/runLine/runLine.jsx'

export default function MainPage() {
	return (
		<div>
			<MainComponent />
			<CatalogComponent />
			<RunLine />
			<AboutUsComponent />
		</div>
	)
}
