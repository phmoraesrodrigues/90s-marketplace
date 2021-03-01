import cartTypes from "../types/cartType";

export const addToCart = (data) => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: data,
  };
};

export const clearCart = () => {
  return {
    type: cartTypes.CLEAR_CART,
  };
};
