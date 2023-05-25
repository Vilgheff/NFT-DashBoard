import styled from "styled-components";
import searhIcon from "assets/SearchIcon.svg";
import notiIcon from "assets/Notification-Icon.svg";
import avtIcon from "assets/Avt.svg";
const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: #caeae6;
  form {
    color: #555;
    display: flex;
    width: 30%;
    border: none;
    padding: 0;
    border-radius: 35px;
    background-color: white;
    margin-left: 32px;
  }
  input {
    border: 0px solid #555;
    width: 100%;
    padding: 9px 4px 9px 40px;
    border-radius: 35px;
    background: transparent url(${searhIcon}) no-repeat 13px center;
    outline: none;
  }
  .right {
    display: flex;
    height: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
  .noti {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    height: 100%;
    width: 56px;
    margin-right: 24px;
    background: #ffffff;
    /* Border */

    border: 1px solid #e9e9e9;
  }
  .avt {
    border-radius: 50px;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <form>
        <input
          type="search"
          placeholder="Search Item, Collection and Account.."
        />
      </form>

      <div className="right">
        <span className="noti">
          <img src={notiIcon} alt="notiIcon" />
        </span>
        <span>
          <img src={avtIcon} alt="avtIcon" />
        </span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
