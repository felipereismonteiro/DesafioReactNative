import styled from "styled-components/native";

export default function SearchUserErrorMessage() {
 return(
  <ErrorMessageText>Usuário invalido<br/>Usuário do github não deve conter:<br/>Espaços.<br/>Caracteres Especiais<br/>Pontuações e Acentos<br/><br/></ErrorMessageText>
 )
}

const ErrorMessageText = styled.Text`
 color: red;
 position: absolute;
 margin-top: 120px;
 text-align: center;
 gap: 5px;
`