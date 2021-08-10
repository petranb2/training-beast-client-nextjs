import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Grid from "@material-ui/core/Grid";
import Select from '@material-ui/core/Select';
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";

export default function ExersiceForm(props) {
    const { initialValues, submitFunction } = props;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
                name: Yup.string().required(),
                analysis: Yup.array()
                    .of(
                        Yup.object().shape({
                            sets: Yup.object().required("Required"), // these constraints take precedence
                            duration: Yup.object().required("Required"), // these constraints take precedence
                            rest: Yup.object().required("Required"),
                            volume: Yup.object().required("Required"),
                        })
                    )
                    .required(),
            })}
            onSubmit={submitFunction}
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
                                {" "}
                                <Select
                                    variant='outlined'
                                    name='sport'
                                    value={values.sport}
                                    onChange={handleChange}
                                    fullWidth
                                    inputProps={{ 'aria-label': 'sport' }}
                                    label='sport'
                                >
                                    <MenuItem value={'running'}>running</MenuItem>
                                    <MenuItem value={'weight training'}>weight training</MenuItem>
                                    <MenuItem value={'cycling'}>cycling</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                {" "}
                                <TextField
                                    variant='outlined'
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    error={errors.name && touched.name}
                                    placeholder="Name"
                                    label="Name"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {" "}
                                <TextField
                                    variant='outlined'
                                    name="comments"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comments}
                                    placeholder="Comments"
                                    label="Comments"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {" "}
                                <Typography variant="h5" gutterBottom align={'center'}>
                                    Exercise Analysis
                                </Typography>
                            </Grid>
                            <FieldArray
                                name="analysis"
                                render={(arrayHelpers) => (
                                    <div>
                                        {values.analysis && values.analysis.length > 0 ? (
                                            values.analysis.map((analysis, index) => (
                                                <div key={index}>
                                                    <Grid
                                                        container
                                                        xs={12}
                                                        spacing={1}
                                                        alignItems="center"
                                                    >
                                                        <Grid item xs={3}>
                                                            {" "}
                                                            <TextField
                                                                variant='outlined'
                                                                name={`analysis.${index}.sets.v`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.sets.v}
                                                                error={
                                                                    getAnalysisError(
                                                                        errors,
                                                                        index,
                                                                        "sets"
                                                                    ) &&
                                                                    getAnalysisError(touched, index, "sets")
                                                                }
                                                                placeholder="sets"
                                                                label="sets"
                                                            />

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <Select
                                                                variant='outlined'
                                                                labelId="analysis-set"
                                                                id="demo-simple-select"
                                                                name={`analysis.${index}.sets.u`}
                                                                value={analysis.sets.u}
                                                                onChange={handleChange}
                                                                defaultValue={'sets'}
                                                                fullWidth
                                                                label='sets'
                                                            >
                                                                <MenuItem value={'sets'}>sets</MenuItem>
                                                                <MenuItem value={'rounds'}>rounds</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={6}>

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            {" "}
                                                            <TextField
                                                                variant='outlined'
                                                                name={`analysis.${index}.duration.v`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.duration.v}
                                                                error={
                                                                    getAnalysisError(
                                                                        errors,
                                                                        index,
                                                                        "duration"
                                                                    ) &&
                                                                    getAnalysisError(touched, index, "duration")
                                                                }
                                                                placeholder="duration"
                                                                label="duration"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <Select
                                                                variant='outlined'
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                name={`analysis.${index}.duration.u`}
                                                                value={analysis.duration.u}
                                                                onChange={handleChange}
                                                                defaultValue={'reps'}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={'reps'}>reps</MenuItem>
                                                                <MenuItem value={'min'}>min</MenuItem>
                                                                <MenuItem value={'sec'}>sec</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={6}>

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            {" "}
                                                            <TextField
                                                                variant='outlined'
                                                                name={`analysis.${index}.volume.v`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.volume.v}
                                                                error={
                                                                    getAnalysisError(
                                                                        errors,
                                                                        index,
                                                                        "volume"
                                                                    ) &&
                                                                    getAnalysisError(
                                                                        touched,
                                                                        index,
                                                                        "volume"
                                                                    )
                                                                }
                                                                placeholder="volume"
                                                                label="volume"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <Select
                                                                variant='outlined'
                                                                labelId="demo-simple-select-label"
                                                                name={`analysis.${index}.volume.u`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.volume.u}
                                                                id="demo-simple-select"
                                                                //value={age}
                                                                //onChange={handleChange}
                                                                defaultValue={'kg'}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={'kg'}>kg</MenuItem>
                                                                <MenuItem value={'min/km'}>min/km</MenuItem>
                                                                <MenuItem value={'min/mile'}>min/mile</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={6}>

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            {" "}
                                                            <TextField
                                                                variant='outlined'
                                                                name={`analysis.${index}.rest.v`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.rest.v}
                                                                error={
                                                                    getAnalysisError(
                                                                        errors,
                                                                        index,
                                                                        "rest"
                                                                    ) &&
                                                                    getAnalysisError(touched, index, "rest")
                                                                }
                                                                placeholder="rest"
                                                                label="rest"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <Select
                                                                variant='outlined'
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                name={`analysis.${index}.rest.u`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.rest.u}
                                                                label='unit'
                                                                fullWidth
                                                                defaultValue={'sec'}
                                                            >
                                                                <MenuItem value={'sec'}>sec</MenuItem>
                                                                <MenuItem value={'min'}>min</MenuItem>
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={6}>

                                                        </Grid>
                                                        <Grid item xs={9}>
                                                            {" "}
                                                            <TextField
                                                                variant='outlined'
                                                                name={`analysis.${index}.comments`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={analysis.comments}
                                                                error={
                                                                    getAnalysisError(
                                                                        errors,
                                                                        index,
                                                                        "comments"
                                                                    ) &&
                                                                    getAnalysisError(
                                                                        touched,
                                                                        index,
                                                                        "comments"
                                                                    )
                                                                }
                                                                fullWidth
                                                                placeholder="comments"
                                                                label="comments"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            {" "}
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={() => arrayHelpers.remove(index)}
                                                                fullWidth
                                                            >
                                                                <DeleteForeverIcon />
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                    <br />
                                                </div>
                                            ))
                                        ) : (
                                            null
                                        )}
                                        <Grid item xs={12}>
                                            {" "}
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                onClick={() => arrayHelpers.push({ sets: { v: '30', u: "sets" }, duration: { v: '30', u: "reps" }, rest: { v: '30', u: "min" }, volume: { v: '30', u: "kg" } })}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </Grid>
                                    </div>
                                )}
                            />
                            <Grid item xs={12}>
                                {" "}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Submit
      </Button>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            )}
        </Formik>
    );
}
function getAnalysisError(error, index, property) {
    if (typeof error.analysis === "undefined") {
        return false;
    }
    if (typeof error.analysis[index] === "undefined") {
        return false;
    }
    let bool = error.analysis[index];
    if (typeof bool[`${property}`] === "undefined") {
        return false;
    }

    return true;
}
