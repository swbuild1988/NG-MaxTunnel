import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'app-module-title',
    templateUrl: './module-title.component.html',
    styleUrls: ['./module-title.component.css']
})
export class ModuleTitleComponent implements OnInit {

    @Input() title: string;

    constructor() {}

    ngOnInit() {}

}
