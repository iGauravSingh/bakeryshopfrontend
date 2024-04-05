"use client";

import { useEffect, useReducer } from "react";
import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();

const urllocal = "http://localhost:8080";
const urllive = "https://backerbackend.onrender.com";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const ActionType = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useProduct = () => {
  const sessionToken = cookie.get("session_token");
  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`${urllocal}/products/getall`);
      const EventData = response.data;
      dispatch({ type: ActionType.SUCCESS, payload: EventData });
    } catch (error) {
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response.error,
      });
    }
  };

  const addProduct = async (data) => {
    try {
      console.log('i am in useOrder and addOrder');
      const response = await axios.post(`${urllocal}/products/addproduct`, data);
      const addproductData = response.data;
      return addproductData
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (data) => {
    try {
      const response = await axios.delete(`${urllocal}/products/deleteproduct/${data}`);
      const deleteProductData = response.data;
      console.log('response i get after sending post request', deleteProductData);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, loading, error, addProduct, deleteProduct };
};

export default useProduct;