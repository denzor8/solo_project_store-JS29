import React, { useEffect } from 'react'
import './Basket.scss'
import { useCart } from '../../contexts/CartContextProvider'
import { Button, TextField, Typography } from "@mui/material";
const Basket = () => {
  const { getCart, cart, deleteProductFromCart, closeCart, changeProductCount } = useCart()
  console.log(cart);
  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина
          <img
            onClick={() => closeCart()}
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
                  <input
                    className='inputCount mb-20'
                    type="number"
                    value={product.count}
                    size="small"
                    onChange={(e) =>
                      changeProductCount(e.target.value, product.item.id)
                    } />
                </div>


              </div>
              <img
                onClick={deleteProductFromCart}
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
          <button
            onClick={cartCleaner}
            className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket
