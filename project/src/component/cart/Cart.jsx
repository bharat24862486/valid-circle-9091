import React from 'react'
import styled from "styled-components"


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

      <section className="largediv">
        <div id="first">
          <div className="address">
            <p>Check Delivery Time and services</p>
            <button>ENTER PIN CODE</button>
          </div>


        </div>

        <div id="second">

        </div>

      </section>

        
    </DIV>
  )
}


const DIV = styled.div`
  // border : 1px solid black;
  width : 100%;
  
  .nav{
    width : 100%;
    // border : solid black;
    display : flex;
    justify-content : space-between;
    align-content: center;
    height : 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: sticky;
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
    border-right : solid grey;
    boder
    width : 60%;
  }
  
`