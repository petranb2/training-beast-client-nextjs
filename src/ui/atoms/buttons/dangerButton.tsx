import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const DangerButton = withStyles((theme) => ({
    root: {
        color: theme.palette.error.main,
        // backgroundColor: theme.palette.danger.main,
        borderColor: theme.palette.error.main,
        '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.text.secondary,
        },
    },
}))(Button);

export default DangerButton;