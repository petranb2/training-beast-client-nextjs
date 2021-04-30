import React from "react";
import { default as ProfileTemplate } from "../src/ui/templates/user/profile/profile"
import { getUserProfileWithCookieCase } from "../src/core/user/case"
import { withAuth } from "../src/ui/templates/user/hoc/withAuth";

function Profile({ profile }: any) {
    return <ProfileTemplate profile={profile} />
}

export default withAuth(Profile);

// This gets called on every request
export async function getServerSideProps(context: any) {
    // export the @ symbol from url path
    let atSign = context.resolvedUrl[1];
    if (atSign !== '@') {
        return {
            notFound: true,
        }
    }
    // get the username after the @ symbol
    let username = context.resolvedUrl.slice(2);
    try {
        let userProfile = await getUserProfileWithCookieCase.execute(username, context.req.headers.cookie);
        return { props: { profile: userProfile } }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}