import React from "react";
import TextInput from "../layout/TextInput";
import Button from "../layout/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
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

function LoginForm(props) {
  const {} = props;
  const navigate = useNavigate();

  return (
    <StyledForm action="" autocomplete="off">
      <Styledfieldset>
        <Styledh3>로그인</Styledh3>
        <Styledul>
          <li>
            <label for="id"></label>
            <TextInput placeholder="ID" width={370} height={45} />
          </li>
          <li>
            <label for="pwd"></label>
            <TextInput
              width={370}
              height={45}
              type="password"
              size="0"
              placeholder="PASSWORD"
            />
          </li>
        </Styledul>
        <span style={{ margin: "140px" }}>
          <Button title="로그인" />
          <Button
            title="회원가입"
            onClick={() => {
              navigate("/Registeration");
            }}
          />
        </span>
      </Styledfieldset>
    </StyledForm>
  );
}

export default LoginForm;
