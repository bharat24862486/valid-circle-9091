// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaTag } from 'react-icons/fa';
// import { Modal,ModalBody, ModalHeader,Form, FormGroup, Input, Label, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

// export const Total = ({total}) => {
//     console.log('totdfffffffal',total)

//     localStorage.setItem('cartAmount', Number(total))


//     const [modal, setmodal] = useState(false);

//     const handle = () => {
//         //console.log("h")
//         setmodal(true);
//     }


//     const handleSubmit = () => {
//         console.log("hii")
//     }

//     const handlePlace = () => {
//         console.log("place")
//     }
//   return (
//     <DIV>
//         <h1>Coupons</h1>

//         <Modal 
//             isOpen={modal} 
//             toggle={()=>setmodal(!modal)}>
//                 <ModalHeader 
//                     style={{color: "white",
//                     backgroundColor: "#FF4081",
//                     height: "10px",
//                     padding:"20px",
//                     }}
//                     toggle={()=>setmodal(!modal)}>
//                         <p style={{paddingTop:"10px",
//                         textAlign:"center",
//                         fontWeight:"bold"}}>APPLY COUPON</p>
//                 </ModalHeader>
//                 <ModalBody>
//                     <Form style={{width:"80%",margin:"auto"}} onSubmit={handleSubmit}>
//                     <FormGroup style={{display:"flex",border:"1px solid black"}}>
                        
//                         <Input style={{fontSize:"10px", margin:"5px 0px",border:"0px"}} type='text' name="state" placeholder='Enter coupon code'  ></Input>
                    
//                     <Button 
//                         style={{
//                             fontSize:"12px", 
//                             marginBottom:"10px",
//                             fontWeight:"bold", 
//                             display:"block", 
//                             margin:"auto", 
//                             width:"60%",
//                             color:"black",
//                             backgroundColor:"transparent",
//                             border:"1px"}} type="submit">
//                                 CHECK
//                     </Button>
                    
//                     </FormGroup>
//                     </Form>
//                 </ModalBody>
//             </Modal>
//         <div className='tag'>
//             <div className="n">
//             <p><FaTag/></p>
//             <h4>{`   Apply Coupons`}</h4>
//             </div>
//             <button className='apply' onClick={handle}>APPLY</button>
//         </div>

//         <div className="pricetag">
//             <h2>PRICE DETAILS ( item)</h2>
//             <div className='mrp'>
//                 <p>Total MRP : </p>
//                 <p className='rs'>₹ {total}</p>
//             </div>
//             <div className="amt">
//                 <p>Total Amount</p>
//                 <p className='rs'>₹ {total}</p>
//             </div>
//            <Link to={'/paymentpage'}> <button className='placeOrder' onClick={handlePlace}><h2>PLACE ORDER</h2></button></Link>
//         </div>
//     </DIV>
//   )
// }


// const DIV = styled.div`
//     text-align : left;
//     padding : 0px 10px;
//     //border : solid red ;
//     h1{
//         font-size : 12px;
//         font-family: Arial, Helvetica, sans-serif;
//         margin : 10px 0px;
//     }
//     .tag,.tag .n {
//         //border : solid red;
//         display : flex;
//         justify-content : space-between;
//         margin-bottom : 10px;
//     }
    
//     .tag h4,h2, .amt p, .mrp p{
//         font-size : 10px;
//     }
//     .tag h4{
//         padding-left : 10px;
//     }
    
//     .apply{
//         background-color : transparent;
//         margin-right : 10px;
//         padding : 0px 25px;
//         font-size : 10px;
//         border-color : #FF4081;
//         color :#F50057;
//         border-width: 0.5px;
//     }
//     .mrp, .amt{
//         display : flex;
//         //border : solid red;
//         justify-content : space-between;
//         padding-bottom : 10px;
//         border-bottom : 0.5px solid grey;
//         margin : 10px 0px;
//     }
//     .amt{
//         border : 0px;
//         font-weight : bold;
//     }
//     .mrp .rs, .amt .rs{
//         width : 50px;
//         margin-right : 10px;
//     }
//     .placeOrder{
//         background-color :#FF4081;
//         width : 100%; 
//         margin : auto;
//         display : block;
//         border : 0px;
//         color : white;
//         margin : 10px 0px 20px 0px;
//         padding : 6px 0px;
//     }
//     .apply:hover{
//         background-color : #FFCDD2;
//       }
// `