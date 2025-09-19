import { useParams } from "react-router-dom";
import { Showsingleproduct, useProducts } from "../../API/products";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "../../../../node_modules/swiper/swiper.css";
import { useState } from "react";

function Slider() {
  const { i } = useParams<{ i: string }>();
  const { data: singleproduct, isLoading } = Showsingleproduct(i);
  const { data: products } = useProducts();
  const [mainimg, setmainimg] = useState(singleproduct?.image);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <img
        src={mainimg}
        className="rounded-full dark:border-blue-600 border-[3.4px] mx-auto border-rose-600 size-[270px]"
        alt={singleproduct?.title}
      />

      {/* start slider smallimages */}
      <div className=" p-5 dark:bg-slate-600 relative bg-stone-300 rounded-lg m-5">
        <Swiper
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=""
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            495: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            345: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            100: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={mainimg}
              className="rounded-full dark:border-blue-600 border-[3.4px] border-rose-600 w-[120px] h-[120px]"
              alt={singleproduct?.title}
            />
          </SwiperSlide>
          {products &&
            products.map((elem, index) => (
              <SwiperSlide key={index}>
                <img
                  className="rounded-full dark:border-blue-600 border-[3.4px] border-rose-600 w-[120px] h-[120px]"
                  src={elem.image}
                  alt={`thumb-${index}`}
                  onClick={() => setmainimg(elem.image)}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="prev absolute font-black text-[30px] top-[45%] left-2 z-10 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center cursor-pointer dark:bg-blue-600">
          <GrFormPrevious />
        </div>
        <div className="next absolute top-[45%] text-[30px] right-2 z-10 w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center cursor-pointer dark:bg-blue-600">
          <MdNavigateNext />
        </div>
      </div>
    </>
  );
}

export default Slider;
