import axios from "axios";
import {
  PRODUCTDATAFAILURE,
  PRODUCTDATAREQ,
  PRODUCTDATASUCCESS,
} from "./actionTypes";
import { baseUrl } from "../../Url";

// const url = `http://localhost:8080/kids`

// const url = `https://glorious-robe-calf.cyclic.app`

export const getData = (params,query) => {
 
 
  return async (dispatch) => {
    dispatch({ type: PRODUCTDATAREQ });
    try {
      let res = await axios.get(`${baseUrl}/${params}${query}`);
      dispatch({ type: PRODUCTDATASUCCESS, payload: res.data });
      // console.log("res", res);
       
    } catch (error) {
      dispatch({ type: PRODUCTDATAFAILURE });
    }
  };
};
