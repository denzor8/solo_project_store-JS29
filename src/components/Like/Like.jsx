import React, { useEffect } from "react";
import { useLike } from "../../contexts/CustomContext";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";

export default function Like() {
	const navigate = useNavigate();
	const { addProductToCart, checkProductInCart } = useCart();
	const { getLike, like, deleteProductFromLike, closeLike, openLike } = useLike();
	useEffect(() => {
		getLike();
	}, []);

	function likeCleaner() {
		localStorage.removeItem("like");
		getLike();
	}

	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">Избранное
					<img
						onClick={() => navigate('/')}
						className="cu-p"
						src="/img/btn-remove.svg"
						alt="Close" />
				</h2>

				<div className="items">
					{like?.products.map((product) => (
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
							<div>
								<div>
									<img
										onClick={() => deleteProductFromLike(product.item.id)}
										className="removeBtn"
										src="/img/btn-remove.svg"
										alt="Remove" />
								</div>
								<div>
									<img
										onClick={() => addProductToCart(product.item)}
										className="removeBtn"
										src={
											checkProductInCart(product.item.id)
												? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
										alt="Remove" />
								</div>
							</div>
						</div>
					))}

				</div>

				<div className="cartTotalBlock">
					<ul>
						<li>
							<span>Итого:</span>
							<div></div>
							<b>{like?.totalPrice}</b>
						</li>
						<li>
							<span>Налог 5%:</span>
							<div></div>
							<b>$10</b>
						</li>
					</ul>
					<button
						onClick={likeCleaner}
						className="greenButton">
						Оформить заказ
						<img src="/img/arrow.svg" alt="Arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}