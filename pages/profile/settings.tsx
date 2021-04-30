import React from 'react';
import SettingsTemplate from "../../src/ui/templates/user/profile/settings";
import { withAuth } from "../../src/ui/templates/user/hoc/withAuth";

function ProfileSettings() {
    return <SettingsTemplate />
}

export default withAuth(ProfileSettings);