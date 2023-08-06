type Props = {
  repo: UserRepositoryModel;
};

import { UserRepositoryModel } from "../../../model/userGithub.model";
import { Linking, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import FormatarDataPadraoBrasileiro from "../../hooks/formatarDataPadraoBrasileiro";

export default function UserRepoDetails({ repo }: Props) {
  console.log(repo);

  const handleRepo = () => {
    Linking.openURL(repo.html_url);
  };

  return (
    <MainContainer>
      <TouchableWithoutFeedback onPress={handleRepo}>
        <RepoTitle>{repo.name}</RepoTitle>
      </TouchableWithoutFeedback>
      <TopSideContainer>
        <Visibility>Público</Visibility>
        <CreatedDate>
          Criado em{"\n"}
          {FormatarDataPadraoBrasileiro(repo.created_at)}
        </CreatedDate>
      </TopSideContainer>
      <Description>{repo.description}</Description>
      <BottomSideContainer>
        <Language>#{repo.language}</Language>
        <LastUpdate>
          Última atualização{"\n"}
          {FormatarDataPadraoBrasileiro(repo.pushed_at)}
        </LastUpdate>
      </BottomSideContainer>
    </MainContainer>
  );
}

const MainContainer = styled.View`
  text-overflow: ellipsis;
  margin-bottom: 20px;
  background-color: #5c4794;
  padding: 10px;
  border-radius: ${10};
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;

const RepoTitle = styled.Text`
  font-size: 30px;
  color: white;
  text-decoration: underline;
  font-weight: bold;
  text-overflow: ellipsis;
`;
const Description = styled.Text`
  color: white;
  width: 70%;
`;
const Language = styled.Text`
  color: white;
  font-weight: bold;
`;

const Visibility = styled.Text`
  color: #5c4794;
  padding: 5px;
  font-weight: 900;
  background-color: white;
  border-radius: ${100};
  width: 80px;
  text-align: center;
  margin-bottom: 2px;
`;

const TopSideContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const CreatedDate = styled.Text`
  color: white;
  text-align: right;
`;

const BottomSideContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
`;

const LastUpdate = styled.Text`
  color: white;
  text-align: right;
`;
