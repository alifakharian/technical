import { Link } from "react-router-dom";
import { Tproduct } from "../../API/products";

interface Iproducts {
  elem: Tproduct;
}

function Products({ elem }: Iproducts) {
  return (
    <Link className="" to={`/product/${elem.i}`}>
      <div
        className=" dark:border-blue-700 rounded-2xl border-[2px] border-slate-400"
        dir="rtl"
      >
        <img
          src={elem.image}
          className="w-[150px] rounded-full dark:mt-2 dark:border-[2.5px] dark:border-blue-600 mx-auto"
        />
        <h1 className="text-red-700 text-start mr-3 dark:text-purple-400 text-[15px] my-1 font-bold">
          {elem.name}
        </h1>

        <div className="text-right font-bold dark:text-white mr-2 leading-6 h-[70px]  px-3  text-[11.5px]">
          {elem.title}
        </div>
        <div className="text-gray-400 ml-6 line-through decoration-[1.25px] text-left">
          {Number(elem.prediscount).toLocaleString("fa-IR")}
        </div>
        <div className="flex justify-between px-2 flex-row-reverse">
          <div className="text-left font-bold text-rose-600 dark:text-blue-600 pl-3 ml-1">
            {Number(elem.price).toLocaleString("fa-IR")} تومان
          </div>
          <div className="bg-rose-600 dark:bg-gray-600 text-white rounded-full p-1 mb-3">
            {elem.discount}
          </div>
        </div>
        <div className="text-center dark:bg-gray-600 dark:hover:bg-gray-800 p-1 rounded-b-xl text-white bg-rose-700 hover:bg-rose-900 duration-700">
          {elem.showmore}
        </div>
      </div>
    </Link>
  );
}

export default Products;
