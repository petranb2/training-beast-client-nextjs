import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    root: {
        backgroundColor: "#000000",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        maxWidth: "200px",
        marginBottom: theme.spacing(3),
    }
}));

export default useStyles;