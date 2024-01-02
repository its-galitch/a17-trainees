import {createAction, props} from "@ngrx/store";
import {Grade, TraineeDetails} from "../../models/trainee";
import {Update} from "@ngrx/entity";


export const addOne = createAction(
    '[Grade] Add One',
    props<{ grade: Grade }>()
);

export const removeOne = createAction(
    '[Grade] Remove One',
    props<{ id: number }>()
);

export const updateOne = createAction(
    '[Grade] Update One',
    props<{ updates: Update<Grade> }>()
);


export const addAll = createAction(
    '[Grade] Add All',
    props<{ grades: Grade[] }>()
);

export const loadAll = createAction(
    '[Grade] Load All'
);

