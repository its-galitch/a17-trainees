import {inject, Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import * as TraineeActions from "../store/trainee/trainee.action";
import * as GradeActions from "../store/grade/grade.action";
import {grades, trainees} from "../store/trainee/trainee-init-list";
import {Observable} from "rxjs";
import {GradeDataItem, GradeListItem, TraineeDetails} from "../models/trainee";
import {selectAllTrainees} from "../store/trainee/trainee.selector";
import {selectGradesWithTrainee} from "../store/grade/grade.selector";

@Injectable({providedIn: "root" })
export class TraineeService {

    private store: Store<AppState> = inject(Store<AppState>);

    loadInitTraineesData() {
        this.store.dispatch(TraineeActions.addAll({trainees: trainees}));
        this.store.dispatch(GradeActions.addAll({grades: grades}));
    }

    getTraineesList(): Observable<GradeDataItem[]> {
        return this.store.select(selectGradesWithTrainee);
    }




}
