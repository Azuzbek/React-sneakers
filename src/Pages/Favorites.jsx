import { useContext } from 'react'
import Card from '../components/Card/Card'
import Info from '../components/Info/Info'

import AppContext from '../Context'

function Favorites({ onAddToCart, onAddToFavorite }) {
	const { FavoriteItems } = useContext(AppContext)
	return (
		<>
			<div style={{ padding: 60, minHeight: '90vh' }} className='content'>
				<div className='d-flex mb-40 justify-between aling-center'>
					<h1>Мои закладки</h1>
				</div>
				{FavoriteItems.length > 0 ? (
					<div style={{ gap: 40 }} className='d-flex flex-wrap'>
						{FavoriteItems.map((val, index) => (
							<Card
								key={index}
								name={val.name}
								imageUrl={val.imageUrl}
								price={val.price}
								onPlus={() => onAddToCart(val)}
								onFavorite={() => onAddToFavorite(val)}
								favorited={true}
							/>
						))}
					</div>
				) : (
					<Info
						title={'Закладок нет :('}
						desc={'Вы ничего не добавляли в закладки'}
						img={'/img/empty-favorites.svg'}
					></Info>
				)}
			</div>
		</>
	)
}

export default Favorites
