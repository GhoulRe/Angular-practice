import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchComponentComponent } from './fetch-component.component';

describe('FetchComponentComponent', () => {
  let component: FetchComponentComponent;
  let fixture: ComponentFixture<FetchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
