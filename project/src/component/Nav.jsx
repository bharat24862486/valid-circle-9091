import React from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import "../CSS/Nav.css"
import MobileNav from './NavBar/MobileNav'


// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';





const Nav = () => {
  function handleInput(){
    
  }
  return (
    // <div style={{border:"1px solid black", height:'80px'}}>Nav</div>
    <div>
      {window.screen.width > 1024? <div className='NavMain'>
      <div>
        <img src='https://i.ibb.co/kG5RxHg/StyleHub.png' alt="" style={{ width: "100px" }} />
      </div>
      <div className='firstNavMain'>
      <nav id="nav">
    <ul>
      <li>
        Men
        <div class="subMenu">
          <div id="mobiles" class="submenuList">
            <div>
              <p style={{color:"#EC407A"}}>Top-Wear</p>
              <p>T-Shirt</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>Sweat Shirt</p>
              <p>Jacket</p>
              <p>Sweater</p>
              <p>Suits</p>
              <p>Rain Jacket</p>
              <hr />
              <p style={{color:"#EC407A"}} >Indian & Festive Wear</p>
              <p>Kurta & Kurts's Set</p>
              <p>Sherwani</p>
              <p>Dhotis</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Bottom-Wear</p>
              <p>Jeans</p>
              <p>Casual Trousers</p>
              <p>Formal Trousers</p>
              <p>Shorts</p>
              <p>Tract-Pents & Jooggers</p>
              <hr />
              <p style={{color:"#EC407A"}}>Inner Wear & Sleep Wear</p>
              <p>Briefs & Trunks</p>
              <p>Boxers</p>
              
              <p>Vests</p>
              <p>Spleepwear & Loungewear</p>
              <p>Thermals</p>
              <hr />
              <p style={{color:"#EC407A"}}>Plus Size</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Footwears</p>
              <p>Shoes</p>
              <p>Casual Shoes</p>
              <p>Formal Shoes</p>
              <p>Sport Shoes</p>
              <p>Sneakers</p>
              <p>Sendal & Footwear</p>
              <p>Flip Flops</p>
              <p>Socks</p>
              <hr />
              <p style={{color:"#EC407A"}}>Personal care & Grooming</p>
              <p style={{color:"#EC407A"}}> Sunglasses & Frames</p>
              <p style={{color:"#EC407A"}}>Watches</p>
              {/* <p>Dhotis</p> */}
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Sports & Active-Wear</p>
              <p>Sports Shoes</p>
              <p>Sports Sendals</p>
              <p>Active T-Shirts</p>
              <p>Track Pants</p>
              <p>Tractsuits</p>
              <p>Jacktes</p>
              <p>Accessories</p>
              <p>Swimming Suits</p>
              <hr />
              <p style={{color:"#EC407A"}}>Gadgets</p>
              <p>Fitness Gadgets</p>
              <p>Headphones</p>
              <p>Speakers</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Fashion Accessories</p>
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
              <p style={{color:"#EC407A"}}>Bag & Bag-Packs</p>
              <p style={{color:"#EC407A"}}>Luggage & Trolly </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        Women
        <div class="subMenu">
          <div id="furniture" class="submenuList">
          <div>
              <p style={{color:"#EC407A"}}>Indian & Fashion Wear</p>
              <p>Kurtas & Suits</p>
              <p>Kurtis</p>
              <p>Sarees</p>
              <p>Ethic Wear</p>
              <p>Legging, Selvars</p>
              <p>Skirts</p>
              <p>Plazos</p>
              <p>Jacket</p>
              <hr />
              <p style={{color:"#EC407A"}} >Belt, Scarves & more</p>
              <p style={{color:"#EC407A"}}>Watches & Wearables</p>
              
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Western Wear</p>
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
              <p style={{color:"#EC407A"}}>Plus Size</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Footwears</p>
              <p>Shoes</p>
              <p>Casual Shoes</p>
              <p>Formal Shoes</p>
              <p>Sport Shoes</p>
              <p>Sneakers</p>
              <p>Sendal & Footwear</p>
              <p>Flip Flops</p>
              <p>Socks</p>
              <hr />
              <p style={{color:"#EC407A"}}>Personal care & Grooming</p>
              <p style={{color:"#EC407A"}}> Sunglasses & Frames</p>
              <p style={{color:"#EC407A"}}>Watches</p>
              {/* <p>Dhotis</p> */}
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Sports & Active-Wear</p>
              <p>Sports Shoes</p>
              <p>Sports Sendals</p>
              <p>Active T-Shirts</p>
              <p>Track Pants</p>
              <p>Tractsuits</p>
              <p>Jacktes</p>
              <p>Accessories</p>
              <p>Swimming Suits</p>
              <hr />
              <p style={{color:"#EC407A"}}>Gadgets</p>
              <p>Fitness Gadgets</p>
              <p>Headphones</p>
              <p>Speakers</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Fashion Accessories</p>
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
              <p style={{color:"#EC407A"}}>Bag & Bag-Packs</p>
              <p style={{color:"#EC407A"}}>Luggage & Trolly </p>
            </div>

          </div>
        </div>
      </li>
      <li>
        Kids
        <div class="subMenu">
          <div id="electronics" class="submenuList">
          <div>
              <p style={{color:"#EC407A"}}>Top-Wear</p>
              <p>T-Shirt</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>Sweat Shirt</p>
              <p>Jacket</p>
              <p>Sweater</p>
              <p>Suits</p>
              <p>Rain Jacket</p>
              <hr />
              <p style={{color:"#EC407A"}} >Indian & Festive Wear</p>
              <p>Kurta & Kurts's Set</p>
              <p>Sherwani</p>
              <p>Dhotis</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Bottom-Wear</p>
              <p>Jeans</p>
              <p>Casual Trousers</p>
              <p>Formal Trousers</p>
              <p>Shorts</p>
              <p>Tract-Pents & Jooggers</p>
              <hr />
              <p style={{color:"#EC407A"}}>Inner Wear & Sleep Wear</p>
              <p>Briefs & Trunks</p>
              <p>Boxers</p>
              
              <p>Vests</p>
              <p>Spleepwear & Loungewear</p>
              <p>Thermals</p>
              <hr />
              <p style={{color:"#EC407A"}}>Plus Size</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Footwears</p>
              <p>Shoes</p>
              <p>Casual Shoes</p>
              <p>Formal Shoes</p>
              <p>Sport Shoes</p>
              <p>Sneakers</p>
              <p>Sendal & Footwear</p>
              <p>Flip Flops</p>
              <p>Socks</p>
              <hr />
              <p style={{color:"#EC407A"}}>Personal care & Grooming</p>
              <p style={{color:"#EC407A"}}> Sunglasses & Frames</p>
              <p style={{color:"#EC407A"}}>Watches</p>
              {/* <p>Dhotis</p> */}
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Sports & Active-Wear</p>
              <p>Sports Shoes</p>
              <p>Sports Sendals</p>
              <p>Active T-Shirts</p>
              <p>Track Pants</p>
              <p>Tractsuits</p>
              <p>Jacktes</p>
              <p>Accessories</p>
              <p>Swimming Suits</p>
              <hr />
              <p style={{color:"#EC407A"}}>Gadgets</p>
              <p>Fitness Gadgets</p>
              <p>Headphones</p>
              <p>Speakers</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Fashion Accessories</p>
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
              <p style={{color:"#EC407A"}}>Bag & Bag-Packs</p>
              <p style={{color:"#EC407A"}}>Luggage & Trolly </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        Home & Living
        <div class="subMenu">
          <div id="home_appliances" class="submenuList">
          <div>
              <p style={{color:"#EC407A"}}>Top-Wear</p>
              <p>T-Shirt</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>Sweat Shirt</p>
              <p>Jacket</p>
              <p>Sweater</p>
              <p>Suits</p>
              <p>Rain Jacket</p>
              <hr />
              <p style={{color:"#EC407A"}} >Indian & Festive Wear</p>
              <p>Kurta & Kurts's Set</p>
              <p>Sherwani</p>
              <p>Dhotis</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Bottom-Wear</p>
              <p>Jeans</p>
              <p>Casual Trousers</p>
              <p>Formal Trousers</p>
              <p>Shorts</p>
              <p>Tract-Pents & Jooggers</p>
              <hr />
              <p style={{color:"#EC407A"}}>Inner Wear & Sleep Wear</p>
              <p>Briefs & Trunks</p>
              <p>Boxers</p>
              
              <p>Vests</p>
              <p>Spleepwear & Loungewear</p>
              <p>Thermals</p>
              <hr />
              <p style={{color:"#EC407A"}}>Plus Size</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Footwears</p>
              <p>Shoes</p>
              <p>Casual Shoes</p>
              <p>Formal Shoes</p>
              <p>Sport Shoes</p>
              <p>Sneakers</p>
              <p>Sendal & Footwear</p>
              <p>Flip Flops</p>
              <p>Socks</p>
              <hr />
              <p style={{color:"#EC407A"}}>Personal care & Grooming</p>
              <p style={{color:"#EC407A"}}> Sunglasses & Frames</p>
              <p style={{color:"#EC407A"}}>Watches</p>
              {/* <p>Dhotis</p> */}
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Sports & Active-Wear</p>
              <p>Sports Shoes</p>
              <p>Sports Sendals</p>
              <p>Active T-Shirts</p>
              <p>Track Pants</p>
              <p>Tractsuits</p>
              <p>Jacktes</p>
              <p>Accessories</p>
              <p>Swimming Suits</p>
              <hr />
              <p style={{color:"#EC407A"}}>Gadgets</p>
              <p>Fitness Gadgets</p>
              <p>Headphones</p>
              <p>Speakers</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Fashion Accessories</p>
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
              <p style={{color:"#EC407A"}}>Bag & Bag-Packs</p>
              <p style={{color:"#EC407A"}}>Luggage & Trolly </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        Beauty
        <div class="subMenu">
          <div id="kids_toys" class="submenuList">
          <div>
              <p style={{color:"#EC407A"}}>Top-Wear</p>
              <p>T-Shirt</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>Sweat Shirt</p>
              <p>Jacket</p>
              <p>Sweater</p>
              <p>Suits</p>
              <p>Rain Jacket</p>
              <hr />
              <p style={{color:"#EC407A"}} >Indian & Festive Wear</p>
              <p>Kurta & Kurts's Set</p>
              <p>Sherwani</p>
              <p>Dhotis</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Bottom-Wear</p>
              <p>Jeans</p>
              <p>Casual Trousers</p>
              <p>Formal Trousers</p>
              <p>Shorts</p>
              <p>Tract-Pents & Jooggers</p>
              <hr />
              <p style={{color:"#EC407A"}}>Inner Wear & Sleep Wear</p>
              <p>Briefs & Trunks</p>
              <p>Boxers</p>
              
              <p>Vests</p>
              <p>Spleepwear & Loungewear</p>
              <p>Thermals</p>
              <hr />
              <p style={{color:"#EC407A"}}>Plus Size</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Footwears</p>
              <p>Shoes</p>
              <p>Casual Shoes</p>
              <p>Formal Shoes</p>
              <p>Sport Shoes</p>
              <p>Sneakers</p>
              <p>Sendal & Footwear</p>
              <p>Flip Flops</p>
              <p>Socks</p>
              <hr />
              <p style={{color:"#EC407A"}}>Personal care & Grooming</p>
              <p style={{color:"#EC407A"}}> Sunglasses & Frames</p>
              <p style={{color:"#EC407A"}}>Watches</p>
              {/* <p>Dhotis</p> */}
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Sports & Active-Wear</p>
              <p>Sports Shoes</p>
              <p>Sports Sendals</p>
              <p>Active T-Shirts</p>
              <p>Track Pants</p>
              <p>Tractsuits</p>
              <p>Jacktes</p>
              <p>Accessories</p>
              <p>Swimming Suits</p>
              <hr />
              <p style={{color:"#EC407A"}}>Gadgets</p>
              <p>Fitness Gadgets</p>
              <p>Headphones</p>
              <p>Speakers</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Fashion Accessories</p>
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
              <p style={{color:"#EC407A"}}>Bag & Bag-Packs</p>
              <p style={{color:"#EC407A"}}>Luggage & Trolly </p>
            </div>
          </div>
        </div>
      </li>
      <li>
        Studio
        <div class="subMenu">
          <div id="sports_fashion" class="submenuList">
          <div>
              <p style={{color:"#EC407A"}}>Top-Wear</p>
              <p>T-Shirt</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
              <p>Sweat Shirt</p>
              <p>Jacket</p>
              <p>Sweater</p>
              <p>Suits</p>
              <p>Rain Jacket</p>
              <hr />
              <p style={{color:"#EC407A"}} >Indian & Festive Wear</p>
              <p>Kurta & Kurts's Set</p>
              <p>Sherwani</p>
              <p>Dhotis</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Bottom-Wear</p>
              <p>Jeans</p>
              <p>Casual Trousers</p>
              <p>Formal Trousers</p>
              <p>Shorts</p>
              <p>Tract-Pents & Jooggers</p>
              <hr />
              <p style={{color:"#EC407A"}}>Inner Wear & Sleep Wear</p>
              <p>Briefs & Trunks</p>
              <p>Boxers</p>
              
              <p>Vests</p>
              <p>Spleepwear & Loungewear</p>
              <p>Thermals</p>
              <hr />
              <p style={{color:"#EC407A"}}>Plus Size</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Footwears</p>
              <p>Shoes</p>
              <p>Casual Shoes</p>
              <p>Formal Shoes</p>
              <p>Sport Shoes</p>
              <p>Sneakers</p>
              <p>Sendal & Footwear</p>
              <p>Flip Flops</p>
              <p>Socks</p>
              <hr />
              <p style={{color:"#EC407A"}}>Personal care & Grooming</p>
              <p style={{color:"#EC407A"}}> Sunglasses & Frames</p>
              <p style={{color:"#EC407A"}}>Watches</p>
              {/* <p>Dhotis</p> */}
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Sports & Active-Wear</p>
              <p>Sports Shoes</p>
              <p>Sports Sendals</p>
              <p>Active T-Shirts</p>
              <p>Track Pants</p>
              <p>Tractsuits</p>
              <p>Jacktes</p>
              <p>Accessories</p>
              <p>Swimming Suits</p>
              <hr />
              <p style={{color:"#EC407A"}}>Gadgets</p>
              <p>Fitness Gadgets</p>
              <p>Headphones</p>
              <p>Speakers</p>
            </div>
            <div>
              <p style={{color:"#EC407A"}}>Fashion Accessories</p>
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
              <p style={{color:"#EC407A"}}>Bag & Bag-Packs</p>
              <p style={{color:"#EC407A"}}>Luggage & Trolly </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
      </div>
      <div className='secondNavMain'>
        <div>
        
        <input type="text"  onChange={handleInput} />
        <span><SearchIcon /></span>
        </div>


      </div>
      <div className='thirdNavMain'>
        <div>
          <img src="https://img.icons8.com/ios/256/gender-neutral-user--v1.png" style={{ width: "25px" }} alt="" />
          <p>Profile</p>
        </div>
        <div>
          <img src="https://img.icons8.com/ios-glyphs/256/hearts.png" style={{ width: "25px" }} alt="" />
          <p>Wishlist</p>
        </div>
        <div>
          <img src="https://img.icons8.com/windows/256/shopping-bag-full.png" style={{ width: "25px" }} alt="" />
          <p>Bag</p>
        </div>



      </div>
    </div> : <MobileNav />}
    </div>

  )
}

export default Nav