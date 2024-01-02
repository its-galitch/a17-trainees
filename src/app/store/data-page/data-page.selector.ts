import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Features} from "../app.reducer";
import {DataPageState} from "./data-page.reducer";
import {GradeDataItem} from "../../models/trainee";

export const selectDataPageState = createFeatureSelector<DataPageState>(Features.dataPage);

export const selectSelectedRow = createSelector(
    selectDataPageState,
    state => state.selectedRow
);

export const selectFilter = createSelector(
    selectDataPageState,
    state => state.filter
);

export const selectFormState  = createSelector(
    selectDataPageState,
    state => state.formMode
)
