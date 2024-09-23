import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAggActiPage } from './form-agg-acti.page';

describe('FormAggActiPage', () => {
  let component: FormAggActiPage;
  let fixture: ComponentFixture<FormAggActiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAggActiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
