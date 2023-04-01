import React from 'react';
import styled from "styled-components"

export const CartItem = ({image, brand, title, price}) => {

  return (
    <DIV>

      <div className='product-dis'>
        <div className="img">
            <img src="./images/StyleHub.png" alt="logo" />
        </div>

        <div className="text">
          <div className="disc">
            <h3>Brand : </h3>
            <p>Title :</p>
            <p>Sold by:</p>
          </div>

          <div className="qty">
            <p>Size :</p>
            <p>Qty :</p>
          </div>

          <div>
            <p>Price:</p>
            <p><span>14 days</span> return Available</p>
          </div>
        </div>
      </div>

    </DIV>
    
  )
}

const DIV = styled.div`
  //border : solid black;
  width : 80%;
  margin : auto;
  .product-dis{
    //border :solid grey;
    display : flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .img{
    width:40%;
    //border : solid red;
  }
  .text{
    width : 60%;
    //border : solid blue;
    font-size : 10px;
    text-align : left;
    line-height: 0.7;
    padding-left : 10px;
  }
  img{
    //border : solid green;
    width : 90%;
    height : auto;
    margin-top : 6px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .qty{
    display : flex;
  }
`