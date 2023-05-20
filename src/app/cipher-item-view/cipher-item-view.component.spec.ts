import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherItemViewComponent } from './cipher-item-view.component';

describe('CipherItemViewComponent', () => {
  let component: CipherItemViewComponent;
  let fixture: ComponentFixture<CipherItemViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CipherItemViewComponent]
    });
    fixture = TestBed.createComponent(CipherItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
