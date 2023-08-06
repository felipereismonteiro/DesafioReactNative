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
  color: #ff0000;
  position: absolute;
  top: 70px;
  text-align: center;
  gap: 5px;
`;
