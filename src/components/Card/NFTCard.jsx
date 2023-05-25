import styled from "styled-components";
import nftPic from "assets/MonkeyNFT.jpg";
import avtPic from "assets/Avt.svg";
import ethIcon from "assets/Ethereum.svg";
const StyledNFTCard = styled.div`
  width: 348px;
  height: 364px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  .nft-banner {
    height: 196px;
    width: 90%;
  }
  .nft-banner img {
    height: 100%;
    width: 100%;
    border-radius: 12px;
  }
  .text-content {
    height: 110px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    font-feature-settings: "salt" on;

    /* Text/color2 */

    color: #747475;
  }
  .text-content-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .text-content-right{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  .text-content-left-name {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;

    /* Text/color1 */

    color: #27262e;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .imgtag {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-feature-settings: "salt" on;
    color: #747475;
  }
  img {
    height: 28px;
    width: 28px;
  }
  .prices{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const NFTCard = ({
  imgSrc,
  avtSrc,
  name,
  nameTag,
  curLikes,
  curBid,
  children,
  ...rest
}) => {
  return (
    <StyledNFTCard
      imgSrc={imgSrc}
      avtSrc={avtSrc}
      name={name}
      nameTag={nameTag}
      curLikes={curLikes}
      curBid={curBid}
      {...rest}
    >
      <div className="nft-banner">
        <img src={nftPic} alt="" />
      </div>
      <div className="text-content">
        <div className="text-content-left">
          <span className="text-content-left-name">{name}</span>
          <span className="imgtag">
            <img src={avtPic} alt="avtPic" /> {nameTag}{" "}
          </span>
          <span>Current Bid</span>
        </div>
        <div className="text-content-right">
          <span>{curLikes}K Likes</span>
          <span className="prices">
            <img src={ethIcon} alt="ethIcon" />
            {curBid} ETH
          </span>
        </div>
      </div>
      {children}
    </StyledNFTCard>
  );
};
