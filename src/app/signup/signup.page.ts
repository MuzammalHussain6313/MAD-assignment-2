import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

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

  save() {
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
    const url = 'http://localhost:36313/students/newStudent';
    return this.http.post(url, dataObj);
  }
}
