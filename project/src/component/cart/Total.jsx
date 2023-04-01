import React from 'react';
import styled from 'styled-components';
import { FaTag } from "react-icons/fa";

export const Total = () => {
  return (
    <DIV>
        <h1>Coupons</h1>
        <div className='tag'>
            <h4><FaTag/>{`   Apply Coupons`}</h4>
            <button className='apply'>APPLY</button>
        </div>

        <div className="pricetag">
            <h2>PRICE DETAILS ( item)</h2>
            <div className='mrp'>
                <p>Total MRP :</p>
                <p className='rs'>₹</p>
            </div>
            <div className="amt">
                <p>Total Amount</p>
                <p className='rs'>₹</p>
            </div>
            <button className='placeOrder'><h2>PLACE ORDER</h2></button>
        </div>
    </DIV>
  )
}


const DIV = styled.div`
    text-align : left;
    padding : 0px 10px;
    h1{
        font-size : 12px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .tag {
        border-bottom : 0.5px solid grey;
        display : flex;
        justify-content : space-between;
        align-items : center;
        padding-bottom : 10px;
    }
    .tag h4,h2, .amt p, .mrp p{
        font-size : 10px;

    }
    .apply{
        background-color : transparent;
        margin-right : 10px;
        padding : 5px 10px;
        font-size : 10px;
        border-color : #FF4081;
        color :#F50057;
        border-width: 0.5px;
    }
    .mrp, .amt{
        display : flex;
        //border : solid red;
        justify-content : space-between;
        border-bottom : 0.5px solid grey;
    }
    .amt{
        border : 0px;
        font-weight : bold;
    }
    .mrp .rs, .amt .rs{
        width : 50px;
        margin-right : 10px;
    }

    .placeOrder{
        background-color :#FF4081;
        width : 100%; 
        margin : auto;
        display : block;
        border : 0px;
        color : white;
        margin-top : 10px;
    }
    .apply:hover{
        background-color : #FFCDD2;
      }

`