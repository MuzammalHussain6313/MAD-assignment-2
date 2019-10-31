import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ListService} from '../list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-add-surah',
    templateUrl: './add-surah.page.html',
    styleUrls: ['./add-surah.page.scss'],
})
export class AddSurahPage implements OnInit {

    postData: any = [
        { name: 'ali', email: 'test-email.com', student_id: '010' }
    ]
    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private list: ListService,
                public httpClient: HttpClient,
                public http: HttpClient,
    ) {
    }

    signupForm: FormGroup;
    surahForm: FormGroup;

    public save(signupForm: object): Observable<any> {
        console.log('formData' + signupForm);
        return this.http.post('https://test-node-api-test.herokuapp.com/students/newStudent', signupForm);
        this.router.navigate(['list']);
    }

    ngOnInit() {
        this.formInitializer();
    }

    formInitializer() {
        this.signupForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            student_id: [null, [Validators.required]]
        });
    }
}
