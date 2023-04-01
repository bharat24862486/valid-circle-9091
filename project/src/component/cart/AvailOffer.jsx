import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"

export const AvailOffer = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    const data = [{title:"Get up to Rs.500 Freecharge Cashback on spend of Rs.1000"},{title:"5% Unlimited Cashback on a spend of Flipkart Axis Bank Credit Card."},{title:"10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA"}]

      
    
  return (
    <DIV>
        <div className='firstdiv'>
            <img className='offlogo' src="./images/offor logo.jpg" alt="offorlogo" />
            <p>Available Offer</p>
        </div>

        <div className='slide'>
            <Slider {...settings}>
                {data.map((e)=>{
                    return(
                        <div className='div'>
                            <li>{e.title}</li>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </DIV>
  )
}

const DIV = styled.div`
    width : 75%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-width: 0.5px;
    margin : auto;
    margin : 10px auto;
    padding:0px 10px;
    .firstdiv{
        // border : solid grey;
        display : flex;
        align-items : center;

    }
    .firstdiv img{
        width : 20px;
        height : 20px;
    }
    p{
        font-weight:bold;
    }
    p,li{
        font-size : 10px;
    }
    .slide Slider{
        border :solid black;
        width : 60%;
        margin : 10px;
    }
    li{
        margin-bottom : 20px;
    }
`

