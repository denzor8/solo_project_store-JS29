import React, { useEffect, useState } from 'react'
import './ProductsCard.scss'
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import unLiked from "../../img/unliked.svg"
import like from "../../img/liked.svg"
// component card
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }
  const handleClickAddToCart = () => {
    onClickPlus()
    addProductToCart(item)
  }
  const handleClickAddToCartLike = () => { 
    setIsLiked(!isLiked)
  }
  const { addProductToCart, checkProductInCart } = useCart();
  return (
    <div className="card">
      <div className="favorite">
        <img
          onClick={() => handleClickAddToCartLike()}
          className='plus'
          width={32}
          height={32}
          src={isLiked ? like : unLiked}
          alt="Plus" />
      </div>
      <img
        onClick={() => navigate(`/details/${item.id}`)}
        width={133}
        height={112}
        src={item.picture}
        alt="Sneakers" />
      <h5>{item.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{item.price}</b>
        </div>
        <img
          onClick={() => handleClickAddToCart()}
          className='plus'
          width={26}
          height={26}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus" />
      </div>
    </div>
  )
}

export default ProductCard
