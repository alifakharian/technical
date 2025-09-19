import { useProducts } from "../../API/products";
import Loading from "../Products/Loading";
import Products from "../Products/Products";

function Home() {
  const { data, isLoading } = useProducts();
  const featuredProjects = data?.slice(5, 8); // فقط 3 پروژه اول
  if (isLoading) return <Loading />;
  return (
    <div className="bg-zinc-200 dark:bg-slate-800">
      <h1 className="text-3xl dark:text-white text-center font-bold py-[55px]  text-rose-600 mb-4">
        ماموریت ما طراحی فضاهای مدرن است
      </h1>
      <p className="text-gray-700 text-center dark:text-gray-300 mb-8">
        ما فضاهایی خلق می‌کنیم که مدرن، کارآمد و جذاب باشند.
      </p>

      <h2 className="text-xl font-semibold text-center dark:text-white mb-4">
        پروژه‌های شاخص
      </h2>
      <div className="flex justify-center gap-[70px] pb-[60px] flex-wrap">
        {featuredProjects &&
          featuredProjects.map((elem) => {
            return <Products key={elem.i} elem={elem} />;
          })}
      </div>
    </div>
  );
}

export default Home;
