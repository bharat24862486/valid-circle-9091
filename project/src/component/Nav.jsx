import React, { useEffect, useRef, useState } from "react";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from "@chakra-ui/icons";
import "../CSS/Nav.css";
import MobileNav from "./NavBar/MobileNav";
import { Link, useNavigate } from "react-router-dom";
import MobNav2 from "./NavBar/MobNav2";
import axios from "axios";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { baseUrl } from "../Url";

// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Nav = ({ setHamburger, hamburger }) => {
  const navigate = useNavigate()

  const [logout, setlogout] = useState(false)

  let token = JSON.parse(localStorage.getItem("Login"))

  useEffect(() => {
    if (token) {
      setlogout(true)
    } else {
      setlogout(false)
    }
  }, [logout])

  let Display
  let D2

  if (logout) {
    Display = "inline"
    D2 = "none"
  } else {
    Display = "none"
    D2 = "inline"
  }

  const [search, setSearch] = useState("")
  const [DATA, setData] = useState([])
  const [random, setRandom] = useState(true)

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
  });


  const fetchData = () => {
    let Data = search
    Data = Data.split(" ")
    console.log(Data, "in-fetch")
    console.log(Data[1])

    // axios.get(`https://shy-teal-caterpillar-toga.cyclic.app/${Data[0]}?q=${Data[1]}`).then((res) => setData(res.data))
    axios.get(`${baseUrl}/${Data[0]}?q=${Data[1]}`).then((res) => setData(res.data))
      .catch((err) => console.log(err))
    // console.log(ref1.current)
  }


  useEffect(() => {
    if (search != "") {
      fetchData()
    }

    // let time = setTimeout(() => {


    // }, 1000);

  }, [search])

  const handleNavigate1 = (id) => {
    let data = search
    data = data.split(" ")[0]
    navigate(`/product/${id}`, { state: data })

  }

  // const ref1 = useRef()
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    });
  };


  console.log(DATA, "line 60")

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension])

  function handleInput() {

  }

  const logouts = () => {
    localStorage.setItem("Login", JSON.stringify(""))
    setlogout(false)
  }

  console.log(windowDimension.winWidth);

  return (
    // <div style={{border:"1px solid black", height:'80px'}}>Nav</div>
    <div style={{ position: 'sticky', top: "0", backgroundColor: 'white', marginTop: "0px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", zIndex: 100 }}>
      {/* style={{backgroundColor:'white', position:"fixed", top:0, left:0}} */}
      {windowDimension.winWidth > 1024 ? (
        <div className="NavMain" style={{ backgroundColor: 'white', marginTop: 0 }} >
          <Link to='/'>
            <div >
              <img
                src="https://i.ibb.co/kG5RxHg/StyleHub.png"
                alt=""
                style={{ width: "100px" }}
              />
            </div>
          </Link>
          <div className="firstNavMain">
            <nav id="nav">
              <ul>
                <li>
                  <Link to={'/mens'}>
                    <span>
                      Men
                    </span>
                  </Link>
                  <div class="subMenu">
                    <div id="mobiles" class="submenuList">
                      <div>
                        <p style={{ color: "#EC407A" }}>Top-Wear</p>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweat Shirt</p>
                        <p>Jacket</p>
                        <p>Sweater</p>
                        <p>Suits</p>
                        <p>Rain Jacket</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Indian & Festive Wear
                        </p>
                        <p>Kurta & Kurts's Set</p>
                        <p>Sherwani</p>
                        <p>Dhotis</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Bottom-Wear</p>
                        <p>Jeans</p>
                        <p>Casual Trousers</p>
                        <p>Formal Trousers</p>
                        <p>Shorts</p>
                        <p>Tract-Pents & Jooggers</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Inner Wear & Sleep Wear
                        </p>
                        <p>Briefs & Trunks</p>
                        <p>Boxers</p>

                        <p>Vests</p>
                        <p>Spleepwear & Loungewear</p>
                        <p>Thermals</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Plus Size</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Footwears</p>
                        <p>Shoes</p>
                        <p>Casual Shoes</p>
                        <p>Formal Shoes</p>
                        <p>Sport Shoes</p>
                        <p>Sneakers</p>
                        <p>Sendal & Footwear</p>
                        <p>Flip Flops</p>
                        <p>Socks</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Personal care & Grooming
                        </p>
                        <p style={{ color: "#EC407A" }}> Sunglasses & Frames</p>
                        <p style={{ color: "#EC407A" }}>Watches</p>
                        {/* <p>Dhotis</p> */}
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Sports & Active-Wear</p>
                        <p>Sports Shoes</p>
                        <p>Sports Sendals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Tractsuits</p>
                        <p>Jacktes</p>
                        <p>Accessories</p>
                        <p>Swimming Suits</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Gadgets</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Fashion Accessories</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p>Perfumes</p>
                        <p>Treamer</p>
                        <p>Deodrant</p>
                        <p>Ties</p>
                        <p>Accessories Gift-Set</p>
                        <p>Caps & Hats</p>

                        <p>Phone Cases</p>
                        <p>Rings & Neckles</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Bag & Bag-Packs</p>
                        <p style={{ color: "#EC407A" }}>Luggage & Trolly </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to={'/womens'}>
                    <span>
                      Women
                    </span>
                  </Link>
                  <div class="subMenu">
                    <div id="furniture" class="submenuList">
                      <div>
                        <p style={{ color: "#EC407A" }}>
                          Indian & Fashion Wear
                        </p>
                        <p>Kurtas & Suits</p>
                        <p>Kurtis</p>
                        <p>Sarees</p>
                        <p>Ethic Wear</p>
                        <p>Legging, Selvars</p>
                        <p>Skirts</p>
                        <p>Plazos</p>
                        <p>Jacket</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Belt, Scarves & more</p>
                        <p style={{ color: "#EC407A" }}>Watches & Wearables</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Western Wear</p>
                        <p>Dress</p>
                        <p>Tops</p>
                        <p>T-shirts</p>
                        <p>Jeans</p>
                        <p>Tract-Pents & Jooggers</p>
                        {/* <hr />
              <p style={{color:"#EC407A"}}>Inner Wear & Sleep Wear</p> */}
                        <p>Briefs & Trunks</p>
                        <p>Shrugs</p>

                        <p>Jacket & Coats</p>
                        <p>Blazers</p>
                        <p>Thermals</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Plus Size</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Footwears</p>
                        <p>Shoes</p>
                        <p>Casual Shoes</p>
                        <p>Formal Shoes</p>
                        <p>Sport Shoes</p>
                        <p>Sneakers</p>
                        <p>Sendal & Footwear</p>
                        <p>Flip Flops</p>
                        <p>Socks</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Personal care & Grooming
                        </p>
                        <p style={{ color: "#EC407A" }}> Sunglasses & Frames</p>
                        <p style={{ color: "#EC407A" }}>Watches</p>
                        {/* <p>Dhotis</p> */}
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Sports & Active-Wear</p>
                        <p>Sports Shoes</p>
                        <p>Sports Sendals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Tractsuits</p>
                        <p>Jacktes</p>
                        <p>Accessories</p>
                        <p>Swimming Suits</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Gadgets</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Fashion Accessories</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p>Perfumes</p>
                        <p>Treamer</p>
                        <p>Deodrant</p>
                        <p>Ties</p>
                        <p>Accessories Gift-Set</p>
                        <p>Caps & Hats</p>

                        <p>Phone Cases</p>
                        <p>Rings & Neckles</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Bag & Bag-Packs</p>
                        <p style={{ color: "#EC407A" }}>Luggage & Trolly </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to={'/kids'}>
                    <span>
                      Kids
                    </span>
                  </Link>
                  <div class="subMenu">
                    <div id="electronics" class="submenuList">
                      <div>
                        <p style={{ color: "#EC407A" }}>Top-Wear</p>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweat Shirt</p>
                        <p>Jacket</p>
                        <p>Sweater</p>
                        <p>Suits</p>
                        <p>Rain Jacket</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Indian & Festive Wear
                        </p>
                        <p>Kurta & Kurts's Set</p>
                        <p>Sherwani</p>
                        <p>Dhotis</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Bottom-Wear</p>
                        <p>Jeans</p>
                        <p>Casual Trousers</p>
                        <p>Formal Trousers</p>
                        <p>Shorts</p>
                        <p>Tract-Pents & Jooggers</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Inner Wear & Sleep Wear
                        </p>
                        <p>Briefs & Trunks</p>
                        <p>Boxers</p>

                        <p>Vests</p>
                        <p>Spleepwear & Loungewear</p>
                        <p>Thermals</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Plus Size</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Footwears</p>
                        <p>Shoes</p>
                        <p>Casual Shoes</p>
                        <p>Formal Shoes</p>
                        <p>Sport Shoes</p>
                        <p>Sneakers</p>
                        <p>Sendal & Footwear</p>
                        <p>Flip Flops</p>
                        <p>Socks</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Personal care & Grooming
                        </p>
                        <p style={{ color: "#EC407A" }}> Sunglasses & Frames</p>
                        <p style={{ color: "#EC407A" }}>Watches</p>
                        {/* <p>Dhotis</p> */}
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Sports & Active-Wear</p>
                        <p>Sports Shoes</p>
                        <p>Sports Sendals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Tractsuits</p>
                        <p>Jacktes</p>
                        <p>Accessories</p>
                        <p>Swimming Suits</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Gadgets</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Fashion Accessories</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p>Perfumes</p>
                        <p>Treamer</p>
                        <p>Deodrant</p>
                        <p>Ties</p>
                        <p>Accessories Gift-Set</p>
                        <p>Caps & Hats</p>

                        <p>Phone Cases</p>
                        <p>Rings & Neckles</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Bag & Bag-Packs</p>
                        <p style={{ color: "#EC407A" }}>Luggage & Trolly </p>
                      </div>
                    </div>
                  </div>
                </li>
                <Link to={"/womens"}><li>
                  Home & Living
                  <div class="subMenu">
                    <div id="home_appliances" class="submenuList">
                      <div>
                        <p style={{ color: "#EC407A" }}>Top-Wear</p>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweat Shirt</p>
                        <p>Jacket</p>
                        <p>Sweater</p>
                        <p>Suits</p>
                        <p>Rain Jacket</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Indian & Festive Wear
                        </p>
                        <p>Kurta & Kurts's Set</p>
                        <p>Sherwani</p>
                        <p>Dhotis</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Bottom-Wear</p>
                        <p>Jeans</p>
                        <p>Casual Trousers</p>
                        <p>Formal Trousers</p>
                        <p>Shorts</p>
                        <p>Tract-Pents & Jooggers</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Inner Wear & Sleep Wear
                        </p>
                        <p>Briefs & Trunks</p>
                        <p>Boxers</p>

                        <p>Vests</p>
                        <p>Spleepwear & Loungewear</p>
                        <p>Thermals</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Plus Size</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Footwears</p>
                        <p>Shoes</p>
                        <p>Casual Shoes</p>
                        <p>Formal Shoes</p>
                        <p>Sport Shoes</p>
                        <p>Sneakers</p>
                        <p>Sendal & Footwear</p>
                        <p>Flip Flops</p>
                        <p>Socks</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Personal care & Grooming
                        </p>
                        <p style={{ color: "#EC407A" }}> Sunglasses & Frames</p>
                        <p style={{ color: "#EC407A" }}>Watches</p>
                        {/* <p>Dhotis</p> */}
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Sports & Active-Wear</p>
                        <p>Sports Shoes</p>
                        <p>Sports Sendals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Tractsuits</p>
                        <p>Jacktes</p>
                        <p>Accessories</p>
                        <p>Swimming Suits</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Gadgets</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Fashion Accessories</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p>Perfumes</p>
                        <p>Treamer</p>
                        <p>Deodrant</p>
                        <p>Ties</p>
                        <p>Accessories Gift-Set</p>
                        <p>Caps & Hats</p>

                        <p>Phone Cases</p>
                        <p>Rings & Neckles</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Bag & Bag-Packs</p>
                        <p style={{ color: "#EC407A" }}>Luggage & Trolly </p>
                      </div>
                    </div>
                  </div>
                </li></Link>
                <Link  to={"/womens"}>
                <li>
                  Beauty
                  <div class="subMenu">
                    <div id="kids_toys" class="submenuList">
                      <div>
                        <p style={{ color: "#EC407A" }}>Top-Wear</p>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweat Shirt</p>
                        <p>Jacket</p>
                        <p>Sweater</p>
                        <p>Suits</p>
                        <p>Rain Jacket</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Indian & Festive Wear
                        </p>
                        <p>Kurta & Kurts's Set</p>
                        <p>Sherwani</p>
                        <p>Dhotis</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Bottom-Wear</p>
                        <p>Jeans</p>
                        <p>Casual Trousers</p>
                        <p>Formal Trousers</p>
                        <p>Shorts</p>
                        <p>Tract-Pents & Jooggers</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Inner Wear & Sleep Wear
                        </p>
                        <p>Briefs & Trunks</p>
                        <p>Boxers</p>

                        <p>Vests</p>
                        <p>Spleepwear & Loungewear</p>
                        <p>Thermals</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Plus Size</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Footwears</p>
                        <p>Shoes</p>
                        <p>Casual Shoes</p>
                        <p>Formal Shoes</p>
                        <p>Sport Shoes</p>
                        <p>Sneakers</p>
                        <p>Sendal & Footwear</p>
                        <p>Flip Flops</p>
                        <p>Socks</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Personal care & Grooming
                        </p>
                        <p style={{ color: "#EC407A" }}> Sunglasses & Frames</p>
                        <p style={{ color: "#EC407A" }}>Watches</p>
                        {/* <p>Dhotis</p> */}
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Sports & Active-Wear</p>
                        <p>Sports Shoes</p>
                        <p>Sports Sendals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Tractsuits</p>
                        <p>Jacktes</p>
                        <p>Accessories</p>
                        <p>Swimming Suits</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Gadgets</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Fashion Accessories</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p>Perfumes</p>
                        <p>Treamer</p>
                        <p>Deodrant</p>
                        <p>Ties</p>
                        <p>Accessories Gift-Set</p>
                        <p>Caps & Hats</p>

                        <p>Phone Cases</p>
                        <p>Rings & Neckles</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Bag & Bag-Packs</p>
                        <p style={{ color: "#EC407A" }}>Luggage & Trolly </p>
                      </div>
                    </div>
                  </div>
                </li>
                </Link>
                <li>
                  Studio
                  <div class="subMenu">
                    <div id="sports_fashion" class="submenuList">
                      <div>
                        <p style={{ color: "#EC407A" }}>Top-Wear</p>
                        <p>T-Shirt</p>
                        <p>Casual Shirts</p>
                        <p>Formal Shirts</p>
                        <p>Sweat Shirt</p>
                        <p>Jacket</p>
                        <p>Sweater</p>
                        <p>Suits</p>
                        <p>Rain Jacket</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Indian & Festive Wear
                        </p>
                        <p>Kurta & Kurts's Set</p>
                        <p>Sherwani</p>
                        <p>Dhotis</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Bottom-Wear</p>
                        <p>Jeans</p>
                        <p>Casual Trousers</p>
                        <p>Formal Trousers</p>
                        <p>Shorts</p>
                        <p>Tract-Pents & Jooggers</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Inner Wear & Sleep Wear
                        </p>
                        <p>Briefs & Trunks</p>
                        <p>Boxers</p>

                        <p>Vests</p>
                        <p>Spleepwear & Loungewear</p>
                        <p>Thermals</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Plus Size</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Footwears</p>
                        <p>Shoes</p>
                        <p>Casual Shoes</p>
                        <p>Formal Shoes</p>
                        <p>Sport Shoes</p>
                        <p>Sneakers</p>
                        <p>Sendal & Footwear</p>
                        <p>Flip Flops</p>
                        <p>Socks</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>
                          Personal care & Grooming
                        </p>
                        <p style={{ color: "#EC407A" }}> Sunglasses & Frames</p>
                        <p style={{ color: "#EC407A" }}>Watches</p>
                        {/* <p>Dhotis</p> */}
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Sports & Active-Wear</p>
                        <p>Sports Shoes</p>
                        <p>Sports Sendals</p>
                        <p>Active T-Shirts</p>
                        <p>Track Pants</p>
                        <p>Tractsuits</p>
                        <p>Jacktes</p>
                        <p>Accessories</p>
                        <p>Swimming Suits</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Gadgets</p>
                        <p>Fitness Gadgets</p>
                        <p>Headphones</p>
                        <p>Speakers</p>
                      </div>
                      <div>
                        <p style={{ color: "#EC407A" }}>Fashion Accessories</p>
                        <p>Wallets</p>
                        <p>Belts</p>
                        <p>Perfumes</p>
                        <p>Treamer</p>
                        <p>Deodrant</p>
                        <p>Ties</p>
                        <p>Accessories Gift-Set</p>
                        <p>Caps & Hats</p>

                        <p>Phone Cases</p>
                        <p>Rings & Neckles</p>
                        <hr />
                        <p style={{ color: "#EC407A" }}>Bag & Bag-Packs</p>
                        <p style={{ color: "#EC407A" }}>Luggage & Trolly </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="secondNavMain">
            <div>
              <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
              <span onClick={handleInput}>
                <SearchIcon />
              </span>
              {search !== "" && DATA?.length > 0 ? <> <Box   >

                <Box textAlign={"left"} overflow={'scroll'} width={"54vh"} maxH={'71vh'} zIndex={'100000'} bg='white' pos='absolute' borderRadius={"14px"} color='black' p='2' pt={"10"}>
                  {

                    DATA?.map((el) => (
                      <Flex alignItems={"center"} gap={"20px"} padding={"5px"} cursor={"pointer"}>
                        <Image w={"30%"} src={el?.images?.image1} />
                        <h5 onClick={() => handleNavigate1(el?.id)}>{el?.title}</h5>
                      </Flex>
                    ))
                  }
                </Box></Box></> : " "}
            </div>
          </div>
          <div className="thirdNavMain">

            <Button backgroundColor={'pink.500'} color={"white"} _hover={{ backgroundColor: "pink.400" }} display={D2} onClick={() => navigate("/signup")}>Login</Button>
            <Button backgroundColor={'pink.500'} color={"white"} _hover={{ backgroundColor: "pink.400" }} display={Display} onClick={logouts}>Logout</Button>
            <div>
              <img
                src="https://img.icons8.com/ios-glyphs/256/hearts.png"
                style={{ width: "25px" }}
                alt=""
              />

            </div>
            <Link to={'/cart'}> <div>
              <img
                src="https://img.icons8.com/windows/256/shopping-bag-full.png"
                style={{ width: "25px" }}
                alt=""
              />



            </div></Link>

          </div>
        </div>
      ) : (
        <MobNav2 setHamburger={setHamburger} hamburger={hamburger} />
      )}
    </div>
  );
};

export default Nav;
