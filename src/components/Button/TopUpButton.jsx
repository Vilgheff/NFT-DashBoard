import styled from "styled-components";
const StyledButton = styled.button`
  height: 49px;
  width: 80%;
  background: #ffffff;
  border-radius: 12px;
  border: 0px transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const TopUpButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
