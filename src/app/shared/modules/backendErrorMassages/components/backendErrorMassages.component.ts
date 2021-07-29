import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
  selector:'mc-backend-error-messages',
  templateUrl: './backendErrorMassages.component.html',
  styleUrls: ['./backendErrorMassages.component.scss']
})

export class BackendErrorMassagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorInterface
  errorMassages: string[]
  constructor() {}


  ngOnInit() {
    this.errorMassages = Object.keys(this.backendErrorsProps).map((name) => {
      const massages = this.backendErrorsProps[name].join(', ')
      return `${name} ${massages}`
    })
  }
}