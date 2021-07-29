import { Component, Input } from "@angular/core";

@Component({
  selector: 'mc-loading',
  template: `<div>{{loadingProps}}</div>`
})
export class LoadingComponent {
@Input('loading') loadingProps: string = 'Loading..'

}