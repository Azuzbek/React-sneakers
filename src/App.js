import axios from 'axios'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header/Header'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'

import AppContext from './Context'
import Orders from './Pages/Orders'

function App() {
	const [items, setItems] = React.useState([])
	const [CartItems, setCartItems] = React.useState([])
	const [FavoriteItems, setFavoriteItems] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpen, setCartOpen] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	const totalPrice = CartItems.reduce((sum, obj) => sum + obj.price, 0)

	React.useEffect(() => {
		async function fetchData() {
			try {
				const [cartResponse, favoritesResponse, itemsResponse] =
					await Promise.all([
						axios.get('https://671d4cc609103098807cc554.mockapi.io/cart'),
						axios.get('https://671f869be7a5792f052e9420.mockapi.io/favorite'),
						axios.get('https://671d4cc609103098807cc554.mockapi.io/items'),
					])
				console.log(isLoading)

				setIsLoading(false)
				setCartItems(cartResponse.data)
				setFavoriteItems(favoritesResponse.data)
				setItems(itemsResponse.data)
			} catch (error) {
				alert('Ошибка при запросе данных ;(')
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const onAddToCart = async obj => {
		try {
			const findedItem = CartItems.find(
				item => Number(item.parentId) === Number(obj.id)
			)
			if (findedItem) {
				setCartItems(prev =>
					prev.filter(item => Number(item.parentId) !== Number(obj.id))
				)
				await axios.delete(
					`https://671d4cc609103098807cc554.mockapi.io/cart/${findedItem.id}`
				)
			} else {
				const { data } = await axios.post(
					'https://671d4cc609103098807cc554.mockapi.io/cart',
					obj
				)
				setCartItems(prev => [...prev, data])
			}
		} catch (e) {
			alert('Не удалось добавить в корзину')
		}
	}
	const onAddToFavorite = async obj => {
		try {
			if (
				FavoriteItems.find(item => Number(item.id) === Number(obj.parentId))
			) {
				await axios.delete(
					`https://671f869be7a5792f052e9420.mockapi.io/favorite/${obj.id}`
				)
				setFavoriteItems(prev =>
					prev.filter(item => Number(item.id) !== Number(obj.id))
				)
			} else {
				const { data } = await axios.post(
					'https://671f869be7a5792f052e9420.mockapi.io/favorite',
					obj
				)
				setFavoriteItems(prev => [...prev, data])
			}
		} catch (e) {
			alert('Не удалось добавить в фавориты')
		}
	}
	const onRemoveItem = id => {
		try {
			axios.delete(`https://671d4cc609103098807cc554.mockapi.io/cart/${id}`)
			setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
		} catch (error) {
			alert('Ошибка при удалении из корзины')
			console.error(error)
		}
	}

	const onChangeSeachValue = event => {
		setSearchValue(event.target.value)
		console.log(event.target.value)
	}

	const isItemAdded = id => {
		return CartItems.some(obj => Number(obj.parentId) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{
				items,
				CartItems,
				FavoriteItems,
				setCartItems,
				isItemAdded,
				setCartOpen,
				totalPrice,
			}}
		>
			<div className='wrapper clear'>
				{cartOpen && (
					<Drawer
						items={CartItems}
						onRemove={onRemoveItem}
						onClose={() => setCartOpen(false)}
					/>
				)}
				<Header
					onClickCart={() => {
						setCartOpen(true)
					}}
				/>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								items={items}
								cartItems={CartItems}
								favoritedItems={FavoriteItems}
								searchValue={searchValue}
								isLoading={isLoading}
								setSearchValue={setSearchValue}
								onAddToCart={onAddToCart}
								onAddToFavorite={onAddToFavorite}
								onChangeSeachValue={onChangeSeachValue}
							/>
						}
						exact
					/>
					<Route
						path='favorites'
						element={
							<Favorites
								onAddToCart={onAddToCart}
								onAddToFavorite={onAddToFavorite}
							/>
						}
						exact
					/>
					<Route path='orders' element={<Orders />} exact />
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App
