import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltsComponent } from './bolts';

describe('Bolts', () => {
  let component: BoltsComponent;
  let fixture: ComponentFixture<BoltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoltsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
