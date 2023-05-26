import styled from "styled-components";
import greenArrow from "../../assets/GreenArrow.svg";
import redArrow from "../../assets/ReadArrow.svg";
const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: 40px;
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  margin-right: ${(props)=>props.marginright};
  color: ${(props) => props.textColor};
  color: ${(props) => props.fontSize};
  cursor: pointer;
  img {
    margin-right: 0px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = ({
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  percent,
  fontSize,
  marginright,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      marginright = {marginright}
      {...rest}
    >
      {percent && (
        <img src={percent < 0 ? redArrow : greenArrow} alt="arr"></img>
      )}
      {children}
    </StyledButton    >
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  borderRadius: "40px",
  fontSize: 16,
};
