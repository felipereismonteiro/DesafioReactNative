type Props = {
  handleUserDetails: (username: string) => void;
};
// @ts-ignore
import MainLogo from "../../../../assets/images/Logo.png";
import { useState } from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import SideBarContent from "./sideBarContent";

export default function SideBar({ handleUserDetails }: Props) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleSideBarOpen: any = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      {sideBarOpen ? (
        <Icon
          onPress={handleSideBarOpen}
          name="close"
          style={{ margin: 15, position: "absolute", zIndex: 20 }}
          size={40}
          color={"white"}
        />
      ) : (
        <Icon
          onPress={handleSideBarOpen}
          name="menu"
          size={40}
          style={{ margin: 15, position: "absolute", zIndex: 20 }}
          color={"white"}
        />
      )}
      <PrincipalLogo source={MainLogo} />
      {sideBarOpen && (
        <>
          <SideBarContainer>
            <ScrollView>
              <SideBarContent handleUserDetails={handleUserDetails} />
            </ScrollView>
          </SideBarContainer>
          <TouchableWithoutFeedback onPress={handleSideBarOpen}>
            <MainContainer></MainContainer>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
}

const SideBarContainer = styled.View`
  background-color: white;
  position: absolute;
  margin-top: 80;
  z-index: 20;
  height: 300;
  overflow: scroll;
  width: 250px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 1;
  padding: 15px;
  overflow-y: scroll;
`;

const MainContainer = styled.View`
  position: absolute;
  background-color: transparent;
  height: 100;
  width: 100vw;
  z-index: 10;
`;

const PrincipalLogo = styled.Image`
  position: absolute;
  left: 60px;
  top: 25px;
`;