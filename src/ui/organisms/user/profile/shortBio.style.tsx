import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    form: {
        width: "100%",
    },
    field: {
        "& .MuiInputBase-input": {
            padding: "0px 0px 0px",
            marginTop: "1px",
        },
        "& .MuiInputBase-multiline": {
            padding: "0px 0px 0px",
        },
    },
}));

export default useStyles;