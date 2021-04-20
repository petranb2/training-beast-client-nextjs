import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from "./footer";
import ButtonAppBar from "./AppButtonBar";
import Grid from "@material-ui/core/Grid";
import { LayoutProvider } from "./context/layoutContext";
import { AuthProvider } from "../../../domain/context/authContext";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
    },
}));

function Template(props: any) {
    let classes = useStyles();
    return (
        <LayoutProvider>
            <AuthProvider>
                <CssBaseline />
                <Grid className={classes.appBar}>
                    <ButtonAppBar />
                </Grid>
                <Container maxWidth="lg" disableGutters>
                    <Grid container>
                        <main style={{ width: "100%", margin: "12px" }}>
                            {props.children}
                        </main>
                    </Grid>
                </Container>
                <Grid className={classes.appBar}>
                    <Footer
                        title="Training Beast"
                        description="Something here to give the footer a purpose!"
                    />
                </Grid>
            </AuthProvider>
        </LayoutProvider>
    );
}

export default Template;
