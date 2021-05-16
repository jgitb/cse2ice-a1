import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStory4Component } from './user-story4.component';

describe('UserStory4Component', () => {
  let component: UserStory4Component;
  let fixture: ComponentFixture<UserStory4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStory4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
