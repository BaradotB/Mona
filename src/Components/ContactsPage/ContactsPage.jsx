import 'react'
import ContactsComponent from './ContactsComponent/ContactsComponent.jsx'
import Header from '../UI/Header/Header.jsx'
import Footer from '../UI/Footer/FooterComponent.jsx'

export default function ContactsPage() {
	return (
		<div>
			<Header />
			<ContactsComponent />
			<Footer />
		</div>
	)
}
