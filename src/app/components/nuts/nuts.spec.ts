import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashersComponent } from './nuts';

describe('Nuts', () => {
  let component: WashersComponent;
  let fixture: ComponentFixture<WashersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
