import styled from "styled-components";
import { Button } from "../../components/Button";
import ethIcon from "../../assets/Ethereum-blue.svg";
const StyledCard = styled.div`
  width: 35%;
  height: 167px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;

  /* Text/color2 */

  color: #747475;
  .title {
    width: 100%;
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount, .content {
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262e;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .ammount-wrapper .text {
    height: 60%;
    align-self: flex-end;
  }
  .eth {
    margin-right: 4px;
  }
`;
export const Card = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ? (
        <div className="ammount-wrapper">
          <img className="eth" src={ethIcon} alt="eth-icon"></img>
          <span className="amount">{amount} </span>
          <span className="text">        ETH</span>
        </div>
      ) : (
        <div className="ammount-wrapper">
          <span className="content">{content}</span> 
          <span className="text"> %</span>
        </div>
      )}
      <Button percent={percent} boderColor="#E9E9E9">
        {percent}%
      </Button>
    </StyledCard>
  );
};
