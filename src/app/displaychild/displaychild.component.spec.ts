import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaychildComponent } from './displaychild.component';

describe('DisplaychildComponent', () => {
  let component: DisplaychildComponent;
  let fixture: ComponentFixture<DisplaychildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaychildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
