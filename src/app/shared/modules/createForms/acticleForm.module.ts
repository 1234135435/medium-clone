import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BackendErrorMassages } from "../backendErrorMassages/backendErrorMassages.module";
import { ArticleFormComponent } from "./components/createForms/articleForm.component";

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMassages
  ],
  declarations:[
    ArticleFormComponent
  ],
  exports:[ ArticleFormComponent ]
})

export class ArticleFormModule {}