import React from "react";
import Container from "../features/container/Container";
import Signin from "../features/login/Signin";
const Login = () => {
  return (
    <div className="mt-40 mb-20">
      <Container>
        <Signin />
      </Container>
    </div>
  );
};

export default Login;
