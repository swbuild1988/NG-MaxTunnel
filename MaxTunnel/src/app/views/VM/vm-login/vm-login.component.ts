import {
    Component,
    OnInit
} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {
    Router
} from '@angular/router';

@Component({
    selector: 'app-vm-login',
    templateUrl: './vm-login.component.html',
    styleUrls: ['./vm-login.component.css']
})
export class VmLoginComponent implements OnInit {
    validateForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    submitForm(): void {
        // for (const i in this.validateForm.controls) {
        //     this.validateForm.controls[i].markAsDirty();
        //     this.validateForm.controls[i].updateValueAndValidity();
        // }
        console.log('submit', this.validateForm);
        this.router.navigate(['/vmmain']);
    }

}
