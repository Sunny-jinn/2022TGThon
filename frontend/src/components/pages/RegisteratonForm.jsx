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

function RegisterationForm(props) {
  const inputRef = useRef([]);
  const clickHandler = () => {
    axios.post("/user/register", {
      user: {
        id: inputRef.current[0].value,
        password: inputRef.current[1].value,
        name: inputRef.current[3].value,
        number: inputRef.current[4].value,
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
          <TextInput margin={15} ref={(el) => (inputRef.current[0] = el)} />
          <Button title="확인" />
        </Sli>
        <Sli>
          <Slabel>비밀번호</Slabel>
          <TextInput
            margin={15}
            type="password"
            ref={(el) => (inputRef.current[1] = el)}
          />
        </Sli>
        <Sli>
          <Slabel>비밀번호 확인</Slabel>
          <TextInput
            margin={15}
            type="password"
            ref={(el) => (inputRef.current[2] = el)}
          />
          <Button title="확인" />
        </Sli>
        <Sli>
          <Slabel>이름</Slabel>
          <TextInput margin={15} ref={(el) => (inputRef.current[3] = el)} />
        </Sli>
        <Sli>
          <Slabel>전화번호</Slabel>
          <TextInput
            margin={15}
            placeholder="010-xxxx-xxxx"
            ref={(el) => (inputRef.current[4] = el)}
          />
        </Sli>
      </Styledul>
      <Button title="가입하기" onClick={clickHandler} />
    </StyledForm>
  );
}

export default RegisterationForm;
