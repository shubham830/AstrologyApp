import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCardPostComponent } from './multiple-card-post.component';

describe('MultipleCardPostComponent', () => {
  let component: MultipleCardPostComponent;
  let fixture: ComponentFixture<MultipleCardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCardPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
