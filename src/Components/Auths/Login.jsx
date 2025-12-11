import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

import Input from "./../../Components/UI/Input/Input";
import Button from "./../../Components/UI/Button/Button";
import Checkbox from "./../UI/Checkbox/Checkbox";

import { User, Lock } from "lucide-react";

const schema = yup.object({
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .min(3, "حداقل ۳ کاراکتر")
    .max(20, "حداکثر ۲۰ کاراکتر")
    .matches(/^[a-zA-Z0-9_]+$/, "فقط حروف و عدد انگلیسی مجاز است"),

  password: yup
    .string()
    .required("رمز عبور الزامی است")
    .min(6, "حداقل ۶ کاراکتر")
    .max(12, "حداکثر ۱۲ کاراکتر")
    .matches(/[A-Z]/, "حداقل یک حرف بزرگ داشته باشد")
    .matches(/[a-z]/, "حداقل یک حرف کوچک داشته باشد")
    .matches(/[0-9]/, "حداقل یک عدد داشته باشد")
    .matches(/[!@#$%^&*()_+=-]/, "حداقل یک کاراکتر خاص داشته باشد")
    .matches(/^[A-Za-z0-9!@#$%^&*()_+=-]+$/, "فقط کاراکترهای انگلیسی مجاز است"),
});

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const usernameValue = watch("username");
  const passwordValue = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex flex-col justify-center items-start gap-4 p-10 rtl"
    >
      <p className="w-full text-2xl font-extrabold text-center mb-3">خوش آمدید</p>

      <div className="w-full relative">

        <Input
          type="text"
          icon={User}
          placeholder="نام کاربری..."
          {...register("username")}
          error={errors.username}
          value={usernameValue.trim()}
          maxLength={20}
        />
      </div>

      <div className="w-full relative">
        <Input
          type="password"
          icon={Lock}
          placeholder="رمز عبور..."
          {...register("password")}
          error={errors.password}
          value={passwordValue}
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <Link to="#" className="text-inherit">فراموشی رمز؟</Link>
        <Checkbox label="مرا به خاطر بسپار" />
      </div>

      <div className="mt-3 w-full flex justify-center items-center">
        <Button className="bg-primary-active-light" type="submit">ورود</Button>
      </div>
    </form>
  );
}


export default Login;