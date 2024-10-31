import { Component, ElementRef, ViewChild } from '@angular/core';
import { Device } from '../../modules/device';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceApiService } from '../../services/device-api.service';

@Component({
  selector: 'app-modal-view-device',
  templateUrl: './modal-view-device.component.html',
  styleUrl: './modal-view-device.component.css'
})
export class ModalViewDeviceComponent {
  device = new Device()
  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('colorInput') colorInput: ElementRef
  @ViewChild('priceInput') priceInput: ElementRef

  constructor(private activeModal: NgbActiveModal, private deviceService: DeviceApiService) { }


  upgrade(device: Device) {
    // verifica que los atributos no sean nulos,  si lo son, los reemplaza por un valor por defecto
    const nameValue = this.nameInput ? this.nameInput.nativeElement.value.trim() : this.device.name
    const colorValue = this.colorInput ? this.colorInput.nativeElement.value.trim() : this.device.data.color
    const priceValue = this.priceInput ? this.priceInput.nativeElement.value.trim() : this.device.data.price

    this.device.name = nameValue
    this.device.data.color = colorValue
    this.device.data.price = Number(priceValue)

    this.deviceService.upgrade(device).subscribe(response => {
      if (response) {
        this.activeModal.close(this.device);
      }
      else {
        console.log(response)
      }
    })
  }

  closeModal() {
    this.activeModal.close(false)
  }
}
