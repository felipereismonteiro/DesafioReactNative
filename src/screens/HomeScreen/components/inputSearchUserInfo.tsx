type Props = {
 handleFindUser: ({ userName }: { userName: string }) => void;
 error: boolean;
 topInput: boolean;
}

import ErrorMessage from "@/components/errorMessage";
import FontAwesome5Icon from "@/components/fontAwesome5.icon";
import IonIcon from "@/components/ionIcon.icon";
import { Formik } from "formik";
import styled from "styled-components/native";

export default function InputSearchUserInfo({ handleFindUser, error, topInput }: Props) {
 return(
  <Container topInput={topInput}>
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
 )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  ${(props: { topInput: boolean }) =>
    props.topInput &&
    `
    position: absolute;
    top: 20px;
    right: 0px;
    margin: 10px;
    z-index: 1;
    `}
`;


const InputContainer = styled.View`
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
