import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 3px;
  background-color: rgba(32, 12, 209, 0.8);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  border: 0;
  margin-left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #fff;
    color: rgba(32, 12, 209, 0.8);
    box-shadow: inset 0 0 0 3px rgba(32, 12, 209, 0.8);
  }
`;
