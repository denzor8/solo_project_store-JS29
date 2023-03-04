import React, { useEffect } from 'react'
import { useProducts } from '../../../public/hackaton_js_29-86a9b647ec789aa140d28d3b40aeec7a21eb0450/src/contexts/ProductContextProvider'
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