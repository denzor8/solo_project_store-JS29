import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import "../../styles/Like.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { useLike } from "../../contexts/LikeContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";

export default function Like() {
	const navigate = useNavigate();
	const { addProductToCart, checkProductInCart } = useCart();
	const { getLike, like, deleteProductFromLike,closeLike,openLike } = useLike();
	React.useEffect(() => {
		getLike();
	}, []);

	function likeCleaner() {
		localStorage.removeItem("like");
		getLike();
	}
	const theme = createTheme({
		palette: {
			primary: {
				main: orange[50],
			},
		},
	});

	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">Корзина
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
							<img
								onClick={() => deleteProductFromLike(product.item.id)}
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
							<b>{like?.totalPrice}</b>
						</li>
						<li>
							{/* <span>Налог 5%:</span> */}
							{/* <div></div> */}
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