import React from 'react'
const ProductCard = ({ item }) => {
  // console.log(item)
  return (
    <div className="card">
    <div className="favorite">
      <img src="img/unliked.svg" alt="Unliked" />
    </div>
    <img width={133} height={112} src={item.picture} alt="Sneakers" />
      <h5>{item.name}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
          <b>{item.price}</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
      </button>
    </div>
  </div>
  )
}

export default ProductCard
