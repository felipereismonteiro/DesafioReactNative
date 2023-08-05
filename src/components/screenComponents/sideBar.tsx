import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import SideBarContent from "./sideBarContent";

export default function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const handleSideBarOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      <Icon
        onPress={handleSideBarOpen}
        name="menu"
        size={30}
        style={{ margin: 10, position: "absolute", zIndex: 20 }}
      />
      {sideBarOpen && (
        <>
          <SideBarContainer>
            <SideBarContent />
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
  z-index: 20;
  height: 100vh;
  width: 250px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;
  overflow-y: scroll;
`;

const MainContainer = styled.View`
  position: absolute;
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  z-index: 10;
`;
