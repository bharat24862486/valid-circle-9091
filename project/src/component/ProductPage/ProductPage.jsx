import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import FilterByCat from "./FilterByCat";
import FilterWithRadio from "./FilterWithRadio";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import { useEffect } from "react";
import { CarouselPage } from "./CarouselPage";
import { getData } from "../../redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();
  // const {productsData} = useSelector((store)=>store.ProductReducer)

  const fetchData = async () => {
    let val = await dispatch(getData());

    setProductData(val);
  };

  useEffect(() => {
    // setProductData(val)
    fetchData();
  }, []);

  // console.log('productData', productData)

  // setProductData(productsData)
  // const list = [
  //   {
  //     rating: "4.2",
  //     count: "2.4k",
  //     images: [
  //       {
  //         img1: "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       },
  //       {
  //         img2: "https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       },
  //       {
  //         img3: "https://images.pexels.com/photos/5043636/pexels-photo-5043636.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       },
  //       {
  //         img4: "https://images.pexels.com/photos/4321798/pexels-photo-4321798.jpeg?auto=compress&cs=tinysrgb&w=600",
  //       },
  //     ],
  //     img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15238122/2021/8/24/d60e1f33-1e40-4df1-8378-1837c0e1082a1629785346782BONKIDSBoysMustardYellowPrintedPocketsSlimFitT-shirt1.jpg",
  //     brand: "BONKIDS",
  //     title: "Boys Spiderman Printed Slim Fit Pure Cotton T-shirt",
  //     sizes: ["4-5y", "6-7y", "8-10y"],
  //     price: "Rs. 481",
  //     id: 1,
  //     "product-discountPercentage": "(71% OFF)",
  //     quantity: 10,
  //     gender: "boys",
  //     categories: "t-shirt",
  //   },
  //   //    {
  //   //     "rating": "4.3",
  //   //     "count": "312",
  //   //      "images" :[
  //   //      {"img1" : "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img2" : "https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img3" : "https://images.pexels.com/photos/5043636/pexels-photo-5043636.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img4" : "https://images.pexels.com/photos/4321798/pexels-photo-4321798.jpeg?auto=compress&cs=tinysrgb&w=600" }
  //   //  ],
  //   //     "img": "https:\/\/assets.myntassets.com\/dpr_2,q_60,w_210,c_limit,fl_progressive\/assets\/images\/14180662\/2022\/6\/21\/c85a9ea3-b4dd-4887-8f40-dbbe9ea4a7301655787166633KUCHIPOOBoysPackof5PrintedT-Shirts1.jpg",
  //   //     "brand": "KUCHIPOO",
  //   //     "title": "Boys 5 Pcs Printed T-Shirts",
  //   //     "sizes": [
  //   //      "4-5y", "6-7y" , "8-10y"
  //   //     ],
  //   //     "price": "Rs. 899",
  //   //     "id": 2,
  //   //     "product-discountPercentage": "(Rs. 1000 OFF)",
  //   //     "quantity" : 10,
  //   //     "gender": "boys",
  //   //     "categories": "t-shirt"
  //   //    },
  //   //    {
  //   //     "rating": "4.1",
  //   //     "count": "957",
  //   //      "images" :[
  //   //      {"img1" : "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img2" : "https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img3" : "https://images.pexels.com/photos/5043636/pexels-photo-5043636.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img4" : "https://images.pexels.com/photos/4321798/pexels-photo-4321798.jpeg?auto=compress&cs=tinysrgb&w=600" }
  //   //  ],
  //   //     "img": "https:\/\/assets.myntassets.com\/dpr_2,q_60,w_210,c_limit,fl_progressive\/assets\/images\/17137560\/2022\/2\/11\/4dd42ff2-7468-4bcc-a4a2-f0994b2d01751644582207769HellcatBoysRoundNeckBlendedCottonTshirt-ComboPackof51.jpg",
  //   //     "brand": "HELLCAT",
  //   //     "title": "Boys Pack of 5 T-shirt",
  //   //     "sizes": [
  //   //      "4-5y", "6-7y" , "8-10y"
  //   //     ],   "price": "Rs. 749",
  //   //     "id": 3,
  //   //     "product-discountPercentage": "(85% OFF)",
  //   //     "quantity" : 10,
  //   //     "gender": "boys",
  //   //     "categories": "t-shirt"
  //   //    },
  //   //    {
  //   //     "rating": "4.6",
  //   //     "count": "700",
  //   //      "images" :[
  //   //      {"img1" : "https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img2" : "https://images.pexels.com/photos/5326951/pexels-photo-5326951.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img3" : "https://images.pexels.com/photos/5043636/pexels-photo-5043636.jpeg?auto=compress&cs=tinysrgb&w=600" },
  //   //      {"img4" : "https://images.pexels.com/photos/4321798/pexels-photo-4321798.jpeg?auto=compress&cs=tinysrgb&w=600" }
  //   //  ],
  //   //     "img": "https:\/\/assets.myntassets.com\/dpr_2,q_60,w_210,c_limit,fl_progressive\/assets\/images\/20437414\/2022\/10\/17\/c0441c0f-c014-4f05-a4ba-bc0e5086a5991666030710743MickeyFriendsPrintedOfficialMerchandiseBoysTshirt1.jpg",
  //   //     "brand": "max",
  //   //     "title": "Boys Pack Of 5 T-shirts",
  //   //     "sizes": [
  //   //      "4-5y", "6-7y" , "8-10y"
  //   //     ],   "price": "Rs. 664",
  //   //     "id": 4,
  //   //     "product-discountPercentage": "(30% OFF)",
  //   //     "quantity" : 10,
  //   //     "gender": "boys",
  //   //     "categories": "t-shirt"
  //   //    },
  // ];

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
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Clothing</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={"b"}>Kids Wear Online Store</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb separator="-">
            <BreadcrumbItem>
              <BreadcrumbLink as={"b"} href="#">
                Kids Wear Online Store
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>208179 items</BreadcrumbLink>
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
 
  
            minChildWidth="7.5rem"
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
              <Stack border="1px solid black" p={"15px 5px"}>
                <Wrap spacing="50px" justify="center">
                  {/* 
                  { false && productData.map((e) => (
                    <WrapItem>
                      <Center
                        w="240px"
                        h="80px"
                        p={"150px 0"}
                        bg="rgb(244, 255, 249)"
                      >
                        <CarouselPage key={e.id} arr={e.images} />
                      </Center>
                    </WrapItem>
                  ))} */}

                  {productData.length > 0 &&
                    productData?.map((e) => (
                      <WrapItem key={e.id}>
                        <Center
                          w="240px"
                          h="80px"
                          p={"150px 0"}
                          bg="rgb(244, 255, 249)"
                        >
                          <Box as="div">
                            <Box className="displayCarousel">
                              <CarouselPage key={e.id} arr={e.images} />
                            </Box>
                            <Box className="displayImg" as={"div"}>
                              {/* <img src={e.img} alt="images" /> */}
                            </Box>
                            {/* <Box as="div">
                            <div class="product-productMetaInfo">
                              <Text
                                fontSize={"lg"}
                                as="b"
                                class="product-brand"
                              >
                                {e.brand}
                              </Text>
                              <Text fontSize={"xs"} class="product-product">
                                {e.title}
                              </Text>
                              <Text class="product-sizes">
                                {" "}
                                <span class="product-sizeInventoryPresent">
                                  13-14Y
                                </span>
                              </Text>
                              <div fontSize={"sm"} as="b" class="product-price">
                                <span>
                                  <span class="product-discountedPrice">
                                    {e.price}
                                  </span>
                                </span>
                                <span class="product-discountPercentage">
                                  {e["product-discountPercentage"]}
                                </span>
                              </div>
                            </div>
                          </Box> */}
                          </Box>
                        </Center>
                      </WrapItem>
                    ))}
                </Wrap>

                {/* {productData.map((e) => (
                  <CarouselPage key={e.id} arr={e.images} />
                ))} */}
              </Stack>

            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductPage;
