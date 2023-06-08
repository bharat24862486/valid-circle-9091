import React from 'react'
import {
  Heading, Text, Box, HStack, Flex, Button, Image, Input, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineMobile } from 'react-icons/ai';
import { TbTruckReturn } from 'react-icons/tb';






const SingleProductSecond = ({ addToCart, title, brand, rating, count, price, discount, size, ageGroup }) => {
  console.log(title, brand, rating, count, price)
  return (
    <Box>
      {/* <Heading Heading as='h3' size='lg' noOfLines={1}>{brand}</Heading> */}
      <Text as={"b"} fontSize='25px'>{brand}</Text>
      <br />
      {/* <h4>{title}</h4> */}
      <Text fontWeight={"500"} fontSize='20px'>{title}</Text>
      <Box mt={"2%"} mb={"2%"}>
        <HStack
          spacing={"0.2rem"}
          p="0.15rem 0.5rem"
          width={"max-content"}
          //   position={"absolute"}
          //   bottom={"2.5%"}
          //   left={"5%"}
          bgColor={"white"}
          boxShadow={"0 0 3px rgba(0,0,0,0.4)"}
        >
          <Text fontWeight={"500"} fontSize={"1rem"} /* as="b" */>
            {rating}
          </Text>
          <FaStar size={"12"} color="teal" />
          <Text fontWeight={"500"} fontSize={"1rem"}>
            {"|"}
          </Text>
          <Text fontWeight={"500"} fontSize={"1rem"}>
            {count} Ratings
          </Text>
        </HStack>
      </Box>
      {/* <hr /> */}
      <Box>
        <Text fontSize={"18px"} as={"b"}>
          {price}{" "}
          <span style={{ fontSize: "18px", color: "orange" }}>
            {" "}
            &nbsp; {discount}
          </span>
        </Text>
      </Box>
      <Text color={"green"} fontWeight={"600"} fontSize={"15px"} mt={"1%"}>inclusive of all taxes</Text>
      <Text fontWeight={"600"} fontSize={"22px"}>Select Size</Text>
      <Box mt={"2%"}>
        {size.map((el) => {
          return <button style={{ border: "1px solid black", margin: "1%", hight: "15px", borderRadius: "5px", padding: "5px" }}>&nbsp;&nbsp;  {el} &nbsp;&nbsp;</button>
        })}
      </Box>

      <Box mt={"5%"} mb={"5%"} display={"flex"} flexDirection={["column","row"]}>
        <Button color={"white"} background={"pink.500"}  pl={"20"}  pr={"20"} pt={"7"} pb={"7"} onClick={()=>addToCart()} >Add to Bag</Button><span> </span>
        <Button background={"white"} pl={"20"} pr={"20"} pt={"7"} pb={"7"} border={"1px solid black"}>Wishlist</Button>
      </Box>
      {/* <hr /> */}

      <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"}>Delivery Option</Text>
      <Input width={"40%"} />

      <Box display={"flex"} alignItems={"center"} mt={"4%"}>
        <CiDeliveryTruck size={"25px"} />
        <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} ml={"2%"} > Get it by Sat, Apr 08 </Text>
      </Box>

      <Box display={"flex"} alignItems={"center"} mt={"2%"}>
        <AiOutlineMobile size={"25px"} />
        <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} ml={"2%"} > Pay on delivery available </Text>
      </Box>

      <Box display={"flex"} alignItems={"center"} mt={"2%"}>
        <TbTruckReturn size={"25px"} />
        <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} ml={"2%"} >Easy 14 days return & exchange available </Text>
      </Box>

      <Text fontWeight={"400"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"}>100% Original Products</Text>
      <Flex>
        <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"}>Best Price:</Text>
        <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"} color={"orange"}>{price}</Text>
      </Flex>
      <Box>
        <UnorderedList>
          <ListItem>Applicable on: Orders above Rs. 1999</ListItem>
          <ListItem>Coupon code: FESTIVE300</ListItem>
          <ListItem>Coupon Discount: Rs. 81 off (check cart for final savings)</ListItem>
          
        </UnorderedList>
      </Box>
      <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"} color={"pink.500"}>View Eligible Products</Text>
      <Text fontWeight={"650"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"} color={"black"}>EMI options available</Text>

      <Box>
      <UnorderedList>
          <ListItem>EMI starting from Rs.26/month</ListItem>
          </UnorderedList>
      </Box>
      <Text fontWeight={"600"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"2%"} color={"pink.500"}>View plans</Text>
      <Text fontWeight={"650"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"2%"} mb={"1%"} color={"black"}>Product Details</Text>
      <Text fontWeight={"500"} fontSize={["1.1rem","1.7rem","1.2rem"]} mt={"1%"} mb={"2%"} color={"black"}>{title}</Text>


      {/* <hr style={{marginTop:"5%"}}/> */}







    </Box>
  )
}





export default SingleProductSecond
