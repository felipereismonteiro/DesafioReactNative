import { UserModelObjToSave } from "@/model/userGithub.model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function SideBarContent() {
  const [users, setUsers] = useState<UserModelObjToSave[]>([]);
  console.log(users);

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
            <UserAvatar source={{ uri: user.avatarUrl }} />
            <ContainerUserInfos>
              <UserName numberOfLines={1}>{user.name}</UserName>
              <Text numberOfLines={1}>{user.login}</Text>
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
`