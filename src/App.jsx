import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import slidePic1 from "../src/assets/Pictures/image1.png";
import slidePic2 from "../src/assets/Pictures/image2.png";
import slidePic3 from "../src/assets/Pictures/image3.png";
import movenextbtn from "../src/assets/svgs/moveNext.svg";
import moveprevbtn from "../src/assets/svgs/moveBack.svg";
// import { useState } from "react";

const App = () => {
  // const [activeIndex, setActiveIndex] = useState(2);

  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="parent-div">
      <div className="swiper-main-div">
        <img
          className="custom-prev"
          onClick={handleprevbtn}
          src={moveprevbtn}
          alt="moveprevbtn"
          width="47px"
          height="47px"
        />

        <Swiper
          // onSlideChange={handleSlideChange}
          slidesPerView={3}
          // activeIndex={activeIndex}
          initialSlide={1}
          spaceBetween={-70}
          centeredSlides={true}
          // slidesPerGroupSkip={3}
          // scrollbar={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="outer-div">
              <img
                src={slidePic1}
                alt="this is a slider image"
                // width="309px"
                // height="420px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">
              <img
                src={slidePic2}
                alt="this is a slider image"
                width="309px"
                height="420px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">
              <img
                src={slidePic3}
                alt="this is a slider image"
                // width="309px"
                // height="420px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">
              <img
                src={slidePic1}
                alt="this is a slider image"
                // width="309px"
                // height="420px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">
              <img
                src={slidePic2}
                alt="this is a slider image"
                width="309px"
                height="420px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">
              <img
                src={slidePic3}
                alt="this is a slider image"
                // width="309px"
                // height="420px"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <img
          className="custom-next"
          onClick={handleNextvbtn}
          src={movenextbtn}
          alt="movenextbtn"
          width="47px"
          height="47px"
        />
      </div>
    </div>
  );
};

export default App;
