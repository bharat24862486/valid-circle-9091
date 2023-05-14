import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  SimpleGrid,
  HStack,
  Checkbox,
  Menu,
  Center,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
  Text,
  Box
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import Footer from '../footer/Footer'
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import { useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom"; 
import { getData } from "../../redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";
import CardForMensAndWomen from "./CardForMensAndWomen";
import Pagination from "./Pagination";
import Nav from "../Nav";
import Card from "./Card";


const WomensWear = () => {
const navigate = useNavigate()
  const dispatch = useDispatch();
  const { productData } = useSelector((store) => store.ProductReducer);
  const [page, setPage] = useState(1)

  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [_sort, setSortBy] = useState("Recommended");

  
  const [params, setParams] = useSearchParams();
  const [finalFilter, setFinalFilter] = useState(/* {category:params.getAll("category")} ||  */{});

  const {search} = useLocation()

// console.log('11111111',search)

  const handleChange = ({ target }) => {
    const obj = { ...filters };

    if (target.name === "gender") {
      obj["gender"] = target.value;
    } else {
      if (target.checked) {
        obj[target.value] = target.name;
      } else {
        delete obj[target.value];
      }
    }

    setFilters(obj);
  };

  // console.log(filters);

  useEffect(() => {
    dispatch(getData("women",search));
  }, [dispatch,search]);

  useEffect(() => {
    // for(let key in finalFilter){

    // }
    setParams(finalFilter);
  }, [finalFilter]);

  const generateFilterData = (productData, param, setData) => {
    let obj = {};

    // let arr = []
    for (let item of productData) {
      obj[item[param]] = true;
    }

    setData(Object.keys(obj));
  };

  // console.log({ categoryList });

  useEffect(() => {
  if(categoryList.length < 1){
      generateFilterData(productData, "category", setCategoryList);
    generateFilterData(productData, "brand", setBrandList);
  }
    // generateFilterData(productData,'category')
  }, [productData]);

  const dataForFilter = (filters) => {
    const obj = { category: [], brand: [] };
    for (let key in filters) {
      if (key === "gender") {
        obj[key] = filters[key];
      } else {
        obj[filters[key]].push(key);
      }
    }
    // console.log({obj})
    setFinalFilter(obj);
  };

  // console.log({sort})

  useEffect(() => {
    dataForFilter(filters);
  }, [filters]);

  useEffect(() => {
    if(sort === "asc" || sort === "desc"){
      setFinalFilter({ ...finalFilter,_sort:"price",_order:sort})
    }
    else if(sort === ""){

      const newFilter =  {...filters}
      delete finalFilter['_sort']
      setFinalFilter(newFilter)
    }
    else{
      setFinalFilter({ ...finalFilter,_sort:sort});
    }
  }, [sort]);

 
  
  // price[i][1]
  // price[i][4]

  const prices = [
    "Rs. 159 to Rs. 1619",
    "Rs. 1619 to Rs. 3079",
    "Rs. 3079 to Rs. 4539",
    "Rs. 4539 to Rs. 5999",
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


  if(productData.length <1) {
    return <Center style={{marginTop:'50vh'}}><Spinner /> </Center>
  }
 
  return (
    <>
      <Nav />
      <Stack p={"1.50rem"}>
        <Stack
          spacing={2}
          align="stretch"
          // border={"1px solid black"}
          marginBottom="20px"
        >
          <Breadcrumb className={"breadcrummb"}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Clothing</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={"b"} cursor="text">
                Womens Wear Online Store
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb separator="-" className={"breadcrummb"}>
            <BreadcrumbItem>
              <BreadcrumbLink as={"b"} cursor="text" href="#">
                Womens Wear Online Store
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink cursor="text">
                {productData.length} items
              </BreadcrumbLink>
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
              <Button
                as={"b"}
                variant='text'
                cursor='pointer'
                // border="1px solid black"
                fontSize={".8rem"}
                color={"#fe3f6c"}
                onClick = {()=> setFinalFilter({})}
              >
                CLEAR ALL
              </Button>
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

              {categoryList.map((e, i) => (

                // console.log(e)
                // <Checkbox key={i} style={{ textTransform: "capitalize" }}> {e} </Checkbox>
          
                <Checkbox
                  key={i}
                  name={"category"}
                  value={e}
                  isChecked={finalFilter?.category?.includes(`${e}`)}
                  onChange={handleChange}
                  style={{ textTransform: "capitalize" }}
                >
                  {e===undefined ? 'Womens Wear': e}
                </Checkbox>
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
              {brandList.slice(0, 8).map((e, i) => (
                <Checkbox
                  key={i}
                  name={"brand"}
                  value={e}
                  isChecked={finalFilter?.brand?.includes(`${e}`)}
                  onChange={handleChange}
                  style={{ textTransform: "capitalize" }}
                >
                  {e}
                </Checkbox>
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
                <Checkbox
                  key={i}
                  name={"price"}
                  value={e}
                  onChange={handleChange}
                  style={{ textTransform: "capitalize" }}
                >
                  {" "}
                  {e}{" "}
                </Checkbox>
                // <FilterByCat key={i} children={e} />
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
                <Checkbox key={i} style={{ textTransform: "capitalize" }}>
                  {" "}
                  {e}{" "}
                </Checkbox>
                // <FilterByCat key={i} children={e} />
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
                <Checkbox key={i} style={{ textTransform: "capitalize" }}>
                  {" "}
                  {e}{" "}
                </Checkbox>
                // <FilterByCat key={i} children={e} />
              ))}
              <Text color={" #a39c9c"} fontSize={".8rem"} as={"i"}>
                Estimated fastest delivery time. Refer to actual delivery time
                in Bag.
              </Text>
            </Stack>
          </Stack>

          <Stack
            className="right-side-menu"
            
            w="85rem"
             p={"20px 0"}
            // minW={'75rem'}
          >
            {/* <Stack w={"20%"} textAlign="right" placeItems={'right'} placeContent='right' */}
            <Stack w="100%" p={"0 18px"}  alignItems={"flex-end"}>
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
                    Sort by : <Text as={"b"}>{_sort}</Text>
                  </MenuButton>
                  <MenuList
                    w={"115%"}
                    onMouseEnter={menuListMouseEnterEvent}
                    onMouseLeave={menuListMouseLeaveEvent}
                    value={sort}
                    onClick={(e) => {
                      setSort(e.target.value);
                      setSortBy(e.target.name);
                    }}
                  >
                    <MenuItem name={"Recommended"} value={""}>
                      Recommended
                    </MenuItem>
                    <MenuItem name={"Brand Name"} value={"brand"}>
                      Brand Name
                    </MenuItem>
                    <MenuItem name={"Price: Low to High"} value={"asc"}>
                      Price: Low to High
                    </MenuItem>
                    <MenuItem name={"Price: High to Low"} value={"desc"}>
                      Price: High to Low
                    </MenuItem>
                    <MenuItem name={"Customer Rating"} value={"rating"}>
                      Customer Rating
                    </MenuItem>
                    <MenuItem>Popularity</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Stack>

            <Stack className="product-display">
              <Stack borderLeft="1px solid  #e9e9ed"  borderTop="1px solid  #e9e9ed" p={"15px 15px"}>
                <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} m="auto" gap="40px">
                  {productData.length >= 0 &&
                    productData.slice(((page-1)*15),(((page-1)*15)+15)).map((e) => <Box onClick={()=>navigate(`/product/${e.id}`,{state:"women"})}>< CardForMensAndWomen key={e.id} props={e} /></Box>)}
                </SimpleGrid>
              </Stack>
                <Center marginBottom="20px" > 

<Pagination  page={page} setPage={setPage} totalPage={Math.ceil(productData?.length/15)} />
</Center>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
     <Footer />
    </>
  );
};
export default WomensWear