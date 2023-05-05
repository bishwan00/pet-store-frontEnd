import React, { useState, useEffect } from "react";
import img from "../../asset/undraw_step_to_the_sun_nxqq.svg";
import { MdOutlinePets } from "react-icons/md";
const strengthLabels = ["weak", "medium", "strong"];
import "./signup.css";
import Container from "../container/Container";
import { Link, Navigate } from "react-router-dom";
import { useSignupMutation } from "../../api/auth";
import Error from "../error/Error";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../api/globalSlices/user.slics";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    gender: "",
  });
  const [errors, setErrors] = useState([]);
  const [signUp, { data: response, isError }] = useSignupMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleInpute = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [strength, setStrength] = useState("");
  const handleChange = (event) => {
    getStrength(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.confirmPassword !== data.password) {
      setErrors([...errors, "passwords didn't match"]);
      return;
    }

    signUp(data);
  };
  const getStrength = (password) => {
    let strengthIndicator = -1,
      upper = false,
      lower = false,
      numbers = false;
    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }
    setStrength(strengthLabels[strengthIndicator]);
  };
  useEffect(() => {
    if (!isError || response) {
      localStorage.setItem("access_token", response?.data.token);
      dispatch(getUser(response?.data.user));
      console.log(response?.data);
    }
  }, [response]);

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="mt-40 mb-20">
      <Container>
        <div className="flex justify-center items-center">
          <div className=" flex flex-col md:flex-row items-center bg-daisy-bush-200 justify-between lg:w-[55%] w-[95%]   bg-opacity-40 shadow-lg backdrop-blur-md backdrop-filter border border-opacity-25 border-white rounded-md">
            <div className=" md:w-96">
              <img src={img} alt="image" className="" />
            </div>
            <div className="bg-white flex justify-center md:w-auto w-full md:mt-0 mt-6 md:ml-6">
              <form
                onSubmit={handleSubmit}
                className="flex md:w-96 w-full pt-10 md:pt-10 md:flex-row  flex-col flex-wrap  items-center justify-center py-5 gap-y-6 gap-4 "
              >
                {errors.length > 0 && <Error messages={errors} />}
                <input
                  type="text"
                  name="firstName"
                  onChange={handleInpute}
                  value={data.firstName}
                  className="bg-transparent border-b-2 md:w-48 w-80 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="FIRST-NAME"
                />{" "}
                <input
                  className="bg-transparent border-b-2 md:w-44 w-80 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="LAST-NAME"
                  type="text"
                  name="lastName"
                  onChange={handleInpute}
                  value={data.lastName}
                />{" "}
                <input
                  type="text"
                  className="bg-transparent border-b-2 md:w-96 w-80 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="USERNAME"
                  name="userName"
                  onChange={handleInpute}
                  value={data.userName}
                />{" "}
                <input
                  type="email"
                  className="bg-transparent border-b-2 md:w-96 w-80 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="E-MAIL"
                  name="email"
                  onChange={handleInpute}
                  value={data.email}
                />{" "}
                <input
                  className="bg-transparent border-b-2 w-80 md:w-96 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="PHONE-NUMBER"
                  type="text"
                  name="phoneNumber"
                  onChange={handleInpute}
                  value={data.phoneNumber}
                />{" "}
                <select
                  name="gender"
                  onChange={handleInpute}
                  value={data.gender}
                  className="bg-transparent  border-b-2 w-80 md:w-96 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                >
                  <option className="bg-transparent" value="gender">
                    Gender
                  </option>
                  <option className="bg-transparent" value="male">
                    Male
                  </option>
                  <option className="bg-transparent" value="female">
                    Female
                  </option>
                </select>
                <input
                  name="password"
                  spellCheck="false"
                  type="password"
                  className="bg-transparent border-b-2 w-80 md:w-96 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="PASSWORD"
                  onChange={handleChange}
                  value={data.password}
                />{" "}
                <div className={`bars ${strength} md:w-auto w-80 my-0`}>
                  <div></div>
                </div>
                <div className="strength">
                  {strength && <>{strength} password</>}
                </div>
                <input
                  className="bg-transparent border-b-2 md:w-96 w-80 rounded-sm mt-0 outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
                  placeholder="CONFIRM-PASSWORD"
                  type="password"
                  name="confirmPassword"
                  onChange={handleInpute}
                  value={data.confirmPassword}
                />{" "}
                <button className="bg-daisy-bush-900 w-80  text-white md:w-56 py-[5px] px-[15px] rounded-md">
                  {" "}
                  <span className="flex gap-2 justify-center items-center">
                    {" "}
                    <MdOutlinePets />
                    Signup
                  </span>
                </button>
                <Link to="/signin">
                  <span className="md:mt-5 cursor-pointer">
                    {" "}
                    Already have an account?
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
