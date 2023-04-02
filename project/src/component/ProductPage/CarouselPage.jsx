import React from "react";
import Carousel from "nuka-carousel";

export const CarouselPage = ({ obj }) => {
 

  const img1 = obj["image1"];
  const img2 = obj["image2"];
  const img3 = obj["image3"];
  const img4 = obj["image4"];

 
  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      style={{ width: "100%", height: "241px", margin: "auto" }}
      pauseOnHover={false}
      speed={'500'}
      defaultControlsConfig={{
        nextButtonText: "Custom Next",
        prevButtonText: "Custom Prev",
        nextButtonStyle: { display: "none" },
        prevButtonStyle: { display: "none" },

        pagingDotsStyle: {
          fill: "red",
          margin: "5px",
          
          transform: "translateY(2rem)",
        },
      }}
    >
      <img
        style={{
          width: "100%",
          objectFit: "contain",
          scale: "0.93",
          
          transform: "translateY(-3.7%)",
         transition:'all 3s',
          height: "100%",
        }}
        src={img1}
        alt="img1"
      />
      <img
        style={{
          width: "100%",
          objectFit: "contain",
          scale: "0.93",
          
          transform: "translateY(-3.7%)",
         transition:'all 3s',
          height: "100%",
        }}
        src={img2}
        alt="img2"
      />
      <img
        style={{
          width: "100%",
          objectFit: "contain",
          scale: "0.93",
          
          transform: "translateY(-3.7%)",
         transition:'all 3s',
          height: "100%",
        }}
        src={img3}
        alt="img3"
      />
      <img
        style={{
          width: "100%",
          objectFit: "contain",
          scale: "0.93",
          
          transform: "translateY(-3.7%)",
         transition:'all 3s',
          height: "100%",
        }}
        src={img4}
        alt="img4"
      />
    </Carousel>
  );
};
