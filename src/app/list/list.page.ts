import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(public router: Router, public http: HttpClient) {
    this.data = this.http.get('http://localhost:36313/students/getStudents');
    this.data.subscribe(data => {
      this.result = data;
    });
    console.log('result' + this.result);
  }

  result: any = [];
  data: Observable<any>;
  ngOnInit(): void {
  }

  addSurah() {
    this.router.navigate(['signup']);
  }

  showSingleItem(item: any) {
    const id = item.student_id;
    const url = `list/${id}`;
    console.log(url);
    this.router.navigateByUrl(url);
  }

  // updateItem(item: any) {
  //   const id = item.student_id;
  //   const url = `list/${id}`;
  //   console.log(url);
  //   this.router.navigateByUrl(url);
  // }
}
