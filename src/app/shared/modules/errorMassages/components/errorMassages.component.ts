import { Component, Input } from "@angular/core";

@Component({
  selector: 'mc-error-masseges',
  templateUrl: './errorMassages.component.html',
  styleUrls: ['./errorMassages.component.scss']
})
export class ErrorMassagesComponent {
  @Input('massage') massageProps: string = 'Something went wrong'
}