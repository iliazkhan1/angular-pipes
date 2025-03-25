import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparentComponent } from './aparent.component';

describe('AparentComponent', () => {
  let component: AparentComponent;
  let fixture: ComponentFixture<AparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
