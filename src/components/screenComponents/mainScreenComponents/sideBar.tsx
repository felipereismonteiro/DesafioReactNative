type Props = {
  handleUserDetails: (username: string) => void;
}

import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
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
      <Icon
        onPress={handleSideBarOpen}
        name="menu"
        size={30}
        style={{ margin: 15, position: "absolute", zIndex: 20 }}
      />
      {sideBarOpen && (
        <>
          <SideBarContainer>
            <SideBarContent handleUserDetails={handleUserDetails} />
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