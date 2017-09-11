import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsimNgforPractiseComponent } from './asim-ngfor-practise.component';

describe('AsimNgforPractiseComponent', () => {
  let component: AsimNgforPractiseComponent;
  let fixture: ComponentFixture<AsimNgforPractiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsimNgforPractiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsimNgforPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
