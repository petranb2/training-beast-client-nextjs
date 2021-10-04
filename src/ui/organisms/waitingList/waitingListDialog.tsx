import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik';
import * as Yup from "yup";
import HttpClient from "@infra/http/HttpClient";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";

type WaitingListDialogType = {
    open: boolean,
    closeWaitingListDialog: () => void
}

export default function WaitingListDialog(props: WaitingListDialogType) {
    const { showInfo, showError } = useTBCSnackBar();
    const { open, closeWaitingListDialog } = props;
    const [completedForm, setCompletedForm] = useState(false);
    const submitForm = async (values: any) => {
        try {
            await HttpClient.post('/join-waiting-users', { data: values });
            // closeWaitingListDialog();
            showInfo('Great you are in our waiting list')
            setCompletedForm(true)
        } catch (err: any) {
            err = err as Error
            showError(err.message)
        }
    };
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Please enter a valid email address').required(),
                })}
                onSubmit={submitForm}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (

                    <Dialog open={open} onClose={closeWaitingListDialog} aria-labelledby="form-dialog-title">
                        <form onSubmit={handleSubmit}>
                            <DialogTitle id="form-dialog-title" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Typography
                                    style={{ fontWeight: 'bold', margin: 'auto', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }}
                                    variant={'h4'}
                                    component={'h4'}
                                    gutterBottom
                                    align='center'
                                    color='textPrimary'>
                                    Join The Waiting List
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Typography
                                        style={{ margin: 'auto', fontWeight: 800, }}
                                        variant="h5"
                                        component="h5"
                                        gutterBottom
                                        align='center'
                                        color='textPrimary'>
                                        {completedForm ? 'Congratulations You are in our waiting list' : 'Get notified when our first stable version is ready'}
                                    </Typography>
                                </DialogContentText>
                                <TextField
                                    variant="outlined"
                                    disabled={isSubmitting || completedForm}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={(errors.email && touched.email) ? true : false}
                                    label={errors.email}
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="email"
                                />
                            </DialogContent>
                            <DialogActions style={{ margin: '12px' }}>
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#484848', color: '#66FFA6', fontWeight: 900, boxShadow: '5px 5px 5px rgb(0,178,72)' }}
                                    variant='contained'
                                    color="primary"
                                    disabled={isSubmitting || completedForm}
                                    fullWidth>
                                    submit
                                </Button>
                            </DialogActions>
                        </form>
                    </Dialog>

                )}
            </Formik>

        </div>
    );
}
