import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloginComponentComponent } from './clogin-component.component';

describe('CloginComponentComponent', () => {
  let component: CloginComponentComponent;
  let fixture: ComponentFixture<CloginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloginComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
