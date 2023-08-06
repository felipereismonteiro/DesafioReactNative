type Props = {
  userInfos: UserModel;
  handleUserDetails: (username: string) => void;
};

import { UserModel } from "../../../model/userGithub.model";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import FontAwesome5Icon from "../../../components/fontAwesome5.icon";
import { View } from "react-native";

export default function UserInfos({ userInfos, handleUserDetails }: Props) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  console.log(userInfos);

  return (
    <ContainerInfoUser>
      <ContainerAvatarUserOutSide>
        <TouchableOpacity onPress={() => handleUserDetails(userInfos.login)}>
          <AvatarUser source={{ uri: userInfos.avatar_url }} />
        </TouchableOpacity>
      </ContainerAvatarUserOutSide>
      <UserProfileName>{userInfos.name}</UserProfileName>
      <Text>{userInfos.login}</Text>
      {userInfos.location && (
        <ContainerLocationUser>
          <FontAwesome5Icon name="map-marker-alt" size={15} />
          <Text>{userInfos.location}</Text>
        </ContainerLocationUser>
      )}
    </ContainerInfoUser>
  );
}

const ContainerInfoUser = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-top: -120px;
`;
const AvatarUser = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;
const UserProfileName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const ContainerLocationUser = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const ContainerAvatarUserOutSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 210px;
  border-radius: 100px;
  border: 1px solid #D9D9D9;
`
