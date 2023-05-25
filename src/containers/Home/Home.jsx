import { Button } from "components/Button";
import { Card } from "components/Card";
import { styled } from "styled-components";
import { PrimaryLayout } from "components/Layout";
import { Banner } from "components/Banner/Banner";
const AppWrapper = styled.div`
  text-align: center;
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
    width: 500px;
    height: 500px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export const Home = () => {
  return (
    <PrimaryLayout>
      <Banner>Discover, Create and Sell Your Own NFT.</Banner>
      <AppWrapper>
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
    </PrimaryLayout>
  );
};
