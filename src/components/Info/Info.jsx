import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context'

const Info = ({ title, desc, img }) => {
	const { setCartOpen } = useContext(AppContext)

	const navigate = useNavigate()

	const buttonNavigate = () => {
		if (
			window.location.pathname !== '/favorites' &&
			window.location.pathname !== '/orders'
		) {
			setCartOpen(false)
		} else {
			navigate('/')
		}
	}

	return (
		<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
			<img
				className='mb-20'
				height={
					img !== '/img/empty-favorites.svg' && img !== '/img/empty-orders.svg'
						? 120
						: 70
				}
				src={img}
				alt=''
			/>
			<h2>{title}</h2>
			<p className='opacity-6'>{desc}</p>
			<button
				onClick={() => {
					buttonNavigate()
				}}
				className='greenButton'
			>
				<img src='img/arrow.svg' alt='Arrow' />
				Вернуться назад
			</button>
		</div>
	)
}

export default Info
