import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';

import {
    AppRoutingModule
} from './app-routing.module';
import {
    AppComponent
} from './app.component';
import {
    VmLoginComponent
} from './views/VM/vm-login/vm-login.component';
import {
    VmMainComponent
} from './views/VM/vm-main/vm-main.component';
import {
    NgZorroAntdModule,
    NZ_I18N,
    en_US
} from 'ng-zorro-antd';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
    registerLocaleData
} from '@angular/common';
import en from '@angular/common/locales/en';
import {
    VmMainHeadComponent
} from './views/VM/vm-main-head/vm-main-head.component';
import {
    VmMainCommonComponent
} from './views/VM/vm-main-common/vm-main-common.component';
import {
    ModuleTitleComponent
} from './components/VM/module-title/module-title.component';
import {
    GridComponent
} from './components/VM/grid/grid.component';
import {
    NgxEchartsModule
} from 'ngx-echarts';
import { CommonChartComponent } from './components/Common/common-chart/common-chart.component';
import { VmMainInspectComponent } from './views/VM/vm-main-inspect/vm-main-inspect.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        VmLoginComponent,
        VmMainComponent,
        VmMainHeadComponent,
        VmMainCommonComponent,
        ModuleTitleComponent,
        GridComponent,
        CommonChartComponent,
        VmMainInspectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgxEchartsModule
    ],
    providers: [{
        provide: NZ_I18N,
        useValue: en_US
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}
