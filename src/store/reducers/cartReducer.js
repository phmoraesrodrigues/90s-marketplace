import cartTypes from "../types/cartType";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return state.items.indexOf(action.payload) !== -1
        ? state
        : { ...state, items: [...state.items, action.payload] };

    case cartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };

    case cartTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
