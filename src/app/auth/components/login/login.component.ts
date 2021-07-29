import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { loginAction } from '../store/action/login.action';
import { isSubmittingSelector, validationErrorSelector } from "../store/selectors";
@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorInterface | null>
  
  constructor(private fb: FormBuilder, private store: Store){}
  
  ngOnInit(): void {
    this.initializeForms()
    this.initializeValue()
  }

  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingSelector)
    )
    this.backendErrors$ = this.store.pipe(
      select(validationErrorSelector)
    )
  }

  initializeForms(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
    // console.log(this.form.value)
  }

}
