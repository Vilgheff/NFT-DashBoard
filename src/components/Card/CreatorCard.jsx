import { styled } from "styled-components";
import creatoAvt from "assets/CreatorAvt.svg";
import { Button } from "components/Button";

const StyleCreatorCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  margin-left: 24px;
`;

export const CreatorCard = ({ no, avt, name, nameTag, ...rest }) => {
  return (
    <StyleCreatorCard no={no} avt={avt} name={name} nameTag={nameTag} {...rest}>
      <span>{no}</span>
      <span>
        <img src={creatoAvt} alt="creatoAvt" />
      </span>
      <span>
        <div>{name}</div>
        <div>{nameTag}</div>
      </span>
      <Button bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>
    </StyleCreatorCard>
  );
};
