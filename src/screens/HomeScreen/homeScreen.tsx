import React, { useState } from "react";
import { GithubRoute } from "@/api/GithubRoute";
import { UserModel, UserModelObjToSave } from "@/model/userGithub.model";
import { useNavigation } from "expo-router";
import InputSearchUserInfo from "@/components/screenComponents/mainScreenComponents/inputSearchUserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideBar from "@/components/screenComponents/mainScreenComponents/sideBar";
import UserInfos from "@/components/screenComponents/mainScreenComponents/userInfos";

export default function HomeScreen() {
  const [userInfos, setUserInfos] = useState<UserModel | undefined>();
  const [error, setError] = useState<boolean>(false);
  const navigation = useNavigation<any>();

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

      const objToSave: UserModelObjToSave = {
        name: response.name,
        login: response.login,
        location: response.location,
        avatarUrl: response.avatar_url,
      };
      handleSaveSearchedUsers("SearchedUsers", objToSave);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleSaveSearchedUsers = async (
    key: string,
    obj: UserModelObjToSave
  ) => {
    const existingArray = await AsyncStorage.getItem(key);

    let newArray = [];
    if (existingArray) {
      const array = JSON.parse(existingArray);

      for (let i = 0; i < array.length; i++) {
        const objToCheck = array[i];
        if (objToCheck.login === obj.login) {
          array.splice(i, 1);
        }
      }

      newArray = array;
    }
    newArray.push(obj);

    await AsyncStorage.setItem(key, JSON.stringify(newArray));
  };

  const handleUserDetails = (username: string) => {
    navigation.navigate("DetailsScreen", { username })
  }

  return (
    <>
      <SideBar handleUserDetails={handleUserDetails} />
      <InputSearchUserInfo
        handleFindUser={handleFindUser}
        error={error}
        topInput={userInfos ? true : false}
      />
      {userInfos && <UserInfos userInfos={userInfos} handleUserDetails={handleUserDetails} />}
    </>
  );
}
