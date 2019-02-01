import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmMainHeadComponent } from './vm-main-head.component';

describe('VmMainHeadComponent', () => {
  let component: VmMainHeadComponent;
  let fixture: ComponentFixture<VmMainHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmMainHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmMainHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
