import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Image from 'next/image'
import { LayoutContext } from "../layout/context/layoutContext";
import { AuthContext } from "./context/authContext";
import SignInForm from "../../organisms/signIn/signInForm";
import { signInCase } from "../../../core/user/case";
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'

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

export default function SignIn() {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const layoutContext = useContext(LayoutContext);
    const authContext = useContext(AuthContext);

    const submitForm = async (values: any, { setSubmitting }: any) => {
        layoutContext.setLinearProgress(true);
        try {
            let userProfile = await signInCase.execute({ email: values.email, password: values.password });
            authContext.updateState({ ...userProfile, isAuthChecked: true });
            enqueueSnackbar('All good to go !!', { variant: 'success' });
            router.push('/home');
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'warning' });

        } finally {
            setSubmitting(false);
            layoutContext.setLinearProgress(false);
        }
    };

    return (
        <div>
            <Container component="section" maxWidth="xs">
                <Box border={1}>
                    <div className={classes.paper}>
                        <Image alt="dragon" loading='eager' src={'/head_no_glow.png'} priority className={classes.logo} width={"200px"}
                            height={"210px"} />
                        <Typography component="h2" variant="h2" style={{ float: 'left' }}>
                            Sign In
                        </Typography>
                        <SignInForm submitForm={submitForm} />
                    </div>
                </Box>
            </Container>
        </div>
    );
}
