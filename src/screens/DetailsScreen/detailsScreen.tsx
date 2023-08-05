import { GithubRoute } from "@/api/GithubRoute";
import UserInfosDetailedScreen from "@/components/screenComponents/detailedScreenContainer/userInfosDetailedScreen";
import UserRepoDetails from "@/components/screenComponents/detailedScreenContainer/userReposDetails";
import { UserModel, UserRepositoryModel } from "@/model/userGithub.model";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";

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
      <TouchableWithoutFeedback onPress={handleChangeScreen}>
        <BackIcon>
          <Icon name="back" size={15} />
        </BackIcon>
      </TouchableWithoutFeedback>
      <UserInfosDetailedScreen userInfos={userInfos} />
      <LineView />
      <ScrollView>
        <MainContainer>
          {userRepos &&
            userRepos.map((repo) => (
              <UserRepoDetails key={repo.id} repo={repo} />
            ))}
        </MainContainer>
      </ScrollView>
    </>
  );
}

const MainContainer = styled.View`
  padding: 10px;
  overflow: scroll;
`;

const BackIcon = styled.View`
  position: absolute;
  right: 0;
  border-radius: 50%;
  margin: 0px 10px 0px 0px;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const LineView = styled.View`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 10px 0px;
`;

const LineView = styled.View`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 10px 0px;
`;
