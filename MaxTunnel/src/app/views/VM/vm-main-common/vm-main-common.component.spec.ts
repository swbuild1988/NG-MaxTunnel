import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmMainCommonComponent } from './vm-main-common.component';

describe('VmMainCommonComponent', () => {
  let component: VmMainCommonComponent;
  let fixture: ComponentFixture<VmMainCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmMainCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmMainCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
