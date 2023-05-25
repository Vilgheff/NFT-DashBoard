import { Button } from "components/Button";
import { Card, CreatorCard, NFTCard } from "components/Card";
import { styled } from "styled-components";
import { PrimaryLayout } from "components/Layout";
import { Banner } from "components/Banner/Banner";

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }
  .card-wrapper {
    width: 35%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    align-content: space-around;
  }
`;
const WholeContent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
  align-items: flex-start;
`;
const NFTWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const MainContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;

  .trending {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    display: flex;
    width: 40%;
    padding: 0px;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: #7a797d;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  h3 {
    display: flex;
    width: 30%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    font-feature-settings: "salt" on;

    /* Text/color1 */

    color: #27262e;
  }
`;
const CreatorWrapper = styled.div`
  width: 35%;
  height: 478px;
  background: #ffffff;
  border-radius: 16px;
  .title {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 24px;
  }
`;
export const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <Banner>Discover, Create and Sell Your Own NFT.</Banner>
        <div className="card-wrapper">
          <Card title="Revenue" amount="5.00" percent={12.3}>
            <Button></Button>
          </Card>
          <Card title="Spending" amount="2.00" percent={8.1}>
            <Button></Button>
          </Card>
          <Card title="ROI" content="+14.02" percent={-5.1}>
            <Button></Button>
          </Card>
          <Card title="Estimated" amount="7.00" percent={3.2}>
            <Button></Button>
          </Card>
        </div>
      </AppWrapper>
      <WholeContent>
        <MainContentWrapper>
          <div className="trending">
            <h3>Trending Auctions</h3>
            <ul>
              <li>Art</li>
              <li>Music</li>
              <li>Collectibles</li>
              <li>Utility</li>
            </ul>
          </div>
          <NFTWrapper>
            <NFTCard
              name="Ape In Love"
              nameTag="@johnti60"
              curBid="9.10"
              curLikes="21,5"
            ></NFTCard>
            <NFTCard
              name="Ape In Love"
              nameTag="@johnti60"
              curBid="9.10"
              curLikes="21,5"
            ></NFTCard>
            <NFTCard
              name="Ape In Love"
              nameTag="@johnti60"
              curBid="9.10"
              curLikes="21,5"
            ></NFTCard>
            <NFTCard
              name="Ape In Love"
              nameTag="@johnti60"
              curBid="9.10"
              curLikes="21,5"
            ></NFTCard>
          </NFTWrapper>
        </MainContentWrapper>
        <CreatorWrapper>
          <div className="title">
            <h3>Top Creator</h3>
            <span>See All</span>
          </div>
          <CreatorCard
            no="1."
            name="Michael Jordan"
            nameTag="@jordan_"
          ></CreatorCard>
          <CreatorCard
            no="1."
            name="Michael Jordan"
            nameTag="@jordan_"
          ></CreatorCard>
          <CreatorCard
            no="1."
            name="Michael Jordan"
            nameTag="@jordan_"
          ></CreatorCard>
          <CreatorCard
            no="1."
            name="Michael Jordan"
            nameTag="@jordan_"
          ></CreatorCard>
          <CreatorCard
            no="1."
            name="Michael Jordan"
            nameTag="@jordan_"
          ></CreatorCard>
          <CreatorCard
            no="1."
            name="Michael Jordan"
            nameTag="@jordan_"
          ></CreatorCard>
        </CreatorWrapper>
      </WholeContent>
    </PrimaryLayout>
  );
};
