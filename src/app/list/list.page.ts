import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  constructor(private router: Router, private listService: ListService) {
  }
  chepters = [];
  ngOnInit() {
    this.chepters = this.listService.getSUrahList();
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
