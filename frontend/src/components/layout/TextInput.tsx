import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  font-size: 15pt;
  margin: 15px;
  ${(props) =>
    props.height &&
    `
height:${props.height}px;
`}
  ${(props) => props.width && `width:${props.width}px;`}
padding: 5px;
`;

interface IText {
  height?: number;
  value?: string;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
  width?: number;
  type?: string;
  size?: number;
  margin?: number;
}

const TextInput = React.forwardRef((props: IText, ref: any) => {
  const { height, value, onChange, placeholder, width, type, size, margin } =
    props;
  return (
    <StyledTextInput
      size={size}
      type={type}
      width={width}
      placeholder={placeholder}
      height={height}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default TextInput;
