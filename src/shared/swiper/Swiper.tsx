import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ImgInter, InterProps } from "../type/type";

export default function SwiperComponent({
  backDefault,
  backFemale,
  backShiny,
  backShinyFemale,
  frontDefault,
  frontFemale,
  frontShiny,
  frontShinyFemale,
}:InterProps) {
  const images = [
    backDefault,
    backFemale,
    backShiny,
    backShinyFemale,
    frontDefault,
    frontFemale,
    frontShiny,
    frontShinyFemale,
  ];

  const uniqueImages = [...new Set(images.filter((image) => image))];

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {uniqueImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Image ${index}`} className="swiperImage" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
