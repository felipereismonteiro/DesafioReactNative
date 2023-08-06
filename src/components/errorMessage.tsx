import styled from "styled-components/native";

export default function SearchUserErrorMessage() {
  return (
    <ErrorMessageText>
      Usuário inválido{"\n"}
      Usuário do GitHub não deve conter:{"\n"}
      Espaços.{"\n"}
      Caracteres Especiais{"\n"}
      Pontuações e Acentos{"\n"}
      {"\n"}
    </ErrorMessageText>
  );
}

const ErrorMessageText = styled.Text`
  color: red;
  position: absolute;
  bottom: 0px;
  text-align: center;
  gap: 5px;
`;
