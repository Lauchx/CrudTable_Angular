import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewDeviceComponent } from './modal-view-device.component';

describe('ModalViewDeviceComponent', () => {
  let component: ModalViewDeviceComponent;
  let fixture: ComponentFixture<ModalViewDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalViewDeviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
