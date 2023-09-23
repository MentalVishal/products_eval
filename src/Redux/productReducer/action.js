import {
  GET_PRODUCT_SUCESS,
  POST_PRODUCT_SUCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";
import axios from "axios";

export const PostProducts = (props) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .post("https://stack-mock-api.onrender.com/products", props)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const GetProducts = (page, obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .get(
      `https://stack-mock-api.onrender.com/products?_limit=10&page=${page}`,
      obj
    )
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
