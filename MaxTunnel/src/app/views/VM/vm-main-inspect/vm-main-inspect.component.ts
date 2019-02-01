import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-vm-main-inspect',
    templateUrl: './vm-main-inspect.component.html',
    styleUrls: ['./vm-main-inspect.component.css']
})
export class VmMainInspectComponent implements OnInit {

    title: string;

    constructor() {}

    ngOnInit() {
        this.title = '巡检管理';
    }

}
