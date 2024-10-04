import React from 'react'
import styles from './Card.module.css'

function Card({ title, imageUrl, price }) {
	return (
		<div className={styles.card}>
			<>
				<img width='100%' height={135} src={imageUrl} alt='Sneakers' />
				<h5>{title}</h5>
				<div className='d-flex justify-between align-center'>
					<div className='d-flex flex-column'>
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
				</div>
			</>
		</div>
	)
}

export default Card
