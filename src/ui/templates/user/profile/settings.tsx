import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
// Components for properties
import ProfilePicItem from "../../../organisms/user/profile/profilePic";
import UsernameItem from "../../../organisms/user/profile/username";
import DisplayNameItem from "../../../organisms/user/profile/displayName";
import ShortBioItem from "../../../organisms/user/profile/shortBio";
import SportsItem from "../../../organisms/user/profile/sports";
import EmailItem from "../../../organisms/user/profile/email";
// AuthContext
import { AuthContext } from "../context/authContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    profileGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));
function Settings(props) {
    const classes = useStyles();
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
                        <UsernameItem username={authContext.username} />
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
