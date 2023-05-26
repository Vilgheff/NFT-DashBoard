import Header from "components/Header";
import styled from "styled-components";
import { SideBar } from "components/SideBar";
const Container = styled.div`
  position: relative;
  display: flex;
  background: gray;
  background-size: 400% 400%;
  justify-content: center;
`;
const LayoutStyled = styled.div`
  background-color: #caeae6;
  min-height: 150vh;
  width: 1440px;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  background-color: #caeae6;
  margin-top: 64px;
  height: 120vh;
`;
const SideBarStyled = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  float: left;
  width: 20%;
  height: 150vh;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <Container>
      <LayoutStyled>
        <SideBarStyled>
          <SideBar></SideBar>
        </SideBarStyled>
        <div className="right">
          <Header />
          <ContentStyled>{children}</ContentStyled>
        </div>
      </LayoutStyled>
    </Container>
  );
};

export default PrimaryLayout;
