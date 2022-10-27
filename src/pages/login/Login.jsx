import React from "react";
import { Container, İnputDiv, İnputForm } from "./Login.styled";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("object");
    navigate("/home");
  };
  return (
    <Container>
      <h1>RECİPE APP</h1>
      <İnputForm action="">
        {/* <İnputDiv>
          <div>
            <h4 className="d-inline m-2">
              <label htmlFor="userName">User name: </label>
            </h4>

            <input type="text" id="userName" required />
          </div>
          <div>
            <h4 className="d-inline m-2">
              <label htmlFor="password">Password: </label>
            </h4>

            <input type="text" id="password" required />
          </div>
        </İnputDiv> */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Giriş yapınız
        </button>
      </İnputForm>
    </Container>
  );
}

export default Login;
