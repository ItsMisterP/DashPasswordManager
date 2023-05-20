import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherViewComponent } from './cipher-view.component';

describe('CipherViewComponent', () => {
  let component: CipherViewComponent;
  let fixture: ComponentFixture<CipherViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CipherViewComponent]
    });
    fixture = TestBed.createComponent(CipherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
