import { GithubRoute } from "@/api/GithubRoute";
import { UserModel } from "@/model/userGithub.model";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";

export default function DetailsScreen() {
  const [userInfos, setUserInfos] = useState<UserModel>();
  const route = useRoute();
  const navigation = useNavigation<any>();

  console.log(userInfos);

  useEffect(() => {
    const param: any = route.params;
    if (param) {
      const response = GithubRoute.FindUser(param.username);

      response
        .then((res) => {
          setUserInfos(res);
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
    <MainContainer>
      <TouchableWithoutFeedback onPress={handleChangeScreen}>
        <BackIcon>
          <Icon
            name="back"
            size={25}
          />
        </BackIcon>
      </TouchableWithoutFeedback>
    </MainContainer>
  );
}

const MainContainer = styled.View`
  padding: 10px;
`;

const BackIcon = styled.View`
  position: absolute;
  right: 0;
  border-radius: 50%;
  margin: 0px 10px 0px 0px;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid black;
`;
