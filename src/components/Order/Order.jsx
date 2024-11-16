import React from 'react'
import styles from './Order.module.scss'

const Order = ({ obj }) => {
	var totalPrice = obj.items.reduce((sum, obj) => sum + obj.price, 0)
	console.log(totalPrice)
	return (
		<>
			<div className={styles['order']}>
				<b>Заказа #{obj.id}</b>
				<div className='orderInfo'>
					<div className='d-flex flex-column'>
						<p>
							{obj.items.map(obj => (
								<>
									<div className={styles['orderItem']}>
										<img
											className='mr-10'
											width={64}
											height={64}
											src={obj.imageUrl}
											alt=''
										/>
										<div className='d-flex flex-column'>
											<p className='m-5'>{obj.name}</p>
											<p className='m-5 opacity-5' style={{ fontSize: 14 }}>
												Стоимость: {obj.price} руб.
											</p>
										</div>
									</div>
								</>
							))}
						</p>
					</div>
				</div>
				<div className='OrderTotal'>
					<b>Сумма заказа: {totalPrice} руб.</b>
				</div>
			</div>
		</>
	)
}

export default Order
