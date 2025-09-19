import { useLocation } from "react-router-dom";
import { useProductsByName } from "../../API/products";
import Loading from "../Products/Loading";
import Products from "../Products/Products";

function Searchresult() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("search") || "";

  const { data, isLoading } = useProductsByName(name);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="grid  dark:bg-slate-800 p-4  gap-4 smd:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {data && data.length > 0 ? (
          data.map((elem) => <Products elem={elem} key={elem.i} />)
        ) : (
          <div className="text-rose-600 font-black dark:text-gray-200">
            !!محصول مورد نظر یافت نشد
          </div>
        )}
      </div>
    </>
  );
}

export default Searchresult;
