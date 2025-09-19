import { Link, useParams } from "react-router-dom";
import { Showsingleproduct } from "../../API/products";
import Loading from "./Loading";
import { FaPhoneAlt } from "react-icons/fa";
import Slider from "./Slider";

function Singleproduct() {
  const { i } = useParams<{ i: string }>();
  const { data, isLoading } = Showsingleproduct(i);

  if (isLoading)
    return (
      <div className="text-center">
        <Loading />
      </div>
    );

  return (
    <>
      <div
        className=" grid grid-cols-1  md:grid-cols-2 dark:bg-slate-800 px-6 py-[105px]  bg-zinc-200 dark:text-white duration-700"
        dir=""
      >
        <div>
          <Slider />
        </div>
        <div className=" px-4 dark:text-white flex flex-col justify-start mt-[25px]" dir="rtl">
          <div className="text-red-600 dark:text-white text-[20px] font-black">
            {data?.title}
          </div>
          <div className="text-gray-600 dark:text-blue-500 my-3 line-through decoration-[1.2px]">
            {Number(data?.prediscount).toLocaleString()} تومان
          </div>
          <div className="flex gap-2 dark:text-white text-rose-700 font-bold">
            <div className=" text-[35px] tracking-[0.30rem] font-bold">
              {Number(data?.price).toLocaleString()}
            </div>
            <p className="mt-5 text-[15px]">تومان</p>
          </div>
          <div className="mt-5 text-[14px] dark:text-white text-gray-700 leading-[40px] font-bold">
            {data?.description}
          </div>
          <Link
            to="/Registerpage"
            className="flex  gap-2 w-[100px] px-3 mt-5 dark:bg-blue-600 dark:hover:bg-slate-600 pt-1 rounded-lg text-white h-[30px] duration-700 hover:bg-orange-700  bg-orange-500"
          >
            <div className="text-[14px] mt-[2px] font-black">تماس</div>
            <p>|</p>
            <FaPhoneAlt className="mt-1" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Singleproduct;
