import React from "react";
import Container from "../features/container/Container";
import { useState } from "react";
import Signin from "../features/login/Signin";
import Signup from "../features/login/Signup";
const Login = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const handleInput = () => {
    setHaveAccount(!haveAccount);
  };
  return (
    <div className="mt-40 mb-20">
      <Container>
        {haveAccount ? (
          <Signin handleInput={handleInput} />
        ) : (
          <Signup handleInput={handleInput} />
        )}
      </Container>
    </div>
  );
};

export default Login;
