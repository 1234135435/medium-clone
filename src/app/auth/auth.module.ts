import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMassages } from "../shared/modules/backendErrorMassages/backendErrorMassages.module";
import { PresistaneService } from "../shared/services/presistane.service";

import { RegisterComponent } from "./components/register/register.component";
import { LoginEffect } from "./components/store/effects/login.effect";
import { RegisterEffect } from "./components/store/effects/register.effect";
import { reducer } from "./components/store/reducers";
import { LoginComponent } from './components/login/login.component';
import { GetCurrentUserEffect } from "./components/store/effects/getCurrebtUser.effect";
import { UpdataCurrentUserEffect } from "./components/store/effects/updataCurrentUser.effect";
import { LogoutEffect } from "./components/store/effects/logout.effect";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
]

@NgModule({
  imports:[
    CommonModule, 
    RouterModule.forChild(routes), 
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect, UpdataCurrentUserEffect, LogoutEffect]),
    BackendErrorMassages
  ],
  declarations:[RegisterComponent, LoginComponent],
  providers:[PresistaneService]
  
})
export class AuthModule{}