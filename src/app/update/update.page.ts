import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  public signupForm;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private formBuilder: FormBuilder) { }
  studentList: any;
  singleStudent;

  ngOnInit() {
      this.formInitializer();

      this.http
          .get('https://test-node-api-test.herokuapp.com/students/getStudents')
          .subscribe(res => {
              this.studentList = res;
              this.route.paramMap.subscribe(paramMap => {
                  const val = paramMap.get('id');
                  this.singleStudent = this.studentList.find(obj => {
                      return obj.student_id.includes(val);
                  });

                  this.signupForm.patchValue(this.singleStudent);
              });
          });
  }

    formInitializer() {
        console.log('fi', this.singleStudent);
        this.signupForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            student_id: [null, [Validators.required]]
        });
    }

  updateData() {
        if (this.signupForm.valid) {
            console.log('formData', this.signupForm.value);

            const formData = this.signupForm.value;
            this.saveHttpReq(formData).subscribe(
                data => {
                    console.log('I got this response -> ', data);
                    this.router.navigate(['list']);
                },
                error => {
                    console.log('error', error);
                }
            );
        }
    }

    saveHttpReq(dataObj): Observable<any> {
        // const url = 'http://test-node-api-test.herokuapp.com/students/newStudent'; // Thos link is working coorectly.
        const url = `https://test-node-api-test.herokuapp.com/students/${this.singleStudent._id}`;
        console.log('link', url);
        return this.http.patch(url, dataObj);
    }
}
