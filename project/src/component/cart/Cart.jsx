import React from 'react'
import styled from "styled-components"
import { AvailOffer } from './AvailOffer'
import { CartItem } from './CartItem'
import { Total } from './Total'


export const Cart = () => {
  return (
    <DIV>
      {/* -----------------------navbar------------------------------- */}
      <section id='navbar'>
        <div className="nav">
            <div >
                <img className="logo" src="./images/StyleHub.png" alt="logo" />
            </div>
            <div className="midnav">
              <a href="bag">Bag -------------------------</a>
              <a href="address">Address -----------------------</a>
              <a href="payment">Payment</a>
            </div>
            <div className="secureLogo">
              <img src="./images/sprite-secure (1).png" alt="" />
              <p>100 % secure</p>
            </div>
        </div>
      </section>

      {/* -------------------------------middle section ------------------------------------ */}

      <section id="address" className="largediv">
        <div id="first">
          <div className="address">
            <p>Check Delivery Time and services</p>
            <button>ENTER PIN CODE</button>
          </div>

          <div className="offers">
            <AvailOffer/>
          </div>

          <div className="shipfree">
            <img src="./images/ship-free.png" alt="shipfree" />
            <p>Yay! <span>No Convinence Fee</span> on this order</p>
          </div>

          <div className="bag">
              <CartItem/>
          </div>

        </div>

        <div id="payment">
          <Total/>
        </div>

      </section>

        
    </DIV>
  )
}


const DIV = styled.div`
  // screen{
  //   wi
  // }
  //border : 1px solid black;
  width : 100%;
 // padding  : 0px 10px;
  
  .nav{
    //width : 100%;
    //border : solid black;
    display : flex;
    justify-content : space-between;
    align-content: center;
    height : 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: sticky;
    //margin : 20px;
  
  }
  .nav .logo{
    width : 60px;
    height : 50px;
    padding-left:20px;
    // border : solid grey;
  }
  .midnav{
    // border : solid black;
    display : flex;
    width : 30%;
    justify-content : space-evenly;
    align-items: center;
  }
  .midnav a{
    text-decoration:none;
    color : grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;   
  }
  a:hover{
    color: black;
  }
  .secureLogo{
    // border : solid black;
    display : flex;
    width:20%;
    align-items: center;
    color : grey;
  }
  .secureLogo img{
    width : 20px;
    height : 20px;
    padding-right : 5px;
  }
  .secureLogo p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;  
  }
  .largediv{
    //border : solid black;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width : 70%;
    margin: auto;
    display : flex;
    justify-content: space-between;
    padding-top : 20px;
  }
  #first{
    width : 60%;
    border-right : 0.5px solid grey;
  }
  #payment{
    width : 40%;
    height : 250px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    //border :solid black;
    margin : 0px 20px;
  }
  .address{
    width : 75%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    //border-width: 0.5px;
    margin-bottom : 20px;
    display : flex;
    margin : auto;
    justify-content : space-between;
    padding : 10px;
    align-items : center;
    
  }
  .address p{
    font-size : 10px;
    text-align : left;
    padding-left : 5px;
    font-weight : bold;
  }
  .address button{
    //font-weight : bold;
    width : 100px;
    height : 20px;
    font-size : 8px;
    border-color : #FF4081;
    color :#F50057;
    background-color : transparent;
    border-width: 0.5px;
  }
  .address button:hover{
    background-color : #FFCDD2;
  }
  .shipfree{
    display : flex;
    align-items : center;
    width : 80%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    margin : auto;
    margin : 10px auto;
  }
  .shipfree img{
    width : 30px;
    height : 20px;
    padding-left : 10px;
  }
  .shipfree p {
    font-size : 10px;
    padding-left : 10px;
  }
  .shipfree span{
    font-weight: bold;
  }

  
`