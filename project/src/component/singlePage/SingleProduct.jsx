import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SinglePageGrid from './SinglePageGrid'
import "../../CSS/SingleProduct.css"
import SingleProductSecond from './SingleProductSecond'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack } from '@chakra-ui/react'

const url = `https://shy-teal-caterpillar-toga.cyclic.app`

const SingleProduct = () => {


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
        return axios.get(`http://localhost:8080/kids/1`)
    }
    useEffect(() => {
        singleGet()
            .then((res) => setData(res.data))
    }, [])
    // data && console.log(data.images.image1)

const addToCart = () => {
    alert('working addtocart')
    axios.post(`${url}/cart`, data).then((res)=>res).catch((err)=>console.log(err))
}



    return (

        <div>
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

        </div>
    )
}

export default SingleProduct
