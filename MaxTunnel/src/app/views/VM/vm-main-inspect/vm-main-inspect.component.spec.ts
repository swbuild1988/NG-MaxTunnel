import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmMainInspectComponent } from './vm-main-inspect.component';

describe('VmMainInspectComponent', () => {
  let component: VmMainInspectComponent;
  let fixture: ComponentFixture<VmMainInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmMainInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmMainInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
