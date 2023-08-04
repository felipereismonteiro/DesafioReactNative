import React, { useState } from "react";
import { GithubRoute } from "@/api/GithubRoute";
import { UserModel } from "@/model/userGithub.model";
import InputUserInfo from "./components/inputUserInfo";
import styled from "styled-components/native";

export default function HomeScreen({ navigation }: any) {
  const [userInfos, setUserInfos] = useState<UserModel | undefined>();
  const [error, setError] = useState<boolean>(false);
  console.log(userInfos ? true : false);

  const handleFindUser = async ({ userName }: { userName: string }) => {
    const usernameRegex =
      /^(?!.*(--|-{2,})|.*-$|.*-0)(?!.*github)[a-zA-Z0-9-]{1,39}$/;
    const isValid = usernameRegex.test(userName);
    if (!isValid) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }

    try {
      const response = await GithubRoute.FindUser(userName);
      setUserInfos(response);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
        <InputUserInfo handleFindUser={handleFindUser} error={error} topInput={userInfos ? true : false}/>
      
    </>
  );
}

const ContainerInput = styled.View`
  position: absolute;
  top: 20px;
  right: 0px;
  margin: 10px;
`
