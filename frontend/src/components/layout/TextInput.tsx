import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  font-size: 15pt;
  ${(props) => props.height && `height:${props.height}px;`}
  ${(props) => props.width && `width:${props.width}px;`}
  margin: 15px;
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
  name?: string;
}

const TextInput = React.forwardRef((props: IText, ref: any) => {
  const { height, value, onChange, placeholder, width, type, size, name } =
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
      name={name}
    />
  );
});

export default TextInput;
