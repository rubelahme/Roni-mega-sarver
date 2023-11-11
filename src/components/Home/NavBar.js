import React from "react";
import mega from "../Img/mega.png";
import "./NavBar.css";
import Login from "./Login";
import mega2 from "../Img/mega-2.png";

const NavBar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <div className="p-2 mega">
              <img src={mega} alt="mega" />
            </div>
            <p className="logincopy">Is this your first time posting?</p>
            <button className="btn  StartButton">Start Here</button>
            <p className="logincopy p-3 pb-0">Already have an account?</p>
            {/*  */}
            {/*  */}
            <Login></Login>
            {/*  */}
            {/*  */}
            <div>
              <img src={mega2} alt="mega2" />
            </div>
            <div className="Password">Forgot Password</div>
            <div className="Policies">
              Home | Manage Posts | Contact Us | Policies & Terms
            </div>
            <p className="Copyright">Copyright ©2022 MegaPersonals.eu</p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
