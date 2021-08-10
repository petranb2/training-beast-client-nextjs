import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
const NewScheduleTraining = dynamic(() => import("@ui/templates/program/schedule/training/newScheduleTraining"), {
    ssr: false,
});
function NewScheduleTrainingPage() {
    const router = useRouter()
    const { date } = router.query;
    console.log(date);
    return (
        <NewScheduleTraining date={date as string} trainingGroup={null} />
    )
}

export default NewScheduleTrainingPage