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
        this.callAPI(this.singleStudent).subscribe(
            data => {
                console.log('I got this response -> ', data);
                this.router.navigate(['list']);
            },
            error => {
                console.log('error', error);
            }
        );
        this.router.navigate(['list']);
    }

    callAPI(student): Observable<any> {
      console.log('id : ' + student._id);
      const link = 'http://localhost:36313/students/deleteStudent';
      return this.http.post(link, student);
    }

    updateItem() {
        const id = this.singleStudent.student_id;
        const url = `update/${id}`;
        console.log(url);
        this.router.navigateByUrl(url);
    }
}
