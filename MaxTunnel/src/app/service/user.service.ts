import {
    Injectable
} from '@angular/core';
import {
    Observable,
    of
} from 'rxjs';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}

    login(name: string, password: string): void {

        const url = '/MaxTunnel-Web/login';
        const param = {
            name,
            password
        };
        console.log('param', param);
        this.http.post(url, param).subscribe(
            res => {
                console.log('login res:', res);
                return res;
            },
            err => {
                console.log('login err:', err);
            }
        );
        // this.http.get('/MaxTunnel-Web/tunnels').subscribe(
        //     res => {
        //         console.log('login res:', res);
        //     },
        //     err => {
        //         console.log('login err:', err);
        //     }
        // );
    }
}
