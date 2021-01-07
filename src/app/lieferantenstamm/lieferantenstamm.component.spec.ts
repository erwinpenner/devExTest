import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieferantenstammComponent } from './lieferantenstamm.component';

describe('LieferantenstammComponent', () => {
  let component: LieferantenstammComponent;
  let fixture: ComponentFixture<LieferantenstammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieferantenstammComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieferantenstammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
