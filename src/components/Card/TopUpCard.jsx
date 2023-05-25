import styled from "styled-components";
import { TopUpButton } from "components/Button";
import ethIcon from "assets/Ethereum-topup.svg";
import topupIcon from "assets/TopUpButtonIcon.svg";
import grayIcon from "assets/GrayArrow.svg";
const StyleTopUpCard = styled.div`
  width: 228px;
  height: 220px;
  background: linear-gradient(228.89deg, #5429ff 1.12%, #bbaaff 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 108px;
  .title {
    height: 16px;
    background-color: transparent;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #e0dee6;
  }
  .content {
    height: 39px;

    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    color: #ffffff;
  }
`;
export const TopUpCard = ({ title, content }) => {
  return (
    <StyleTopUpCard>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <span>
        <img src={ethIcon} alt="ethIcon" />
        ETH
      </span>
      <TopUpButton>
        <img src={topupIcon} alt="topupIcon" />
        Top Up Balance
        <img src={grayIcon} alt="grayIcon" />
      </TopUpButton>
    </StyleTopUpCard>
  );
};
