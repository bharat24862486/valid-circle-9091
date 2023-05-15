// import React, { useEffect, useState } from 'react'
// import styled from "styled-components"
// import { AvailOffer } from './AvailOffer'
// import { CartItem } from './CartItem'
// import { Total } from './Total'
// import logo from "../../images/StyleHub.png";
// import secure from "../../images/sprite-secure (1).png";
// import shipfree from "../../images/ship-free.png"
// import { Address } from './Address';
// import {useDispatch, useSelector} from "react-redux";
// import { getCart } from '../../redux/CartReducer/action'
// import store from "../../redux/store";
// import { Link } from 'react-router-dom'


// export const Cart = () => {
//   let TOTAL = 0
  
//   const bag = useSelector((store)=>{
//     // console.log(store.CartReducer.bag)
//     return store.CartReducer.bag
    
//   })

// // const bag = useSelector((store)=> store)

// console.log("bbbbb", bag)

//   for(let i=0;i<bag.length;i++){
//     TOTAL+= Number(bag[i].price)
//     console.log(Total)
//   }
//   // console.log(TOTAL)
//   function manageTotal(val){
//     TOTAL+=val
//   }
//   // const [data, setdata] = useState([])

//   // setdata(bag)
//   // console.log(data)
//   //console.log(bag)


//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(getCart)
//   },[])



//   return (
//     <DIV>
//       {/* -----------------------navbar------------------------------- */}
//       <section id='navbar' >
//         <div className="nav" style={{width:'100%'}}>
//             <div >
//                 <img className="logo" src={logo} alt="logo" />
//             </div>
//             <div className="midnav">
//               <a href="bag">Bag -------------------------</a>
//               <a href="address">Address -----------------------</a>
//               <a href="payment">Payment</a>
//             </div>
//             <div className="secureLogo">
//               <img src={secure} alt="" />
//               <p>100 % secure</p>
//             </div>
//         </div>
//       </section>

//       {/* -------------------------------middle section ------------------------------------ */}
//       { bag.length < 1?
//       (<div id="wishlist">
//         <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png" alt="" />
//         <h1> Hey, it feels so light!</h1>
          
//         <p >There is nothing in your bag. Let's add some items.</p> 

//     </div>):(
//       <section id="address" className="largediv">
//         <div id="first">
//           <div className="address">
//             {/* <p>Check Delivery Time and services</p>
//             <button>ENTER PIN CODE</button> */}
//             <Address/>
//             {/* <Link to='/address'>Address</Link> */}
//           </div>

//           <div className="offers">
//             <AvailOffer/>
//           </div>

//           <div className="shipfree">
//             <img src={shipfree} alt="shipfree" />
//             <p>Yay! <span>No Convinence Fee</span> on this order</p>
//           </div>

//           <div className="bag">
//               {bag.map((e)=>{
//                 //console.log("e",e)
//                 return (
//                   <CartItem 
//                     key={e.id} e={e} bag={bag} manageTotal={manageTotal} values={TOTAL}/>
//                 )
//               })}
              
//           </div>

//         </div>

//         <div id="payment">
//           <Total total={TOTAL}/>
//         </div>

//       </section>
//       )} 
//     </DIV>
//   )
// }


// const DIV = styled.div`
//   // screen{
//   //   wi
//   // }
//   //border : 1px solid black;
//   width : 100%;
//  // padding  : 0px 10px;
//   #wishlist{
//     width:60%;
//     //border:solid red;
//     margin:auto;
//   }
//   #wishlist img{
//     padding-top:20px ;
//     margin: auto;
//   }
//   .nav{
//     //width : 100%;
//     //border : solid black;
//     display : flex;
//     justify-content : space-between;
//     align-content: center;
//     height : 40px;
//     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//     position: sticky;
//     //margin : 20px;
  
//   }
//   .nav .logo{
//     width : 80px;
//     height : 50px;
//     padding-left:20px;
//     // border : solid grey;
//   }
//   .midnav{
//     // border : solid black;
//     display : flex;
//     width : 30%;
//     justify-content : space-evenly;
//     align-items: center;
//   }
//   .midnav a{
//     text-decoration:none;
//     color : grey;
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 10px;   
//   }
//   a:hover{
//     color: black;
//   }
//   .secureLogo{
//     // border : solid black;
//     display : flex;
//     width:20%;
//     align-items: center;
//     color : grey;
//   }
//   .secureLogo img{
//     width : 20px;
//     height : 20px;
//     padding-right : 5px;
//   }
//   .secureLogo p{
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 10px;  
//   }
//   .largediv{
//     //border : solid black;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//     width : 70%;
//     margin: auto;
//     display : flex;
//     justify-content: space-between;
//     padding-top : 20px;
//   }
//   #first{
//     width : 60%;
//     border-right : 0.5px solid grey;
//   }
//   #payment{
//     width : 40%;
//     height : 250px;
//     box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
//     //border :solid black;
//     margin : 0px 20px;
//   }
//   .address{
//     width : 75%;
//     box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
//     //border-width: 0.5px;
//     margin-bottom : 20px;
//     display : flex;
//     margin : auto;
//     justify-content : space-between;
//     padding : 10px;
//     align-items : center;
    
//   }
//   .address p{
//     font-size : 10px;
//     text-align : left;
//     padding-left : 5px;
//     font-weight : bold;
//   }
//   .address button{
//     //font-weight : bold;
//     width : 100px;
//     height : 20px;
//     font-size : 8px;
//     border-color : #FF4081;
//     color :#F50057;
//     background-color : transparent;
//     border-width: 0.5px;
//   }
//   .address button:hover{
//     background-color : #FFCDD2;
//   }
//   .shipfree{
//     display : flex;
//     align-items : center;
//     width : 75%;
//     box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
//     margin : 10px auto;
//     padding : 10px 0px;
//   }
//   .shipfree img{
//     width : 40px;
//     height : 20px;
//     padding-left : 10px;
//   }
//   .shipfree p {
//     font-size : 10px;
//     padding-left : 10px;
//   }
//   .shipfree span{
//     font-size : 10px;
//     font-weight: bold;
//   }
  
// `