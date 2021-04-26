export default interface UserProfile {
    email: string,
    username: string,
    displayName?: string,
    shortBio?: string,
    profilePic?: string,
    sports?: string[],
}