import UserService from "./user.service";
import { userRepo } from "../repo";

const userService = new UserService(userRepo);

export default {
    UserService: userService,
}