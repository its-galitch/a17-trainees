import {GradeDataItem} from "../../models/trainee";
import {createReducer, on} from "@ngrx/store";
import * as DataPageActions from "./data-page.action";
import {FormMode} from "../../pages/data/trainee-details-form/form-state.enum";


export interface DataPageState{
    filter: string;
    selectedRow: GradeDataItem | null;
    formMode: FormMode
}

const initialState = {
    filter: '',
    selectedRow: null,
    formMode: FormMode.Unused
}


export const dataPageReducer = createReducer(
    initialState,
    on(DataPageActions.setFilter, (state, {filter})=> {
        return Object.assign({}, state, {filter});
    }),
    on(DataPageActions.setSelectedRow, (state, {row})=> {
        return Object.assign({}, state, {selectedRow: row});
    }),
    on(DataPageActions.clearSelectedRow, (state) => {
        return Object.assign({}, state, {selectedRow: null});
    }),
    on(DataPageActions.setFormMode, (state, {formMode})=>{
        return Object.assign({}, state, { formMode : formMode })
    })
);
