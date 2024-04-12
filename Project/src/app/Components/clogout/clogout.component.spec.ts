import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLogoutComponent } from './clogout.component';

describe('CLogoutComponent', () => {
  let component: CLogoutComponent;
  let fixture: ComponentFixture<CLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
