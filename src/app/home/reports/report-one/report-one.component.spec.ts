import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportOneComponent } from './report-one.component';

describe('ReportOneComponent', () => {
  let component: ReportOneComponent;
  let fixture: ComponentFixture<ReportOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
