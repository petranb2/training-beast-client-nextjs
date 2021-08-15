import { useRouter } from 'next/router'
import TrainingScheduleGroupForm from "@ui/templates/program/schedule/training/TrainingScheduleGroupForm";
import { useTBCSnackBar } from "@ui/templates/layout/hook/useTBCSnackBar";
function NewScheduleTrainingPage() {
    const router = useRouter()
    const { showError } = useTBCSnackBar();
    const { date } = router.query;
    if (!date) {
        showError('Something went wrong')
        // TODO: show an error page
        return null
    }
    return (
        <TrainingScheduleGroupForm date={date as string} trainingGroup={null} />
    )
}

export default NewScheduleTrainingPage