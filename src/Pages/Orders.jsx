import axios from 'axios'
import { useEffect, useState } from 'react'
import Info from '../components/Info/Info'
import Order from '../components/Order/Order'

function Orders() {
	const [orders, setOrders] = useState([])
	useEffect(() => {
		async function getOrders() {
			const { data } = await axios.get(
				'https://671f869be7a5792f052e9420.mockapi.io/orders'
			)
			setOrders(data)
		}
		getOrders()
	}, [])

	console.log(orders)
	return (
		<>
			<div style={{ padding: 60, minHeight: '90vh' }} className='content'>
				<div className='d-flex mb-40 justify-between aling-center'>
					<h1>Мои Заказы</h1>
				</div>
				{orders.length > 0 ? (
					<div style={{ gap: 40 }} className='d-flex flex-wrap'>
						{orders.map(obj => (
							<Order key={obj.id} obj={obj} />
						))}
					</div>
				) : (
					<Info
						title={'У вас нет заказов'}
						desc={'Оформите хотя бы один заказ'}
						img={'/img/empty-orders.svg'}
					></Info>
				)}
			</div>
		</>
	)
}

export default Orders
