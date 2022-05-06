import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2AComponent } from './section2-a.component';

describe('Section2AComponent', () => {
  let component: Section2AComponent;
  let fixture: ComponentFixture<Section2AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
