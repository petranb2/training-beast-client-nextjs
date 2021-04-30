import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        position: "relative",
        bottom: "200px",
    },
    media: {
        height: "100px",
        background: '#00b248',
    },
    media_min: {
        height: "200px",
        position: "relative",
        bottom: "200px",
        background: '#00b248',
    },
    profileImage: {
        position: "relative",
        bottom: theme.spacing(12),
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: "auto",
        //background: 'linear-gradient(90deg, rgba(33,33,33,1) 0%, rgba(0,230,118,1) 100%)',
        backgroundColor: '#212121',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300e676' fill-opacity='0.55' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
    },
}))

export default useStyles;