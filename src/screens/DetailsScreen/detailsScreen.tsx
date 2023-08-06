import { GithubRoute } from "../../api/GithubRoute";
import { UserModel, UserRepositoryModel } from "../..//model/userGithub.model";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableWithoutFeedback, ScrollView } from "react-native";
import UserRepoDetails from "../..//components/screenComponents/detailedScreenContainer/userReposDetails";
import UserInfosDetailedScreen from "../../components/screenComponents/detailedScreenContainer/userInfosDetailedScreen";
import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
//@ts-ignore
import PrincipalLogo from "../../../assets/images/Logo.png";

export default function DetailsScreen() {
  const [userInfos, setUserInfos] = useState<UserModel>();
  const [userRepos, setUserRepos] = useState<
    UserRepositoryModel[] | undefined | void
  >();
  const route = useRoute();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const param: any = route.params;
    if (param) {
      const response = GithubRoute.FindUser(param.username);
      const responseRepos = GithubRoute.FindUserRepos(param.username);

      response
        .then((res) => {
          setUserInfos(res);
        })
        .catch((err) => {
          console.log(err);
        });

      responseRepos
        .then((res) => {
          setUserRepos(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleChangeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      <ContainerUserInfos>
        <TouchableWithoutFeedback onPress={handleChangeScreen}>
          <BackIcon>
            <Icon name="chevron-back-outline" size={15} />
          </BackIcon>
        </TouchableWithoutFeedback>
        <MainLogo source={PrincipalLogo} />
        <UserInfosDetailedScreen userInfos={userInfos} />
      </ContainerUserInfos>
      <ScrollView>
        <MainContainer>
          {userRepos &&
            userRepos.map((repo) => (
              <UserRepoDetails key={repo.id} repo={repo} />
            ))}
        </MainContainer>
      </ScrollView>
      <Footer/>
    </>
  );
}

const ContainerUserInfos = styled.View`
  background-color: #5C4794;
  min-height: 240px;
  margin-bottom: 10px;
`;

const MainContainer = styled.View`
  padding: 10px;
  overflow: scroll;
  margin-bottom: 5px;
`;

const MainLogo = styled.Image`
  margin: 20px auto;
`;

const BackIcon = styled.View`
  position: absolute;
  left: 0;
  border-radius: ${50};
  margin: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: white;
`;
const Footer = styled.View`
  width: 100%;
  height: 26px;
  background-color:#33ADAC;
  position: absolute;
  bottom: 0;
`;