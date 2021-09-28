import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Head from 'next/head';
// import { AuthContext } from "../user/context/authContext";
import { LayoutContext } from "./context/layoutContext";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        maxHeight: "60px",
        margin: theme.spacing(1),
    }
}));

function ButtonAppBar() {
    const layoutContext = useContext(LayoutContext);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Head>
                <title>TrainingBeast</title>
                <meta property="og:title" content="TrainingBeast" key="title" />
            </Head>
            <AppBar position="static">
                <Container maxWidth="lg" disableGutters>
                    <Toolbar>
                        <Link href="/" style={{ flexGrow: 1 }}>
                            <img alt="dragon" src={'https://files.trainingbeast.co/file/tbc-files/logo/text.png'}  className={classes.logo} width={"247px"}
                                height={"40px"} />
                        </Link>
                        {/* {authContext.auth ? <AppMenu /> : <PublicMenu />} */}
                    </Toolbar>
                </Container>
            </AppBar>
            {layoutContext.linearProgress && <LinearProgress />}
        </div>
    );
}

export default ButtonAppBar;
