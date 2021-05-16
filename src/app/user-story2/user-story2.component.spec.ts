import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory2Component } from './user-story2.component';

describe('UserStory2Component', () => {
  let component: UserStory2Component;
  let fixture: ComponentFixture<UserStory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
