import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory7Component } from './user-story7.component';

describe('UserStory7Component', () => {
  let component: UserStory7Component;
  let fixture: ComponentFixture<UserStory7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
