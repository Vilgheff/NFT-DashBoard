import { Button } from "components/Button";
import styled from "styled-components";
import banner from "assets/Banner.svg";
const StyledBanner = styled.div`
  height: 354px;
  border-radius: 12px;
  width: 57%;
  display: flex;
  background: transparent url(${banner}) no-repeat;
  flex-direction: column;
  justify-content: center;
  .text {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    /* or 65px */

    letter-spacing: -0.02em;

    color: #ffffff;
    margin-bottom: 24px;
    margin-left: 60px;
  }
  .button-group {
    display: flex;
    margin-left: 60px;
  }
`;
export const Banner = ({ children, ...rest }) => {
  return (
    <StyledBanner {...rest}>
      <div className="text">{children}</div>
      <div className="button-group">
        <Button>Discover</Button>
        <Button>Create</Button>
      </div>
    </StyledBanner>
  );
};
