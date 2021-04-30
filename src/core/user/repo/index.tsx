import { UserRepo } from "./user.repo";
import { ProfileRepo } from "./profile.repo";
import HttpClient from "../../../infra/http/HttpClient";

const userRepo = new UserRepo(HttpClient);
const profileRepo = new ProfileRepo(HttpClient);
export {
    userRepo,
    profileRepo
}