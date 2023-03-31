import React from "react";
import Carousel from "nuka-carousel";

export const CarouselPage = ({ arr }) => {
  const img1 = arr[0]["img1"];
  const img2 = arr[1]["img2"];
  const img3 = arr[2]["img3"];
  const img4 = arr[3]["img4"];

  // console.log('arrCC',img1, img2 , img3, img4);

  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      style={{ width: "100%", height: "241px", margin: "auto" }}
      pauseOnHover={false}
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
