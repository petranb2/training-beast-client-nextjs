import { ProfileRepoInterface } from "../repo/profile.repo";

class UpdateSportsCase {

    private profileRepo: ProfileRepoInterface

    constructor(profileRepo: ProfileRepoInterface) {
        this.profileRepo = profileRepo;
    }

    async execute(sports: string[]): Promise<void> {
        try {
            await this.profileRepo.updateSports(sports);
        } catch (error: any) {
            throw new Error("Something Went Wrong");
        }
    }
}

export default UpdateSportsCase;