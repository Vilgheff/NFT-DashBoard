import { Button } from "components/Button";
import styled from "styled-components";
import banner from "assets/Banner.svg";
const StyledBanner = styled.div`
  height: 500px;
  border-radius: 12px;
  width: 60%;
  margin-left: 32px;
  display: flex;

  background: linear-gradient(
    75.33deg,
    rgba(0, 0, 0, 0.2) -10.41%,
    rgba(0, 0, 0, 0) 62.93%
  );
  background-image: url(${banner});
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .text {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    /* or 65px */
    width: 50%;
    letter-spacing: -0.02em;
    text-align: left;
    color: #ffffff;
    margin-bottom: 24px;
    margin-left: 60px;
  }
  .button-group {
    display: flex;
    margin-left: 60px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;
export const Banner = ({ children, ...rest }) => {
  return (
    <StyledBanner {...rest}>
      <div className="text">{children}</div>
      <div className="button-group">
        <Button textColor="#5429FF" marginright="12px">
          Discover
        </Button>
        <Button bgColor="transparent" textColor="white" boderColor="white">
          Create
        </Button>
      </div>
    </StyledBanner>
  );
};
