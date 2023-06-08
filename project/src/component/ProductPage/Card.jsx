import React from "react";
import { Stack, Box, Text, HStack, Button } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { CarouselPage } from "./CarouselPage";

const Card = ({ props }) => {
  const [isHover, setIsHover] = React.useState(false);
  const {
    image,
    rating,
    images,
    count,

    brand,
    title,
    price,
    sizes,
    productDiscountPercentage,
  } = props;
  // console.log('props', sizes[0]);
  return (
    <Stack
      height={"380px"}
      width={"220px"}
      spacing="0"
      bg="rgb(255, 255, 255)"
      // border={"1px solid red"}
      alignItems="flex-start"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      position="relative"
    >
      <Box
        w={"100%"}
        h="90%"
        position="relative"
        display={!isHover ? "block" : "none"}
      >
        <Box
          //  border="1px solid red"
          w={"100%"}
          h="100%"
          position="absolute"
        >
          <Box
            width="100%"
            height="80%"
            // border="1px solid red"
            position={"relative"}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={image}
              alt="productImg"
            />
            <HStack
              spacing={"0.2rem"}
              p="0.15rem 0.3rem"
              width={"max-content"}
              position={"absolute"}
              bottom={"2.5%"}
              left={"5%"}
  
              bgColor={"white"}
              boxShadow={"0 0 3px rgba(0,0,0,0.2)"}
            >
              <Text marginBottom={'0'} fontWeight={"600"} fontSize={"0.7rem"} /* as="b" */>
                {rating}
              </Text>
              <FaStar size={"12"} color="teal" />
              <Text fontWeight={"600"} fontSize={"0.7rem"}>
                {"|"}
              </Text>
              <Text fontWeight={"600"} fontSize={"0.7rem"}>
                {count}
              </Text>
            </HStack>
          </Box>
          <Stack p="1rem" spacing={0} alignItems={"flex-start"}>
            <Text as="b">{brand}</Text>
            <Text>{title.trim().slice(0, 20)}...</Text>
          </Stack>
        </Box>
      </Box>

      {/* <Box w={"100%"} h="90%" bgColor="teal" top="0" position="relative" display={isHover ? "block" :"none"}>
        <CarouselPage arr={images} />
      </Box> */}

      <Box
        w={"100%"}
        h="90%"
        bgColor="white"
        top="0"
        position="relative"
        display={isHover ? "block" : "none"}
      >
        <Box
          //  border="1px solid red"
          w={"100%"}
          h="80%"
          position="absolute"
        >
          <Box
            width="100%"
            height="100%"
            // border="1px solid red"
            position={"relative"}
          >
            <CarouselPage obj={images} />
          </Box>
          <Button
            borderRadius={"0.05rem"}
            _hover={{ backgroundColor: "none", borderColor: "black" }}
            leftIcon={<FiHeart />}
            size="sm"
            variant="outline"
            w="95%"
          >
            {" "}
            Wishlist
          </Button>
          <Stack p="1rem" spacing={0} alignItems={"flex-start"}>
            <Text>Sizes: {sizes[0]} </Text> 
          </Stack>
        </Box>
      </Box>

      <Text pl="1rem" as={"b"}>
        Rs. {price}{" "}
        <span style={{ fontSize: ".7rem", color: "orange" }}>
          {" "}
          &nbsp; {productDiscountPercentage}
        </span>
      </Text>
    </Stack>
  );
};

export default Card;
