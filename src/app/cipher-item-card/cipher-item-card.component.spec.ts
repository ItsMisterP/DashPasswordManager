import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherItemCardComponent } from './cipher-item-card.component';

describe('CipherItemCardComponent', () => {
  let component: CipherItemCardComponent;
  let fixture: ComponentFixture<CipherItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CipherItemCardComponent]
    });
    fixture = TestBed.createComponent(CipherItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
