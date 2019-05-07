import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGeneroComponent } from './btn-genero.component';

describe('BtnGeneroComponent', () => {
  let component: BtnGeneroComponent;
  let fixture: ComponentFixture<BtnGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
