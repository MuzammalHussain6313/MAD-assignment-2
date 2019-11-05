import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {ListPage} from '../list/list.page';
import {Observable} from 'rxjs';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public list = [
    {name: 'Update', icon: 'create'},
    { name: 'Delete', icon: 'trash'}
];
  constructor(private popoverController: PopoverController,
              private navParams: NavParams,
              private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute) { }
  id: number;
  studentList: any;
  singleStudent;
  ngOnInit() {
    this.id = this.navParams.data.student_id;
    this.http.get('http://localhost:36313/students/getStudents').subscribe(res => {
      this.studentList = res;
      this.route.paramMap.subscribe(paramMap => {
        this.singleStudent = this.studentList.find(obj => {
          return obj._id.includes(this.id);
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
    alert('deleted successfully');
    this.router.navigate(['list']);
  }

  callAPI(student): Observable<any> {
    const url = `http://localhost:36313/students/${this.singleStudent._id}`;
    console.log('link', url);
    return this.http.delete(url);
    // console.log('id : ' + student._id);
    // const link = 'http://localhost:36313/students/deleteStudent';
    // return this.http.post(link, student);
  }
  updateItem() {
    const id = this.singleStudent.student_id;
    const url = `update/${id}`;
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
