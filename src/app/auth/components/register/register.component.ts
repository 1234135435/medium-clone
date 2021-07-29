import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { registerAction } from "../store/action/register.action";
import { isSubmittingSelector, validationErrorSelector } from "../store/selectors";

@Component({
  selector:'mc-register',
  templateUrl:'./register.component.html',
  styleUrls:['./register.component.scss']
})
export class RegisterComponent implements OnInit{
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
      username: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}))
    // console.log(this.form.value)
  }
}