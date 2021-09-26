import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import TrainingScheduleGroupForm from "@ui/templates/program/schedule/training/TrainingScheduleGroupForm";
import LinearLoader from "@ui/molecules/loaders/linearLoader";
import { TrainingScheduleGroupModel } from "@core/program/schedule/training/model/view"
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";
import { fetchTrainingGroupWithUID } from "@core/program/schedule/training/case";
import { withAuth } from "@ui/templates/user/hoc/withAuth";

const UpdateScheduleTrainingPage = () => {

    const router = useRouter();
    const { showError } = useTBCSnackBar();
    const { uuid } = router.query;
    let trainingUUID = uuid as string;
    if (uuid) {
        trainingUUID = uuid[0];
    }

    const [training, setTraining] = useState<TrainingScheduleGroupModel>();


    useEffect(() => {

        const fetchData = async (trainingUUID: string) => {
            try {
                let trainingScheduleGroup = await fetchTrainingGroupWithUID.execute(trainingUUID as string);
                setTraining(trainingScheduleGroup);
            } catch (e) {
                showError('Something went wrong');
            }
        };
        if (trainingUUID) {
            fetchData(trainingUUID);
        };
    }, [trainingUUID])

    if (!training) {
        return <LinearLoader />
    }

    return (
        <TrainingScheduleGroupForm trainingGroup={training} />
    );
};

export default withAuth(UpdateScheduleTrainingPage);
