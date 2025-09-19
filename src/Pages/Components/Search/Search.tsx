import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface FormValues {
  search: string;
}

function Search() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    navigate(`/searchresult?search=${data.search}`);
    reset();
  };

  return (
    <div className="bg-slate-300 dark:bg-slate-700">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-[30%] mx-auto py-2"
      >
        <input
          {...register("search")}
          className="w-full h-10 px-4 py-2 text-sm font-semibold text-center text-gray-700 bg-slate-200 placeholder-rose-300 rounded-lg border-2 border-rose-200 focus:outline-none dark:bg-slate-400 dark:placeholder-slate-600 dark:border-slate-500 sm:text-base md:h-12 md:px-6"
          placeholder=".... جستجوی محصولات"
          autoComplete="off"
        />

        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full duration-700 hover:bg-rose-700 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-700"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
