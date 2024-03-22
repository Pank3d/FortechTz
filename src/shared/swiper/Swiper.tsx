import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { ImgInter } from "../type/type";

export default function SwiperComponent({
  back_default,
  back_female,
  back_shiny,
  back_shiny_female,
  front_default,
  front_female,
  front_shiny,
  front_shiny_female,
}: ImgInter) {
  const images = [
    front_default,
    front_female,
    front_shiny,
    front_shiny_female,
    back_default,
    back_female,
    back_shiny,
    back_shiny_female,
  ];

  const uniqueImages = [...new Set(images.filter((image) => image))];
  console.log(uniqueImages)

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {uniqueImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
