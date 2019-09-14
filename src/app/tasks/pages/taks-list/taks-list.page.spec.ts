import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksListPage } from './taks-list.page';

describe('TaksListPage', () => {
  let component: TaksListPage;
  let fixture: ComponentFixture<TaksListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaksListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
