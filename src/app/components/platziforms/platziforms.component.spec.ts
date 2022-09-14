import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatziformsComponent } from './platziforms.component';

describe('PlatziformsComponent', () => {
  let component: PlatziformsComponent;
  let fixture: ComponentFixture<PlatziformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatziformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatziformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
