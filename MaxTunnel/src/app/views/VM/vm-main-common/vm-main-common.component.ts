import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-vm-main-common',
    templateUrl: './vm-main-common.component.html',
    styleUrls: ['./vm-main-common.component.css']
})
export class VmMainCommonComponent implements OnInit {

    title: string;
    tunnelMessage: Object;
    lineMessage: Object;
    runMessage: Object;

    constructor() {}

    ngOnInit() {
        this.title = '基本信息';
        this.tunnelMessage = {
            title: '管廊信息',
            subTitle: ['状态', '数量', '占比'],
            data: [{
                name: '已建设',
                value: 10,
                unit: '条',
                percent: '33%'
            }]
        };
        this.lineMessage = {
            title: '管线信息',
            subTitle: ['类型', '长度', '利用率'],
            data: []
        };
        this.runMessage = {
            total: 50,
            safe: 20
        };
    }

}
