import { useProducts } from "../../API/products";
import Loading from "./Loading";
import Products from "./Products";

function Productitem() {
  const { data, isLoading } = useProducts();
  if (isLoading) {
    return (
      <div className="text-center pt-5">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="products">
        {data &&
          data.map((elem) => {
            return <Products key={elem.i} elem={elem} />;
          })}
      </div>
    </>
  );
}

export default Productitem;




