import { UserModel, UserRepositoryModel } from "../model/userGithub.model";

import axios from "axios";

const GitHubUrl = "https://api.github.com";

async function FindUser(name: string): Promise<UserModel> {
  const response = await axios.get(`${GitHubUrl}/users/${name}`);

  return response.data;
}

async function FindUserRepos(name: string): Promise<UserRepositoryModel[] | undefined> {
  const response = await axios.get(`${GitHubUrl}/users/${name}/repos`);

  return response.data;
}

export const GithubRoute = {
  FindUser,
  FindUserRepos
};
