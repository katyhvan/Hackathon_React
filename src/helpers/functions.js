export function getCountClothesInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.clothes.length : 0;
}

export const calcSubPrice = (clothe) => +clothe.count * clothe.item.price;

export const calcTotalPrice = (clothes) => {
  return clothes.reduce((prev, curr) => {
    return (prev += curr.subPrice);
  }, 0);
};
