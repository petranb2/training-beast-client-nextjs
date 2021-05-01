import React from "react";
import HttpClient from "../src/infra/http/HttpClient";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    chips: {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5),
        },
    },
}));

function ExplorePrograms({ programs }: any) {
    const classes = useStyles();
    // const [programms, setProgramms] = useState([]);
    // useEffect(() => {
    //     axiosBeast
    //         .get("/programs")
    //         .then((res, rej) => {
    //             setProgramms(res.data);
    //         })
    //         .catch((err) => {
    //             //alert(err);
    //         });
    // }, []);

    return (
        <div className={classes.root} style={{ marginBottom: "25px" }}>
            <p>List All Programms</p>
            <Grid container spacing={3}>
                {programs.length === 0 && [
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
                {programs.length > 0 &&
                    programs.map((program: any) => (
                        <ItemProgramm program={program} />
                    ))}
            </Grid>
        </div>
    );
}

function ItemProgramm(props: any) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card variant="outlined">
                <CardMedia
                    className={classes.media}
                    image="https://files.trainingbeast.co/file/tbc-files/images/charles-gaudreault.jpg"
                    title="Example image"
                />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        program UUI: {props.program._id}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ wordWrap: "break-word" }}
                    >
                        program name: {props.program.name}
                    </Typography>
                    <Typography color="textSecondary">
                        program comments: {props.program.comments}
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
// This gets called on every request
export async function getServerSideProps(ctx: any) {

    let res;
    try {
        res = await HttpClient.get('/programs', { params: {}, headers: { cookie: ctx.req.headers.cookie } });
        return { props: { programs: res.data } }
    } catch (error) {

    }
    console.log('server side about page')
    // Pass data to the page via props
    return { props: { programs: [] } }
}
export default ExplorePrograms;