import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ListService} from '../list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor( private route: ActivatedRoute,
               private router: Router,
               private alertController: AlertController,
               private listService: ListService
  ) { }
  chepters = [];
  singleChepter;
  ngOnInit() {
    this.chepters = this.listService.getSUrahList();
    // this.students = this.studentsListService.getAllStudents();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('id');

      this.singleChepter = this.chepters.find(obj => {
        return obj.id.includes(val);
      });
    });
  }

}
