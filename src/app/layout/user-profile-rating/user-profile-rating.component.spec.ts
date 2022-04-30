import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileRatingComponent } from './user-profile-rating.component';

describe('UserProfileRatingComponent', () => {
  let component: UserProfileRatingComponent;
  let fixture: ComponentFixture<UserProfileRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
