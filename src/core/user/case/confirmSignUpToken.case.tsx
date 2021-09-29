import { UserRepoInterface } from "../repo/user.repo"
import httpResponseCheck from "../../../infra/http/HttpResponseCheck"

class ConfirmSignUpTokenCase {

    private userRepo: UserRepoInterface

    constructor(userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    async execute(token: string): Promise<void> {
        try {
            await this.userRepo.confirmSignUpToken(token);

        } catch (error: any) {
            if (httpResponseCheck.isUnauthorized(error.response)) {
                throw new Error(error.response.data.msg);
            }
            throw new Error("Something Went Wrong");
        }
    }
}

export default ConfirmSignUpTokenCase;