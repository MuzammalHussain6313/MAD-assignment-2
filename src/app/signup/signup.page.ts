
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],
      gender: ['m', [Validators.required]]
    });
  }

  public save(signupForm: object): Observable<any> {
    console.log('formData' + this.signupForm);
    //this.router.navigate(['list']);
    return this.http.post('https://test-node-api-test.herokuapp.com/students/newStudent', this.signupForm);
    console.log('after call' + this.signupForm);
  }
}
