import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory5Component } from './user-story5.component';

describe('UserStory5Component', () => {
  let component: UserStory5Component;
  let fixture: ComponentFixture<UserStory5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
