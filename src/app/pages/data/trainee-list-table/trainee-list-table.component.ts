import {AfterViewInit, Component, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GradeDataItem, GradeListItem, TraineeDetails} from "../../../models/trainee";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {TraineeService} from "../../../services/trainee.service";
import {filter, map, pluck, Subscription, take, tap} from "rxjs";
import {DataPageService} from "../data-page.service";

@Component({
    selector: 'app-trainee-list-table',
    templateUrl: './trainee-list-table.component.html',
    styleUrl: './trainee-list-table.component.scss'
})
export class TraineeListTableComponent implements OnInit, OnDestroy, AfterViewInit {


    dataSource: MatTableDataSource<GradeDataItem>;

    gradesDataList: GradeDataItem[] = []

    columnsToDisplay: Array<keyof GradeListItem> = ["id", "name", "date", "grade", "subject"];

    selectedRowId: number | undefined;

    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

    private traineesService = inject(TraineeService);

    private dataPageService = inject(DataPageService);

    private subscription = new Subscription();

    ngOnInit() {
        this.initDataSource();
        this.initSelectedRowId();
    }

    constructor() {
        this.dataSource = new MatTableDataSource(this.gradesDataList);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator ?? null;
    }

    initDataSource() {
        const sub = this.traineesService.getTraineesList()
            .pipe(
                tap(grades => {
                    this.gradesDataList = grades;
                    this.dataSource.data = this.gradesDataList;
                })
            )
            .subscribe();

        this.subscription.add(sub);
    }

    initSelectedRowId() {
        const sub = this.dataPageService.getSelectedRow().pipe(
            tap(row => {
                this.selectedRowId = row ? row.id : undefined;
            })
        ).subscribe();
        this.subscription.add(sub);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSelectRow(row: GradeDataItem) {
        if (row.id === this.selectedRowId) {
            this.dataPageService.removeSelectedRow();
        } else {
            this.dataPageService.setSelectedRow(row);
        }

    }
}
