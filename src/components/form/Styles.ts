import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background-color: #212121;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 10px 15px;
  border-radius: 0px;

  &::placeholder {
    color: #fff;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  background-color: #212121;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0px;
  padding: 10px 15px;
  height: 150px;

  &::placeholder {
    color: #fff;
  }
`;

export const Contact = styled.div`
  border: 1px solid #212121;
  padding: 20px;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 639px) {
    font-size: 14px;
  }
`;
