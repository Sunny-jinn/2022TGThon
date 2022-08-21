import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../layout/Button";
import TextInput from "../layout/TextInput";
import axios from "axios";

const StyledForm = styled.form`
  width: 600px;
  margin: 50px auto;
`;
const Styledul = styled.ul`
  border-style: solid;
  border-radius: 15px;
  list-style: none;
  height: 600px;
`;

const Slabel = styled.label`
  width: 120px;
  float: left;
  margin: 22px 0 0 0;
`;

const Sli = styled.li`
  margin: 10px;
`;

const Sh3 = styled.h3`
  text-align: center;
  font-size: 17pt;
`;

function RegisterationForm() {
  const inputIdRef = useRef<HTMLInputElement>(null);
  const inputPwRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputNumberRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    console.log(inputIdRef.current?.value);
    axios.post("/user/register", {
      user: {
        id: inputIdRef.current?.value,
        password: inputPwRef.current?.value,
        name: inputNameRef.current?.value,
        number: inputNumberRef.current?.value,
      },
    });
  };

  const navigate = useNavigate();
  return (
    <StyledForm>
      <Styledul>
        <Sh3>회원가입</Sh3>
        <Sli>
          <Slabel>아이디</Slabel>
          <TextInput type="text" ref={inputIdRef} />
          {/* <Button title="확인" /> */}
        </Sli>
        <Sli>
          <Slabel>비밀번호</Slabel>
          <TextInput type="password" ref={inputPwRef} />
        </Sli>
        <Sli>
          <Slabel>이름</Slabel>
          <TextInput type="text" ref={inputNameRef} />
        </Sli>
        <Sli>
          <Slabel>전화번호</Slabel>
          <TextInput type="text" ref={inputNumberRef} />
        </Sli>
      </Styledul>
      <Button title="가입하기" onClick={clickHandler} />
    </StyledForm>
  );
}

export default RegisterationForm;
