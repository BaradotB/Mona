import 'react'
import './ContactsStyle.min.css'

export default function ContactsComponent() {
	return (
		<>
			<div className="yellowLine"></div>
			<div className="contacts_body">
				<h2>Контакты</h2>
				<p>
					Наш адрес:
					<a
						href="https://yandex.ru/maps/-/CHS-mN1F"
						rel="noreferrer"
						target="_blank"
					>
						просп. Александра Суворова, 19, Симферополь
					</a>
				</p>
				<p>
					Номер телефона: <a href="tel:+79788472402">+7 (978) 847-24-02</a>
				</p>
				<p>
					<a href="https://t.me/MONA_EAT" rel="noreferrer" target="_blank">
						Телеграмм
					</a>
				</p>
			</div>
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a09502cd579d8ff2293396104e67501aea004a21920b6991e0dbe84821e8014&amp;source=constructor"
				width="100%"
				height="400"
				frameBorder="0"
				className="contacts_map"
			></iframe>
		</>
	)
}
