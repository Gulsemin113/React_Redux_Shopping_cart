import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Simyaci",
      description:
        "Author : Paulo Coelho",
      price: 9.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Ekmek Kavgasi",
      description:
        "Author: Orhan Kemal",
      price: 19.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41BJdviD3TL._SX340_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "Aşk",
      description:
        "Author: Elif Şafak",
      price: 25.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/414N7XbRE%2BL._SX344_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      title: "Simyaci",
      description:
        "Author : Paulo Coelho",
      price: 9.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      title: "Ekmek Kavgasi",
      description:
        "Author: Orhan Kemal",
      price: 19.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41BJdviD3TL._SX340_BO1,204,203,200_.jpg",
    },
    {
      id: 6,
      title: "Aşk",
      description:
        "Author: Elif Şafak",
      price: 25.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/414N7XbRE%2BL._SX344_BO1,204,203,200_.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
