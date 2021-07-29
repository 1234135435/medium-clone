import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorMassagesComponent } from "./components/backendErrorMassages.component";

@NgModule({
  declarations:[BackendErrorMassagesComponent],
  imports:[CommonModule],
  exports: [BackendErrorMassagesComponent]
})

export class BackendErrorMassages {}