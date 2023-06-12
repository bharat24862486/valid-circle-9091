import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SinglePageGrid from './SinglePageGrid'
import "../../CSS/SingleProduct.css"
import SingleProductSecond from './SingleProductSecond'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack,useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../footer/Footer'
const url = `https://glorious-robe-calf.cyclic.app`
const SingleProduct = () => {
 const {id} = useParams()
 const toast = useToast()
//  console.log('search',id)
    const [data, setData] = useState({
        rating: "",
        count: "",
        images: {
            image1: "",
            image2: "",
            image3: "",
            image4: ""
        },
        image: "",
        brand: "",
        title: "",
        sizes: [
        ],
        price: "",
        productDiscountPercentage: "",
        quantity: 0,
        gender: "",
        category: ""
    })
    function singleGet() {
        return axios.get(`https://glorious-robe-calf.cyclic.app/kids/${id}`)
    }
    useEffect(() => {
        singleGet()
            .then((res) => setData(res.data))
    }, [])
    // data && console.log(data.images.image1)
    
    const AddToCartToast = (title) => {
  
      toast({
        title:title,
        // description: des, 
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      })
    }


const addToCart = () => {
    // alert('working addtocart')
    // "Added to Cart"
    AddToCartToast("Added to Cart")
    axios.post(`${url}/cart`, data).then((res)=>res).catch((err)=>console.log(err))
}



    return (
        <div>
            <Nav />
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
                        <BreadcrumbLink as={"b"} fontSize={"13px"} cursor="text">
                            {data?.brand}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Stack>
            <div className='SingleFlex'>

                <div>
                    {console.log(data)}
                    {data?.images ? <SinglePageGrid datas={[data.images.image1, data.images.image2, data.images.image3]} /> : ''}
                    {/* <SinglePageGrid data={[data?.images?.image1,data?.images?.image2,data?.images?.image3]}/> */}
                </div>
                <div>
                    {data ? <SingleProductSecond addToCart={addToCart} title={data.title} brand={data.brand} rating={data.rating} count={data.count} price={data.price} discount={data.productDiscountPercentage} size={data.sizes} /> : ''}
                    {/* title,brand,rating,count,price,discount,size,ageGroup */}
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default SingleProduct