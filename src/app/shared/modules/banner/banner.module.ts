import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponents } from "./components/banner.components";

@NgModule({
  declarations: [BannerComponents],
  imports: [CommonModule],
  exports: [BannerComponents]
})

export class BannerModule {}