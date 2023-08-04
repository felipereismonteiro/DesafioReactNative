import React, { useState } from "react";
import { GithubRoute } from "@/api/GithubRoute";
import { UserModel } from "@/model/userGithub.model";
import styled from "styled-components/native";
import FontAwesome5Icon from "@/components/fontAwesome5.icon";
import { Formik } from "formik";
import IonIcon from "@/components/ionIcon.icon";
import ErrorMessage from "@/components/errorMessage";

export default function HomeScreen({ navigation }: any) {
  const [userInfos, setUserInfos] = useState<UserModel | undefined>();
  const [error, setError] = useState<boolean>(false);

  const handleFindUser = async ({ userName }: { userName: string }) => {
    const usernameRegex = /^(?!.*(--|-{2,})|.*-$|.*-0)(?!.*github)[a-zA-Z0-9-]{1,39}$/;
    const isValid = usernameRegex.test(userName);
    if (!isValid) {
      setError(true);
      setTimeout(() => { setError(false) }, 5000)
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
    <Container>
      <Formik
        initialValues={{
          userName: "",
        }}
        onSubmit={handleFindUser}
      >
        {({ handleChange, handleSubmit, values }) => (
          <InputContainer>
            <ContainerSearch>
              <FontAwesome5Icon name="search" size={15} />
            </ContainerSearch>
            <ContainerSubmit>
              <SendButton
                onPress={handleSubmit}
                title={<IonIcon name="send" size={15} />}
              />
            </ContainerSubmit>
            <SearchUser
              onChangeText={handleChange("userName")}
              placeholder="Pesquisar Usuário"
              value={values.userName}
            />
          </InputContainer>
        )}
      </Formik>
      {error && <ErrorMessage />}
    </Container>
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

const ContainerSubmit = styled.View`
  position: absolute;
  right: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchUser = styled.TextInput`
  width: 60vw;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 17% 10px 11%;
  text-align: center;
`;

const SendButton = styled.Button`
  border-radius: 50%;
  margin-right: -20px;
`;
