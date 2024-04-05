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

const useOrder = () => {
  const sessionToken = cookie.get("session_token");
  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchOrderList();
  }, []);

  const fetchOrderList = async () => {
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(`${urllocal}/orders/allorders`);
      const EventData = response.data;
      dispatch({ type: ActionType.SUCCESS, payload: EventData });
    } catch (error) {
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response.error,
      });
    }
  };

  const addOrder = async (data) => {
    try {
      console.log('i am in useOrder and addOrder');
      const response = await axios.post(`${urllocal}/orders/add`, data, {
        headers: {
          ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
        },
      });
      const addorderData = response.data;
      return addorderData
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (data) => {
    try {
      const response = await axios.delete(`${urllocal}/${data}`, {
        headers: {
          ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : null),
        },
      });
      const EventData = response.data;
      console.log('response i get after sending post request', EventData);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, loading, error, addOrder, deleteOrder };
};

export default useOrder;