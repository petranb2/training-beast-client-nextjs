import { ProfileRepoInterface } from "../repo/profile.repo";

class UpdateDisplayNameCase {

    private profileRepo: ProfileRepoInterface

    constructor(profileRepo: ProfileRepoInterface) {
        this.profileRepo = profileRepo;
    }

    async execute(displayName: string): Promise<void> {
        try {
            await this.profileRepo.updateDisplayName(displayName);
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default UpdateDisplayNameCase;