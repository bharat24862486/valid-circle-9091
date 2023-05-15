import { Box, CloseButton, Image, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartProduct, getCartProducts, updateCartProductQty } from "../../../redux/CartReducer/action";
import { useToast } from '@chakra-ui/react';


const CartCard = ({ Price, brand ,discount, price,sizes, image, quantity  ,firstName  ,gender  ,images  ,lastName  ,offerType ,title  ,userID  ,id}) => {
 
const [qty, setQty] = useState(quantity)
const [flag, setFlag] = useState(false)
const dispatch = useDispatch();
const toast = useToast();
const statuses = ["success", "error", "warning", "info"];
const positions = ["top"];
// const image = images['image1'];
const size = sizes[0]
console.log('sizeeee', size)
const ogPrice = Math.ceil((price * 100)/discount)

const img2 = images.image1;

console.log(image, "images 21")
console.log(img2, "images 24")


const handleQty = (e) => {

  const qty = e.target.value;
  setQty(qty)

 dispatch(updateCartProductQty(id,+qty,Price ,ogPrice))
 .then(()=>{dispatch(getCartProducts)})

}

const handleDelete = () => {

  setFlag((prev)=> !prev)
 dispatch(deleteCartProduct(id))

 toast({
    title: "Product Deleted",
    position: positions,
    status: statuses[0],
    isClosable: true,
  });

  dispatch(getCartProducts)
}

  return (
    <Stack spacing={'0'} display={'flex'} flexDirection={'rows'} justifyContent={'center'} gap={'2px'} alignContent={'center'} overflow={'hidden'}  minH={'200px'} >
      <Image 
     
        w={"150px"}
       
        // h={'50px'}
        bgColor={'white'}
        src={image?image: img2}
        alt="img"
      />
      <Stack  w={'100%'} direction={'row'}  bgColor={'white'} justify={'space-between'}  p={'0 15px'}>

      <Stack p={'10px 0'} >
        <Text fontSize={'18px'} >{title}</Text>
        <Text as={'sub'}  fontSize={'14px'}>by {brand}</Text>
        <br />
        <Text>
          size :{" "}
          <Text as={"span"} fontSize={"16px"}>
            {size}
          </Text>{" "}
        </Text>   
        <Stack  align={"baseline"}  direction={"row"}>
          <Text    minW={"max-content"} >
            quantity : 
          </Text>
          <Select  variant="flushed" value={qty} onChange={ handleQty } textAlign={'center'} maxW={"max-content"}   >
            <option value= {1}>1</option>
            <option value= {2}>2</option>
            <option value= {3}>3</option>
          </Select>
        </Stack>
      </Stack>
      
      <Stack p={'10px 0'}>
        <Box align={'right'}>

      <CloseButton onClick={handleDelete} size='md'  />
        </Box>
        <Stack direction={'row'} align={'baseline'} >
        <Text fontSize={'20px'}>  ₹{price * qty} </Text>
        <p  className="cutPrice" fontSize={'15px'} > ₹{ogPrice * qty} </p>
        </Stack>
        <Text as={'sub'} textAlign={'right'} fontSize={'14px'} >free shipping</Text>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default CartCard;
