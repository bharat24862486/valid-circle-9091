// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {Modal, ModalBody} from "reactstrap";
// import {ModalHeader} from "reactstrap";
// import { Form, FormGroup, Input, Label, Button } from "reactstrap";
// import { getAddress } from '../../redux/CartReducer/action';
// import { useToast } from '@chakra-ui/react';


// const initialdata = {
//     name : "",
//     mobileno : "",
//     pincode : "",
//     building : "",
//     locality : "",
//     city : "",
//     state : ""
// }
// export const Address = () => {
//     const [modal, setmodal] = useState(false);
//     const [data, setData] = useState(initialdata)
//     //const [dataArr, setDataArr] = useState([])
//     const [show, setShow] = useState(false);

//     const addres = useSelector((state)=>{
//         return {
//           address:state.CartReducer.address }
//       });
//     console.log(addres);

//     const dispatch = useDispatch();
    
//     const handle = () => {
//         //console.log("h")
//         setmodal(true);
//     }

//     const handleAdd = (e) => {
//         const {name, value} = e.target;
//         setData((prev)=>{
//             return {...prev, [name] : value}
//         })
        
//     }

//     const toast = useToast()

//     const sucessToast = (title) => {
  
//       toast({
//         title: title,
        
//         status: 'success',
//         position: 'top',
//         duration: 3000,
//         isClosable: true,
//       })
//     }



//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(getAddress(data))
//         setData(data)
//         setShow(true)
//         console.log(data)
//         setData(initialdata)
//         sucessToast('Address Added Successfully')
//       setmodal(!modal)
//     }
//     // useEffect(()=>{
//     //     dispatch(getAddress)
//     // },[])
//     useEffect(()=>{
//         const addData = localStorage.getItem("adress")
//           if (addData){
//             setData(parseInt(addData))
//           }
//     },[]);

  
//     useEffect(()=>{
  
//         localStorage.setItem("adress",JSON.stringify(data));
          
//     },[data]);



//     return (

//     <div style={{display:'flex'}} >
//             { addres.length > 0 && show===true ? (<p>{'${data.name}'}</p>):(<p>Check Delivery Time and services</p>)}
//             <div>
//             <Modal  
//             isOpen={modal} 
//             toggle={()=>setmodal(!modal)}>
//                 <ModalHeader 
//                     style={{color: "white",
//                     backgroundColor: "#FF4081",
//                     height: "10px",
//                     padding:"20px",
//                     fontFamily: "Sans-Serif",
//                     }}
//                     toggle={()=>setmodal(!modal)}>
//                         <p style={{paddingTop:"10px",
//                     textAlign:"center"}}>Enter delivery details</p>
//                 </ModalHeader>
//                 <ModalBody>
//                     <Form style={{width:"80%",margin:"auto"}} onSubmit={handleSubmit}>
//                     <FormGroup>
//                         <Label style={{fontSize:"10px",fontWeight:"bold"}}>CONTACT DETAILS</Label>{' '}
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='text' name="name" placeholder='Name' value={data.name} onChange={(e)=>handleAdd(e)}></Input>
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='number' name="mobileno" placeholder='Mobile number' value={data.mobileno} onChange={(e)=>handleAdd(e)}></Input>

//                         <Label style={{fontSize:"10px",fontWeight:"bold"}}>ADDRESS</Label>{' '}
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='number' name="pincode" placeholder='Pin Code' value={data.pincode} onChange={(e)=>handleAdd(e)}></Input>
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='text' name="building" placeholder='Address (House No,Building,Street,Area)' value={data.building} onChange={(e)=>handleAdd(e)}></Input>
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='text' name="locality" placeholder='Locality/Town' value={data.locality} onChange={(e)=>handleAdd(e)}></Input>
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='text' name="city" placeholder='City/District' value={data.city} onChange={(e)=>handleAdd(e)}></Input>
//                         <Input style={{fontSize:"10px", marginBottom:"10px"}} type='text' name="state" placeholder='State' value={data.state} onChange={(e)=>handleAdd(e)}></Input>
//                     </FormGroup>
//                     <Button 
//                         style={{
//                             fontSize:"12px", 
//                             marginBottom:"10px",
//                             fontWeight:"bold", 
//                             display:"block", 
//                             margin:"auto", 
//                             width:"100%",
//                             backgroundColor:"#FF1744",
//                             border:"0px"}} type="submit" >
//                                 Add Address
//                     </Button>
//                     </Form>
//                 </ModalBody>
//             </Modal>
//             </div>
//             <button style={{marginLeft:"40px"}} onClick={handle}>
//                 ENTER PIN CODE
//             </button>
          
//     </div>
//   )
// }
