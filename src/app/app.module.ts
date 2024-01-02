import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgChartsModule} from "ng2-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { DataComponent } from './pages/data/data.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { StoreModule } from '@ngrx/store';
import {appReducer} from "./store/app.reducer";
import { TraineeListTableComponent } from './pages/data/trainee-list-table/trainee-list-table.component';
import { TraineeListFilterComponent } from './pages/data/trainee-list-filter/trainee-list-filter.component';
import { TraineeDetailsFormComponent } from './pages/data/trainee-details-form/trainee-details-form.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { FiltersFormComponent } from './pages/monitor/filters-form/filters-form.component';
import { TraineeAvgListComponent } from './pages/monitor/trainee-avg-list/trainee-avg-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataComponent,
    AnalysisComponent,
    MonitorComponent,
    TraineeListTableComponent,
    TraineeListFilterComponent,
    TraineeDetailsFormComponent,
    FiltersFormComponent,
    TraineeAvgListComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgChartsModule,
        MatToolbarModule,
        MatButtonModule,
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 30,
            logOnly: false,
            autoPause: true,
            features: {
                pause: false,
                lock: true,
                persist: true
            }
        }),
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
