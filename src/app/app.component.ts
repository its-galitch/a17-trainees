import {Component, inject, OnInit} from '@angular/core';
import {TraineeService} from "./services/trainee.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    private traineesService = inject(TraineeService);
    ngOnInit(): void {
        this.traineesService.loadInitTraineesData();
    }
}
