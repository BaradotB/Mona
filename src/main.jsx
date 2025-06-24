import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/global.min.css'
import {
	createBrowserRouter,
	RouterProvider,
	ScrollRestoration,
} from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage.jsx'
import AboutUsPage from './Components/AboutUsPage/AboutUsPage.jsx'
import ContactsPage from './Components/ContactsPage/ContactsPage.jsx'
import ShopPage from './Components/ShopPage/ShopPage.jsx'
import BusketPage from './Components/BusketPage/BusketPage.jsx'
import ItemComponent from './Components/ShopPage/ItemComponent/ItemComponent.jsx'
import { OrderProvider } from './OrderContext' // Импортируем контекст
import { ProductsProvider } from './ProductsContext' // Импортируем контекст
import Layout from './Layout.jsx'

const router = createBrowserRouter([
	{
		element: (
			<>
				<Layout />,<ScrollRestoration />
			</>
		),
		errorElement: <div>Error!</div>,
		children: [
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
				path: '/shop/:categoryy',
				element: <ShopPage />,
				errorElement: <div>Error!</div>,
			},
			{
				path: '/busket',
				element: <BusketPage />,
				errorElement: <div>Error!</div>,
			},
			{
				path: '/item/:id',
				element: <ItemComponent />,
				errorElement: <div>Error!</div>,
			},
		],
	},
])

function Root() {
	return (
		<OrderProvider>
			<ProductsProvider>
				<RouterProvider router={router} />
			</ProductsProvider>
		</OrderProvider>
	)
}
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
)
