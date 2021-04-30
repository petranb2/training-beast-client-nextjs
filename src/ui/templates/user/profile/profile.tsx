import React from "react";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import getStyle from "./profile.style";
import URLS from "../../../utils/consts/urls";

export default function Profile({ profile }: any) {
    let classes = getStyle();
    return (
        <Card className={classes.root}>
            <>
                <CardMedia
                    className={classes.media}
                    image={`${URLS.BUCKET}/logo/cool-background_4.png`}
                    title="Background Image"
                    component={'img'}
                />
                <CardMedia
                    className={classes.media_min}
                    image={`${URLS.BUCKET}/logo/cool-background_2.png`}
                    title="Background Image"
                    component={'img'}
                />
            </>
            <CardContent>
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12} sm={12} style={{ height: "120px" }}>
                        <Avatar
                            alt={profile.username}
                            src={`${URLS.BUCKET}/${profile.profilePic}`}
                            className={classes.profileImage}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography>trainingBeast.co/@{profile.username}</Typography>
                        <Typography>{profile.displayName}</Typography>
                        <Typography>{profile.shortBio}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {profile.sports &&
                            profile.sports.map((sport: string, index: number) => {
                                return <Chip key={index} label={sport} size="small" color="secondary" />;
                            })}
                    </Grid>
                    <Grid container item sm={12}>
                        <Typography>Some info</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}