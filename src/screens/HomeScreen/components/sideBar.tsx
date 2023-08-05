import IonIcon from "@/components/ionIcon.icon";
import { useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native";

export default function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleSideBarOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      <Icon
        onPress={handleSideBarOpen}
        name="menu"
        size={30}
        style={{ margin: 10 }}
      />
      {sideBarOpen && (
        <>
          <SideBarContainer></SideBarContainer>
          <TouchableWithoutFeedback onPress={handleSideBarOpen}>
            <MainContainer>
            </MainContainer>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
}

const MainContainer = styled.View`
  position: absolute;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;

const SideBarContainer = styled.View`
  background-color: white;
  position: absolute;
  z-index: 20;
  height: 100vh;
  width: 250px;
`;
