type Props = {
  repo: UserRepositoryModel;
};

import { UserRepositoryModel } from "@/model/userGithub.model";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

export default function UserRepoDetails({ repo }: Props) {
  console.log(repo);

  const handleRepo = () => {};

  return (
    <MainContainer>
      <TouchableWithoutFeedback onPress={handleRepo}>
        <RepoTitle>{repo.name}</RepoTitle>
      </TouchableWithoutFeedback>
      <Description>{repo.description}</Description>
    </MainContainer>
  );
}

const MainContainer = styled.View`
 text-overflow: ellipsis;
 margin-bottom: 20px;
`;

const RepoTitle = styled.View`
  font-size: 25px;
  color: blue;
  text-decoration: underline;
  text-overflow: ellipsis;
`;
const Description = styled.Text`
 

`