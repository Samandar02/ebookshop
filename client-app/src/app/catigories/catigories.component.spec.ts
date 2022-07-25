import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoriesComponent } from './catigories.component';

describe('CatigoriesComponent', () => {
  let component: CatigoriesComponent;
  let fixture: ComponentFixture<CatigoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatigoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatigoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
