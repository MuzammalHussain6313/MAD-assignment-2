import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  surahList = [
    { id: '001s', name: 'fatiha' },
    { id: '002s', name: 'Baqarah' },
    { id: '003s', name: 'Imran' },
    { id: '004s', name: 'Nisa' },
    { id: '005s', name: 'Maida' },
    { id: '006s', name: 'Anham' },
    { id: '007s', name: 'Aaraf' },
    { id: '008s', name: 'Anfal' },
    { id: '009s', name: 'Tobah' },
    { id: '010s', name: 'Younus' },
    { id: '011s', name: 'Hood' },
    { id: '012s', name: 'Yousuf' },
    { id: '013s', name: 'Raad' },
    { id: '014s', name: 'Ibraheem' },
    { id: '015s', name: 'Hijr' },
    { id: '016s', name: 'Nihal' },
    { id: '017s', name: 'Bani-Israil' },
    { id: '018s', name: 'kahf' },
    { id: '019s', name: 'Mariam' },
    { id: '020s', name: 'Taha' }
  ]
  constructor() { }

  getSUrahList() {
    return this.surahList;
  }
}
