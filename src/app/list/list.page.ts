import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(public router: Router, public navCtrl: NavController, public http: HttpClient) {
    this.data = this.http.get('https://test-node-api-test.herokuapp.com/students/getStudents');

    console.log('data' + this.data);
    this.data.subscribe(data => {
      this.result = data;
    });
    console.log('result' + this.result);
  }

  result: any = [];
  data: Observable<any>;
  clicked() {
    this.data = this.http.get('https://test-node-api-test.herokuapp.com/students/getStudents');
    this.data.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }
  changeUrl(item: any) {

  }

  addSurah() {
    this.router.navigate(['signup']);
  }

  showSingleItem(item: any) {
    const id = item.student_id.substring(0, 3);
    const url = `list/${id}`;
    this.router.navigateByUrl(url);
  }
}
