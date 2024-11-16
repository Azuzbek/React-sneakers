import axios from 'axios'
import React, { useContext } from 'react'
import AppContext from '../../Context'
import Info from '../Info/Info'

function Drawer({ onClose, onRemove, items = [] }) {
	const { CartItems, setCartItems, totalPrice } = useContext(AppContext)
	const [isOrderComplete, setIsOrderComplete] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	const [orderId, setOrderId] = React.useState(null)

	const onClickOrder = async () => {
		try {
			setIsLoading(true)

			const { data } = await axios.post(
				'https://671f869be7a5792f052e9420.mockapi.io/orders',
				{
					items: CartItems,
				}
			)
			for (let i = 0; i < CartItems.length; i++) {
				const item = CartItems[i]
				await axios.delete(
					'https://671d4cc609103098807cc554.mockapi.io/cart/' + item.id
				)
			}
			console.log(data)
			setOrderId(data.id)
			setIsOrderComplete(true)
			setCartItems([])
		} catch {
			alert('Ошибка при создании заказа')
		}
		setIsLoading(false)
	}
	return (
		<div className='overlay'>
			<div className='drawer d-flex flex-column'>
				<h2 className='mb-30 d-flex justify-between'>
					Корзина{' '}
					<img
						onClick={onClose}
						className='cu-p'
						src='/img/btn-remove.svg'
						alt='close'
					/>
				</h2>

				{CartItems.length > 0 ? (
					<div className='d-flex flex-column flex'>
						<div className='items flex'>
							{items.map(obj => (
								<div
									key={obj.id}
									className='cartItem d-flex align-center mb-20'
								>
									<div
										style={{ backgroundImage: `url(${obj.imageUrl})` }}
										className='cartItemImg'
									></div>

									<div className='mr-20 flex'>
										<p className='mb-5'>{obj.name}</p>
										<b>{obj.price} руб.</b>
									</div>
									<img
										onClick={() => onRemove(obj.id)}
										className='removeBtn'
										src='img/btn-remove.svg'
										alt='Remove'
									/>
								</div>
							))}
						</div>
						<div className='cartTotalBlock'>
							<ul>
								<li>
									<span>Итого:</span>
									<div></div>
									<b>{totalPrice} руб.</b>
								</li>
								<li>
									<span>Налог 5%:</span>
									<div></div>
									<b>{(totalPrice * 5) / 100} руб. </b>
								</li>
							</ul>
							<button
								disabled={isLoading}
								className='greenButton'
								onClick={onClickOrder}
							>
								Оформить заказ <img src='img/arrow.svg' alt='Arrow' />
							</button>
						</div>
					</div>
				) : (
					<Info
						title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
						desc={
							isOrderComplete
								? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
						}
						img={
							isOrderComplete
								? '/img/complete-order.jpg'
								: '/img/empty-cart.jpg'
						}
					></Info>
				)}
			</div>
		</div>
	)
}

export default Drawer
