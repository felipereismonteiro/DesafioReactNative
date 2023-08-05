type Props = {
  handleUserDetails: (username: string) => void;
}

import { UserModelObjToSave } from "@/model/userGithub.model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

export default function SideBarContent({ handleUserDetails }: Props) {
  const [users, setUsers] = useState<UserModelObjToSave[]>([]);

  useEffect(() => {
    const searchedUsers = AsyncStorage.getItem("SearchedUsers");

    searchedUsers.then((res: any) => {
      const response = JSON.parse(res);
      if (response) {
        setUsers(response);
      }
    });
  }, []);

  return (
    <>
      {users.map((user) => (
        <>
          <ContainerUser>
            <TouchableWithoutFeedback onPress={() => handleUserDetails(user.login)}>
              <UserAvatar source={{ uri: user.avatarUrl }} />
            </TouchableWithoutFeedback>
            <ContainerUserInfos>
              <UserName numberOfLines={1}>{user.name}</UserName>
              <UserLogin numberOfLines={1}>{user.login}</UserLogin>
              <Text numberOfLines={1}>{user.location}</Text>
            </ContainerUserInfos>
          </ContainerUser>
          <LineWidth />
        </>
      ))}
    </>
  );
}
const ContainerUser = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContainerUserInfos = styled.View`
  margin-left: 10px;
  max-width: 160px;
  overflow: hidden;
`;

const UserAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const LineWidth = styled.View`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 10px 0;
`;
const UserName = styled.Text`
  font-weight: bold;
`;
const UserLogin = styled.Text`
  color: gray;
`;
