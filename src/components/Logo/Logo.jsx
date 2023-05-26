import { styled } from "styled-components";
import logo from "assets/Logo.svg";
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  .logo-text {
    height: 21px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */

    font-feature-settings: "salt" on;

    color: #7a797d;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7a797d;
  }
`;
export const Logo = ({ width, margin, ...rest }) => {
  return (
    <StyledLogo width={width} margin={margin} {...rest}>
      <img src={logo} alt="logo" />
      <div>
        <div className="logo-text"> MyNFT </div>
        <div className="logo-desc">NFT Marketplace</div>
      </div>
    </StyledLogo>
  );
};
Logo.defaultProps = {
    margin: "40px 0px",
  };