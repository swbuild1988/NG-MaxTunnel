import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    VmLoginComponent
} from './views/VM/vm-login/vm-login.component';
import {
    VmMainComponent
} from './views/VM/vm-main/vm-main.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/vmlogin',
    pathMatch: 'full'
}, {
    path: 'vmlogin',
    component: VmLoginComponent
}, {
    path: 'vmmain',
    component: VmMainComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
