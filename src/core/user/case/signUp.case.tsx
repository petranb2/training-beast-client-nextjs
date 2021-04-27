import { UserRepoInterface } from "../repo/user.repo"
import UserCrediantials from "../model/view/userCredentials.model";
import httpResponseCheck from "../../../infra/http/HttpResponseCheck"
import { HttpResponse } from "../../../infra/http/HttpResponseInterface";
import { HttpStatusCode } from "../../../infra/http/HttpStatusCodes";

class SignUpCase {

    userRepo: UserRepoInterface

    constructor(userRepo: UserRepoInterface) {
        this.userRepo = userRepo;
    }

    async execute(userCrediantials: UserCrediantials): Promise<void> {
        try {
            await this.userRepo.signUp(userCrediantials);
        } catch (error) {
            if (httpResponseCheck.hasStatusCode(error.response as HttpResponse, HttpStatusCode.BADREQUEST)) {
                throw new Error(error.response.data.msg);
            }
            throw new Error("Something Went Wrong");
        }
    }
}

export default SignUpCase;