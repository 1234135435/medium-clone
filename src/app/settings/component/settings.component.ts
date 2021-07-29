import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { logoutAction } from "src/app/auth/components/store/action/sync.action";
import { updataCurrentUserAction } from "src/app/auth/components/store/action/updataCurrentUser.action";
import { currentUserSelector } from "src/app/auth/components/store/selectors";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { CurrentUserInputInterface } from "src/app/shared/types/currentUserInput.interface";
import { isSubmittingSelector, validationErrorSelector } from "../store/selectors";

@UntilDestroy()
@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit, OnDestroy {

  currentUser: CurrentUserInterface
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorInterface | null>


  constructor(private fb: FormBuilder, private store: Store) {}
    
  ngOnInit(): void {
    this.initializeValue()
    this.initializeListeners()
  }

  private initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector))
  }

  private initializeListeners(): void {
    this.store.pipe(
      select(currentUserSelector),
      filter(Boolean),
      untilDestroyed(this)
    ).subscribe((currentUser: CurrentUserInterface) => {
      this.currentUser = currentUser
      this.initializeForm()
    })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      image: [this.currentUser.image, []],
      username: [this.currentUser.username, []],
      bio: [this.currentUser.bio, []],
      email: [this.currentUser.email, []],
      password: ['', []]
    })
  }

  submit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    }
    this.store.dispatch(updataCurrentUserAction({currentUserInput}))
  }

  logout() {
    this.store.dispatch(logoutAction())
  }

  ngOnDestroy(): void {}

}