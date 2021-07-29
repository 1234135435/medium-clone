import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMassagesComponent } from "./components/errorMassages.component";

@NgModule({
  declarations: [ErrorMassagesComponent],
  imports: [CommonModule],
  exports: [ErrorMassagesComponent]

})

export class ErrorMassagesModule {}