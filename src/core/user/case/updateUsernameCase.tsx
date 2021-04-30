import { ProfileRepoInterface } from "../repo/profile.repo";
import httpResponseCheck from "../../../infra/http/HttpResponseCheck";
import { HttpStatusCode } from "../../../infra/http/HttpStatusCodes";
import { HttpResponse } from "../../../infra/http/HttpResponseInterface";

class UpdateUsernameCase {

    private profileRepo: ProfileRepoInterface

    constructor(profileRepo: ProfileRepoInterface) {
        this.profileRepo = profileRepo;
    }

    async execute(username: string): Promise<void> {
        try {
            await this.profileRepo.updateUsername(username);
        } catch (error) {
            if (httpResponseCheck.hasStatusCode(error.response as HttpResponse, HttpStatusCode.BADREQUEST)) {
                throw new Error(error.response.data.msg);
            }
            throw new Error("Something Went Wrong");
        }
    }
}

export default UpdateUsernameCase;