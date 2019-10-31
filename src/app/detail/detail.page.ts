import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ListService} from '../list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    constructor(private route: ActivatedRoute,
                private http: HttpClient, private router: Router
    ) {
    }

    studentList: any;
    // data: Observable<any>;
    singleStudent;

    ngOnInit() {
        this.http.get('http://localhost:36313/students/getStudents').subscribe(res => {
            this.studentList = res;
            this.route.paramMap.subscribe(paramMap => {
                const val = paramMap.get('id');
                this.singleStudent = this.studentList.find(obj => {
                    return obj.student_id.includes(val);
                });
            });
        });
    }

    deleteStudent() {
        console.log('formData ' + this.singleStudent._id);
        this.callAPI(this.singleStudent);
        this.router.navigate(['list']);
    }

    callAPI(student: any): Observable<any> {
      console.log('id : ' + student._id);
      const url = 'http://localhost:36313/deleteStudent';
      return this.http.delete(url, student);
    }
}
