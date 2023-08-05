import React, { useState } from "react";
import { GithubRoute } from "@/api/GithubRoute";
import { UserModel } from "@/model/userGithub.model";
import InputSearchUserInfo from "./components/inputSearchUserInfo";
import UserInfos from "./components/userInfos";
import SideBar from "./components/sideBar";

export default function HomeScreen({ navigation }: any) {
  const [userInfos, setUserInfos] = useState<UserModel | undefined>();
  const [error, setError] = useState<boolean>(false);

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
      <SideBar />
      <InputSearchUserInfo
        handleFindUser={handleFindUser}
        error={error}
        topInput={userInfos ? true : false}
      />
      {userInfos && <UserInfos userInfos={userInfos} />}
    </>
  );
}
