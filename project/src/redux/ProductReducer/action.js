import axios from "axios";
import {
  PRODUCTDATAFAILURE,
  PRODUCTDATAREQ,
  PRODUCTDATASUCCESS,
} from "./actionTypes";

export const getData = () => {
  return async (dispatch) => {
    dispatch({ type: PRODUCTDATAREQ });
    try {
      let res = await axios.get(`http://localhost:8080/products`);
      dispatch({ type: PRODUCTDATASUCCESS, payload: res.data });
      // console.log("res", res);
       
    } catch (error) {
      dispatch({ type: PRODUCTDATAFAILURE });
    }
  };
};
