import Drawer from './components/Drawer/Drawer'
import Header from './components/Header/Header'
function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content p-40'>
				<div className='d-flex mb-40 justify-between aling-center'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='sea' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex'>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/unliked.svg' alt='unliked' />
						</div>
						<img
							width={133}
							height={112}
							src='/sneakers/1.jpg'
							alt='sneakers'
						/>
						<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>

							<img className='cu-p' src='/img/btn-plus.svg' alt='' />
						</div>
					</div>

					<div className='card'>
						<div className='favorite'>
							<img src='/img/unliked.svg' alt='unliked' />
						</div>
						<img
							width={133}
							height={112}
							src='/sneakers/2.jpg'
							alt='sneakers'
						/>
						<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>

							<img className='cu-p' src='/img/btn-plus.svg' alt='' />
						</div>
					</div>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/unliked.svg' alt='unliked' />
						</div>
						<img
							width={133}
							height={112}
							src='/sneakers/3.jpg'
							alt='sneakers'
						/>
						<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>

							<img className='cu-p' src='/img/btn-plus.svg' alt='' />
						</div>
					</div>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/unliked.svg' alt='unliked' />
						</div>
						<img
							width={133}
							height={112}
							src='/sneakers/4.jpg'
							alt='sneakers'
						/>
						<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>

							<img className='cu-p' src='/img/btn-plus.svg' alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
