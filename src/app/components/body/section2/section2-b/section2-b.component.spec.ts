import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2BComponent } from './section2-b.component';

describe('Section2BComponent', () => {
  let component: Section2BComponent;
  let fixture: ComponentFixture<Section2BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
