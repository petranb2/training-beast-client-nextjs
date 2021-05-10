import { TrainingEventModel } from "../model/domain/trainingEvent.model";
import { CaseInterface } from "@core/shared/interfaces";


class SetStyleToTrainingEventCase implements CaseInterface {

    /**
     * Set the css style for each event in the calendar
     * @param event the tragining event of the calendar
     * @returns 
     */
    execute(event: TrainingEventModel): { className: string, style: {} } {
        let newStyle = {
            backgroundColor: "lightgrey",
            color: 'black',
            borderRadius: "1px",
            border: "1px"
        };
        if (event.status === 'DONE') {
            newStyle.backgroundColor = '#00b248'
        }
        return {
            className: "",
            style: newStyle
        };
    }
}

export default SetStyleToTrainingEventCase;