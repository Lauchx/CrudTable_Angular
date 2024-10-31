import { Component } from '@angular/core';
import { Device } from '../../modules/device';
import { DeviceApiService } from '../../services/device-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewDeviceComponent } from '../modal-view-device/modal-view-device.component';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrl: './table-device.component.css'
})
export class TableDeviceComponent {
  deviceList = Array<Device>()
  constructor(private deviceService: DeviceApiService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
    this.deviceService.get().subscribe(response => {
      this.deviceList = response
    })
  }
  addTable(): void {
    this.deviceService.add().subscribe(response => {
      this.deviceList.push(response)
    })
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');


  }
  upgrade(id: number): void {
    this.deviceService.getById(id).subscribe(response => {

      if (response != null) {
        const ngbModalOpen = this.ngbModal.open(ModalViewDeviceComponent, { backdrop: 'static' })
        ngbModalOpen.componentInstance.device = response
        ngbModalOpen.result.then(result => {
          if (result != false) {
            console.log(result.id + " <- id")
            const index = this.deviceList.findIndex(device => device.id === result.id)
            if (index !== -1) {
              this.deviceList[index] = result; // Actualizar el dispositivo en la lista
            }
            console.log(result + "Result = true")
          }
          else {
            console.log(result + "Result = false")
          }
        })
      }
    })
  }
  deleteId(id: number): void {
    this.deviceService.delete(id).subscribe(() => {
      document.getElementById(`${id}`)?.remove()
      // limpiar los inputs 
    })
  }
}
