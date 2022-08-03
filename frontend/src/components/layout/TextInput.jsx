import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
font-size: 15pt;
${(props)=>
props.height &&
`
height:${props.height}px;
`}
${(props)=>
  props.width &&`width:${props.width}px;`}
padding: 5px;
${(props)=>
  props.margin &&`margin:${props.margin}px;`}
`;

function TextInput(props){
  const {height,value,onChange,placeholder,width,type,size,margin}=props;
  return <StyledTextInput
  margin={margin}
  size={size} 
  type={type} 
  width={width}
  placeholder={placeholder} 
  height={height} 
  value={value} 
  onChange={onChange}/>;
}

export default TextInput;