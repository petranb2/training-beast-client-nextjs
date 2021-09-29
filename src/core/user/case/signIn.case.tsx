import { UserRepoInterface } from "../repo/user.repo"
import UserCrediantials from "../model/view/userCredentials.model";
import UserProfile from "../model/view/userProfile.model";
import httpResponseCheck from "../../../infra/http/HttpResponseCheck"

class SignInCase {

    private userRepo: UserRepoInterface

    constructor(userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    async execute(userCrediantials: UserCrediantials): Promise<UserProfile> {
        try {
            let userProfile = await this.userRepo.signIn(userCrediantials);
            return userProfile;
        } catch (error: any) {
            if (httpResponseCheck.isUnauthorized(error.response)) {
                throw new Error(error.response.data.msg);
            }
            throw new Error("Something Went Wrong");
        }
    }
}

export default SignInCase;