import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from '@material-ui/core/Typography';
import ItemTemplateProgram from "@ui/organisms/program/template/itemProgram";
import TemplateProgram from "@core/program/template/model/view/programTemplate.model";
import getStyle from "./exploreProgramsTemplate.style"

type ExploreProgramsTemplateProps = {
    templatePrograms: TemplateProgram[]
}

function ExploreProgramsTemplate({ templatePrograms }: ExploreProgramsTemplateProps) {
    const classes = getStyle();

    return (
        <div className={classes.root} style={{ marginBottom: "25px" }}>
            <Typography variant="h4" component="h1" gutterBottom align='center'>
                All Template Programs
            </Typography>
            <Grid container spacing={3}>
                {templatePrograms.length === 0 && [
                    <Grid item xs={12} md={6}>
                        <Box >
                            <Skeleton width="100%" height="250px" animation="pulse" />
                        </Box>
                    </Grid>,
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Skeleton width="100%" height="250px" animation="pulse" />
                        </Box>
                    </Grid>,
                ]}
                {templatePrograms.length > 0 &&
                    templatePrograms.map((templateProgram: TemplateProgram) => (
                        <ItemTemplateProgram key={templateProgram._id} templateProgram={templateProgram} />
                    ))}
            </Grid>
        </div>
    );
}
export default ExploreProgramsTemplate;