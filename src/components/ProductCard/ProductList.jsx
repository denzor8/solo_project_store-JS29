import React, { useEffect } from 'react'
import { useProducts } from '../../contexts/ProductContextProvider'
import ProductCard from './ProductCard'

const ProductsList = () => {
	const { products, getProducts } = useProducts()
	console.log(products)
	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div>
			<div className='posts-list'>
				{products.map(item => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default ProductsList