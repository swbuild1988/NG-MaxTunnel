import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    @Input() title: string;
    @Input() subTitle: Array < String > ;
    @Input() data: Array < Object > ;

    constructor() {}

    ngOnInit() {}

}
