import { UserRepoInterface } from "../repo/user.repo"
import UserProfile from "../model/view/userProfile.model";
import httpResponseCheck from "../../../infra/http/HttpResponseCheck"

class CheckUserCase {

    private userRepo: UserRepoInterface

    constructor(userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    async execute(): Promise<UserProfile> {
        try {
            let userProfile = await this.userRepo.checkUser();
            return userProfile;
        } catch (error: any) {
            if (httpResponseCheck.isUnauthorized(error.response)) {
                throw new Error(error.response.data.msg);
            }
            throw new Error("Something Went Wrong");
        }
    }
}

export default CheckUserCase;