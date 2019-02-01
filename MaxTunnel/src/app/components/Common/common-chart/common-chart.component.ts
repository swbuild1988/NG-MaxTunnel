import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-common-chart',
    templateUrl: './common-chart.component.html',
    styleUrls: ['./common-chart.component.css']
})
export class CommonChartComponent implements OnInit {

    options: any;

    constructor() {}

    ngOnInit() {
        this.options = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
    }

    getOptions() {
        const res = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        return res;
    }

}
