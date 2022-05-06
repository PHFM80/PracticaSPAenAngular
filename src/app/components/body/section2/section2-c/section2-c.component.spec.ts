import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2CComponent } from './section2-c.component';

describe('Section2CComponent', () => {
  let component: Section2CComponent;
  let fixture: ComponentFixture<Section2CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
