import { Component } from '@angular/core';
import { Device } from '../../modules/device';
import { DeviceApiService } from '../../services/device-api.service';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrl: './table-device.component.css'
})
export class TableDeviceComponent {
  deviceList = Array<Device>()
  constructor(private deviceService: DeviceApiService) { }

  ngOnInit(): void {
    this.deviceService.get().subscribe(response => {
      this.deviceList = response
    })
  }
  addTable(): void {
    this.deviceService.add().subscribe(response => {
    this.deviceList.push(response)
  })
  }
  upgrade(id: number): void{
    console.log("upgrade")
  }
  deleteId(id: number): void{
  this.deviceService.delete(id).subscribe(() =>{
    document.getElementById(`${id}`)?.remove()
   // limpiar los inputs 
  })
}
}
