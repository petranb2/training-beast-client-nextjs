import React from "react";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TemplateProgram from "@core/program/template/model/view/programTemplate.model";
import getStyle from "./itemProgram.style"
import URLS from "@ui/utils/consts/urls"

type ItemProgramProps = {
    templateProgram: TemplateProgram
}

export default function ItemProgram({ templateProgram }: ItemProgramProps) {
    const classes = getStyle();
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card variant="outlined">
                <CardMedia
                    className={classes.media}
                    image={`${URLS.BUCKET}/logo/tbcBackground-2.png`}
                    title="Example image"
                />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        program UUI: {templateProgram._id}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ wordWrap: "break-word" }}
                    >
                        program name: {templateProgram.name}
                    </Typography>
                    <Typography color="textSecondary">
                        program comments: {templateProgram.comments}
                    </Typography>
                    <Typography variant="body2" >
                        Tags
                        </Typography>
                    <Chip
                        variant="outlined"
                        label="Weigth Training"
                        size="small"
                        color="secondary"
                    />
                    <Chip label="Calisthenis" size="small" color="primary" />
                    <Chip
                        variant="outlined"
                        label="Running"
                        size="small"
                        color="primary"
                    />
                    <Chip label="Body Building" size="small" color="primary" />
                    <Chip label="Fitness" color="secondary" />
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                    // onClick={() => {
                    //     props.history.push(`/programs/view/${props.programm._id}`);
                    // }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}