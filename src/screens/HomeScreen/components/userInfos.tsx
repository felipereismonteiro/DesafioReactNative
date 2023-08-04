type Props = {
  userInfos: UserModel;
};

import { UserModel } from "@/model/userGithub.model";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import FontAwesome5Icon from "@/components/fontAwesome5.icon";

export default function UserInfos({ userInfos }: Props) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  console.log(userInfos);

  const handleUserInfosDetailsPage = () => {
    navigation.navigate("Details Screen", { name: "Details Screen" });
  };

  return (
    <ContainerInfoUser>
      <TouchableOpacity onPress={handleUserInfosDetailsPage}>
        <AvatarUser source={{ uri: userInfos.avatar_url }} />
      </TouchableOpacity>
      <UserProfileName>{userInfos.name}</UserProfileName>
      <Text>{userInfos.login}</Text>
      {userInfos.location && (
        <ContainerLocationUser>
          <FontAwesome5Icon name="map-marker-alt" size={15} />
          <Text>tex</Text>
        </ContainerLocationUser>
      )}
    </ContainerInfoUser>
  );
}

const ContainerInfoUser = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const AvatarUser = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
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
