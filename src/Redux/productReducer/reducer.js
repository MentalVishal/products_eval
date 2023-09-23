import {
  FETCH_PRODUCT_SUCESS,
  GET_PRODUCT_SUCESS,
  POST_PRODUCT_SUCESS,
  PRODUCT_DELETE,
  PRODUCT_EDIT,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  editProduct: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case POST_PRODUCT_SUCESS: {
      return { ...state, isLoading: false };
    }
    case GET_PRODUCT_SUCESS: {
      return { ...state, isLoading: false, products: payload };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case PRODUCT_DELETE: {
      return { ...state, isLoading: false };
    }
    case PRODUCT_EDIT: {
      return { ...state, editProduct: payload };
    }
    case FETCH_PRODUCT_SUCESS: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
