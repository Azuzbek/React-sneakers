import Card from '../components/Card/Card'

function Home({
	items,
	favoritedItems,
	searchValue,
	onChangeSeachValue,
	onAddToCart,
	onAddToFavorite,
	isLoading,
}) {
	const renderItems = () => {
		const filtered = items.filter(val =>
			val.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		return (isLoading ? [...Array(8)] : filtered).map((item, index) => (
			<Card
				key={index}
				loading={isLoading}
				favorited={favoritedItems.some(
					obj => Number(obj.parentId) === Number(item.id)
				)}
				onPlus={obj => onAddToCart(obj)}
				onFavorite={obj => onAddToFavorite(obj)}
				{...item}
			/>
		))
	}

	return (
		<>
			<div style={{ padding: 60, minHeight: '90vh' }} className='content'>
				<div className='d-flex mb-40 justify-between aling-center'>
					<h1>
						{searchValue
							? `Поиск по запросу: "${searchValue}"`
							: 'Все кроссовки'}
					</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='sea' />
						<input
							onChange={onChangeSeachValue}
							value={searchValue}
							placeholder='Поиск...'
						/>
					</div>
				</div>

				<div style={{ gap: 40 }} className='d-flex flex-wrap'>
					{renderItems()}
				</div>
			</div>
		</>
	)
}

export default Home
