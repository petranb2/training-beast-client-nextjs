import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        // marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: 0.8,
        backgroundColor: "#abdaa1",
        borderRadius: 5

    },
    paperGrid: {
        position: "absolute", top: 40, width: "60%"

    },
    root: {
        // backgroundColor: "#000000",
        backgroundAttachment: "fixed",
        // backgroundSize: "cover",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        overflow: "hidden"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        maxWidth: "200px",
        marginBottom: theme.spacing(3),
    },
    formDiv: { display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" },
    padding: { padding: "5px 40px 5px 40px", display: "flex", flexDirection: "column" }
}));

export default useStyles;