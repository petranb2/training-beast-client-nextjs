import React from "react";
import { default as ProfileTemplate } from "../src/ui/templates/user/profile/profile"
import { getUserProfileWithCookieCase } from "../src/core/user/case";
import { useAuth } from "../src/ui/templates/user/hook/useAuth";

function Profile({ profile }: any) {
    useAuth();
    return <ProfileTemplate profile={profile} />
}

export default Profile;

// This gets called on every request
export async function getServerSideProps(context: any) {
    // export the @ symbol from url path
    let fullUsername = context.query.username[0]
    let atSign = fullUsername[0];
    if (atSign !== '@') {
        return {
            notFound: true,
        }
    }
    // get the username after the @ symbol
    let username = fullUsername.slice(1);
    try {
        let userProfile = await getUserProfileWithCookieCase.execute(username, context.req.headers.cookie);
        return { props: { profile: userProfile } }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}