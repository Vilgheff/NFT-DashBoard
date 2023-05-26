import { styled } from "styled-components";
import { ReactComponent as DashboardIcon } from "assets/DashBoard-Icon.svg";
import { ReactComponent as MarketIcon } from "assets/Market-Icon.svg";
import { ReactComponent as ActivevbidsIcon } from "assets/ActiveBids-Icon.svg";
import { ReactComponent as MyportfolioIcon } from "assets/MyPortfolio-Icon.svg";
import { ReactComponent as WalletIcon } from "assets/Wallet-Icon.svg";
import { ReactComponent as FavoritesIcon } from "assets/Favourites-Icon.svg";
import { ReactComponent as HistoryIcon } from "assets/History-Icon.svg";
import { ReactComponent as SettingsIcon } from "assets/Settings-Icon.svg";
import { ReactComponent as ThemechangeIcon } from "assets/Theme-Icon.svg";
import { NavLink } from "react-router-dom";
import { TopUpCard } from "components/Card";
import { Logo } from "components/Logo/Logo";
const StyledSideBar = styled.div`
  background-color: white;
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .text {
    width: 100%;
    margin: 15px 0px 25px 32px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.14em;
    text-transform: uppercase;

    /* Text/color1 */

    color: #27262e;
  }
  .nav,
  .theme {
    width: 100%;
    margin-left: 32px;
  }
  .theme {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 15%;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7a797d;
  }
  path {
  }
`;
const StyleSwitchButton = styled.div`
  display: flex;
  margin-bottom: 25px;
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 56px;
    height: 30px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 5px;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked + label {
    background: #bada55;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 30px;
  }

  // centering
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
const NavItem = ({ path, text, icon }) => {
  return (
    <StyledNavItem>
      {icon}
      <NavLink
        to={path}
        style={({ isActive }) => ({
          color: isActive ? "#5429FF" : "#7A797D",
          stroke: isActive ? "#5429FF" : "#7A797D",
        })}
      >
        {text}
      </NavLink>
    </StyledNavItem>
  );
};
const SwitchButton = () => {
  return (
    <StyleSwitchButton>
      <input type="checkbox" id="switch" />
      <label for="switch">Toggle</label>
    </StyleSwitchButton>
  );
};
export const SideBar = () => {
  return (
    <StyledSideBar>
      <Logo></Logo>
      <div className="nav">
        <NavItem
          text="Dashboard"
          path="/"
          icon={<DashboardIcon></DashboardIcon>}
        ></NavItem>
        <NavItem text="Market" path="/market" icon={<MarketIcon />}></NavItem>
        <NavItem
          text="Active Bids"
          path="/active-bids"
          icon={<ActivevbidsIcon />}
        ></NavItem>
      </div>
      <div className="text">Profile</div>
      <div className="nav">
        <NavItem
          text="My Portfolio"
          path="/my-pỏtfolio"
          icon={<MyportfolioIcon />}
        ></NavItem>
        <NavItem text="Wallet" path="/wallet" icon={<WalletIcon />}></NavItem>
        <NavItem
          text="Favourites"
          path="/favourites"
          icon={<FavoritesIcon />}
        ></NavItem>
        <NavItem
          text="History"
          path="/history"
          icon={<HistoryIcon />}
        ></NavItem>
        <NavItem
          text="Settings"
          path="/settings"
          icon={<SettingsIcon />}
        ></NavItem>
      </div>
      <div className="text">Other</div>
      <div className="theme">
        <NavItem
          text="Light Mode"
          path="/"
          icon={<ThemechangeIcon />}
        ></NavItem>
        <SwitchButton></SwitchButton>
      </div>
      <TopUpCard title="Your Balance" content="1,034.02"></TopUpCard>
    </StyledSideBar>
  );
};
