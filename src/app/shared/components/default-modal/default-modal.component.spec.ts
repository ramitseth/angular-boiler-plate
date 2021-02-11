import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultModalComponent } from './default-modal.component';

describe('DefaultModalComponent', () => {
  let component: DefaultModalComponent;
  let fixture: ComponentFixture<DefaultModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
