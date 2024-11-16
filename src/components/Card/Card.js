import React from 'react'
import ContentLoader from 'react-content-loader'
import style from './Card.module.scss'

import AppContext from '../../Context'

function Card({
	id,
	name,
	imageUrl,
	price,
	onPlus,
	onFavorite,
	favorited = false,
	loading = false,
}) {
	const { isItemAdded } = React.useContext(AppContext)
	const [isFavorite, setIsFavorite] = React.useState(favorited)

	const obj = { id, parentId: id, name, imageUrl, price }

	const onClickPlus = () => {
		onPlus(obj)
		console.log(obj.parentId)
	}

	const onClickFavorite = () => {
		onFavorite(obj)
		setIsFavorite(!isFavorite)
	}

	return (
		<div className={style.card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={150}
					height={210}
					viewBox='0 0 150 210'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='0' y='10' rx='10' ry='10' width='150' height='90' />
					<rect x='0' y='118' rx='5' ry='5' width='150' height='15' />
					<rect x='113' y='174' rx='10' ry='10' width='32' height='32' />
					<rect x='0' y='140' rx='5' ry='5' width='100' height='15' />
					<rect x='0' y='182' rx='5' ry='5' width='90' height='24' />
				</ContentLoader>
			) : (
				<>
					<div className={style.favorite}>
						<img
							className=''
							onClick={onClickFavorite}
							src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
							alt='unliked'
						/>
					</div>
					<img width={133} height={112} src={imageUrl} alt='sneakers' />
					<h5 style={{ marginBottom: 14, marginTop: 14 }}>{name}</h5>
					<div className='d-flex justify-between align-center'>
						<div className='d-flex flex-column'>
							<span>Цена:</span>
							<b>{price} руб.</b>
						</div>
						<img
							className='cu-p'
							onClick={onClickPlus}
							src={
								isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
							}
							alt=''
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default Card
