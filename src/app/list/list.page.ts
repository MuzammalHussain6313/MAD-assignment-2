import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';
import {Router} from '@angular/router';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  list: any;
  constructor(public navCtrl: NavController, public http: Http, private router: Router,
              private listService: ListService) {
    this.http.get('http://localhost:8585/contacts')
        .map(res => res.json()).subscribe(data => {
      this.list = data.data.children;
    });
  }
  chepters = [];
  ngOnInit() {
  }
  changeUrl(item: any) {
    const id = item.id.substring(0, 3);
    const url = `list/${id}`;
    this.router.navigateByUrl(url);
}

  addSurah() {
    this.router.navigate(['add-surah']);
  }
}
