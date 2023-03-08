import React, { useEffect } from 'react'
import './Basket.scss'
import { useCart } from '../../contexts/CartContextProvider'
import { useLike } from '../../contexts/LikeContextProvider'
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const Like = () => {
	const navigate = useNavigate();
	const { addProductToCart, checkProductInCart, closeCart, openCart } = useCart();
	const { getLike, cart, deleteProductFromLike, closeLike } = useLike();
	useEffect(() => {
		getLike();
	}, []);
	
	
	// const time = () => {
	// 	navigate('/')
	// 	setTimeout(() => {
	// 		openCart();
	// 	}, 1000);
	// }
	const likeCleaner = () => {
		localStorage.removeItem("like");
		getLike();
	};

	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">Избранное
					<img
						onClick={() => closeLike()}
						className="cu-p"
						src="/img/btn-remove.svg"
						alt="Close" />
				</h2>

				<div className="items">
					{cart?.products.map((product) => (
						<div
							className="cartproduct d-flex align-center mb-20"
							key={product.item.id}
						>

							<div
								style={{ backgroundImage: `url(${product.item.picture})` }}
								className="cartProductImg">
								<img src={product.item.picture} alt="error:(" width="70" />
							</div>

							<div className="ml-20 flex priceDiv">
								{/* className="mb-5" */}
								<p >{product.item.name}</p>
								<div className='d-flex justify-between'>
									<b className=''>{product.item.price}$</b>
								</div>
							</div>
							<img
								onClick={deleteProductFromLike}
								className="removeBtn"
								src="/img/btn-remove.svg"
								alt="Remove" />
						</div>
					))}

				</div>

				<div className="cartTotalBlock">
					<ul>
						<li>
							<span>Итого:</span>
							<div></div>
							<b>{cart?.totalPrice}</b>
						</li>
						<li>
							<span>Налог 5%:</span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					{/* очистить лайки  */}
					<button
						// onClick={() => time()}
						className="greenButton">
						Перейти к корзине
						<img src="/img/arrow.svg" alt="Arrow" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Like
