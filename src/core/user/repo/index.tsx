import {UserRepo} from "./user.repo";

import HttpClient from "../../../infra/http/HttpClient";

const userRepo = new UserRepo(HttpClient);

export {
    userRepo,
}