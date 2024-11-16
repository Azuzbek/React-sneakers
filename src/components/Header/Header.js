import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context'
function Header({ onClickCart }) {
	const { totalPrice } = useContext(AppContext)

	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex aling-center'>
					<img width={'40'} height={'40'} src='/img/logo.png' alt='logo'></img>
					<div>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-3'>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li className='mr-30 cu-p' onClick={onClickCart}>
					<img width={'18'} height={'18'} src='/img/cart.svg' alt='cart'></img>
					<span>{totalPrice} руб.</span>
				</li>
				<Link to='/favorites'>
					<li className='mr-20 cu-p'>
						<img
							width={'18'}
							height={'18'}
							src='/img/heart.svg'
							alt='favorite'
						></img>
					</li>
				</Link>
				<Link to={'/orders'}>
					<li>
						<img
							width={'18'}
							height={'18'}
							src='/img/user.svg'
							alt='user'
						></img>
					</li>
				</Link>
			</ul>
		</header>
	)
}

export default Header
