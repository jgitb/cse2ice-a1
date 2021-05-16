import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory3Component } from './user-story3.component';

describe('UserStory3Component', () => {
  let component: UserStory3Component;
  let fixture: ComponentFixture<UserStory3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
