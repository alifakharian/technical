import { useForm } from "react-hook-form";
import img from "../../image/1.jpg";
import Swal from "sweetalert2";
type FormValues = {
  phone: string;
  email: string;
  name: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const send = (data: FormValues) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${data.name} عزیز خوش آمدید`,
      showConfirmButton: true,
      timer: 3500,
    });
  };
  return (
    <>
      <div
        className="grid grid-cols-1 px-3 xl:grid-cols-2 gap-6 bg-zinc-200  dark:bg-slate-700  pt-[80px] pb-[177px]"
        dir="rtl"
      >
        {/* تصویر */}
        <div className="flex justify-center items-center">
          <img
            src={img}
            alt="register"
            className="rounded-xl w-full max-w-[600px] h-auto object-cover"
          />
        </div>

        {/* فرم */}
        <form
          onSubmit={handleSubmit(send)}
          className="flex justify-center items-center"
        >
          <div className="dark:bg-slate-900 flex flex-col gap-y-[45px] bg-slate-400 border-[2.3px] border-zinc-700 dark:border-gray-900 rounded-xl w-full max-w-md text-center p-5">
            {/* نام */}
            <div className="flex flex-col gap-3 mt-5">
              <label className="text-sm font-bold text-white">
                نام و نام خانوادگی
              </label>
              <input
                {...register("name", {
                  required: "نام و نام خانوادگی الزامی است",
                })}
                className="input p-2 rounded-lg"
                type="text"
                placeholder="علی فخاریان"
              />
              {errors.name && (
                <p className="errorinput">{errors.name.message}</p>
              )}
            </div>

            {/* شماره تماس */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-white">
                شماره تماس :
              </label>
              <input
                {...register("phone", {
                  required: "شماره تلفن الزامی است",
                  pattern: {
                    value: /^09\d{9}$/,
                    message: "شماره باید با 09 شروع شود و 11 رقم باشد",
                  },
                  maxLength: { value: 11, message: "شماره باید 11 رقم باشد" },
                  minLength: { value: 11, message: "شماره باید 11 رقم باشد" },
                })}
                placeholder="09195357038"
                className="input p-2 rounded-lg"
                type="text"
              />
              {errors.phone && (
                <p className="errorinput">{errors.phone.message}</p>
              )}
            </div>

            {/* ایمیل */}
            <div className="flex flex-col gap-3 ">
              <label className="text-sm font-bold text-white">ایمیل :</label>
              <input
                className="input p-2 rounded-lg"
                type="text"
                placeholder="fakharian@gmail.com"
                {...register("email", {
                  required: "ایمیل الزامی است",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "ایمیل معتبر وارد کنید",
                  },
                })}
              />
              <p className="errorinput"> {errors.email?.message}</p>
            </div>

            {/* دکمه ثبت */}
            <button className="buttn">
              ثبت
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
