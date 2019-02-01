import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmMainComponent } from './vm-main.component';

describe('VmMainComponent', () => {
  let component: VmMainComponent;
  let fixture: ComponentFixture<VmMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
