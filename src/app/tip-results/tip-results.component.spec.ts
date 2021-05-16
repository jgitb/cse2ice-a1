import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipResultsComponent } from './tip-results.component';

describe('TipResultsComponent', () => {
  let component: TipResultsComponent;
  let fixture: ComponentFixture<TipResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
