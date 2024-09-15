import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassbreakbannerComponent } from './glassbreakbanner.component';

describe('GlassbreakbannerComponent', () => {
  let component: GlassbreakbannerComponent;
  let fixture: ComponentFixture<GlassbreakbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassbreakbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassbreakbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
