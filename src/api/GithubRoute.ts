import { UserModel } from "@/model/userGithub.model";
import axios from "axios";

async function FindUser(name: string): Promise<UserModel> {
  const response = await axios.get(`https://api.github.com/users/${name}`);

  return response.data;
}

export const GithubRoute = {
  FindUser,
};
