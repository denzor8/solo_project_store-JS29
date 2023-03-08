export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}
export function getCountProductsInLike() {
	const like = JSON.parse(localStorage.getItem("like"));
	return like ? like.products.length : 0;
}


export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
  return products.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
