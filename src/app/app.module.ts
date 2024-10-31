import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDeviceComponent } from './components/table-device/table-device.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalViewDeviceComponent } from './components/modal-view-device/modal-view-device.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDeviceComponent,
    ModalViewDeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
