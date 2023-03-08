import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import Header from '../../components/Header/Header';
import './ProductDetails.scss'
import checkedSvg from "../../img/btn-checked.svg"
import plusSvg from "../../img/btn-plus.svg"
import Basket from '../../components/Basket/Basket';
import { useCart } from "../../contexts/CartContextProvider";
import unLiked from "../../img/unliked.svg"
import like from "../../img/liked.svg"
const ProductDetails = () => {
	const { id } = useParams();
	const { getProductDetails, productDetails } = useProducts();
	const { cartOpened, addProductToCart } = useCart()
	const [isAdded, setIsAdded] = useState(false)
	const [isLiked, setIsLiked] = useState(false)
	const onClickPlus = () => {
		setIsAdded(!isAdded)
	}

	const onClickLike = () => {
		setIsAdded(!isLiked)
	}

	const handleClickAddToCart = () => {
		onClickPlus()
		addProductToCart(productDetails)
	}
	const handleClickAddToCartLike = () => {
		setIsLiked(!isLiked)
	}


	useEffect(() => {
		getProductDetails(id);
	}, []);
	return (
		<>
			{cartOpened && <Basket />}
			<Header />
			<div className="details wrapper clear">
				{productDetails ? (
					<>
						<div className='details__content'>
							<div className='details__card'>
								<div className="details__content-containter">
									<h3 className="details__content-title"> {productDetails.name}</h3>
									<div className="details__content-img">
										<img
											src={productDetails.picture}
											alt=""
											className=""
											width='200'
										/>
									</div>
									<div className="details__content-desc">
										<h4>Description:</h4>
										{productDetails.description}
									</div>
									<p className="">${productDetails.price}</p>
									<p className="">
										Category: {productDetails.type}
									</p>
									<hr />
									<div className='details__basket'>
										<div className='details__ctn'>
											<div className="details__favorite">
												<img
													onClick={() => handleClickAddToCartLike()}
													className='plus'
													width={32}
													height={32}
													src={isLiked ? like : unLiked}
													alt="Plus" />
											</div>
											<div>
												<img
													onClick={() => handleClickAddToCart(productDetails)}
													className='plus'
													width={32}
													height={32}
													src={isAdded ? checkedSvg : plusSvg}
													alt="Plus" />
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>
					</>
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		</>
	)
}

export default ProductDetails
