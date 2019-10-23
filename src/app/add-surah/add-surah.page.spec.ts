import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurahPage } from './add-surah.page';

describe('AddSurahPage', () => {
  let component: AddSurahPage;
  let fixture: ComponentFixture<AddSurahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
