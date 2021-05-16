import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory6Component } from './user-story6.component';

describe('UserStory6Component', () => {
  let component: UserStory6Component;
  let fixture: ComponentFixture<UserStory6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
