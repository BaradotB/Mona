import { createContext, useState, useMemo, useEffect } from 'react'

const API_URL =
	'https://script.google.com/macros/s/AKfycbzVgieUlyBS3fKTP7dNQVPSFS3iangJj4tIBMwANyeP33YXDiIyODBcQ7uagLYGRifdLw/exec'
const CACHE_EXPIRY = 3600000 // 1 час

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	// 1. Загрузка товаров и сохранение в localStorage
	useEffect(() => {
		const cachedData = localStorage.getItem('cachedProducts')
		const cacheExpiry = localStorage.getItem('cacheExpiry')

		if (cachedData && cacheExpiry && Date.now() > Number(cacheExpiry)) {
			localStorage.removeItem('cachedProducts')
			localStorage.removeItem('cacheExpiry')
		}

		if (cachedData && cacheExpiry && Date.now() < Number(cacheExpiry)) {
			const parsedData = JSON.parse(cachedData)
			setProducts(parsedData)
			setLoading(false)
			return
		}

		// Основная загрузка данных
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				const productsWithQuantity = data.map(item => ({
					...item,
					quantity: localStorage.getItem(`product_${item.id}_qty`) || 0,
				}))

				setProducts(productsWithQuantity)
				localStorage.setItem(
					'cachedProducts',
					JSON.stringify(productsWithQuantity)
				)
				localStorage.setItem('cacheExpiry', Date.now() + CACHE_EXPIRY)
			})
			.finally(() => setLoading(false))
	}, [])

	// 2. Сохранение количеств при изменении
	useEffect(() => {
		if (products.length > 0) {
			products.forEach(item => {
				localStorage.setItem(`product_${item.id}_qty`, item.quantity)
			})
		}
	}, [products])

	const updateQuantity = (id, newQuantity) => {
		const clampedQuantity = Math.max(0, Math.min(newQuantity, 10))
		setProducts(prevProducts =>
			prevProducts.map(item =>
				item.id === id ? { ...item, quantity: clampedQuantity } : item
			)
		)
		return clampedQuantity
	}

	const productsDict = useMemo(
		() => products.reduce((dict, p) => ({ ...dict, [p.id]: p }), {}),
		[products]
	)

	const value = {
		products,
		loading,
		productsDict,
		updateQuantity,
		setProducts,
	}

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}
