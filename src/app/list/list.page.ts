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
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.data = this.http.get('https://test-node-api-test.herokuapp.com/students/getStudents');

    this.data.subscribe(data => {
      this.result = data;
    });
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
//   private selectedItem: any;
//   constructor(private router: Router, private listService: ListService) {
//   }
//   chepters = [];
//   ngOnInit() {
//     this.chepters = this.listService.getSUrahList();
//   }
//   changeUrl(item: any) {
//     const id = item.id.substring(0, 3);
//     const url = `list/${id}`;
//     this.router.navigateByUrl(url);
// }
//
//   addSurah() {
//     this.router.navigate(['add-surah']);
//   }
  changeUrl(item: any) {

  }

  addSurah() {

  }
}
