import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20),
    },
}));

function LinearLoader() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>
    );
}

export default LinearLoader;