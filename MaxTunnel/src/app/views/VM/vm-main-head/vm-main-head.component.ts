import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-vm-main-head',
    templateUrl: './vm-main-head.component.html',
    styleUrls: ['./vm-main-head.component.css']
})
export class VmMainHeadComponent implements OnInit {

    title: string;

    constructor() {}

    ngOnInit() {
        this.title = '智慧管廊';
    }

}
