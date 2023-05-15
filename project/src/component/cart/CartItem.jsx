// import React, { useEffect, useState } from 'react';
// import styled from "styled-components"
// import { useSelector,useDispatch } from 'react-redux';
// import {FaTimes} from "react-icons/fa";
// import {Delete} from '../../redux/CartReducer/action.js'
// import {getCart} from '../../redux/CartReducer/action.js'


// let Quantity=1
// // let total = 0
// export const CartItem = ({e,manageTotal,values}) => {
//   const{title,image,brand,price,id} = e;

  
  
//   const [pric, setprice] = useState(false);
//   const [oldTotal,setTotal] = useState(0)
  
// const dispatch = useDispatch();

//   const {bag} = useSelector((store)=>{
//     //console.log(store.CartReducer.bag)
//     return store.CartReducer
    
//   })


  
//   console.log(bag)

//   const handleprice = () => {
//     // let ans = 0; 
//     // bag.map((item)=>(
//     //   ans += +(item.price)
      
//     // ))
//     // console.log(ans)
//     // setprice(ans);
//   }


//   const handleSelect = (e) => {
//     let val = e.target.value;
//     //console.log(typeof(+val))
//     // console.log(+(val))
//     values = values-(price*Quantity)
//     Quantity = +val
//     manageTotal((price*Quantity)+values)
    

//     setprice(!pric)
    
//   }
//   // const res = handleSelect(e)
//   //  console.log(res)
//   //console.log(e) 

//   const handleRemove = (id) => {
    
//     // let arr = bag.filter((filt)=>filt.id!==id)
//     dispatch(Delete(id)) 
    
    
    
//   }
//   function manageT(){
    
//   }


//   useEffect(()=>{
//     manageTotal(values+price)
//   },[])

//   return (
    
//     <DIV>
//       <p>{pric}</p>
//       <div className='product-dis'>
//         <div className="img">
//             <img src={image} alt="logo" />
            
//         </div>

//         <div className="text">
//         <button className='cross' onClick={()=>handleRemove(id)}><FaTimes/></button>
//           <div className="disc">
//             <h3>{title} </h3>
//             <p>{brand}</p>
//             {/* <p>Sold by:{}</p> */}
//           </div>

           

          
//           <div className="qty">
//             <div className="sz">
//               <p>Size :</p>
//             <select>
             
//               <option value="s">s</option>
//               <option value="m">m</option>
//               <option value="l">l</option>
//               <option value="xl">xl</option>
//               <option value="xxl">xxl</option>
//               <option value="3xl">3xl</option>
//             </select>
//             </div>

//             <div className="qt">
//             <p>Qty :</p>
//             <select onChange={(e)=>handleSelect(e)}>
//               {/* <option value=""></option> */}
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </select>
//             </div>
//           </div>
          
//           <div>
//             <p>{price*Quantity}</p>
//             <p><span>14 days</span> return Available</p>
            
//           </div>
//         </div>
//       </div>

//     </DIV>
    
//   )
// }

// const DIV = styled.div`
//   //border : solid black;
//   width : 75%;
//   margin : auto;
//   .product-dis{
//     //border :solid grey;
//     display : flex;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//   }
//   .img{
//     width:40%;
//     margin : 10px;
//     //border : solid red;
//   }
//   .text {
//     //border : solid red;
//     text-align : left;
//     width : 60%;
//     margin : 10px;
//   }
//   .cross{
//     margin-left:150px;
//   }
//   .text p, .text h3, .text span{
//     font-size : 10px;
//   }
//   img{
//     //border : solid green;
//     width : 100%;
//     height : auto;
//     margin-top : 6px;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//   }
//   .qty{
//     display : flex;
//     justify-content : space-between;
//     width : 80%;
//     //border: solid black;
//   }
//   .sz, .qt{
//     display:flex;
//     align-items : center;
//     //border : solid black;
//   }
//   .qty p{
//     margin-top :15px;
//   }
//   .qty select {
//     border : 0px;
//     font-size:10px;
//   }
//   .desc p{
//     font-size: 40px;
//   }
// `