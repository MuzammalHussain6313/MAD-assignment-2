import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  signupForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private formBuilder: FormBuilder) { }
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
                this.formInitializer();
            });
        });
  }

  formInitializer() {
    console.log('fi', this.singleStudent.student_id);
    this.signupForm = this.formBuilder.group({
      name: [this.singleStudent.name, [Validators.required]],
      email: [this.singleStudent.email, [Validators.required, Validators.email]],
      student_id: [this.singleStudent.student_id, [Validators.required]]
    });
  }

  updateData() {

  }
}
