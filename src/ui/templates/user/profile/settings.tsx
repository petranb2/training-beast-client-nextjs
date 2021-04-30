import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ProfilePicItem from "../../../organisms/user/profile/profilePic";
import UsernameItem from "../../../organisms/user/profile/username";
import DisplayNameItem from "../../../organisms/user/profile/displayName";
import ShortBioItem from "../../../organisms/user/profile/shortBio";
import SportsItem from "../../../organisms/user/profile/sports";
import EmailItem from "../../../organisms/user/profile/email";
import { AuthContext } from "../context/authContext";
import getStyles from "./settings.style";


function Settings() {
    const classes = getStyles();
    let authContext = useContext(AuthContext);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={3} className={classes.root}>
                    <Grid container item xs={12} >
                        <ProfilePicItem />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid container item xs={12}>
                        <EmailItem email={authContext.email} />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={12}>
                        <UsernameItem  />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid container item xs={12}>
                        <DisplayNameItem displayName={authContext.displayName} />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid container item xs={12}>
                        <ShortBioItem shortBio={authContext.shortBio} />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid container item xs={12}>
                        <SportsItem sports={authContext.sports} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Settings;
