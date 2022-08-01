import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
padding: 5px 13px;;
font-size: 16px;
border-width: 1px;
border-radius: 8px;
cursor: pointer;
margin: 5px`;

function Button(props){
  const {title, onClick} =props;

  return <StyledButton onClick={onClick}>{title||"button"}</StyledButton>
}

export default Button;