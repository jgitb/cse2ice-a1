import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueResultsComponent } from './venue-results.component';

describe('VenueResultsComponent', () => {
  let component: VenueResultsComponent;
  let fixture: ComponentFixture<VenueResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
