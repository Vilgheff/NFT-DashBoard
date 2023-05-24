import Header from "components/Header";
import styled from "styled-components";
import { SideBar } from "components/SideBar";

const LayoutStyled = styled.div`
  background-color: #CAEAE6;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  background-color: #CAEAE6;
  margin-top: 64px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  background-color: #88e76b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  float: left;
  width: 20%;
  height: 100vh;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled>
        <SideBar></SideBar> 
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
