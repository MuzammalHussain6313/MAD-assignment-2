import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ListService} from '../list.service';

@Component({
  selector: 'app-add-surah',
  templateUrl: './add-surah.page.html',
  styleUrls: ['./add-surah.page.scss'],
})
export class AddSurahPage implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private list: ListService) { }
  surahForm: FormGroup;
  ngOnInit() {
    this.surahForm = this.formBuilder.group({
        id : ['id001'],
      name: [null, [Validators.required]],
      type: ['makki', [Validators.required]]
    });
  }
    logForm() {

    }

  save(form: any) {
      //this.surahForm.push(id: 'newId');
      console.log('from in add' + form);
      this.list.addSurah(this.surahForm);
      this.router.navigate(['/list']);
  }
}
