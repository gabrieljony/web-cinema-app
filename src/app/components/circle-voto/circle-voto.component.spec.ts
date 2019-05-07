import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleVotoComponent } from './circle-voto.component';

describe('CircleVotoComponent', () => {
  let component: CircleVotoComponent;
  let fixture: ComponentFixture<CircleVotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleVotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
