import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  surahList: Array<{ id: any ; name: string }> = [
    { id: '001s', name: 'fatiha' },
    { id: '002s', name: 'Baqarah' },
    { id: '003s', name: 'Imran' }
  ]
  constructor() { }

  getSUrahList() {
    return this.surahList;
  }

    addSurah(surahForm: any) {
      console.log('form data' + surahForm);
    this.surahList.push(
        surahForm
    );
    }
}
