import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axiosBeast from "@infra/http/axiosBeast";
import NewScheduleTraining from "@ui/templates/program/schedule/training/newScheduleTraining";
import LinearLoader from "@ui/molecules/loaders/linearLoader";
import { TrainingScheduleGroupModel } from "@core/program/schedule/training/model/view"
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";

const EditScheduleTrainingContainer = () => {

    const router = useRouter();
    const { showError } = useTBCSnackBar();
    const { uuid } = router.query;
    let trainingUUID = uuid;
    if (uuid) {
        trainingUUID = uuid[0];
    }

    const [training, setTraining] = useState<TrainingScheduleGroupModel>();


    useEffect(() => {
        if (trainingUUID) {
            axiosBeast.post('/schedule/training/fetchWithUId', { uid: trainingUUID }).then((res) => {
                setTraining(res.data);
            }).catch(() => {
                showError('Something went wrong');
            });
        };

    }, [trainingUUID])
    if (!training) {
        return <LinearLoader />
    }
    return (
        <NewScheduleTraining trainingGroup={training} />
    );
};

export default EditScheduleTrainingContainer;
