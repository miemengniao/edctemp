import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeChartsComponent } from './ae-charts.component';

describe('AeChartsComponent', () => {
  let component: AeChartsComponent;
  let fixture: ComponentFixture<AeChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
