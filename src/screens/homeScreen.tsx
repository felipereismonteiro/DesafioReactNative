import { GithubRoute } from "@/api/GithubRoute";
import { UserModel } from "@/model/userGithub.model";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen() {
  const [userInfos, setUserInfos] = useState<UserModel>();

  useEffect(() => {
    const response = GithubRoute.FindUser("felipereismonteiro");

    response.then((res) => {
      setUserInfos(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

 return (
  <MainText>testando texte da tela de home screen</MainText>
 );
}

const MainText = styled.Text`
  color: red;
`