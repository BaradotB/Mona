import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/global.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage.jsx'
import AboutUsPage from './Components/AboutUsPage/AboutUsPage.jsx'
import ContactsPage from './Components/ContactsPage/ContactsPage.jsx'
import ShopPage from './Components/ShopPage/ShopPage.jsx'
import BusketPage from './Components/BusketPage/BusketPage.jsx'
import { OrderProvider } from './OrderContext' // Импортируем контекст
import { ProductsProvider } from './ProductsContext' // Импортируем контекст

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <div>Error!</div>,
	},
	{
		path: '/aboutUs',
		element: <AboutUsPage />,
		errorElement: <div>Error!</div>,
	},
	{
		path: '/contacts',
		element: <ContactsPage />,
		errorElement: <div>Error!</div>,
	},
	{
		path: '/shop',
		element: <ShopPage />,
		errorElement: <div>Error!</div>,
	},
	{
		path: '/busket',
		element: <BusketPage />,
		errorElement: <div>Error!</div>,
	},
])

function Root() {
	return (
		<ProductsProvider>
			<OrderProvider>
				<RouterProvider router={router} />
			</OrderProvider>
		</ProductsProvider>
	)
}
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
)
