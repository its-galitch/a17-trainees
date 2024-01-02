import {Component} from '@angular/core';
import {DataPageService} from "./data-page.service";

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrl: './data.component.scss',
    providers: [DataPageService]
})
export class DataComponent {


}
