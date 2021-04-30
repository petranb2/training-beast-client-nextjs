import { ProfileRepoInterface } from "../repo/profile.repo";

class UpdateShortBioCase {

    private profileRepo: ProfileRepoInterface

    constructor(profileRepo: ProfileRepoInterface) {
        this.profileRepo = profileRepo;
    }

    async execute(shortBio: string): Promise<void> {
        try {
            await this.profileRepo.updateShortBio(shortBio);
        } catch (error) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default UpdateShortBioCase;