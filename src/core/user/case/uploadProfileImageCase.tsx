import { ProfileRepoInterface } from "../repo/profile.repo"
import ProfileImageUrl from "../model/view/profileImageUrl.model";

class UploadProfileImageCase {

    private profileRepo: ProfileRepoInterface

    constructor(profileRepo: ProfileRepoInterface) {
        this.profileRepo = profileRepo;
    }

    async execute(image: FormData, headers: {}): Promise<ProfileImageUrl> {
        try {
            let profileImageUrl = await this.profileRepo.uploadProfileImage(image, headers);
            return profileImageUrl;
        } catch (error: any) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default UploadProfileImageCase;