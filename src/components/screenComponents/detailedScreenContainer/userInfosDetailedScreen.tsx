type Props = {
  userInfos: UserModel | undefined;
};

import IonIcon from "../../../components/fontAwesome5.icon";
import { UserModel } from "../../../model/userGithub.model";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function UserInfosDetailedScreen({ userInfos }: Props) {
  if (!userInfos) return <></>;

  return (
    <MainContainer>
      <ContainerAvatarUser>
        <AvatarUser source={{ uri: userInfos.avatar_url }} />
      </ContainerAvatarUser>
      <InfosUserContainer>
        <UserName>{userInfos.name}</UserName>
        <LoginName>{userInfos.login}</LoginName>
        {userInfos.location && (
          <ContainerLocation>
            <IonIcon name="map" size={15} color="white" />
            <LocationText>{userInfos.location}</LocationText>
          </ContainerLocation>
        )}
        <LineView />
        <GenericText>ID: {userInfos.id}</GenericText>
        <GenericText>Seguidores: {userInfos.followers}</GenericText>
        <GenericText>
          Repositórios Públicos: {userInfos.public_repos}
        </GenericText>
      </InfosUserContainer>
    </MainContainer>
  );
}
const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  max-width: 80vw;
  overflow: hidden;
  margin: 10px;
`;

const InfosUserContainer = styled.View`
  gap: 2px;
`;

const ContainerAvatarUser = styled.View`
  min-width: 110px;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 50;
  border: 1px solid gray;
  max-width: 110px;
  height: 110px;
`;

const AvatarUser = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50;
`;

const UserName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: -5px;
  color: white;
`;

const LoginName = styled.Text`
  color: white;
  margin-bottom: -5px;
`;

const ContainerLocation = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;

const LocationText = styled.Text`
  color: white;
`

const GenericText = styled.Text`
  color: white;
`;

const LineView = styled.View`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 10px 0px;
`;
