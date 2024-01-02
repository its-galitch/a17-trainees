import {createAction, createReducer, props} from "@ngrx/store";
import {GradeDataItem} from "../../models/trainee";
import {FormMode} from "../../pages/data/trainee-details-form/form-state.enum";


export const setFilter = createAction(
    '[Data Page] Set Filter',
    props<{filter: string}>()
);

export const setSelectedRow = createAction(
    '[Data Page] Set Selected Row',
    props<{row: GradeDataItem}>()
)

export const clearSelectedRow = createAction(
    '[Data Page] Clear Selected Row'
);

export const setFormMode = createAction(
    '[Data Page] Set Form Mode',
    props<{formMode: FormMode}>()
);
