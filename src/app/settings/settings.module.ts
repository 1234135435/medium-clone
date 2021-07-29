import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMassages } from "../shared/modules/backendErrorMassages/backendErrorMassages.module";
import { SettingsComponent } from "./component/settings.component";
import { reducer } from "./store/reducers";

const ROUTES: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
]

@NgModule({
  declarations:[
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('settings', reducer),
    ReactiveFormsModule,
    BackendErrorMassages
  ]
})

export class SettingsModule {}