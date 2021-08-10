import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import * as Yup from "yup";

function NewScheduleTrainingForm(props: any) {
    const { initialValues, submitForm, initialSubmit } = props;
    console.log(initialValues)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
                name: Yup.string().required(),
                multiSection: Yup.boolean().required(),
                cyclic: Yup.boolean().required(),
                date: Yup.date().required(),
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
                <form onSubmit={handleSubmit}>
                    <div>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    error={(errors.name && touched.name) ? true : false}
                                    label={'name' || errors.name}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    name="comments"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comments}
                                    label="Comments"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                {" "}
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={values.multiSection}
                                            onChange={handleChange}
                                            name="multiSection"
                                            color="primary"
                                        />
                                    }
                                    label="Multi-Section"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <TextField
                                        id="date"
                                        type="date"
                                        label="Date"
                                        variant='outlined'
                                        value={values.date}
                                        onChange={handleChange}
                                        error={(errors.date && touched.date) ? true : false}
                                        // defaultValue={values.date}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                {" "}
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={values.cyclic}
                                            onChange={handleChange}
                                            name="cyclic"
                                            color="primary"
                                        />
                                    }
                                    label="Cyclic"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <TextField
                                        variant="outlined"
                                        name="status"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.status}
                                        label="status"
                                        disabled
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color={initialSubmit ? 'primary' : 'secondary'}
                                    type="submit"
                                    fullWidth
                                    disabled={isSubmitting}
                                >
                                    {initialSubmit ? 'Create Training' : 'Save Training'}
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default NewScheduleTrainingForm;