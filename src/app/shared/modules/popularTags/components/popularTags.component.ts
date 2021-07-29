import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PopularTagsType } from "src/app/shared/types/popularType.type";
import { getTegPopularTagsAction } from "../store/actions/popularTags.action";
import { errorSelector, isLoadingSelector, popularTagsSelector } from "../store/popularTags.select";

@Component({
  selector: 'mc-popular-tegs',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})

export class PopularTagsComponent implements OnInit {
  
  popularTags$: Observable<PopularTagsType[] | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.initializevelues()
    this.fetchData()
  }

  initializevelues(){
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))

  }

  fetchData(){
    this.store.dispatch(getTegPopularTagsAction())
  }

}