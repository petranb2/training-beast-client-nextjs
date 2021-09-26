import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { analysis } from "@core/program/schedule/exercise/model/domain"
import UpdateExersiceDialog from "./updateSectionExersiceDialog";
import DeleteExersiceDialog from "./deleteSectionExersiceDialog";

export default function SectionExersiceItem(props) {
    console.log("SectionExersiceItem" + JSON.stringify(props.exercise))
    console.log("SectionExersiceItem" + JSON.stringify(props.exercise.name))
    // if (!props.exersice) {
    //     return null
    // }

    const { name, comments, analysis } = props.exercise;
    const { section, exercise, updateExercise, deleteExercise } = props;

    const [openUpdateExersiceDialog, setOpenUpdateSectionDialog] = useState(
        false
    );
    const [openDeleteExersiceDialog, setOpenDeleteSectionDialog] = useState(
        false
    );

    const handleClickOpen = (dialog: string) => {
        if (dialog === "UPDATE_EXERCISE_DIALOG") {
            setOpenUpdateSectionDialog(true);
        }
        if (dialog === "DELETE_EXERCISE_DIALOG") {
            setOpenDeleteSectionDialog(true);
        }
    };

    const handleClose = (dialog: string) => {
        if (dialog === "UPDATE_EXERCISE_DIALOG") {
            setOpenUpdateSectionDialog(false);
        }
        if (dialog === "DELETE_EXERCISE_DIALOG") {
            setOpenDeleteSectionDialog(false);
        }
    };

    return (
        <div>
            {" "}
            <ListItem button alignItems="flex-start">
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary={name} secondary={comments} />
            </ListItem>{" "}
            {analysis.map((entry: analysis) => {
                return (
                    <ListItem button>
                        <ListItemText
                            inset
                            primary={
                                entry.sets.v + entry.sets.u +
                                " X " +
                                entry.duration.v + entry.duration.u +
                                " X " +
                                entry.rest.v + entry.rest.u +
                                " X " +
                                entry.volume.v + entry.volume.u +
                                " "
                            }
                        />
                    </ListItem>
                );
            })}
            <ListItem>
                <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="text primary button group"
                >
                    <Button
                        color="primary"
                        onClick={() => handleClickOpen("UPDATE_EXERCISE_DIALOG")}
                    >
                        Επεξεργασία
                    </Button>
                    <UpdateExersiceDialog
                        open={openUpdateExersiceDialog}
                        close={() => handleClose("UPDATE_EXERCISE_DIALOG")}
                        exercise={exercise}
                        section={section}
                        updateExercise={updateExercise}
                    />
                    <Button
                        color="secondary"
                        onClick={() => handleClickOpen("DELETE_EXERCISE_DIALOG")}
                    >
                        Διαγραφή
                    </Button>
                    <DeleteExersiceDialog
                        open={openDeleteExersiceDialog}
                        handleClose={() => handleClose("DELETE_EXERCISE_DIALOG")}
                        exercise={exercise}
                        section={section}
                        deleteExercise={deleteExercise}
                    />
                </ButtonGroup>
            </ListItem>
        </div>
    );
}