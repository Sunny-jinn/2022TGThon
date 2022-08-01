import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import TextInput from "../UI/TextInput";

const StyledForm = styled.form`
width:600px;
margin: 50px auto;`
;

const Styledul = styled.ul`
border-style: solid;
border-radius: 15px;
list-style:none;
height:600px;`;

const Slabel = styled.label`
width:120px;
float: left;
margin: 22px 0 0 0`;

const Sli = styled.li`
margin:10px;
`;

const Sh3 = styled.h3`
text-align:center;
font-size: 17pt`;

function RegisterationForm(props){
  const {}=props;
  const navigate = useNavigate();
  return(
    <StyledForm>
    <Styledul>
      <Sh3>회원가입</Sh3>
      <Sli>
        <Slabel>아이디</Slabel>
        <TextInput margin={15}/>
        <Button title="확인"/>
      </Sli>
      <Sli>
        <Slabel>비밀번호</Slabel>
        <TextInput margin={15} type="password"/>
      </Sli>
      <Sli>
        <Slabel>비밀번호 확인</Slabel>
        <TextInput margin={15} type="password"/>
        <Button title="확인"/>
      </Sli>
      <Sli>
        <Slabel>이름</Slabel>
        <TextInput margin={15}/>
      </Sli>
      <Sli>
        <Slabel>전화번호</Slabel>
        <TextInput margin={15} placeholder="010-xxxx-xxxx"/>
      </Sli>
      <Button title="가입하기" onClick={()=>{navigate("/")}}/>
    </Styledul>    
    </StyledForm>
  );

}

export default RegisterationForm;