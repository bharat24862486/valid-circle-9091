import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button, 
  SimpleGrid,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text, 
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import FilterByCat from "./FilterByCat";
import FilterWithRadio from "./FilterWithRadio";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import { useEffect } from "react"; 
import { getData } from "../../redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux"; 
import Card from './Card';

const ProductPage = () => {
   


  const dispatch = useDispatch();
  const {productData} = useSelector((store)=>store.ProductReducer)
 

  useEffect(() => {
      
      dispatch(getData())
  }, [dispatch]);

  
  

  const categaries = [
    "Tshirts",
    "Dresses",
    "Clothing",
    "Sweathshirts",
    "Kurta Sets",
    "Shorts",
    "Tops",
    "Shirts",
  ];

  const brand = [
    "Hopscotch(1272)",
    "V-Mart(739)",
    "H&M ",
    "Wish Karo",
    "Peppermint",
    "KiddoPanti",
    "Zalio",
    "Nottie Planet",
  ];

  const prices = [
    "Rs. 159 to Rs. 1619(11735)",
    "Rs. 1619 to Rs. 3079(1150)",
    "Rs. 3079 to Rs. 4539(98)",
    "Rs. 4539 to Rs. 5999(1)",
  ];

  const Discounts = [
    "10% and above",
    "20% and above",
    "30% and above",
    "40% and above",
    "50% and above",
    "60% and above",
    "70% and above",
    "80% and above",
  ];

  const deliveryTime = ["Within 2 Days", "Within 3 Days", "Within 4 Days"];

  const timerRef = useRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const btnMouseEnterEvent = () => {
    setIsOpenMenu(true);
  };

  const btnMouseLeaveEvent = () => {
    timerRef.current = window.setTimeout(() => {
      setIsOpenMenu(false);
    }, 150);
  };

  const menuListMouseEnterEvent = () => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setIsOpenMenu(true);
  };

  const menuListMouseLeaveEvent = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <Stack p={"1.50rem"}>
        <Stack
          spacing={2}
          align="stretch"
          // border={"1px solid black"}
          marginBottom='20px'
        >
          <Breadcrumb className={'breadcrummb'} >
            <BreadcrumbItem  >
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Clothing</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={"b"} cursor='text' >sandeep Wear Online Store</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb separator="-" className={'breadcrummb'}>
            <BreadcrumbItem>
              <BreadcrumbLink as={"b"} cursor='text' href="#">
                Kids Wear Online Store
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink cursor='text' >208179 items</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Stack>

        <Stack
          className="main-container"
          // border={"1px solid black"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            className="left-side-menu"
            // width={"14%"}
            width={"15rem"}
            // minW={"15rem"}
            // minChildWidth="7.5rem"
          >
            <Stack
              width={"15rem"}
              //  minW={"15rem"}
              direction={"row"}
              justifyContent="space-between"
              placeItems={"center"}
              p={"10px 0"}
            >
              <Text
                minWidth={"min-content"}
                textAlign={"left"}
                as={"b"}
                // border="1px solid black"
              >
                {" "}
                FILTERS
              </Text>
              <Text
                as={"b"}
                // border="1px solid black"
                fontSize={".8rem"}
                color={"#fe3f6c"}
              >
                CLEAR ALL
              </Text>
            </Stack>
            <Stack
              direction={"column"}
              textAlign="left"
              border="1px solid #e9e9ed"
              padding={".625rem .625rem"}
            >
              <FilterWithRadio children={"Boys"} />
              <FilterWithRadio children={"Girls"} />
            </Stack>
            <Stack
              direction={"column"}
              textAlign="left"
              border="1px solid #e9e9ed"
              padding={".625rem .625rem"}
            >
              <HStack direction={"row"} justifyContent={"space-between"}>
                <Text as={"b"}> CATEGORIES </Text>
                <SearchIcon />
              </HStack>
              {categaries.map((e, i) => (
                <FilterByCat key={i} children={e} />
              ))}
            </Stack>
            <Stack
              direction={"column"}
              textAlign="left"
              border="1px solid #e9e9ed"
              padding={".625rem .625rem"}
            >
              <HStack direction={"row"} justifyContent={"space-between"}>
                <Text as={"b"}> BRAND </Text>
                <SearchIcon />
              </HStack>
              {brand.map((e, i) => (
                <FilterByCat key={i} children={e} />
              ))}
            </Stack>
            <Stack
              direction={"column"}
              textAlign="left"
              border="1px solid #e9e9ed"
              padding={".625rem .625rem"}
            >
              <HStack direction={"row"} justifyContent={"space-between"}>
                <Text as={"b"}> price </Text>
              </HStack>
              {prices.map((e, i) => (
                <FilterByCat key={i} children={e} />
              ))}
            </Stack>
            <Stack
              direction={"column"}
              textAlign="left"
              border="1px solid #e9e9ed"
              padding={".625rem .625rem"}
            >
              <HStack direction={"row"} justifyContent={"space-between"}>
                <Text as={"b"}> DISCOUNT RANGE </Text>
              </HStack>
              {Discounts.map((e, i) => (
                <FilterByCat key={i} children={e} />
              ))}
            </Stack>
            <Stack
              direction={"column"}
              textAlign="left"
              border="1px solid #e9e9ed"
              padding={".625rem .625rem"}
            >
              <HStack direction={"row"} justifyContent={"space-between"}>
                <Text as={"b"}> DELIVERY TIME </Text>
              </HStack>
              {deliveryTime.map((e, i) => (
                <FilterByCat key={i} children={e} />
              ))}
              <Text color={" #a39c9c"} fontSize={".8rem"} as={"i"}>
                Estimated fastest delivery time. Refer to actual delivery time
                in Bag.
              </Text>
            </Stack>
          </Stack>

          <Stack
            className="right-side-menu"
            border={"1px solid black"}
            w="85rem"
            // minW={'75rem'}
          >
            {/* <Stack w={"20%"} textAlign="right" placeItems={'right'} placeContent='right' */}
            <Stack w="100%" p={"0 18px"} alignItems={"flex-end"}>
              <Stack
                w={"16rem"}
                //  border={"1px solid black"}
                borderRadius={"12"}
                boxShadow=" rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;"
              >
                <Menu isOpen={isOpenMenu}>
                  <MenuButton
                    as={Button}
                    // outline="none"
                    // box-shadow="none"
                    _focusVisible={"none"} 
                    w={"100%"}
                    rightIcon={<ChevronDownIcon />}
                    aria-label="Courses"
                    fontWeight="normal"
                    onMouseEnter={btnMouseEnterEvent}
                    onMouseLeave={btnMouseLeaveEvent}
                  >
                    Sort by : <Text as={"b"}>Recommended</Text>
                  </MenuButton>
                  <MenuList
                    w={"115%"}
                    onMouseEnter={menuListMouseEnterEvent}
                    onMouseLeave={menuListMouseLeaveEvent}
                  >
                    <MenuItem>Recommended</MenuItem>
                    <MenuItem>What's New</MenuItem>
                    <MenuItem>Popularity</MenuItem>
                    <MenuItem>Price: Low to High</MenuItem>
                    <MenuItem>Price: High to Low</MenuItem>
                    <MenuItem>Customer Rating</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Stack>

            <Stack className="product-display">
              <Stack border="1px solid black" p={"15px 15px"}  >
                <SimpleGrid columns={[1,1,2,3,4,5]} m='auto' gap='40px' >
                 

                  {productData.length >= 0 &&
                    productData?.map((e) => (
                      
                      <Card key={e.id} props={e} />
                    ))}
                </SimpleGrid>
 
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductPage;
