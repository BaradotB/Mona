import { createContext, useState, useMemo, useEffect } from 'react'

const API_URL =
	'https://script.google.com/macros/s/AKfycbzVgieUlyBS3fKTP7dNQVPSFS3iangJj4tIBMwANyeP33YXDiIyODBcQ7uagLYGRifdLw/exec'
const CACHE_EXPIRY = 1 // 1 час

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [categories, setCategories] = useState(new Set())

	// 1. Загрузка товаров и сохранение в localStorage
	useEffect(() => {
		const cachedData = localStorage.getItem('cachedProducts')
		const cacheExpiry = localStorage.getItem('cacheExpiry')
		const cacheCategories = localStorage.getItem('cacheCategories')

		if (cachedData && cacheExpiry && Date.now() > Number(cacheExpiry)) {
			localStorage.removeItem('cachedProducts')
			localStorage.removeItem('cacheExpiry')
			localStorage.removeItem('cacheCategories')
		}

		if (cachedData && cacheExpiry && Date.now() < Number(cacheExpiry)) {
			try {
				const parsedData = JSON.parse(cachedData)

				const productsWithSavedQuantities = parsedData.map(item => {
					const savedQty = localStorage.getItem(`product_${item.id}_qty`)
					return {
						...item,
						quantity: savedQty ? parseInt(savedQty) : 0,
					}
				})

				setProducts(productsWithSavedQuantities)

				// Безопасное восстановление категорий
				if (cacheCategories) {
					const parsedCategories = JSON.parse(cacheCategories)
					if (Array.isArray(parsedCategories)) {
						setCategories(parsedCategories) // Храним как массив, а не Set
					}
				}

				setLoading(false)
				return
			} catch (e) {
				console.error('Cache parsing error:', e)
				// При ошибке парсинга продолжаем с загрузкой новых данных
			}
		}

		// Основная загрузка данных
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				// Восстановление количеств
				const productsWithQuantity = data.map(item => {
					const savedQty = localStorage.getItem(`product_${item.id}_qty`)
					return {
						...item,
						quantity: savedQty ? parseInt(savedQty) : 0,
					}
				})

				// Получаем уникальные категории
				const uniqueCategories = [...new Set(data.map(item => item.category))]

				// Сохраняем данные
				setProducts(productsWithQuantity)
				setCategories(uniqueCategories) // Сохраняем как массив

				localStorage.setItem(
					'cachedProducts',
					JSON.stringify(productsWithQuantity)
				)
				localStorage.setItem(
					'cacheCategories',
					JSON.stringify(uniqueCategories)
				) // Сохраняем массив
				localStorage.setItem('cacheExpiry', Date.now() + CACHE_EXPIRY)
			})
			.catch(error => {
				console.error('Fetch error:', error)
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
		categories,
	}

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}
