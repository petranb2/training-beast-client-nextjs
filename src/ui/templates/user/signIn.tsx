import React, { useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { LayoutContext } from "../layout/context/layoutContext";
import { AuthContext } from "./context/authContext";
import SignInForm from "../../organisms/signIn/signInForm";
import { signInCase } from "../../../core/user/case";
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'
import getStyle from "./signIn.style";

export default function SignIn() {
    const classes = getStyle();
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
        } catch (error: any) {
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
                        <img alt="dragon" src={'https://files.trainingbeast.co/file/tbc-files/logo/head_no_glow.png'}  className={classes.logo} width={"200px"}
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
