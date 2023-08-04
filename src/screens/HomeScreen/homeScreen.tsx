import { GithubRoute } from "@/api/GithubRoute";
import { UserModel } from "@/model/userGithub.model";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function HomeScreen({ navigation }: any) {
  const [userInfos, setUserInfos] = useState<UserModel>();
  const [searchUser, setSearchUser] = useState<string>();
  console.log(searchUser);

  useEffect(() => {
    const response = GithubRoute.FindUser("felipereismonteiro");

    response
      .then((res) => {
        setUserInfos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUserChange = (user: string) => {
    setSearchUser(user);
  }

  return (
    <>
      <Container>
        <InputContainer>
          <ContainerSearch>
            <Icon
              name="search"
              size={15}
            />
          </ContainerSearch>
          <SearchUser onChange={(e: any) => handleUserChange(e.target.value)} placeholder="Nome de Usuário."></SearchUser>
        </InputContainer>
      </Container>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContainerSearch = styled.View`
  position: absolute;
  left: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchUser = styled.TextInput`
  width: 60vw;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 30px;
  text-align: center;
`;
