import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UtilsService } from "../../services/utils.service";
import { PaginationComponents } from "./components/pagination.components";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponents],
  exports: [PaginationComponents],
  providers: [UtilsService]
})

export class PaginationModule {}