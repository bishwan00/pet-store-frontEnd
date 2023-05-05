import React from "react";
import img from "../../asset/undraw_welcome_cats_thqn 1.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../api/globalSlices/user.slics";
import { MdOutlinePets } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { useLoginMutation } from "../../api/auth";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [login, { data, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);
  };
  useEffect(() => {
    if (!isError && data) {
      localStorage.setItem("access_token", data?.token);
      dispatch(getUser(data?.user));
    }
  }, [data]);
  if (user) return <Navigate to="/" replace />;

  return (
    <div className="flex justify-center items-center">
      <div className="bg-daisy-bush-200 flex flex-col items-center justify-center  md:p-10 p-2  bg-opacity-40 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-25 border-white rounded-md">
        <div>
          <img src={img} alt="image" className="w-60" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-80 items-center justify-center gap-4 mt-10"
        >
          <input
            type="email"
            name="email"
            className="bg-transparent border-b-2 w-52 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
            placeholder="E-MAIL"
            onChange={handleInput}
          />{" "}
          <input
            className="bg-transparent border-b-2 w-52 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
            placeholder="PASSWORD"
            type="password"
            name="password"
            onChange={handleInput}
          />
          <button className="bg-daisy-bush-900  text-white w-52 py-[5px] px-[15px] rounded-md">
            {" "}
            <span className="flex gap-2 justify-center items-center">
              {" "}
              <MdOutlinePets />
              Login
            </span>
          </button>
        </form>
        <div className="mt-5">
          {" "}
          <Link to="/signup">
            <span className="cursor-pointer">Don't have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
