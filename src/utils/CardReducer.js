/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const inisialState = {
  cartData: [],
};

const CardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
      break;
    case "REMOVE_TO_CART":
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };
      break;

    default:
      return state;
  }
};

export { CardReducer, inisialState };
