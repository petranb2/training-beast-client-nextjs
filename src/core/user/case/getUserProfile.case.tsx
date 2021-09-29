import { ProfileRepoInterface } from "../repo/profile.repo"
import UserProfile from "../model/view/userProfile.model";

class GetUserProfileCase {

    private profileRepo: ProfileRepoInterface

    constructor(profileRepo: ProfileRepoInterface) {
        this.profileRepo = profileRepo;
    }

    async execute(username: string, cookie: string): Promise<UserProfile> {
        try {
            let userProfile = await this.profileRepo.fetchProfileWithCookie(username, cookie);
            return userProfile;
        } catch (error: any) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default GetUserProfileCase;