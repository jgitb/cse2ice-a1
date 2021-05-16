import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Us7loseComponent } from './us7lose.component';

describe('Us7loseComponent', () => {
  let component: Us7loseComponent;
  let fixture: ComponentFixture<Us7loseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Us7loseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Us7loseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
