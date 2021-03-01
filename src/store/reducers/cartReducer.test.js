import cartTypes from "../types/cartType";
import cartReducer from "./cartReducer";

describe("when cartReducer is in use", () => {
  test("should should return the initial state for default action", () => {
    expect(cartReducer(undefined, {})).toEqual({ items: [] });
  });

  test("should add item to cart when ADD_TO_CART action is used", () => {
    const id = 1;
    const action = {
      type: cartTypes.ADD_TO_CART,
      payload: id,
    };
    const state = {
      items: [],
    };
    expect(cartReducer(state, action)).toEqual({
      ...state,
      items: [...state.items, id],
    });
  });

  test("should remove item from cart when REMOVE_FROM_CART action is used", () => {
    const id = 1;
    const action = {
      type: cartTypes.REMOVE_FROM_CART,
      payload: id,
    };
    const state = {
      items: [id, 2, 3],
    };
    expect(cartReducer(state, action)).toEqual({
      ...state,
      items: state.items.filter((item) => item !== id),
    });
  });

  test("should clear cart when CLEAR_CART action is used", () => {
    const action = {
      type: cartTypes.CLEAR_CART,
    };
    const state = {
      items: [1, 2, 3],
    };
    expect(cartReducer(state, action)).toEqual({
      ...state,
      items: [],
    });
  });
});
