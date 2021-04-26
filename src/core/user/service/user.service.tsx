import { UserRepoInterface } from "../repo/user.repo";

class UserService {

    userRepo: UserRepoInterface;

    constructor(userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    signIn() {

    }
}

export default UserService;