function Drawer() {
	return (
		<div className='overlay'>
			<div className='drawer d-flex flex-column'>
				<h2 className='mb-30 d-flex justify-between'>
					Корзина <img className='cu-p' src='/img/btn-remove.svg' alt='close' />
				</h2>
				<div className='items'>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{ backgroundImage: 'url(/sneakers/1.jpg)' }}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p>Мужские кроссовки Nike Blazer Mid Suede</p>
							<b>12 999 руб.</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
					</div>

					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{ backgroundImage: 'url(/sneakers/1.jpg)' }}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p>Мужские кроссовки Nike Blazer Mid Suede</p>
							<b>12 999 руб.</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
					</div>
				</div>
				<div className='cartTotalBlock'>
					<ul>
						<li className='d-flex'>
							<span>Итого</span>
							<div></div>
							<b>12 999 ру.</b>
						</li>
						<li className='d-flex'>
							<span>Налог 5%</span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className='greenButton'>
						Оформить заказ <img src='/img/arrow.svg' alt='arrow' />{' '}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Drawer
