import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "src/app/shared/services/utils.service";

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.components.html',
  styleUrls: ['pagination.components.scss']
})
export class PaginationComponents implements OnInit{
  
  @Input('total') totalProps: number
  @Input('limit') limitProps: number
  @Input('url') urlProps: string
  @Input('currentPage') currentPageProps: number

  pagesCout: number
  pages: number[]

  constructor(private utils: UtilsService){}

  ngOnInit(): void {
    this.pagesCout = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utils.range(1, this.pagesCout)
    // console.log('pages', this.pages)
  }
}