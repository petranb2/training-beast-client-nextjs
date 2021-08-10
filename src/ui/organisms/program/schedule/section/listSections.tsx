import React, { useState, useEffect, } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NewSectionDialog from "./newScheduleSectionDialog";
import SectionItem from './scheduleSectionItem';
import { ScheduleSection } from "@core/program/schedule/section/model/view";
import { TrainingScheduleGroupModel } from "@core/program/schedule/training/model/view";

type UpdateSectionState = (section: ScheduleSection) => void;

export default function ListSection(props: { training: TrainingScheduleGroupModel }) {
    const { training } = props;

    const [sections, setSections] = useState(new Map<String, ScheduleSection>());
    const [openSectionDialog, setSectionDialog] = useState(false);


    useEffect(() => {
        let tempSectionMap = new Map();
        training?.sections?.forEach((section: ScheduleSection) => {
            tempSectionMap.set(section._id, section);
        })
        setSections(tempSectionMap);
    }, []);


    const addSection = (newSection: ScheduleSection) => {
        sections.set(newSection._id, newSection);
        setSections(sections);
    }

    const updateSection = (updatedSection: ScheduleSection) => {
        sections.set(updatedSection._id, updatedSection);
        setSections(new Map(sections));
    }

    const deleteSection = (deletedSection: ScheduleSection) => {
        sections.delete(deletedSection._id);
        setSections(new Map(sections));
    }

    return (
        <div>
            <br />
            <Typography variant="h4" gutterBottom align={'center'}>
                Sections
            </Typography>
            <hr />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={training ? false : true}
                onClick={() => setSectionDialog(true)}
            >
                Create Section
            </Button>
            <NewSectionDialog training={training} addSection={addSection} open={openSectionDialog} close={() => setSectionDialog(false)} />
            {renderSections(sections, training, addSection, updateSection, deleteSection)}
        </div>
    );
}
const renderSections = (sectionsMap: Map<String, ScheduleSection>, training: TrainingScheduleGroupModel, addSection: UpdateSectionState, updateSection: UpdateSectionState, deleteSection: UpdateSectionState) => {
    let sectionItemsArray: JSX.Element[] = []
    sectionsMap.forEach((section, key) => {
        // render only the sections with same status with training
        if (training.status === section.status) {
            sectionItemsArray.push(
                <Grid item xs={12}>
                    <SectionItem
                        key={key}
                        section={section}
                        exercises={training.exercises?.filter(exercise => exercise.sectionScheduleUUID === section._id)}
                        addSection={addSection}
                        updateSection={updateSection}
                        deleteSection={deleteSection} />
                </Grid>)
        }
    });
    return sectionItemsArray;
}