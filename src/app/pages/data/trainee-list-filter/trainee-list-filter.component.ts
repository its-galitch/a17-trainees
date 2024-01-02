import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-trainee-list-filter',
  templateUrl: './trainee-list-filter.component.html',
  styleUrl: './trainee-list-filter.component.scss'
})
export class TraineeListFilterComponent {

    filterFormControl = new FormControl<string>('');
}
