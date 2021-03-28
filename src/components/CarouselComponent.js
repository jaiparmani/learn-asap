// import React from "react";
// import { UncontrolledCarousel } from "reactstrap";
// import carousel1 from "../assets/carousel1.jpg";
// import carousel2 from "../assets/carousel2.jpg";
// import carousel3 from "../assets/carousel3.jpg";
// // import "../../node_modules/bootstrap/scss/_carousel.scss";

// const items = [
//   {
//     src: carousel1,
//     // altText: "Slide 1",
//     // caption: "Slide 1",
//     // header: "Slide 1 Header",
//     key: "1",
//   },
//   {
//     src: carousel2,
//     // altText: "Slide 2",
//     // caption: "Slide 2",
//     // header: "Slide 2 Header",
//     key: "2",
//   },
//   {
//     src: carousel3,
//     // altText: "Slide 3",
//     // caption: "Slide 3",
//     // header: "Slide 3 Header",
//     key: "3",
//   },
// ];

// const CarouselComponent = () => {
//   //   const imgStyle = {
//   //     height: "400px",
//   //   };
//   return (
//     <div>
//       {/* <UncontrolledCarousel
//         className="h-10 w-50 m-auto d-block "
//         items={items}
//       /> */}

//       <UncontrolledCarousel
//         items={items}}
//       />
//     </div>
//   );
// };

// export default CarouselComponent;

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const items = [
  {
    src: carousel1,
    // altText: "Slide 1",
    // caption: "Slide 1",
  },
  {
    src: carousel2,
    // altText: "Slide 2",
    // caption: "Slide 2",
  },
  {
    src: carousel3,
    // altText: "Slide 3",
    // caption: "Slide 3",
  },
];

// const imgStyle = {
//   height: "400px",
//   width: "800px",
// };

const CarouselComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <img
          style={{ height: "670px", width: "100%" }}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComponent;
