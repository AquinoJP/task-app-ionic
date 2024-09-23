import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalListPage } from './modal-list.page';

describe('ModalListPage', () => {
  let component: ModalListPage;
  let fixture: ComponentFixture<ModalListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
