type Props = {
  handleUserDetails: (username: string) => void;
};

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
      <Icon
        onPress={handleSideBarOpen}
        name="menu"
        size={40}
        style={{ margin: 15, position: "absolute", zIndex: 20 }}
      />
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
