import styled from "styled-components";

export const Form = styled.form`
  max-width: 600px;
  padding: 20px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lavender;
`;

export const Input = styled.input`
  width: 60%;
  margin: 20px auto;
  border-radius: 5px;
  border: none;
  padding: 8px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: gray;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Label = styled.label`
  color: gray;
`;
