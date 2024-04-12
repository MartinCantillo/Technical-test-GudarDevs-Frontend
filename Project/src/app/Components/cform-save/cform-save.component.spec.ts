import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFormSaveComponent } from './cform-save.component';

describe('CFormSaveComponent', () => {
  let component: CFormSaveComponent;
  let fixture: ComponentFixture<CFormSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFormSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFormSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
