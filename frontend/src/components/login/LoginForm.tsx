import React, { useRef } from "react";
import TextInput from "../layout/TextInput";
import Button from "../layout/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledForm = styled.div`
  width: 500px;
  margin: 50px auto;
`;

const Styledfieldset = styled.fieldset`
  border-radius: 15px;
  height: 300px;
`;

const Styledh3 = styled.h3`
  text-align: center;
  font-size: 35px;
  height: 35px;
`;

const Styledul = styled.ul`
  list-style: none;
`;

function LoginForm() {
  const navigate = useNavigate();
  const inputIdRef = useRef<HTMLInputElement>(null);
  const inputPwRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    axios
      .post("/user/login", {
        info: {
          id: inputIdRef.current?.value,
          password: inputPwRef.current?.value,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const registerClickHandler = () => {
    navigate("/registeration");
  };

  return (
    <StyledForm>
      <Styledfieldset>
        <Styledh3>로그인</Styledh3>
        <Styledul>
          <li>
            <label htmlFor="id"></label>
            <TextInput
              placeholder="ID"
              width={370}
              height={45}
              ref={inputIdRef}
            />
          </li>
          <li>
            <label htmlFor="pwd"></label>
            <TextInput
              width={370}
              height={45}
              type="password"
              placeholder="PASSWORD"
              ref={inputPwRef}
            />
          </li>
        </Styledul>
        <span style={{ margin: "140px" }}>
          <Button title="로그인" onClick={clickHandler} />
          <Button title="회원가입" onClick={registerClickHandler} />
        </span>
      </Styledfieldset>
    </StyledForm>
  );
}

export default LoginForm;
