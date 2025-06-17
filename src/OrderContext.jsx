import { createContext, useState, useEffect } from 'react'

export const OrderContext = createContext()

export function OrderProvider({ children }) {
	// 1. Загружаем корзину из localStorage при инициализации
	const [order, setOrder] = useState(() => {
		const saved = localStorage.getItem('cart')
		return saved ? new Set(JSON.parse(saved)) : new Set()
	})

	// 2. Сохраняем корзину в localStorage при изменении
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(Array.from(order)))
	}, [order])

	const addToOrder = id => {
		setOrder(prev => {
			const newSet = new Set(prev)
			newSet.add(id)
			return newSet
		})
	}

	const removeFromOrder = id => {
		setOrder(prev => {
			const newSet = new Set(prev)
			newSet.delete(id)
			return newSet
		})
	}

	const value = {
		order,
		addToOrder,
		removeFromOrder,
		orderSize: order.size,
	}

	return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}
