type Props = {
  handleFindUser: ({ userName }: { userName: string }) => void;
  error: boolean;
  topInput: boolean;
  handleInputOpen: (type: boolean) => void;
  inputOpen: boolean;
};

import ErrorMessage from "../../../components/errorMessage";
import FontAwesome5Icon from "../../../components/fontAwesome5.icon";
import { Formik } from "formik";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";

export default function InputSearchUserInfo({
  handleFindUser,
  error,
  topInput,
  handleInputOpen,
  inputOpen,
}: Props) {
  return (
    <Container topInput={topInput}>
      {inputOpen ? (
        <Formik
          initialValues={{
            userName: "",
          }}
          onSubmit={handleFindUser}
        >
          {({ handleChange, handleSubmit, values }) => (
            <InputContainer>
              <TouchableWithoutFeedback onPress={() => handleSubmit()}>
                <ContainerSearch>
                  <FontAwesome5Icon name="search" size={15} color="black"/>
                </ContainerSearch>
              </TouchableWithoutFeedback>
              <SearchUser
                onChangeText={handleChange("userName")}
                placeholder="Pesquisar Usuário"
                value={values.userName}
              />
              {error ? <ErrorMessage /> : ""}
            </InputContainer>
          )}
        </Formik>
      ) : (
        <TouchableWithoutFeedback onPress={() => handleInputOpen(!inputOpen)}>
          <ContainerInputClosed>
            <FontAwesome5Icon name="search" size={15} color="white"/>
          </ContainerInputClosed>
        </TouchableWithoutFeedback>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 1;
`;

const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 5px;
  margin-right: 10px;
`;

const ContainerSearch = styled.View`
  position: absolute;
  right: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 30;
  width: 20%;
  height: 50px;
`;

const SearchUser = styled.TextInput`
  width: 60vw;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 17% 10px 11%;
  text-align: center;
`;

const ContainerInputClosed = styled.View`
  background-color: transparent;
  width: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-right: 16px;
`;
