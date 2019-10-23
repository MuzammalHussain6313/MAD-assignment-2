import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-surah',
  templateUrl: './add-surah.page.html',
  styleUrls: ['./add-surah.page.scss'],
})
export class AddSurahPage implements OnInit {

  constructor() { }

  surah = {
    id: '', name : ''
  }
  ngOnInit() {
  }

    logForm() {

    }
}
